# Política de Privacidade & Disclaimers Legais / Privacy Policy & Legal Disclaimers — OnionTalk (org.oniontalk.messenger)

**Última atualização / Last Updated:** 29 de outubro de 2026  
**Versão de Referência / App Version:** 1.5.0 (Build 36) & Relay Node 1.5.0 (Build 10)

O **OnionTalk: Private Tor Chat** (org.oniontalk.messenger), o aplicativo secundário **OnionTalk Relay Node** (org.oniontalk.relaynode) e o cliente Desktop/Web **OnionTalk Web** (riktonon/oniontalk-web:latest) compõem um ecossistema de comunicação criptografada ponta-a-ponta (E2EE) construído sob os princípios de **Zero-Knowledge (Conhecimento Zero)**, **Criptografia Pós-Quântica (PQC)**, **Soberania Digital** e **Privacidade por Design**.

---

## 🇧🇷 Português — Política de Privacidade & Avisos Legais (1.5.0)

### 1. Coleta Zero de Dados Pessoais (Zero PII) & Governança Local de Grupos PQC
O OnionTalk **não solicita, não coleta, não armazena, não vende e não compartilha** nenhum dado de identificação pessoal (PII) ou telemetria:
- **Sem cadastro tradicional:** Nenhum número de telefone, chip SIM, endereço de e-mail, nome civil ou CPF/documento é solicitado para criar ou utilizar uma identidade.
- **Sem leitura de agenda:** A lista de contatos do seu telefone nunca é acessada ou sincronizada. Os contatos adicionados manualmente pelo usuário permanecem salvos apenas na **Biblioteca de Contatos** local criptografada.
- **Sem rastreadores ou anúncios:** O aplicativo não contém SDKs de publicidade, Google Analytics, Firebase Analytics, Google Cloud Messaging (FCM) ou rastreadores de terceiros.
- **Sem coleta de localização ou IP:** Toda a comunicação de rede ocorre exclusivamente através de circuitos da rede Tor v3 (.onion) sobre SOCKS5h (127.0.0.1:9050), ocultando o endereço IP de origem e destino.
- **Governança Anti-Spam 100% Local para Grupos PQC:** A verificação de critérios para criação de Grupos Pós-Quânticos (3+ contatos e 5+ dias de conta ativa ou passe criptográfico FounderPass assinado via Ed25519) ocorre **exclusivamente offline no próprio dispositivo**, sem servidores de cobrança ou telemetria.

### 2. Criptografia Pós-Quântica Híbrida e Armazenamento Local
- **Em repouso (No aparelho):** Mensagens, chaves privadas (Ed25519 / X25519 / ML-KEM-768), contatos e configurações ficam armazenados **exclusivamente no próprio aparelho do usuário**, dentro de um cofre local criptografado com **SQLCipher (AES-256)** derivado via **Argon2id (64 MiB)** / **PBKDF2-HMAC-SHA256**, com avatares, áudios e anexos cifrados em repouso (AES-256-GCM / OTATT1) e verificador de senha protegido pelo chip seguro **AndroidKeyStore (TEE)**.
- **Em trânsito (Na malha Tor v3 de 20 Nós):** Envelopes trafegam selados ponta-a-ponta com **Criptografia Pós-Quântica Híbrida (__ENC_PQC_KYBER768_X25519_V3__: NIST FIPS 203 ML-KEM-768 / Kyber-768 + Dual X25519 ECDH + HKDF-SHA256 + ChaCha20-Poly1305 AEAD + Assinatura Ed25519)**, **Grupos PQC (__GROUP_PQC_MSG_V1__)** e **Mensagens/Conversas Trancadas por Senha Individual (__LOCKED_MSG_V1__)**. Nem mesmo os 20 nós de retransmissão (*Relays*) possuem acesso ao conteúdo das mensagens, chaves de grupo, recibos de leitura ou temporizadores.

### 3. Permissões do Dispositivo, Estúdio de Desfoque em RAM & Serviço em Primeiro Plano
- **Serviço em Primeiro Plano — Mensagens Remotas e Conexão P2P Tor (FOREGROUND_SERVICE, FOREGROUND_SERVICE_REMOTE_MESSAGING, FOREGROUND_SERVICE_SPECIAL_USE, WAKE_LOCK, RECEIVE_BOOT_COMPLETED, REQUEST_IGNORE_BATTERY_OPTIMIZATIONS):**
  - Utiliza o serviço perceptível pelo usuário **OnionKeepAliveService ("Sempre Conectado")** para manter o circuito Tor SOCKS5h exclusivo do app ativo em segundo plano e transferir/receber mensagens criptografadas em tempo real sem depender do Google FCM.
  - Exibe notificação permanente (OnionTalk • Sempre Conectado) com botões de ação rápida para **"Novo Circuito"** ou **"Pausar 2º Plano"**.
