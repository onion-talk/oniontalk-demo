# OnionTalk Messenger — Google Play Console Release Notes & Manifest (`v1.5.0` / `versionCode = 36`)

## 1. Build & Package Identification
- **Application ID**: `org.oniontalk.messenger`
- **Version Name**: `1.5.0`
- **Version Code**: `36` (`MIN_CLIENT_VERSION_CODE = 36` enforced on all Tor v3 Relays via HTTP `426 Upgrade Required`)
- **APK File**: `OnionTalk-v1.5.0.apk` (`SHA-256: 4a5472a26444cbfdad7ed5dbab76e1e88ab64824d18df95694e6cd741a66dc6f`)
- **Play App Bundle (AAB)**: `OnionTalk-v1.5.0.aab` (`SHA-256: b87c921e7725089c431b01b9c3033660871fde512cb2981f1d15ea20b05973bc`)
- **Security Audit Gate (`/pentest-strix`)**: `9/9 PASS` (`APPROVED_ZERO_VULNERABILITIES`)

---

## 2. Google Play Console — Release Notes (Copy & Paste)

### `<pt-BR>` (Português – Brasil)
```text
🛡️ OnionTalk v1.5.0 (Build 36) — Grupos Pós-Quânticos, Lista de Critérios & Hardening Zero-Trust:
• Gestão de Grupos por Critérios (Admin): seleção de membros 1 por 1 ou filtrada por Lista de Critérios (Todos, Amigos ★, Fixados 📌, Marcados e busca por @id), sem pré-seleção automática em lote, além de Lista de Critérios do Grupo assinada via manifesto PQC.
• Criptografia Pós-Quântica Estrita (Caminho B): envelopes E2EE V2 (X25519 + ML-KEM-768 FIPS 203) e manifestos de grupo assinados com Ed25519 (ONIONTALK_GROUP_MANIFEST_V2).
• Cofre de Mídia AES-256-GCM (OTENC1): fotos, áudios e vídeos criptografados em repouso mantendo 100% das contas e contatos preservados.
• Proteção Anti-Exploit Legado: corte de segurança obrigatório (HTTP 426) bloqueando versões anteriores.
```

### `<en-US>` (English – United States)
```text
🛡️ OnionTalk v1.5.0 (Build 36) — Post-Quantum Groups, Admin Criteria Filter & Zero-Trust Hardening:
• Group Admin Criteria Filter & Rules: 1-by-1 or criteria-filtered contact selection (All, Friends ★, Pinned 📌, Selected + @id search) with zero bulk pre-selection, plus signed PQC Group Criteria rules.
• Strict Post-Quantum E2EE V2 (Path B): hybrid X25519 + NIST FIPS 203 ML-KEM-768 encryption and Ed25519-signed group control manifests (ONIONTALK_GROUP_MANIFEST_V2).
• AES-256-GCM Encrypted Media at Rest (OTENC1): all local voice, image, and video attachments are encrypted at rest while preserving 100% of accounts and contacts.
• Legacy Exploit Cutoff: mandatory relay enforcement (HTTP 426 Upgrade Required) blocking legacy clients below Build 36.
```

### `<es-419>` (Español – Latinoamérica)
```text
🛡️ OnionTalk v1.5.0 (Build 36) — Grupos Post-Cuánticos, Lista de Criterios y Seguridad Zero-Trust:
• Filtro de Criterios para Administradores de Grupo: selección de contactos 1 por 1 o por criterios (Todos, Amigos ★, Fijados 📌, Seleccionados y búsqueda por @id) sin preselección masiva, más Lista de Criterios del Grupo firmada con PQC.
• Cifrado Post-Cuántico Estricto (V2): X25519 + ML-KEM-768 (FIPS 203) y manifiestos de grupo firmados con Ed25519.
• Archivos Multimedia Cifrados con AES-256-GCM (OTENC1) en reposo conservando el 100% de las cuentas y contactos.
```

---

## 3. Google Play Data Safety & Foreground Service Declarations (`FOREGROUND_SERVICE_SPECIAL_USE` / `REMOTE_MESSAGING`)
- **Foreground Service Justification (`OnionKeepAliveService`)**:
  > *"Maintains a user-enabled app-only P2P Tor SOCKS5h circuit in the background to receive zero-knowledge E2EE messages without Google FCM or global VPN routing."*
- **Data Collection & Sharing**:
  - **Zero personal data collected**: No phone number, email, GPS, or contacts book uploaded.
  - **Ephemeral E2EE transit**: All payloads are encrypted client-side before traversing Tor v3 `.onion` relays and deleted immediately upon cryptographic ACK.
