# Política de Privacidade / Privacy Policy — OnionTalk (`org.oniontalk.messenger`)

**Última atualização / Last Updated:** 21 de outubro de 2026  
**Versão de Referência / App Version:** `v1.4.0 (Build 14)`

O **OnionTalk: Private Tor Chat** (`org.oniontalk.messenger`) é um aplicativo de mensagens criptografadas ponta-a-ponta (E2EE) construído sob os princípios de **Zero-Knowledge (Conhecimento Zero)**, **Soberania Digital** e **Privacidade por Design**.

---

## 🇧🇷 Português — Política de Privacidade

### 1. Coleta de Dados Pessoais (Zero PII)
O OnionTalk **não solicita, não coleta, não armazena, não vende e não compartilha** nenhum dado de identificação pessoal (PII) ou telemetria:
- **Sem cadastro tradicional:** Nenhum número de telefone, endereço de e-mail, nome civil ou CPF/documento é solicitado para criar ou utilizar uma identidade.
- **Sem leitura de agenda:** A lista de contatos do seu telefone nunca é acessada ou sincronizada. Os contatos adicionados manualmente pelo usuário permanecem salvos apenas na **Biblioteca de Contatos** local criptografada (mesmo quando o histórico de uma conversa individual é apagado).
- **Sem rastreadores ou anúncios:** O aplicativo não contém SDKs de publicidade, Google Analytics, Firebase Analytics, Google Cloud Messaging (FCM) ou rastreadores de terceiros.
- **Sem coleta de localização ou IP:** Toda a comunicação de rede ocorre exclusivamente através de circuitos da rede Tor v3 (`.onion`), ocultando o endereço IP de origem e destino.

### 2. Criptografia e Armazenamento Local
- Todas as mensagens, chaves privadas (Ed25519 / X25519), contatos e configurações ficam armazenados **exclusivamente no próprio aparelho do usuário**, dentro de um cofre local criptografado com **SQLCipher (AES-256)** derivado via **PBKDF2-HMAC-SHA256 / Argon2id** a partir da senha local escolhida pelo usuário.
- Todas as mensagens trafegam seladas ponta-a-ponta com **X25519 ECDH + HKDF-SHA256 + ChaCha20-Poly1305 / AES-256-GCM AEAD + Assinatura Ed25519**. Nem mesmo os nós de retransmissão (*Relays*) possuem acesso ao conteúdo das mensagens, recibos de leitura ou temporizadores.

### 3. Permissões do Dispositivo e Serviço em Primeiro Plano (`Permissions & Foreground Service Disclosure`)
O aplicativo solicita apenas as permissões estritamente necessárias para funcionalidades acionadas pelo próprio usuário:
- **Serviço em Primeiro Plano — Mensagens Remotas e Conexão P2P Tor (`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_REMOTE_MESSAGING`, `FOREGROUND_SERVICE_SPECIAL_USE`, `WAKE_LOCK`, `RECEIVE_BOOT_COMPLETED`, `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`):**
  - Como o OnionTalk não utiliza servidores centrais de push (como Google FCM) para preservar o anonimato, o aplicativo utiliza o serviço perceptível pelo usuário **`OnionKeepAliveService` ("Sempre Conectado")** para manter o circuito Tor SOCKS5h exclusivo do app ativo em segundo plano e transferir/receber mensagens criptografadas em tempo real entre dispositivos quando o aplicativo está minimizado.
  - Enquanto ativo, o serviço exibe uma notificação permanente e transparente (`OnionTalk • Sempre Conectado`) com botões de ação rápida para **"Novo Circuito"** ou **"Pausar 2º Plano"**, além de poder ser desativado a qualquer momento em **Configurações ➔ Rede Tor ➔ Sempre Conectado**.
- **Câmera (`android.permission.CAMERA`):** Utilizada exclusivamente no dispositivo, sob ação explícita do usuário (menu do botão de clipe `📎` ou leitor de QR Code), para escanear códigos QR de identificadores criptográficos (`@hash:onion`) ou capturar fotos instantâneas em memória RAM que são sanitizadas (remoção de 100% de metadados EXIF/GPS) e criptografadas ponta-a-ponta antes do envio.
- **Microfone (`android.permission.RECORD_AUDIO`):** Utilizado exclusivamente quando o usuário pressiona o botão de gravação de mensagem de voz. O áudio é sanitizado localmente sem metadados e criptografado ponta-a-ponta antes da transmissão.
- **Notificações (`android.permission.POST_NOTIFICATIONS`):** Utilizada apenas para exibir alertas locais no aparelho quando novos pacotes criptografados são recebidos pela malha Tor (com opção de silenciar contatos individualmente no menu `⋮` da conversa ou ocultar a prévia do texto nas Configurações).
- **Proteção Seletiva de Captura de Tela (`FLAG_SECURE`):** O aplicativo bloqueia capturas e gravações de tela em **100% do tempo** nas telas de **Conversas** e **Contatos**, liberando a captura apenas na tela de **Configurações / QR Code** para facilitar o compartilhamento seguro do identificador público.

