# Política de Privacidade / Privacy Policy — OnionTalk (`org.oniontalk.messenger`)

**Última atualização / Last Updated:** 19 de outubro de 2026

O **OnionTalk: Private Tor Chat** (`org.oniontalk.messenger`) é um aplicativo de mensagens criptografadas ponta-a-ponta (E2EE) construído sob os princípios de **Zero-Knowledge (Conhecimento Zero)**, **Soberania Digital** e **Privacidade por Design**.

---

## 🇧🇷 Português — Política de Privacidade

### 1. Coleta de Dados Pessoais (Zero PII)
O OnionTalk **não solicita, não coleta, não armazena, não vende e não compartilha** nenhum dado de identificação pessoal (PII) ou telemetria:
- **Sem cadastro tradicional:** Nenhum número de telefone, endereço de e-mail, nome civil ou CPF/documento é solicitado para criar ou utilizar uma identidade.
- **Sem leitura de agenda:** A lista de contatos do seu telefone nunca é acessada ou sincronizada.
- **Sem rastreadores ou anúncios:** O aplicativo não contém SDKs de publicidade, Google Analytics, Firebase Analytics ou rastreadores de terceiros.
- **Sem coleta de localização ou IP:** Toda a comunicação de rede ocorre exclusivamente através de circuitos da rede Tor v3 (`.onion`), ocultando o endereço IP de origem e destino.

### 2. Criptografia e Armazenamento Local
- Todas as mensagens, chaves privadas (Ed25519 / X25519), contatos e configurações ficam armazenados **exclusivamente no próprio aparelho do usuário**, dentro de um cofre local criptografado com **SQLCipher (AES-256)** derivado via **PBKDF2-HMAC-SHA256** a partir da senha escolhida pelo usuário.
- Todas as mensagens trafegam seladas ponta-a-ponta com **X25519 ECDH + HKDF-SHA256 + ChaCha20-Poly1305 AEAD + Assinatura Ed25519**. Nem mesmo os nós de retransmissão (*Relays*) possuem acesso ao conteúdo das mensagens.

### 3. Permissões do Dispositivo (`Permissions Disclosure`)
O aplicativo solicita apenas as permissões estritamente necessárias para funcionalidades acionadas pelo próprio usuário:
- **Câmera (`android.permission.CAMERA`):** Utilizada exclusivamente no dispositivo, sob ação explícita do usuário, para escanear códigos QR de identificadores criptográficos (`@hash`) ou capturar fotos instantâneas que são sanitizadas (remoção de EXIF/GPS) e criptografadas ponta-a-ponta antes do envio.
- **Microfone (`android.permission.RECORD_AUDIO`):** Utilizado exclusivamente quando o usuário pressiona o botão de gravação de mensagem de voz. O áudio é sanitizado localmente e criptografado ponta-a-ponta antes da transmissão.
- **Notificações (`android.permission.POST_NOTIFICATIONS`):** Utilizada apenas para exibir alertas locais no aparelho quando novos pacotes criptografados são recebidos pela malha Tor.
- **Internet (`android.permission.INTERNET`):** Utilizada exclusivamente pelo daemon Tor embutido (`libtor.so`) para estabelecer circuitos criptografados com os serviços ocultos `.onion`.

### 4. Retenção e Exclusão de Dados (`Data Retention & Deletion`)
- **Em trânsito (Relays):** Os envelopes criptografados ficam retidos apenas em memória RAM volátil nos nós de retransmissão até a confirmação criptográfica de entrega (`ACK` com prova de pré-imagem SHA-256) ou expiração automática do TTL (24 horas), sendo imediatamente expurgados da memória.
- **No dispositivo (Exclusão Total pelo Usuário):** Como não existem contas armazenadas em servidores centrais, o usuário possui controle absoluto sobre seus dados e pode destruí-los instantaneamente a qualquer momento:
  1. **Queima Bilateral (`Burn`):** Dentro de qualquer conversa, o botão de chama (`🔥`) sobrescreve e destrói o histórico de mensagens localmente e envia um sinal autenticado para destruição no dispositivo do interlocutor.
  2. **Destruição Completa do Cofre / Conta:** Em **Configurações ➔ Excluir Conta e Destruir Dados** (ou através da Senha de Coação / *Duress Password*), o aplicativo executa o *shredding* criptográfico imediato do banco SQLCipher e de todos os anexos locais.

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
- **No address book access:** Your device contacts are never read or uploaded.
- **No analytics or ads:** Zero third-party trackers, zero telemetry, and zero advertising SDKs.
- **No IP logging:** All relay communication is routed exclusively over Tor v3 Hidden Services (`.onion`).

### 2. Device Permissions Used
- **Camera (`android.permission.CAMERA`):** Used strictly locally when scanning peer QR codes or taking an encrypted photo attachment (automatically stripped of all EXIF/GPS metadata prior to encryption).
- **Microphone (`android.permission.RECORD_AUDIO`):** Used strictly locally when recording an end-to-end encrypted voice note.
- **Notifications (`android.permission.POST_NOTIFICATIONS`):** Used solely to trigger local device notifications upon receiving new encrypted envelopes.

### 3. Data Retention & Instant Deletion
- **Relay Ephemeral RAM:** Encrypted envelopes in transit are held strictly in volatile RAM until cryptographic delivery acknowledgment (`ACK`) or 24-hour TTL expiration, and are immediately purged.
- **Complete User Deletion:** Users can permanently shred all messages, keys, and local SQLCipher AES-256 databases at any time via **Settings ➔ Delete Account & Destroy Data**, via the **Bilateral Burn (`🔥`)** button in any chat, or via the **Duress Password**.
