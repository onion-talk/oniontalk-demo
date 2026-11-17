# OnionTalk Messenger — Release Notes (`v1.7.4` Build `70`)

- **App Version**: `v1.7.4` (`versionCode = 70`)
- **Relay Node APK Version**: `v1.7.4` (`versionCode = 23`)
- **Direct Signed APK**: [`OnionTalk.apk`](https://github.com/onion-talk/oniontalk-demo/releases/latest/download/OnionTalk.apk) ([`SHA256SUMS.txt`](https://github.com/onion-talk/oniontalk-demo/releases/latest/download/SHA256SUMS.txt))
- **Standalone Relay APK**: [`OnionTalk-RelayNode.apk`](https://github.com/onion-talk/oniontalk-relay/releases/latest/download/OnionTalk-RelayNode.apk) ([`SHA256SUMS.txt`](https://github.com/onion-talk/oniontalk-relay/releases/latest/download/SHA256SUMS.txt))
- **Security Gate**: `/pentest-strix` `30/30 PASS` (`0 CVEs`, `0 Leaks`)

---

## 1. Google Play Store Release Notes (`pt-BR`, `en-US`, `es-419`, `ru-RU`)

```xml
<pt-BR>
OnionTalk v1.7.4 (Build 70):
• Entrega instantânea de áudios HD, áudios 1x e mensagens (STRIX-30): eliminação da corrida onde a notificação chegava antes da mensagem aparecer na tela.
• Desbloqueio Zero-RTT: áudios e mídias recebidos com o app bloqueado aparecem em 0ms ao desbloquear, sem segundo download via Tor.
• Novo painel "Dados do Grupo" padronizado com o design Onion Mesh e links diretos de convite.
• Campanha inicial: 1 grupo privado pós-quântico grátis (até 50 pessoas).
</pt-BR>
<en-US>
OnionTalk v1.7.4 (Build 70):
• Instant HD audio, 1x listen-once voice & message rendering (STRIX-30): eliminates the race where notifications arrived before chat bubbles appeared on screen.
• Zero-RTT Unlock: messages and voice notes received while locked open in 0ms upon unlock without a second Tor download.
• Unified "Group Info" sheet in Onion Mesh design & instant zero-leak invite links.
• Launch campaign: 1 free post-quantum private group (up to 50 members).
</en-US>
<es-419>
OnionTalk v1.7.4 (Build 70):
• Entrega instantánea de audios HD, audios 1x y mensajes (STRIX-30): elimina la condición donde la notificación llegaba antes que el mensaje en pantalla.
• Desbloqueo Zero-RTT: audios y mensajes recibidos con la bóveda bloqueada aparecen en 0ms al desbloquear, sin segunda descarga por Tor.
• Nuevo panel "Datos del Grupo" en diseño Onion Mesh y enlaces directos de invitación.
• Campaña inicial: 1 grupo privado post-cuántico gratis (hasta 50 personas).
</es-419>
<ru-RU>
OnionTalk v1.7.4 (Build 70):
• Мгновенная отрисовка HD-аудио, одноразовых (1x) голосовых и сообщений (STRIX-30): устранена задержка, когда уведомление приходило раньше сообщения в чате.
• Zero-RTT разблокировка: голосовые и сообщения, полученные на заблокированном экране, открываются за 0 мс без повторной загрузки через Tor.
• Единая панель «Данные группы» в стиле Onion Mesh и быстрые ссылки-приглашения.
• Кампания запуска: 1 бесплатная постквантовая группа (до 50 участников).
</ru-RU>
```

## 2. Destaques Técnicos da Release `v1.7.4` (Build `70`)

1. **Commit `UI-First` Anti-Race (`STRIX-30`)**: Gravação no SQLCipher, pré-aquecimento de `cachedChatMessages` e disparo de `_messagesVersion` na thread `Main` ocorrem estritamente antes de `NotificationHelper.showIncomingMessageNotification()`.
2. **Zero-RTT Locked Ciphertext Staging (`STRIX-04` + `STRIX-30`)**: Retenção apenas de ciphertexts E2EE assinados em RAM (`máx. 128 itens / 16 MB`) durante o cofre trancado, permitindo decifragem local em `~338ms` no desbloqueio sem segundo download via Tor.
3. **Dual-Gateway Fast-Path & Pré-Aquecimento na Gravação de Voz**: Replicação assíncrona nos 2 gateways `.onion` ativos para textos e áudios curtos (`<= 65 KB`) + `preWarmOutboundGateways()` ao iniciar gravação `AAC-LC 48kHz / 96kbps`.
4. **Painel "Dados do Grupo" Unificado & Blindagem Android 15+ (`STRIX-29`)**: Layout *Onion Mesh* padronizado, links `https://oniontalk.co/add/#<64-hex>` abrindo direto em *Novo Contato* e proteção anti-ANR `FOREGROUND_SERVICE_TYPE_REMOTE_MESSAGING`.
