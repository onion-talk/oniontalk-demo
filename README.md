<div align="center">
  <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/oniontalk-icon-512.png" alt="OnionTalk Logo" width="120" height="120" />
  <h1>OnionTalk Android — Live Demo & Visual Walkthrough</h1>
  <p><strong>Real Dual-Emulator Walkthrough ("Pablo & Bruna") • Zero-Knowledge Tor v3 P2P Messenger</strong></p>

  <p>
    <a href="https://github.com/onion-talk/oniontalk-demo/raw/main/apk/OnionTalk-Demo.apk">
      <img src="https://img.shields.io/badge/Download_Demo_APK-Android_8.0%2B-00C853?style=for-the-badge&logo=android&logoColor=white" alt="Download Android Demo APK" />
    </a>
    <a href="https://github.com/sponsors/eriktonon">
      <img src="https://img.shields.io/badge/Sponsor-OnionTalk-ea4aaa?style=for-the-badge&logo=githubsponsors&logoColor=white" alt="Sponsor on GitHub" />
    </a>
    <a href="#-sponsor--donate">
      <img src="https://img.shields.io/badge/Donate-BTC_%7C_ETH_%7C_SOL-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white" alt="Donate Crypto" />
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Transport-Tor_v3_SOCKS5h-7D4698?style=flat-square&logo=torproject&logoColor=white" alt="Tor v3" />
    <img src="https://img.shields.io/badge/E2EE-X25519_%2B_ChaCha20--Poly1305-00C853?style=flat-square" alt="E2EE" />
    <img src="https://img.shields.io/badge/Database-SQLCipher_AES--256--CBC-1F6FEB?style=flat-square" alt="SQLCipher" />
    <img src="https://img.shields.io/badge/KDF-Argon2id_64MB-FF6D00?style=flat-square" alt="Argon2id" />
  </p>
</div>

---

## 📱 About This Repository

This repository hosts the **official Android Demo APK** and a **complete screen-by-screen visual walkthrough** captured directly from two independent Android emulators (**Pablo** and **Bruna**) communicating in real time over the OnionTalk Tor v3 mesh.

