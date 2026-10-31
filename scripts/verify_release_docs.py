#!/usr/bin/env python3
"""
Release docs gate (v2): the docs must never go stale or point at nothing.

Fails the build when:
  1. a README/HTML still links a versioned asset (`/releases/download/`) or shows an inline
     `SHA-256: <hex>` (both go stale at the next release; use the stable
     `/releases/latest/download/<fixed-name>` URLs and SHA256SUMS.txt instead);
  2. a stable download URL used in the docs does not exist in that repo's latest release;
  3. SHA256SUMS.txt of a release disagrees with the digests GitHub computed for its assets;
  4. the Legal Disclaimers section / Clause 7 heading disappeared.
"""
import hashlib
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ["README.md", "README.pt-BR.md", "profile/README.md", "index.html", "privacy.html", "docs/index.html", "docs/privacy.html"]
HTML = ["index.html", "privacy.html", "docs/index.html", "docs/privacy.html"]
CLAUSE_7 = "Disclaimers Legais, Isenção de Responsabilidade"
STABLE = re.compile(r"https://github\.com/(onion-talk/[\w.-]+)/releases/latest/download/([\w.\-]+)")
SHA_INLINE = re.compile(r"SHA-256:\s*`?[0-9a-fA-F]{64}")
errors = []


def fail(msg):
    errors.append(msg)
    print(f"[SECOPS-DOCS-GATE] FAIL: {msg}")


def http(url, accept="application/vnd.github+json"):
    headers = {"Accept": accept, "User-Agent": "oniontalk-docs-gate"}
    token = os.environ.get("GITHUB_TOKEN")
    if token and "api.github.com" in url:
        headers["Authorization"] = f"Bearer {token}"
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=30) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            last = e
        except Exception as e:  # network flake: retry, then fail closed
            last = e
        time.sleep(2 * (attempt + 1))
    fail(f"could not reach {url}: {last}")
    return None


def main():
    files = {n: (ROOT / n).read_text(encoding="utf-8") for n in DOCS if (ROOT / n).exists()}
    if not files:
        fail("no README/HTML found")

    # 4. legal text
    if "README.md" in files and "Legal Disclaimers" not in files["README.md"]:
        fail("README.md must include the Legal Disclaimers section")
    for n in HTML:
        if n in files and CLAUSE_7 not in files[n]:
            fail(f"{n} missing Clause 7 Legal Disclaimers")

    # 1. static links / hashes
    wanted = {}
    for n, txt in files.items():
        for i, line in enumerate(txt.splitlines(), 1):
            if "releases/download/" in line:
                fail(f"{n}:{i} versioned release link (use /releases/latest/download/<stable-name>)")
            if n.endswith(".md") and SHA_INLINE.search(line):
                fail(f"{n}:{i} inline SHA-256 (link SHA256SUMS.txt instead)")
        for repo, asset in STABLE.findall(txt):
            wanted.setdefault(repo, set()).add(asset)

    # 2 + 3. links alive and checksums consistent
    for repo, assets in sorted(wanted.items()):
        raw = http(f"https://api.github.com/repos/{repo}/releases/latest")
        if raw is None:
            fail(f"{repo}: no latest release found")
            continue
        rel = json.loads(raw)
        by_name = {a["name"]: a for a in rel.get("assets", [])}
        before = len(errors)
        for asset in sorted(assets):
            if asset not in by_name:
                fail(f"{repo}@{rel['tag_name']}: stable asset '{asset}' is linked in the docs but missing from the release")
        sums = by_name.get("SHA256SUMS.txt")
        if sums:
            body = http(sums["browser_download_url"], accept="application/octet-stream")
            for line in (body or b"").decode("utf-8", "replace").splitlines():
                m = re.match(r"^([0-9a-fA-F]{64})\s+\*?(\S+)$", line.strip())
                if not m:
                    continue
                digest, name = m.group(1).lower(), m.group(2)
                a = by_name.get(name)
                if not a:
                    fail(f"{repo}@{rel['tag_name']}: SHA256SUMS lists '{name}' which is not a release asset")
                elif (a.get("digest") or "").removeprefix("sha256:").lower() != digest:
                    fail(f"{repo}@{rel['tag_name']}: SHA256SUMS hash for '{name}' differs from the asset digest")
        if len(errors) == before:
            print(f"[SECOPS-DOCS-GATE] {repo}@{rel['tag_name']}: {len(assets)} stable asset(s) OK")

    if errors:
        print(f"[SECOPS-DOCS-GATE] {len(errors)} problem(s)")
        return 1
    print("[SECOPS-DOCS-GATE] PASS: links are stable and alive, checksums consistent, disclaimers intact.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
