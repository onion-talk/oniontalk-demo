#!/usr/bin/env python3
"""
OnionTalk release docs gate (version-agnostic).

Replaces the old hard-coded v1.5.0 assertions. The "latest release" is derived
from the first `What's New in vX.Y.Z (versionCode = N` heading of README.md, so
the gate keeps working when scripts/sync_release_links.py bumps the version.

Checks (fail the build):
  1. README.md has the Legal Disclaimers section.
  2. The latest-release main APK line in README.md carries a SHA-256 equal to
     the digest GitHub reports for release asset OnionTalk-v<ver>.apk.
  3. Every site HTML file mentions `v<ver> (Build <code>)` and keeps the
     "Disclaimers Legais, Isenção de Responsabilidade" clause.

Non-fatal: prints a WARNING for any other README line that links the latest
APK but shows a different SHA-256 (historical sections rewritten by the sync).
"""
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
REPO = "onion-talk/oniontalk-demo"
HTML_FILES = ["index.html", "privacy.html", "docs/index.html", "docs/privacy.html"]
CLAUSE_7 = "Disclaimers Legais, Isenção de Responsabilidade"
HEADING_RE = re.compile(r"What's New in `v(\d+\.\d+\.\d+)` \(`versionCode = (\d+)`")
SHA_RE = re.compile(r"SHA-256:\s*`?([0-9a-fA-F]{64})")


def fail(msg: str) -> None:
    print(f"[SECOPS-DOCS-GATE] FAIL: {msg}")
    sys.exit(1)


def release_asset_digest(ver: str) -> str:
    url = f"https://api.github.com/repos/{REPO}/releases/tags/v{ver}"
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "oniontalk-docs-gate"}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    last_err = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=20) as r:
                data = json.loads(r.read().decode("utf-8"))
            break
        except urllib.error.HTTPError as e:
            if e.code == 404:
                fail(f"release tag v{ver} not found in {REPO}")
            last_err = e
        except Exception as e:  # network flake: retry, then fail closed
            last_err = e
        time.sleep(2 * (attempt + 1))
    else:
        fail(f"could not query release v{ver} after 3 attempts: {last_err}")
    name = f"OnionTalk-v{ver}.apk"
    for asset in data.get("assets", []):
        if asset.get("name") == name:
            digest = (asset.get("digest") or "").removeprefix("sha256:").lower()
            if len(digest) != 64:
                fail(f"asset {name} has no sha256 digest in GitHub API")
            return digest
    fail(f"asset {name} not found in release v{ver}")


def main() -> int:
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    m = HEADING_RE.search(readme)
    if not m:
        fail("README.md has no `What's New in vX.Y.Z (versionCode = N` heading")
    ver, code = m.group(1), m.group(2)
    print(f"[SECOPS-DOCS-GATE] latest release in README: v{ver} (Build {code})")

    if "Legal Disclaimers" not in readme:
        fail("README.md must include Legal Disclaimers section")

    digest = release_asset_digest(ver)
    apk_name = f"OnionTalk-v{ver}.apk"
    lines = readme.splitlines()
    start = readme[: m.start()].count("\n")
    next_heading = next(
        (i for i in range(start + 1, len(lines)) if HEADING_RE.search(lines[i])), len(lines)
    )
    latest_shas = set()
    for line in lines[start:next_heading]:
        if apk_name in line:
            latest_shas.update(s.lower() for s in SHA_RE.findall(line))
    if not latest_shas:
        fail(f"latest-release section of README.md has no SHA-256 next to {apk_name}")
    if latest_shas != {digest}:
        fail(f"README SHA-256 {sorted(latest_shas)} != GitHub release digest {digest} for {apk_name}")

    for i, line in enumerate(lines):
        if start <= i < next_heading or apk_name not in line:
            continue
        for sha in SHA_RE.findall(line):
            if sha.lower() != digest:
                print(
                    f"[SECOPS-DOCS-GATE] WARNING: README.md:{i + 1} links {apk_name} "
                    f"but shows SHA-256 {sha[:12]}... (does not match release digest)"
                )

    for name in HTML_FILES:
        p = ROOT / name
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        if f"v{ver} (Build {code})" not in txt:
            fail(f"{name} missing v{ver} (Build {code})")
        if CLAUSE_7 not in txt:
            fail(f"{name} missing Clause 7 Legal Disclaimers")

    print(f"[SECOPS-DOCS-GATE] PASS: v{ver} (Build {code}) hash matches release digest; Legal Disclaimers verified.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