> **Note on Android Source Code**: The relay node implementation ([`oniontalk-relay`](https://github.com/onion-talk/oniontalk-relay)) and wire protocol specification ([`oniontalk-protocol`](https://github.com/onion-talk/oniontalk-protocol)) are already open-sourced. The Android client source code is currently kept private while we complete final security hardening and will be published in an upcoming milestone. In the meantime, you can inspect the full application workflow below or test the signed Demo APK directly.

---

## 💬 Live Dual-Emulator Demo: Pablo & Bruna

To demonstrate how OnionTalk operates in everyday use without phone numbers, SIM cards, or central servers, we launched two isolated Android instances in English (`🇺🇸 EN`):

- **Device 1 — Pablo**: `@06b843cc8f6617fb:onion4zr3bsdeaelksemwokl5qmxd5o7jyblf46vc2mfl6cozgw77tqd.onion`
- **Device 2 — Bruna**: `@55e3c865259ed495:onion4zr3bsdeaelksemwokl5qmxd5o7jyblf46vc2mfl6cozgw77tqd.onion`

In this scenario, **Bruna** has just landed in Lisbon and messages **Pablo** at the hotel to coordinate dinner and exchange schedule notes—all over Tor v3 without a local SIM card, roaming plan, or clearnet IP exposure.

| **Device 1: Pablo's View (`emulator-5554`)** | **Device 2: Bruna's View (`emulator-5556`)** |
| :---: | :---: |
| <img src="./screenshots/04-chat-pablo-bruna-en.png" width="360" alt="Pablo Chat View" /> | <img src="./screenshots/05-chat-bruna-pablo-en.png" width="360" alt="Bruna Chat View" /> |
| *Pablo sends messages (blue bubbles on the right) and receives Bruna's replies (dark bubbles on the left).* | *Bruna's emulator receives Pablo's onion-routed payloads in real time and replies over the mesh.* |

---

## 🔍 Screen-by-Screen Technical Walkthrough

Every screen in OnionTalk is designed to eliminate metadata leakage, protect local storage against physical device seizure, and keep network routing strictly inside the Tor v3 overlay.

---

### 1. Cryptographic Vault Unlock & Creation (Zero PII)

When you launch OnionTalk, there is no "Sign up with Phone Number" or "Continue with Google/Apple" screen. The app starts directly at the local **Cryptographic Vault**.

| **1A. Local Vault Unlock & Anti-Bruteforce** | **1B. Creating an Anonymous Identity (`Pablo`)** |
| :---: | :---: |
| <img src="./screenshots/01-vault-unlock-en.png" width="360" alt="Vault Unlock Screen" /> | <img src="./screenshots/02-create-identity-en.png" width="360" alt="Create Anonymous Account Screen" /> |

#### What It Does & How It Works:
- **Zero-Telemetry Language Switch (`🇧🇷 PT` / `🇺🇸 EN` / `🇪🇸 ES` / `🇷🇺 RU`)**: Switches the entire UI dictionary in memory without contacting any server or analytics endpoint.
- **Argon2id Key Derivation (`64 MB RAM, 3 iterations`)**: Your password is never sent over the internet. It is processed locally by Argon2id to derive a 256-bit master key that unlocks the local SQLCipher database and decrypts your private keys at rest.
- **5-Strike Anti-Coercion Wipe**: Notice the warning **`Remaining attempts before data wipe: 5`**. If an attacker or forensic extraction tool enters a wrong password 5 times in a row, OnionTalk automatically executes a 2-pass Department of Defense (`DoD 5220.22-M`) file shredder (`0x00`, `0xFF`, `SecureRandom`, `fsync()`) over the SQLite database and keystore, destroying all local data.
- **Local Keypair Generation**: Tapping **Generate Keys & Create Account** generates an **Ed25519** signing keypair and an **X25519** Diffie-Hellman keypair in hardware-backed memory, hashes the public key into a 16-character hex fingerprint (`@06b843cc8f6617fb`), and binds it to an active `.onion` v3 relay from the mesh.

---

### 2. Adding Contacts & Encrypted Chat List

Because OnionTalk has no central user directory to query or scrape, contacts are added directly by exchanging `.onion` cryptographic IDs or scanning each other's QR codes in person.

| **2A. Adding Bruna's `.onion` Identity** | **2B. Pablo's Encrypted Chat List** |
| :---: | :---: |
| <img src="./screenshots/03a-add-onion-contact-en.png" width="360" alt="Add Onion Contact Dialog" /> | <img src="./screenshots/03-chat-list-pablo-en.png" width="360" alt="Chat List Screen" /> |

#### What It Does & How It Works:
- **Decentralized Addressing (`@pubkey_hash:relay.onion`)**: Pablo pastes Bruna's full cryptographic ID (`@55e3c865259ed495:onion4zr3bsdeaelksemwokl5qmxd5o7jyblf46vc2mfl6cozgw77tqd.onion`) and assigns a local nickname (`Bruna`). Nicknames exist only inside Pablo's encrypted database—relays never see human names.
- **Live Tor Status Indicator**: The top bar displays **`Connected via Tor`** alongside the blue Tor shield icon, confirming that the embedded Tor daemon (`127.0.0.1:9050`) has built active 3-hop circuits.
- **Instant Vault Lock (`🔒`)**: Tapping the yellow padlock icon in the top bar immediately zeroes out the in-memory session keys and returns the app to the password vault screen.

---

### 3. Synchronized Bilateral Burn (`🔥`) & Anti-Forensic Scrubbing

Most messengers offer "Delete for Everyone" by sending a polite request that hides the message in the UI while leaving remnants in SQLite free-list pages or server backups. OnionTalk implements **Synchronized Bilateral Burn (`🔥`)** with low-level database sanitization.

| **3A. Bilateral Burn Confirmation (`🔥`)** | **3B. Post-Burn Cryptographic Scramble (`🔥`)** |
| :---: | :---: |
| <img src="./screenshots/06-synchronized-burn-en.png" width="360" alt="Confirm Burn Dialog" /> | <img src="./screenshots/06b-after-synchronized-burn-en.png" width="360" alt="Scrambled Messages After Burn" /> |

#### What It Does & How It Works:
1. **Triggering the Burn**: When Pablo taps the orange flame icon (`🔥`) in the top bar and confirms **Confirm Burn**, two actions occur simultaneously:
   - **Local B-Tree Cell Overwrite**: Every message in the conversation is overwritten in-place inside the local SQLCipher database with high-entropy cryptographic noise (`🔥 Ba▒166Φ19AaA∑0∑...`) before running `PRAGMA secure_delete=ON` and `VACUUM`. This ensures that forensic carving of raw NAND flash memory cannot recover the previous plaintext or ciphertext lengths.
   - **Remote Encrypted Burn Signal (`[CMD:BURN_CHAT]`)**: An authenticated E2EE command packet is dispatched across the `.onion` mesh to Bruna's device. As soon as Bruna's client pulls the packet, her local database executes the exact same B-Tree cell overwrite and `VACUUM`, scrubbing both sides of the conversation in sync.
2. **Continued Conversation**: Any new messages sent *after* the burn remain normal until the next burn is triggered.

---

### 4. Local Cryptographic Identity, EXIF Stripper & QR Code

In **Settings → Profile**, users manage their local identity, sanitize profile avatars, and share their `.onion` address via QR code.

| **4A. Language & Zero-EXIF Avatar Sanitizer** | **4B. `.onion` Cryptographic ID & QR Code** |
| :---: | :---: |
| <img src="./screenshots/07-profile-qr-identity-en.png" width="360" alt="Profile Identity Settings" /> | <img src="./screenshots/07b-profile-qr-full-en.png" width="360" alt="Full QR Code and Copy ID" /> |

#### What It Does & How It Works:
- **Zero-EXIF / Raw Canvas + LSB Jitter Sanitizer**: Smartphone photos embed dangerous metadata (GPS coordinates, camera serial numbers, timestamps, and sensor noise fingerprints). When you select a profile photo or image attachment in OnionTalk, the app decodes the raw pixels onto a clean bitmap canvas—stripping 100% of EXIF/GPS headers—and applies subtle Least Significant Bit (`LSB`) random jitter to defeat camera sensor fingerprinting before encrypting the image for your contacts.
- **Offline QR Code Generation**: The QR code is rendered locally on the device from your `@pubkey_hash:relay.onion` string so contacts can scan it in person without typing a 56-character `.onion` domain.

---

### 5. Federated `.onion` Mesh Gossip & Tor SOCKS5h Proxy

In **Settings → Tor**, users can inspect the live federated relay mesh discovered via autonomous gossip (`Auto-Gossip PEX`) and customize their SOCKS5h proxy routing.

<div align="center">
  <img src="./screenshots/08-tor-mesh-settings-en.png" width="380" alt="Tor Socket and Mesh Network Settings" />
</div>

#### What It Does & How It Works:
- **Autonomous Mesh Discovery (`Sync Mesh Nodes Now`)**: Displays all verified `.onion` v3 relays currently active in the mesh (9 nodes shown above). When sending a message, the client fans out the encrypted envelope to multiple relays simultaneously (`3x` fanout) so messages arrive even if a node goes offline.
- **SOCKS5h Proxy Control (`Tor 9050` / `Orbot 9052` / `Auto`)**: Supports both the embedded Tor daemon (`127.0.0.1:9050`) and external Orbot circuits (`9052`), with configurable socket read timeouts (`15s`–`60s`) for high-latency hidden service hops.
- **Strict Onion Mode (`Strict SOCKS5h`)**: Forces 100% of network traffic through the Tor SOCKS5h socket with remote hostname resolution, blocking any local fallback or clearnet DNS packet.

---

### 6. SQLCipher AES-256 Audit, Screen Protection & Project Support

In **Settings → Security** and **Settings → Donate**, users control physical device hardening, anti-forensic SQLite maintenance, and voluntary project funding.

| **6A. Security, `FLAG_SECURE` & SQLCipher Audit** | **6B. Voluntary Crypto Support (`Donate`)** |
| :---: | :---: |
| <img src="./screenshots/09-security-sqlcipher-en.png" width="360" alt="Security and SQLCipher Audit" /> | <img src="./screenshots/10-donate-support-en.png" width="360" alt="Donate and Support Screen" /> |

#### What It Does & How It Works:
- **Block Screenshots / Recording (`FLAG_SECURE`)**: Enabled by default to prevent screen-capture malware from recording your chats and to blank out the app preview in Android's Recent Apps switcher. *(Note: The screenshots in this walkthrough were captured directly from the host GPU framebuffer on our development emulators).*
- **Hide Message Previews in Chat List**: Replaces conversation snippets on the home screen with `[Encrypted Message]` for shoulder-surfing protection in public spaces.
- **Zero-FCM Local Tor Push Notifications**: Unlike conventional messengers that wake your device via Google Firebase Cloud Messaging (leaking metadata to Google servers every time a message arrives), OnionTalk polls the `.onion` mesh directly over a persistent background Tor circuit.
- **Real-Time SQLCipher Audit & Manual `VACUUM`**: Displays live database encryption metrics (`SQLCipher AES-256-CBC | PRAGMA secure_delete=ON`) and lets you trigger an immediate `VACUUM` sanitization or wipe all message history while preserving your contact list.

---

## 📲 How to Install the Demo APK

1. Download [**`OnionTalk-Demo.apk`**](https://github.com/onion-talk/oniontalk-demo/raw/main/apk/OnionTalk-Demo.apk) (`34 MB`, Android 8.0+ / API 26+).
2. On your Android device or emulator, allow installation from your browser or install via ADB:
   ```bash
   adb install -r OnionTalk-Demo.apk
   ```
3. Select your preferred language (`🇺🇸 EN`, `🇧🇷 PT`, `🇪🇸 ES`, `🇷🇺 RU`), tap **Create New Cryptographic Identity**, choose a local nickname and master password, and wait ~10 seconds for the top bar to show **`Connected via Tor`**.

---

## 💖 Sponsor & Donate

OnionTalk is funded entirely by voluntary community contributions—zero ads, zero tracking, and zero venture capital. Your support keeps our Tor v3 seed relays online across multiple regions.

- **GitHub Sponsors**: [**Sponsor `@eriktonon`**](https://github.com/sponsors/eriktonon)
- **Bitcoin (`BTC`)**: `bc1q0hr95ay33rtazfepg64yddf52q3yqh7ud83cza`
- **Ethereum (`ETH`)**: `0xE69FCE4Fa35CF3bd98F496337b1eA223270b2c92`
- **Solana (`SOL`)**: `3E8L1Hdqe7Xk6GCrzHbtY5sReAfLFc9CdwgZxP7qaoHq`

---

## 📄 License

Distributed under the [MIT License](./LICENSE).
