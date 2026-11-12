# OnionTalk Messenger — Release Notes (`v1.6.7` Build `63`)

- **App Version**: `v1.6.7` (`versionCode = 63`)
- **Relay Node APK Version**: `v1.6.7` (`versionCode = 16`)
- **Application ID**: `org.oniontalk.messenger`
- **Security Gate**: `/pentest-strix` `26/26 PASS` (`0 CVEs`, `0 Leaks`)
- **Canonical Release Bundle**: `C:\Users\erikt\Downloads\`

---

## 1. Formato Unificado Google Play Console (XML Tags)

```xml
<pt-BR>
v1.6.7 (Build 63):
• Grupos PQC: identificação "Nome (@id8)" vinculada em figurinhas e fotos enviadas/recebidas.
• Chat: deslize para responder (Swipe-to-Reply), cápsula arredondada com quebra de linha e barra de rolagem interna após 4 linhas.
• Teclado acoplado com +1.100 emojis, figurinhas 512×512 sem cortes, Câmera HD 1920p blindada contra OOM e rolagem livre em Contatos.
</pt-BR>
<en-US>
v1.6.7 (Build 63):
• PQC Groups: "Name (@id8)" sender header linked on all sent and received stickers and photos.
• Chat: Swipe-to-Reply gesture, rounded capsule bar with automatic line wrapping and internal scrollbar after 4 lines.
• Docked keyboard with 1,100+ emojis, unclipped 512×512 stickers, OOM-hardened 1920p HD Camera, and unobstructed Contacts scrolling.
</en-US>
<es-419>
v1.6.7 (Build 63):
• Grupos PQC: identificación "Nombre (@id8)" vinculada en stickers y fotos enviadas/recibidas.
• Chat: desliza para responder (Swipe-to-Reply), cápsula redondeada con salto de línea y barra de desplazamiento interna tras 4 líneas.
• Teclado acoplado con +1.100 emojis, stickers 512×512 sin cortes, Cámara HD 1920p blindada contra OOM y lista de Contactos despejada.
</es-419>
<es-ES>
v1.6.7 (Build 63):
• Grupos PQC: identificación "Nombre (@id8)" vinculada en stickers y fotos enviadas/recibidas.
• Chat: desliza para responder (Swipe-to-Reply), cápsula redondeada con salto de línea y barra de desplazamiento interna tras 4 líneas.
• Teclado acoplado con +1.100 emojis, stickers 512×512 sin cortes, Cámara HD 1920p blindada contra OOM y lista de Contactos despejada.
</es-ES>
<ru-RU>
v1.6.7 (Build 63):
• Группы PQC: подпись отправителя «Имя (@id8)» на всех стикерах и фото.
• Чат: свайп для ответа (Swipe-to-Reply), округленная капсула ввода с переносом строк и внутренней прокруткой после 4 строк.
• Встроенная панель с 1100+ эмодзи, стикеры 512×512 без обрезки, HD-камера 1920p с защитой от OOM и свободная прокрутка Контактов.
</ru-RU>
```

---

## 2. Destaques Técnicos da Release `v1.6.7` (Build 63)

- **Identificação Anti-Spoofing de Remetente em Grupos PQC (`👤 Nome (@id8)`)**:
  - Resolução local em `RepositoryImpl.resolveGroupSenderDisplay` combinando o apelido salvo/sincronizado ao hash curto criptográfico `@<8-hex>` obrigatório.
  - Exibição automática do cabeçalho `👤 Nome (@id8)` em todas as figurinhas, fotos, vídeos e mensagens de grupos (inclusive no visualizador fullscreen de fotos HD).
- **Deslizar para Responder (`Swipe-to-Reply`) & Citação Integrada na Cápsula**:
  - Gesto horizontal com física elástica (`Spring.DampingRatioMediumBouncy`) e feedback tátil ao atingir `52.dp` em `TelegramMessageBubble.kt`, mantendo também a resposta por toque longo.
  - Prévia da mensagem citada integrada dentro da cápsula de digitação com mascaramento automático de mensagens protegidas por senha.
- **Barra de Mensagem em Cápsula Arredondada com Quebra de Linha + Barra de Rolagem Interna**:
  - Layout moderno (`RoundedCornerShape(26.dp)`) com botão de **Emotions/Teclado** à esquerda, **Senha + Arquivos + Câmera HD** à direita e botão circular externo de **Microfone/Enviar (`48.dp`)**.
  - Quebra de linha automática (`singleLine = false`, `maxLines = 4`) e **barra de rolagem vertical interna** (`drawWithContent`) ativa após 4 linhas, mantendo proteção total contra Tapjacking/Overlay (`isObscured`).
- **Teclado Inferior Acoplado (`EmojiStickerKeyboardPanel`) com `+1.100` Emojis & Figurinhas `512×512` Sem Cortes**:
  - Painel acoplado na área do teclado (`288.dp`) mantendo a conversa visível acima, com catálogo Unicode completo em 10 categorias (`EmojiCatalog.kt`), exclusão inteligente de grafemas compostos (`BreakIterator`) e cards uniformes (`98.dp`, `ContentScale.Fit`) sem insígnias superiores.
- **Hardening da Câmera HD 1920p (`CameraX`) & Rolagem Desimpedida na Tela de Contatos**:
  - Vinculação única do `ProcessCameraProvider` via `LaunchedEffect` (eliminando rebinds por frame), downscale/rotação em passe único de `Matrix` com `recycle()` imediato e captura de `Throwable`/`OutOfMemoryError`.
  - Ajuste de `contentPadding` inferior em `ContactsLibraryScreen.kt` (`180.dp`) e `ChatListScreen.kt` (`296.dp`) para que o botão flutuante nunca cubra o menu `⋮` do último contato.
- **Auditoria `/pentest-strix` (`26/26 PASS`, `0 CVEs`, `0 Leaks`)**:
  - Nova regra `STRIX-26` adicionada ao `scripts/strix_ci_gate.py` (`26/26 PASS`), `138` arquivos auditados pelo `zero_leak_scanner.py` (`0` vazamentos) e suíte unitária 100% verde.