- **Câmera (ndroid.permission.CAMERA) & Estúdio de Privacidade em RAM:** Utilizada exclusivamente sob ação explícita do usuário para escanear códigos QR (@hash:onion) ou capturar fotos instantâneas em memória RAM, que podem ser desfocadas (**Blur / Pixelate Studio em RAM**) e têm 100% dos metadados EXIF/GPS destruídos (Canvas Raw + LSB Jitter) antes da criptografia E2EE.
- **Microfone (ndroid.permission.RECORD_AUDIO):** Utilizado exclusivamente quando o usuário grava uma mensagem de voz criptografada ponta-a-ponta.
- **Biometria em Hardware (ndroid.permission.USE_BIOMETRIC):** Opcional e vinculada a BiometricPrompt.CryptoObject no AndroidKeyStore, com **Trava Anti-Coação (Lockdown Manual)** e **Auto-Lock de 15 segundos** (inclusive após fechamento do app).
- **Proteção Seletiva de Captura de Tela (FLAG_SECURE):** Bloqueia capturas e gravações de tela em **100% do tempo** nas telas de **Conversas** e **Contatos**, liberando a captura apenas na tela de **Configurações / QR Code**.

### 4. Retenção, Mensagens Efêmeras e Destruição Anti-Forense (Data Retention & Deletion)
- **Em trânsito (Relays RAM-Only =31):** Os envelopes criptografados ficam retidos apenas em memória RAM volátil (
am-volatile-ephemeral-ttl24h) até a confirmação criptográfica de entrega (ACK com prova de pré-imagem SHA-256(ack_token) == ack_lock) ou expiração do TTL, sendo imediatamente expurgados.
- **Mensagens Efêmeras com Timer (⏱️) & Queima Bilateral (🔥 Burn):** Autodestruição configurável por mensagem (30s a 24h) e comando autenticado Ed25519 para sobrescrita e destruição simultânea do histórico em ambos os aparelhos.
- **Destruição Completa da Conta & Senha de Coação (*Duress Wipe*):** Executa o *shredding* físico (DoD 2-pass overwrite + VACUUM) do banco SQLCipher e de todas as chaves locais.

### 5. Público-Alvo e Segurança Infantil
O OnionTalk é destinado ao público adulto (**18 anos ou mais**) interessado em segurança da informação e privacidade criptográfica, e não coleta dados de menores de idade.

### 6. Disclaimers Legais, Isenção de Responsabilidade & Termos de Uso Soberano (1.5.0)
1. **Provisão *"AS IS"* (No Estado em que se Encontra · Licença MIT):** O OnionTalk é um software livre de pesquisa criptográfica distribuído gratuitamente *"no estado em que se encontra"*, sem garantias expressas ou implícitas de comercialização, adequação a uma finalidade específica ou disponibilidade ininterrupta na rede Tor v3.
2. **Impossibilidade Matemática de Recuperação de Senha, Custódia ou Interceptação (*Zero-Knowledge Disclaimer*):** Por não existirem servidores centrais de contas, cadastro de telefone/e-mail ou chaves mestras (*backdoors*), os desenvolvedores e operadores de nós relay **não possuem capacidade técnica ou matemática** para recuperar senhas perdidas, desbloquear mensagens/conversas trancadas (__LOCKED_MSG_V1__), reverter uma Queima Bilateral (🔥 Burn) ou Senha de Coação, identificar endereços IP ou descriptografar mensagens em trânsito. A perda da senha local implica a perda definitiva e irreversível dos dados armazenados no aparelho.
3. **Neutralidade dos Operadores de Nós Relay & Responsabilidade de Uso Lícito:** Os nós da malha federada operam estritamente como roteadores cegos de pacotes cifrados em memória RAM volátil sobre Serviços Ocultos Tor v3, sem conhecimento de origem, destino ou conteúdo. O usuário é integralmente responsável pelo uso ético e lícito do software em conformidade com a legislação aplicável.
4. **Apoio Voluntário Sem Contrapartida Comercial:** Doações em criptoativos (BTC, ETH, SOL) são contribuições voluntárias para manutenção da pesquisa e infraestrutura open-source, não configurando contratação de serviço ou SLA.

