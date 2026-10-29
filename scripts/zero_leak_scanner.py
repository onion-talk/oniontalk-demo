#!/usr/bin/env python3
"""
OnionTalk Mandatory Zero-Leak & Anti-Hardcode Security Scanner (CI/CD SecOps Gate)
Blocks any commit containing:
  1. Forbidden secret/keystore files (.jks, .keystore, .p12, .pfx, .pem, .key, .env, local.properties)
  2. Hardcoded credentials, API tokens, private keys, or static CI passwords
  3. Private LAN/VPN IPs (192.168.x.x, 10.88.x.x, 100.64-127.x.x) or Cloud Provider / Homelab labels
"""
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent

FORBIDDEN_FILE_PATTERNS = [
    re.compile(r"(^|/)(local|keystore)\.properties$", re.IGNORECASE),
    re.compile(r"\.(jks|keystore|p12|pfx|pem|key)$", re.IGNORECASE),
    re.compile(r"(^|/)\.env(\..+)?$", re.IGNORECASE),
    re.compile(r"(^|/)id_(rsa|ed25519|ecdsa)(\.pub)?$", re.IGNORECASE),
]

TEXT_EXTENSIONS = {
    ".kt", ".java", ".py", ".rs", ".js", ".ts", ".html", ".css",
    ".md", ".yml", ".yaml", ".json", ".toml", ".kts", ".xml", ".sh", ".ps1"
}

SECRET_AND_INFRA_PATTERNS = [
    ("HARDCODED_GITHUB_TOKEN", re.compile(r"\b(ghp_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,})\b")),
    ("HARDCODED_GITLAB_TOKEN", re.compile(r"\bglpat-[A-Za-z0-9_\-]{15,}\b")),
    ("HARDCODED_AWS_KEY", re.compile(r"\b(AKIA|ASIA)[0-9A-Z]{16}\b")),
    ("HARDCODED_GOOGLE_API_KEY", re.compile(r"\bAIza[0-9A-Za-z_\-]{35}\b")),
    ("PRIVATE_KEY_BLOCK", re.compile(r"-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----")),
    ("STATIC_CI_PASSWORD", re.compile(r'CI_PASS\s*=\s*"[^"$]+"')),
    ("RFC1918_LAN_IP", re.compile(r"\b192\.168\.\d{1,3}\.\d{1,3}\b")),
    ("PODMAN_OR_VPN_IP", re.compile(r"\b(10\.88\.\d{1,3}\.\d{1,3}|100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\.\d{1,3}\.\d{1,3})\b")),
    ("CLOUD_OR_INFRA_LEAK", re.compile(r"\b(AWS EKS|Oracle Cloud|AWS Virginia|Google Cloud US-East|Render Cloud|Alibaba Cloud|Proxmox|OPNsense|Tonon-Vault|CyberVault)\b", re.IGNORECASE)),
]


def get_tracked_files() -> list[str]:
    out = subprocess.check_output(["git", "ls-files"], cwd=ROOT, text=True, encoding="utf-8")
    return [line.strip() for line in out.splitlines() if line.strip()]


def main() -> int:
    sys.stdout.reconfigure(encoding="utf-8")
    tracked = get_tracked_files()
    violations: list[str] = []

    for rel_path in tracked:
        norm = rel_path.replace("\\", "/")
        if norm.endswith("zero_leak_scanner.py"):
            continue

        for pat in FORBIDDEN_FILE_PATTERNS:
            if pat.search(norm):
                violations.append(f"[FORBIDDEN_FILE] {norm}")

        p = ROOT / rel_path
        if not p.exists() or p.suffix.lower() not in TEXT_EXTENSIONS:
            continue

        try:
            content = p.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue

        for line_no, line in enumerate(content.splitlines(), start=1):
            for rule_name, regex in SECRET_AND_INFRA_PATTERNS:
                m = regex.search(line)
                if m:
                    violations.append(f"[{rule_name}] {norm}:L{line_no} -> matched '{m.group(0)}'")

    if violations:
        print(f"[SECOPS-ZERO-LEAK] BLOCKED: {len(violations)} security violation(s) found:", file=sys.stderr)
        for v in violations[:50]:
            print(f"  - {v}", file=sys.stderr)
        return 1

    print(f"[SECOPS-ZERO-LEAK] PASS: Scanned {len(tracked)} tracked files (0 secrets, 0 hardcoded passwords, 0 IP/cloud leaks).")
    return 0


if __name__ == "__main__":
    sys.exit(main())