### 4. Recursos de Privacidade de Mensagens e Exclusão de Dados (`Data Retention & Deletion`)
- **Em trânsito (Relays):** Os envelopes criptografados ficam retidos apenas em memória temporária nos nós de retransmissão até a confirmação criptográfica de entrega (`ACK` com prova de pré-imagem SHA-256) ou expiração automática do TTL (24 horas), sendo imediatamente expurgados.
- **Confirmação de Leitura Opcional (`✓✓`):** O usuário pode ativar ou desativar o envio de recibos criptografados de leitura em **Configurações ➔ Segurança ➔ Confirmação de leitura**.
- **Mensagens Efêmeras com Timer (`⏱️`):** No menu `⋮` de qualquer conversa, o usuário pode ativar a autodestruição automática por mensagem (`30s`, `1 min`, `5 min`, `1h` ou `24h`). Ao expirar, a mensagem é sobrescrita com zeros no banco SQLCipher e removida permanentemente em ambos os aparelhos.
- **Controle Absoluto de Exclusão no Dispositivo:**
  1. **Apagar Conversa (`🗑️`):** Remove e sobrescreve todas as mensagens do chat mantendo o contato salvo na Biblioteca de Contatos.
  2. **Embaralhar Conversa / Queima Bilateral (`🔥 Burn`):** No menu `⋮` da conversa, sobrescreve e destrói o histórico de mensagens localmente e envia um comando autenticado para destruição imediata no aparelho do interlocutor.
  3. **Destruição Completa da Conta:** Em **Configurações ➔ Segurança ➔ Excluir minha conta** (ou após o limite configurado de tentativas incorretas de senha), o aplicativo executa o *shredding* físico (DoD 2-pass overwrite + `VACUUM`) do banco SQLCipher e de todos os dados locais.

### 5. Segurança Infantil
O OnionTalk é destinado ao público adulto (**18 anos ou mais**) interessado em segurança da informação e privacidade criptográfica, e não coleta dados de menores de idade.

### 6. Contato
Para dúvidas sobre esta Política de Privacidade ou relatórios de segurança:
- **Organização Oficial:** [https://github.com/onion-talk](https://github.com/onion-talk)
- **Repositório de Protocolo & Issues:** [https://github.com/onion-talk/oniontalk-protocol/issues](https://github.com/onion-talk/oniontalk-protocol/issues)
- **E-mail de Suporte:** `eriktonon@gmail.com`

---

## 🌐 English — Privacy Policy

### 1. Zero Personal Data Collection (Zero PII)
**OnionTalk: Private Tor Chat** (`org.oniontalk.messenger`) does **not** request, collect, store, sell, or share any personally identifiable information (PII):
- **No phone number or email required:** Identities are pure 256-bit Ed25519/X25519 cryptographic keypairs generated locally on your device.
- **No address book access:** Your device contacts are never read or uploaded. Contacts added by the user are stored strictly inside the local encrypted **Contacts Library** (and remain saved even when an individual chat history is cleared).
- **No analytics, ads, or cloud push trackers:** Zero third-party trackers, zero telemetry, zero Google FCM dependency, and zero advertising SDKs.
- **No IP logging:** All relay communication is routed exclusively over Tor v3 Hidden Services (`.onion`).

### 2. Device Permissions & Foreground Service Disclosure
- **Foreground Service — Remote Messaging & P2P Tor Circuit (`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_REMOTE_MESSAGING`, `FOREGROUND_SERVICE_SPECIAL_USE`, `WAKE_LOCK`, `RECEIVE_BOOT_COMPLETED`, `REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`):**
  - Because OnionTalk does not use centralized cloud push servers (such as Google FCM) in order to guarantee metadata-free privacy, it uses a user-perceivable Foreground Service (`OnionKeepAliveService` — **"Always Connected"**) to keep the app-only Tor SOCKS5h circuit alive and transfer/receive end-to-end encrypted text and media messages in real time when the app is minimized.
  - While active, a persistent notification (`OnionTalk • Always Connected`) is displayed with instant actions to rotate the Tor circuit (**"New Circuit"**) or stop background execution (**"Pause Background"**), and can be toggled at any time in **Settings ➔ Tor Network ➔ Always Connected**.
- **Camera (`android.permission.CAMERA`):** Used strictly locally when scanning peer QR codes or capturing an instant photo via the attachment clip (`📎`) menu (automatically stripped of 100% of EXIF/GPS metadata in RAM prior to E2EE encryption).
- **Microphone (`android.permission.RECORD_AUDIO`):** Used strictly locally when recording an end-to-end encrypted voice note.
- **Notifications (`android.permission.POST_NOTIFICATIONS`):** Used solely to trigger local device notifications upon receiving new encrypted envelopes (with per-chat mute available in the chat `⋮` menu).
- **Selective Screen Capture Protection (`FLAG_SECURE`):** Enforced 100% of the time on **Chats** and **Contacts** screens to prevent unauthorized screenshots or screen recording, while dynamically allowing screenshots on the **Settings / QR Code** screen for easy identity sharing.

### 3. Data Retention, Ephemeral Timers & Instant Deletion
- **Relay Ephemeral RAM:** Encrypted envelopes in transit are held strictly in volatile memory until cryptographic delivery acknowledgment (`ACK`) or 24-hour TTL expiration, and are immediately purged.
- **Optional Read Receipts (`✓✓`) & Ephemeral Timers (`⏱️`):** Users can toggle read receipts in **Settings ➔ Security** and set per-message self-destruct timers (`30s` to `24h`) from the chat `⋮` menu.
- **Complete User Deletion:** Users can permanently shred individual chat histories, trigger a **Bilateral Burn (`🔥`)** from the chat `⋮` menu, or destroy their entire account and local SQLCipher AES-256 database at any time via **Settings ➔ Security ➔ Delete my account**.