### 7. Contato & Canais Oficiais
- **Contato do Administrador pelo App:** @bbac48f99ed4536ce9134df16cc49dbed2d9109ed351710d181d86c28f34efd9:onion4zr3bsdeaelksemwokl5qmxd5o7jyblf46vc2mfl6cozgw77tqd.onion
- **Espelho Oficial na Rede Tor v3 (.onion):** http://oniontg2bwgpz25axonrxmxw5yfsf4pgj5d5wzsqe3sirinhfpzasoad.onion
- **Organização Oficial GitHub:** [https://github.com/onion-talk](https://github.com/onion-talk)
- **Instagram Oficial:** [https://www.instagram.com/oniontalk.app/](https://www.instagram.com/oniontalk.app/) (@oniontalk.app)
- **E-mail de Segurança & Privacidade:** security@oniontalk.org

---

## 🌐 English — Privacy Policy & Legal Disclaimers (1.5.0)

### 1. Zero Personal Data Collection (Zero PII) & Local PQC Group Governance
**OnionTalk: Private Tor Chat** (org.oniontalk.messenger 1.5.0 Build 36) does **not** request, collect, store, sell, or share any personally identifiable information (PII):
- **No phone number or email required:** Identities are pure 256-bit Ed25519/X25519/ML-KEM-768 cryptographic keypairs generated locally on your device.
- **No address book access, no ads, no cloud push trackers:** Zero third-party trackers, zero telemetry, zero Google FCM dependency, and 100% Tor v3 Hidden Service (.onion) routing across **20 global relay nodes in 8 countries**.
- **100% Offline PQC Group Governance:** Eligibility to create Post-Quantum Encrypted Groups (3+ contacts and 5+ days account age or an offline Ed25519-signed FounderPass) is verified strictly locally on the user's device without payment servers or central telemetry.

### 2. Hybrid Post-Quantum Encryption & Local Storage
- **At Rest:** All messages, keys, and settings reside inside a local **SQLCipher AES-256** vault derived via **Argon2id (64 MiB)** / **PBKDF2-HMAC-SHA256**, with encrypted-at-rest media (AES-256-GCM / OTATT1) and hardware-backed **AndroidKeyStore (TEE)** verification.
- **In Transit:** Sealed end-to-end with **Hybrid Post-Quantum Encryption (__ENC_PQC_KYBER768_X25519_V3__: NIST FIPS 203 ML-KEM-768 + Dual X25519 ECDH + HKDF-SHA256 + ChaCha20-Poly1305 AEAD + Ed25519 Signature)**, **PQC Groups (__GROUP_PQC_MSG_V1__)**, and **Per-Message/Per-Chat Password Locks (__LOCKED_MSG_V1__)**.

### 3. Device Permissions, In-RAM Blur Studio & Foreground Service Disclosure
- **Foreground Service (OnionKeepAliveService):** Keeps the app-only Tor SOCKS5h circuit (127.0.0.1:9050) alive for real-time P2P delivery without Google FCM.
- **Camera, Microphone & In-RAM Blur Studio:** Used strictly locally for QR scanning, voice notes, and instant photos stripped of 100% of EXIF/GPS metadata (Canvas Raw + LSB Jitter) with built-in **In-RAM Blur/Pixelate privacy editing** before encryption.
- **Selective FLAG_SECURE & 15s Auto-Lock:** Blocks screenshots on Chats and Contacts while allowing QR sharing on Settings, and enforces a strict 15-second inactivity lock.

### 4. Legal Disclaimers, Limitation of Liability & Sovereign Terms of Use (1.5.0)
1. **"AS IS" Open-Source Provision (MIT License):** OnionTalk is provided free of charge *"AS IS"*, without any express or implied warranties of merchantability, fitness for a particular purpose, or uninterrupted Tor network availability.
2. **Mathematical Impossibility of Password Recovery or Decryption (*Zero-Knowledge Disclaimer*):** Because no central account server, master key, or backdoor exists, project maintainers and relay operators **cannot** recover lost passwords, unlock password-protected messages (__LOCKED_MSG_V1__), reverse a Bilateral Burn (🔥) or Duress Wipe, identify IP addresses, or decrypt envelopes in transit. Losing your local vault password results in permanent, irreversible data loss.
3. **Relay Operator Neutrality & Lawful Use:** Federated relay nodes act exclusively as blind, volatile-RAM store-and-forward routers (
am-volatile-ephemeral-ttl24h) over Tor v3 Hidden Services with zero visibility into sender, recipient, or plaintext. Users are solely responsible for using the software ethically and lawfully in their jurisdiction.