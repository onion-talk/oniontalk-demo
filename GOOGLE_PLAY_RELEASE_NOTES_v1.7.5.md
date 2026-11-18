# OnionTalk Messenger — Release Notes (`v1.7.5` Build `71`)

- **App Version**: `v1.7.5` (`versionCode = 71`)
- **Relay Node APK Version**: `v1.7.5` (`versionCode = 24`)
- **Direct Signed APK**: [`OnionTalk.apk`](https://github.com/onion-talk/oniontalk-demo/releases/latest/download/OnionTalk.apk) ([`SHA256SUMS.txt`](https://github.com/onion-talk/oniontalk-demo/releases/latest/download/SHA256SUMS.txt))
- **Standalone Relay APK**: [`OnionTalk-RelayNode.apk`](https://github.com/onion-talk/oniontalk-relay/releases/latest/download/OnionTalk-RelayNode.apk) ([`SHA256SUMS.txt`](https://github.com/onion-talk/oniontalk-relay/releases/latest/download/SHA256SUMS.txt))
- **Security Gate**: `/pentest-strix` `31/31 PASS` (`0 CVEs`, `0 Leaks`)

---

## 1. Google Play Store Release Notes (`pt-BR`, `en-US`, `es-419`, `ru-RU` — `<= 500 chars`)

```xml
<pt-BR>
• Áudios HD longos (até 15 min): envio rápido em partes criptografadas via Tor com verificação SHA-256, inclusive em escuta única (1x).
• Gravação e escuta contínuas: mantém a tela ativa e pausa o bloqueio automático enquanto você fala ou ouve um áudio.
• Anexos de voz completos: entrega íntegra e duração exata em arquivos acima de 2 MB (até 12 MB).
• Desbloqueio instantâneo do cofre e 1 grupo pós-quântico grátis (até 50 pessoas).
</pt-BR>
<en-US>
• Long HD voice notes (up to 15 min): fast encrypted chunked delivery over Tor with SHA-256 integrity checks, including Listen-Once (1x).
• Uninterrupted voice experience: keeps the screen awake and pauses auto-lock while recording or listening to audio.
• Full audio attachments: intact delivery and exact duration for voice files over 2 MB (up to 12 MB).
• Instant vault unlock & 1 free post-quantum private group (up to 50 members).
</en-US>
<es-419>
• Audios HD largos (hasta 15 min): envío rápido en bloques cifrados por Tor con verificación SHA-256, incluido el modo de escucha única (1x).
• Grabación y escucha sin cortes: mantiene la pantalla activa y pausa el bloqueo automático mientras hablas o escuchas.
• Adjuntos de voz completos: entrega íntegra y duración exacta en archivos mayores de 2 MB (hasta 12 MB).
• Desbloqueo instantáneo y 1 grupo post-cuántico gratis (hasta 50 personas).
</es-419>
<ru-RU>
• Длинные HD-голосовые (до 15 мин): быстрая зашифрованная передача по частям через Tor с проверкой SHA-256, включая режим «1 раз» (1x).
• Запись и прослушивание без обрывов: экран остаётся активным, а автоблокировка ставится на паузу во время аудио.
• Полная передача аудиофайлов свыше 2 МБ (до 12 МБ) с точной длительностью.
• Мгновенное открытие сейфа и 1 бесплатная постквантовая группа (до 50 участников).
</ru-RU>
```

## 2. Destaques Técnicos da Release `v1.7.5` (Build `71`)

1. **Transporte Fragmentado Autenticado E2EE (`STRIX-31`)**: Fatiamento determinístico de áudios e mídias longas em blocos de `180 KB` (`~248 KB` no fio, abaixo do teto de `524.288 bytes` dos relays `.onion`), upload paralelo 3-way em sockets Tor aquecidos, remontagem fora de ordem com limites estritos de memória e validação criptográfica `SHA-256` do arquivo completo.
2. **Gravação HD Estendida até 15 Minutos (`900s`)**: Elevação do limite de gravação contínua em `AAC-LC 48 kHz @ 96 kbps` de `120s` para `900s`, suportando tanto áudios regulares quanto mensagens de escuta única (`1x`).
3. **Keep-Alive Inteligente de Tela e Cofre**: Renovação automática do observador de inatividade (`inactivityObserver.userInteracted()`) e `keepScreenOn` durante gravação e reprodução de voz, impedindo que o Auto-Lock de `15s`/`1m` interrompa áudios longos.
4. **Integridade Total em Anexos de Áudio (`> 2 MB` até `12 MB`) & Escopo de Upload Desacoplado**: Remoção do corte em `2 MB` para arquivos de áudio anexados, extração exata da duração via `MediaMetadataRetriever` e execução do upload em `backgroundScope` para não cancelar envios ao sair da tela do chat.
