# mari-repo-scan-fixtures

Fixtures for Mariwave's repo gatekeeper (mari-account-server `modal-repo-scan/`). Each named commit
is scanned live and must get exactly its expected verdict:

| Ref | Expected |
|---|---|
| `main` (the good commit) | admitted, no reasons |
| `bad` | refused: `secret-in-history`, `install-hook`, `pipe-to-shell`, `dependency-malicious` |
| `net` | refused: `network-host` |

The `bad` branch is deliberately unsafe. Its credential is a random string in the shape of an AWS
access key id, not a real key, and its install hook points at a reserved `.example` host. Never
install or run anything from it.
