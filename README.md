<div align="center">
  <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/oniontalk-icon-512.png" alt="OnionTalk Logo" width="120" height="120" />
  <h1>OnionTalk Android — Live Demo & Visual Walkthrough</h1>
  <p><strong>Real Dual-Emulator Walkthrough ("Pablo & Bruna") • Zero-Knowledge Tor v3 P2P Messenger</strong></p>

  <p>
    <a href="https://play.google.com/store/apps/details?id=org.oniontalk.messenger">
      <img src="https://img.shields.io/badge/Google_Play-OnionTalk_–_Apps_no_Google_Play-3DDC84?style=for-the-badge&logo=google-play&logoColor=black" alt="OnionTalk – Apps no Google Play" />
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

## 🚀 What's New in `v1.4.2` (`versionCode = 22` / Build 23) — Anti-Exploit Media Firewall, Hardware-Backed KeyStore Vault, Deflate Super-Compression & Warm Tor Pool — Password-Locked Messages & Chats, Unified Long-Press Menu, Profile Photo Privacy, 15s Auto-Lock & Official Video Suite

- **📦 Direct Signed APK Downloads (`v1.4.2` — Latest Release Build 23)**:
  - **Main Messenger APK (`org.oniontalk.messenger` `v1.4.2` Build 23)**: [**Download `OnionTalk-v1.4.3.apk`**](https://github.com/onion-talk/oniontalk-demo/releases/download/v1.4.3-demo/OnionTalk-v1.4.3.apk) (`SHA-256: 68f3d5785919acaf0820c238f93f5db0cb02df5986db457ec783d573dbc652a8`)
  - **Standalone Android Relay Node APK (`org.oniontalk.relaynode` `v1.4.2` Build 3)**: [**Download `OnionTalk-RelayNode-v1.4.3.apk`**](https://github.com/onion-talk/oniontalk-demo/releases/download/v1.4.1-demo/OnionTalk-RelayNode-v1.4.3.apk) (`SHA-256: befe94bcf2e66a2fe067b47b2114af9f226cf3405292df7e67ab5e29782f3f1b`)
- **🎬 Official `v1.4.2` Promotional & Feature Walkthrough Videos**:
  - [**▶ Watch Official Promo v1.4.2 (Português 1080p)**](https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-v1.4.1-Promo-Oficial-PT.mp4)
  - [**▶ Watch Official Promo v1.4.2 (English 1080p)**](https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-v1.4.1-Promo-Official-EN.mp4)
  - [**▶ Watch Complete Feature & Messaging Walkthrough v1.4.2 (PT-BR 1080p)**](https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-v1.4.1-Demo-Funcoes-PT.mp4)
  - [**▶ Watch Vertical Reels / Shorts / TikTok 9:16 Spot (1080x1920)**](https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-v1.4.1-Reels-Shorts-PT.mp4)
- **🔐 Key Security & UX Improvements in `v1.4.2` (`Build 23`)**:
  1. **Password-Protected Individual Messages (`__LOCKED_MSG_V1__`)**: Lock any message in a conversation with a dedicated secret password (`PBKDF2-HMAC-SHA256` + `AES-256-GCM`) and reliable first-try session caching (`unlockedMessageCache`) so unlocked messages stay readable throughout the active chat session.
  2. **Password-Protected Conversations**: Lock entire conversations with a dedicated password, masking message previews on the Home screen (`🔒 Conversa trancada com senha`).
  3. **Clean Conversation Rows & Unified Long-Press Action Menu**: Removed external star and pencil icons from conversation rows; long-pressing any conversation opens a unified action menu to **Favorite / Pin to Top (`📌`)**, **Rename Contact (`✏️`)**, or trigger **Bilateral Anti-Forensic Burn (`🔥`)**.
  4. **Instant Add Contact Dismissal & Navigation**: Adding a `.onion` contact now dismisses the modal prior to navigation so the dialog never lingers when returning to the Home screen.
  5. **Single-Flight Hardware Biometrics (`AtomicBoolean`)**: Eliminates duplicate fingerprint prompts when unlocking the vault or resuming from background (`ON_START`).
  6. **Granular Profile Photo Visibility (`Public / Contacts / Friends / Private`)**: Control who receives your sanitized avatar, plus fixed 4-tab Settings navigation (`Modifier.weight(1f)`) and responsive Crypto Donation cards (`BTC`, `ETH`, `SOL`).
  7. **15-Second Auto-Lock (Even After App Closed)**: Persists inactivity timestamps and evaluates elapsed background time immediately on process start so the vault locks strictly after `15s`.

| **1. Password-Locked Message (`v1.4.2`)** | **2. Instant Message Unlock Modal** | **3. Clean List & Long-Press Favorites (`📌`)** |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/11-locked-message-e2ee.png" width="260" alt="Password Locked Message Bubble" /> | <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/12-unlock-message-modal.png" width="260" alt="Unlock Message Modal" /> | <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/13-locked-chat-pin-home.png" width="260" alt="Clean Home Pinned & Locked Chat" /> |
| *Per-message AES-256-GCM password lock inside E2EE Tor v3 chat.* | *Unlocks on the first try with incognito keyboard and session cache.* | *Clean conversation list with pinned favorites and locked chat masking.* |

| **4. Lock Entire Conversation Modal** | **5. Profile Photo Privacy (`Build 23`)** | **6. 15s Auto-Lock & Single Biometrics** |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/14-lock-conversation-modal.png" width="260" alt="Lock Conversation with Password" /> | <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/15-profile-photo-privacy.png" width="260" alt="Profile Photo Visibility Settings" /> | <img src="https://raw.githubusercontent.com/onion-talk/.github/main/assets/screenshots/16-autolock-15s-security.png" width="260" alt="15s Auto-Lock and Biometric Security" /> |
| *Dedicated conversation password hides Home previews and blocks unauthorized access.* | *4 fixed Settings tabs (`Build 23`) and Public / Contacts / Friends / Private avatar visibility.* | *15s inactivity lock enforced even after app closure + single-flight fingerprint prompt.* |

---

## 🚀 What's New in `v1.4.0` (`versionCode = 14`) — 17-Node Global Mesh (8 Countries), Selective `FLAG_SECURE`, Instant Tor Auto-Heal & GZIP File Transfers

- **📦 Direct Signed APK Downloads (`v1.4.0`)**:
  - **Main Messenger APK (`org.oniontalk.messenger`)**: [**Download `OnionTalk-v1.4.0.apk`**](https://github.com/onion-talk/oniontalk-demo/releases/download/v1.4.3-demo/OnionTalk-v1.4.3.apk) (`SHA-256: d11ee5629b6bffa32658d80e2d22cd5582e37c84d3b69bd85dffc424793688c4`)
  - **Standalone Android Relay Node APK (`org.oniontalk.relaynode`)**: [**Download `OnionTalk-RelayNode-v1.4.3.apk`**](https://github.com/onion-talk/oniontalk-demo/releases/download/v1.4.1-demo/OnionTalk-RelayNode-v1.4.3.apk) (`SHA-256: befe94bcf2e66a2fe067b47b2114af9f226cf3405292df7e67ab5e29782f3f1b`)
- **🌐 17 Active Tor v3 Relays Across 8 Countries (`BR`, `US`, `FR`, `DE`, `RU`, `SG`, `JP`, `CN`)**:
  - Added **Node 16 (DOM Cloud Nuremberg, Germany)**: `o5zqqfl5znzexdojfnxgub5jnjelxdahbyxasjp57sx6fbxtjeqovpad.onion`
  - Added **Node 17 (ModelScope Cloud Hangzhou, China — GFW Bypass)**: `2amizuhb3p5x2lk3sra7f7thm5tgs7qtnysgowqpmexcqi4cuwyv7vad.onion`
  - Added **Zero-Touch Auto-Join & 100% Zero-Leak Synthetic Coordinates (Zero IP / Zero Geo Exposure)** so any Docker or Android Relay Node joins the mesh in `<15s`.
- **🛡️ Selective `FLAG_SECURE` by Route**:
  - Enforces `WindowManager.LayoutParams.FLAG_SECURE` **100% of the time** on **Conversations (`CHAT_DETAIL`)**, **Active Chats (`CHAT_LIST`)**, and **Contacts Library (`CONTACTS_LIBRARY`)**, while dynamically allowing screenshots on **Settings / QR Code (`SETTINGS`)** for frictionless identity sharing.
- **⚡ 2-Hour Large-Scale Soak & Chaos Engineering Certification (`23:50–01:50`, 60 Waves, 3 Android 15 Emulators)**:
  - **0 crashes, 0 ANRs, 0 frozen process warnings** (`PSS: 62.5 MB – 94.9 MB`).
  - **Online P2P Delivery Latency**: `p50 = 1,147.1 ms` (`1.15s`), `p95 = 5,039.5 ms`.
  - **Encrypted File Transfers (`16 KB`–`256 KB`)**: `15/15` (`100%`) delivered with transparent **GZIP pre-compression (`gz=true`)** and adaptive read timeouts (`25s`).
  - **Bilateral Anti-Forensic Burn (`__CTRL_BURN_V1__`)**: `15/15` (`100%`) confirmed in `p50 = 1,846.5 ms`.
  - **Instant Network Auto-Recovery (`ConnectivityManager.NetworkCallback`)**: Foreground & background `NetworkCallback` + `3.5s` partial wake-lock on incoming batches recovers offline backlogs in `700.8 ms – 849.9 ms`.
- **🎨 Visual Privacy & UI Polish**:
  - Added **Blur / Unblur Contact Photo** (`blurAvatarBitmap`) per contact, removed bubble reply clutter and header shield icon, and placed the `✅ Atualizado` confirmation directly inside the Tor Status card.

| # | Country / Region | Tor v3 Hidden Service Address (`.onion`) | Role |
| :-: | :--- | :--- | :--- |
| 1 | 🇧🇷 Brazil (São Paulo #1) | `onion4zr3bsdeaelksemwokl5qmxd5o7jyblf46vc2mfl6cozgw77tqd.onion` | Master Vanity Seed (PVE2) |
| 2 | 🇧🇷 Brazil (São Paulo #2) | `kn4u2xxl2otoo2ujv3mhehwfwbw7mtppaf56fu3nxogvv7eekf2qdrid.onion` | Homelab Core Seed (PVE4) |
| 3 | 🇺🇸 USA (US-East) | `puqjsmsyyzmxjdtcgr2fl4wrdazqd2phaqrz26alzwyletbvekkxhyyd.onion` | AWS EKS Relay |
| 4 | 🇧🇷 Brazil (Vinhedo) | `zqdx5x7pfybox7m5rz3fe5kiouxhipvh3ekuteq2urrrvwcxjttnmgid.onion` | Oracle Cloud OCI Relay |
| 5 | 🇺🇸 USA (Virginia) | `ch4s5llfqshxbvba2yulgp5kbopq25w3qqrtli67sle6smbujlebn2id.onion` | AWS Virginia Relay |
| 6 | 🇫🇷 France (Paris #1) | `7bntuiegd3stvcylvx7rhnhq7ncasxiokunbf5onvvm34dg5gccvooid.onion` | Alwaysdata EU Relay #1 |
| 7 | 🇺🇸 USA (South Carolina) | `jz6urt6ckkqqvtasm6bll2mryhksjcawcl4tbguif5nqvxgsfsx6ywad.onion` | Google Cloud US-East Relay |
| 8 | 🇺🇸 USA (Ohio) | `4wufywh2k6ayyz6nmh2w25hj5vjsqgkve24o2tthvc7rhyvxnhaghqqd.onion` | Render Cloud Ohio Relay |
| 9 | 🇷🇺 Russia (Moscow) | `nwsoa6ddtbbqbwcceanhhj3j23d5a47zbpbs6zspz5zoeytzqpzvkqqd.onion` | Amvera Cloud Eurasia Relay |
| 10 | 🇺🇸 USA (US-East) | `bk7iegv3v232ycjyf5ylwsdx42iozvy2dhhff5zn3ciwa3g2lkifdlad.onion` | Back4App Container Relay |
| 11 | 🇫🇷 France (Paris #2) | `hdjp7uaj4qemlmwtev7xmj2w3uexnv6ctplfgvbmpqxenbfgwjjwtrid.onion` | Alwaysdata EU Relay #2 |
| 12 | 🇫🇷 France (Paris #3) | `gcvfh67zltoyvithw6luetsrcec6cw42upzrsprxfmx27cvh7vidw4yd.onion` | Alwaysdata EU Relay #3 |
| 13 | 🇺🇸 USA (Iowa, US-Central) | `wfi3nwuzk2tgrsf2scdy4nb6x6rtiocit4n26477zdlvdvshkgip3ayd.onion` | Northflank US-Central Relay |
| 14 | 🇯🇵 Japan (Osaka) | `5s6w6556f2eov2p6wlsuavaxh7si2kaswjwi5reojnovbzemducjzjqd.onion` | DOM Cloud Asia-Pacific East |
| 15 | 🇸🇬 Singapore | `o5yf3eukrwpt2g6jfo4q2y23xtuhoso2qknmnn6ac5eng5t4yt36roqd.onion` | DOM Cloud Southeast Asia Hub |
| 16 | 🇩🇪 Germany (Nuremberg) | `o5zqqfl5znzexdojfnxgub5jnjelxdahbyxasjp57sx6fbxtjeqovpad.onion` | DOM Cloud Central Europe |
| 17 | 🇨🇳 China (Hangzhou) | `2amizuhb3p5x2lk3sra7f7thm5tgs7qtnysgowqpmexcqi4cuwyv7vad.onion` | ModelScope CN / GFW Bypass |

---

## 🚀 What's New in `v1.2.0` (`versionCode = 8`) — Always-Connected Background Tor & Bounded Failover

- **📦 Direct Signed APK Download (`v1.2.0-demo`)**: [**Download `OnionTalk-v1.2.0.apk`**](https://github.com/onion-talk/oniontalk-demo/releases/download/v1.4.3-demo/OnionTalk-v1.4.3.apk) (`SHA-256: 028657053bfb5b08703105e3e11fc09c24d2e146587cab24a9a815f2872a19ed`)
- **🌐 Official Website & Privacy Policy (GitHub Pages)**: [**onion-talk.github.io/oniontalk-demo**](https://onion-talk.github.io/oniontalk-demo/) | [**onion-talk.github.io/oniontalk-protocol**](https://onion-talk.github.io/oniontalk-protocol/)
- **🛡️ Persistent Background Tor Mode ("Sempre Conectado" — App-Only `127.0.0.1:9050`)**:
  - New `OnionKeepAliveService` (`ForegroundService` with `specialUse|remoteMessaging`, `START_STICKY`, and 15s watchdog) keeps only OnionTalk's embedded Tor daemon alive in the background without routing the rest of the phone's traffic (no global VPN).
  - Certified in a **2-hour continuous soak test (60 waves / 120.6 min)** across 3 Android 16 devices rotating into the background: **`0` frozen process warnings (`Sending oneway calls to frozen process = 0`)**, **`0` crashes/ANRs**, and **`157 / 157` (`100.0%`) E2EE messages delivered and ACKed** (`p50 = 1.69s`).
- **⚡ Bounded Multi-Gateway Failover & Local Tor Health Detection**:
  - Per-call SOCKS5h handshake timeouts (`12s` primary, `4s–5s` fallback) replacing the legacy `15s` floor that caused `~105s` head-of-line blocking when walking 7 relays sequentially.
  - Automatic detection of local Tor circuit rebuilds (`>= 2` transport failures in a single cycle pause peer discovery and avoid penalizing healthy `.onion` relays).
- **🟢 Real-Time `TorTunnelState` Machine**:
  - Eliminates the false `"🟡 CONECTANDO / STAND-BY"` badge while the app is open in the foreground (`BOOTSTRAPPING`, `CONNECTED_ACTIVE`, `DEGRADED_RETRYING`, `PAUSED_BACKGROUND`).
- **🔒 Accidental Wipe Protection**:
  - Empty password taps and transient SQLite I/O errors no longer decrement the 5-strike duress wipe counter; tapping *"Create New Cryptographic Identity"* on the unlock screen now requires explicit confirmation in a destructive modal before overwriting an existing vault.
- **🌐 Node Operator Incentive ("Fortaleça a Rede — Suba um Nó Relay")**:
  - Built-in Settings card with 1-tap Docker Compose command copy (`https://github.com/onion-talk/oniontalk-relay`), live active `.onion` v2 relay counter (`7` verified v2 relays), and custom `.onion` node latency verifier.

---

## 📱 Official Release on Google Play Store

This repository hosts the **complete screen-by-screen visual walkthrough** captured directly from two independent Android emulators (**Pablo** and **Bruna**) communicating in real time over the OnionTalk Tor v3 mesh.

- 🚀 **Download on Google Play**: [**OnionTalk – Apps no Google Play**](https://play.google.com/store/apps/details?id=org.oniontalk.messenger) (`org.oniontalk.messenger`).
- 🔒 **Roadmap & Source Code**: The relay node implementation ([`oniontalk-relay`](https://github.com/onion-talk/oniontalk-relay)) and wire protocol specification ([`oniontalk-protocol`](https://github.com/onion-talk/oniontalk-protocol)) are open-sourced. Download the official Android app directly from [**Google Play Store**](https://play.google.com/store/apps/details?id=org.oniontalk.messenger).

---

## 🎬 Official Promo Video — Freedom & Digital Sovereignty

Watch how **OnionTalk** restores communication freedom—eliminating SIM cards, phone numbers, and centralized cloud surveillance through sovereign **Tor v3 (`.onion`)** hidden services, **NaCl Curve25519** end-to-end encryption, and **Synchronized Bilateral Burn (`🔥`)**.

<div align="center">
  <a href="https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-Freedom-EN.mp4">
    <img src="./video/poster-freedom.png" width="840" alt="Watch OnionTalk Official Promo Video" />
  </a>
  <br /><br />
  <a href="https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-Freedom-EN.mp4">
    <img src="https://img.shields.io/badge/%E2%96%B6_Watch_Promo_Video_(English)-1080p_MP4-00E5FF?style=for-the-badge&logoColor=black" alt="Watch Promo Video in English" />
  </a>
  <a href="https://github.com/onion-talk/oniontalk-demo/raw/main/video/OnionTalk-Liberdade-PT.mp4">
    <img src="https://img.shields.io/badge/%E2%96%B6_Assistir_V%C3%ADdeo_(Portugu%C3%AAs)-1080p_MP4-00E676?style=for-the-badge&logoColor=black" alt="Assistir Vídeo em Português" />
  </a>
</div>

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
- **Local Keypair Generation (256-Bit Public Key Identity)**: Tapping **Generate Keys & Create Account** generates a 256-bit **Ed25519** signing keypair (birationally mapped to **X25519** for ECDH key agreement), embeds the full 64-character hex public key in the user's Crypto ID (`@<64-hex-pubkey>:<relay.onion>`) and QR code, and seals the private seed inside the SQLCipher AES-256-CBC vault.

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

## 📲 How to Install from Google Play

1. Open [**OnionTalk – Apps no Google Play**](https://play.google.com/store/apps/details?id=org.oniontalk.messenger) on your Android device (Android 8.0+ / API 26+) and tap **Install**.
2. Select your preferred language (`🇺🇸 EN`, `🇧🇷 PT`, `🇪🇸 ES`, `🇷🇺 RU`), tap **Create New Cryptographic Identity**, choose a local nickname and master password, and wait ~10 seconds for the top bar to show **`Connected via Tor`**.

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
