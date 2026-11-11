# OnionTalk Messenger — Release Notes (`v1.6.6` Build `62`)

- **App Version**: `v1.6.6` (`versionCode = 62`)
- **Relay Node APK Version**: `v1.6.6` (`versionCode = 15`)
- **Application ID**: `org.oniontalk.messenger`
- **Security Gate**: `/pentest-strix` `25/25 PASS` (`0 CVEs`, `0 Leaks`)
- **Canonical Release Bundle**: `C:\Users\erikt\Downloads\`

---

## 1. Formato Unificado Google Play Console (XML Tags)

```xml
<pt-BR>
v1.6.6 (Build 62):
• Proteção de tela 100% obrigatória (FLAG_SECURE) em todo o app, liberando captura exclusivamente na aba de QR Code.
• Sensor de proximidade em chamadas de voz (OnionVoice V1): apaga a tela e bloqueia toques acidentais ao encostar no ouvido.
• Mídia HD 1920p minimalista (lote de até 5 fotos, zoom 1x–5x, Visualização Única, vídeos e arquivos até 12 MB) com layout responsivo S24 Ultra em 4 idiomas.
</pt-BR>
<en-US>
v1.6.6 (Build 62):
• 100% mandatory screen capture protection (FLAG_SECURE) across the entire app, allowing screenshots exclusively on the QR Code tab.
• Voice call proximity sensor (OnionVoice V1): turns off the screen and blocks accidental touches when held near the ear.
• Minimalist HD 1920p media studio (up to 5-photo batch, 1x–5x zoom, View-Once, videos & 12 MB files) with S24 Ultra responsive layout in 4 languages.
</en-US>
<es-419>
v1.6.6 (Build 62):
• Protección de pantalla 100% obligatoria (FLAG_SECURE) en toda la app, permitiendo capturas exclusivamente en la pestaña del código QR.
• Sensor de proximidad en llamadas de voz (OnionVoice V1): apaga la pantalla y bloquea toques accidentales al acercar el teléfono al oído.
• Estudio multimedia HD 1920p minimalista (lote de 5 fotos, zoom 1x–5x, Visualización Única, videos y archivos de 12 MB) con diseño S24 Ultra en 4 idiomas.
</es-419>
<es-ES>
v1.6.6 (Build 62):
• Protección de pantalla 100% obligatoria (FLAG_SECURE) en toda la app, permitiendo capturas exclusivamente en la pestaña del código QR.
• Sensor de proximidad en llamadas de voz (OnionVoice V1): apaga la pantalla y bloquea toques accidentales al acercar el teléfono al oído.
• Estudio multimedia HD 1920p minimalista (lote de 5 fotos, zoom 1x–5x, Visualización Única, vídeos y archivos de 12 MB) con diseño S24 Ultra en 4 idiomas.
</es-ES>
<ru-RU>
v1.6.6 (Build 62):
• 100% обязательная защита экрана (FLAG_SECURE) во всём приложении, разрешающая скриншоты только на вкладке QR-кода.
• Датчик приближения в голосовых звонках (OnionVoice V1): выключает экран и блокирует случайные нажатия возле уха.
• Минималистичная медиа-студия HD 1920p (пакет до 5 фото, зум 1x–5x, одноразовый просмотр, видео и файлы до 12 МБ) с адаптивным дизайном S24 Ultra на 4 языках.
</ru-RU>
```

---

## 2. Destaques Técnicos da Release `v1.6.6` (Build 62)

- **Proteção `FLAG_SECURE` 100% Obrigatória com Exceção Seletiva Apenas no QR Code (`STRIX-25`)**:
  - Removida a opção de desativar o bloqueio de captura de tela das configurações: `WindowManager.LayoutParams.FLAG_SECURE` permanece **100% ativo por padrão** em todas as telas, chats, chamadas, modais e na visualização da *Recovery Seed*.
  - A captura de tela é liberada **exclusivamente** enquanto o usuário está visualizando seu QR Code de identidade (`Perfil`) ou de doação (`Apoiar`), reativando `FLAG_SECURE` instantaneamente ao trocar de aba ou abrir qualquer diálogo sensível.
- **Sensor de Proximidade em Chamadas de Voz (`OnionVoice V1` — Screen-Off & Touch-Guard)**:
  - Integração dupla de hardware (`PowerManager.PROXIMITY_SCREEN_OFF_WAKE_LOCK` + `Sensor.TYPE_PROXIMITY`) em `OnionVoiceEngine.kt` e `VoiceCallOverlay.kt`: ao aproximar o aparelho do ouvido durante uma chamada ativa (quando o viva-voz não está ligado), a tela apaga automaticamente e ativa um escudo fullscreen bloqueador de toques (`pointerInput` consumidor), evitando desligar ou mutar a ligação com o rosto.
- **Design Minimalista de Mídia & Layout Responsivo S24 Ultra (4 Idiomas `PT`/`EN`/`ES`/`RU`)**:
  - **Zero Rolagem e Botões 100% Visíveis**: Ajuste responsivo dos modais **Câmera HD** e **Estúdio de Foto HD** com `weight(1f, fill = false)` e `aspectRatio(4f / 3f)`, garantindo zero barra de rolagem e zero corte de botões em telas altas e densidades variadas (incluindo Galaxy S24 Ultra e textos longos em Russo/Espanhol).
  - **Cards Minimalistas**: Removidos subtítulos técnicos redundantes (`0 metadados`, `0 galeria`, `Zero-EXIF`) dos cards de visualização única, câmera e modal de anexos, mantendo apenas a informação essencial (`⏱️ 10s`).
- **Mídia HD 1920p Zero-EXIF, Lote de 5 Fotos, Vídeos (`MP4`/`WebM`/`MKV`) e Arquivos (`12 MB`)**:
  - Envio em lote de até 5 fotos HD 1920p, visualizador fullscreen In-RAM com *pinch-to-zoom* (`1x–5x`), modo Visualização Única (`🔥 1x`), player de vídeo criptografado in-app (`OTENC1` + *DoD 2-Pass Shred*) e documentos seguros até `12 MB`.
- **Auditoria `/pentest-strix` (`25/25 PASS`, `0 CVEs`, `0 Leaks`) & Contratos 100% Verificados**:
  - `25/25` gates estáticos e dinâmicos aprovados (`STRIX-01..STRIX-25`), `138` arquivos auditados pelo `zero_leak_scanner.py` com `0` vazamentos e testes unitários/E2E 100% verdes.
