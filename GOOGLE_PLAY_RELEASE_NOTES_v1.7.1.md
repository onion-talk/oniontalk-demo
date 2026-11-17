# OnionTalk Messenger — Release Notes (`v1.7.1` Build `67`)

- **App Version**: `v1.7.1` (`versionCode = 67`)
- **Relay Node APK Version**: `v1.7.1` (`versionCode = 20`)
- **Application ID**: `org.oniontalk.messenger`
- **Security Gate**: `/pentest-strix` `28/28 PASS` (`0 CVEs`, `0 Leaks`)

---

## 1. Formato Unificado Google Play Console (XML Tags)

```xml
<pt-BR>
OnionTalk v1.7.1 (Build 67):
• Convites Instantâneos: tocar em um link compartilhado abre direto o modal "Novo Contato" com o ID preenchido (mesmo vindo de outras abas ou após desbloquear o cofre), sem vazar nenhum dado via HTTP (#fragment RFC 3986).
• Grupos Gratuitos: 1 grupo de até 50 pessoas grátis na campanha inicial, com proteção anti-flood na malha Tor.
• Áudio HD Temporário (1x), Mensagens com Senha e Cofre 16KB blindado.
</pt-BR>
<en-US>
OnionTalk v1.7.1 (Build 67):
• Instant Contact Links: tapping a shared invite link now opens the "New Contact" modal directly with the ID pre-filled (even across tabs or right after unlocking the vault) with zero HTTP metadata leak (RFC 3986 #fragment).
• Free Campaign Groups: create 1 free Post-Quantum group of up to 50 people with bounded Tor fan-out protection.
• Listen-Once (1x) HD Voice, Password Messages & 16KB SQLCipher Vault.
</en-US>
<es-419>
OnionTalk v1.7.1 (Build 67):
• Enlaces de Invitación Directos: tocar un enlace compartido abre directo el modal "Nuevo Contacto" con el ID listo (incluso desde otras pestañas o tras desbloquear la bóveda), sin filtrar metadatos por HTTP (#fragment RFC 3986).
• Grupos Gratuitos: 1 grupo post-cuántico gratis de hasta 50 personas en la campaña inicial.
• Audio HD Efímero (1x), Mensajes con Contraseña y Bóveda 16KB blindada.
</es-419>
<es-ES>
OnionTalk v1.7.1 (Build 67):
• Enlaces de Invitación Directos: pulsar un enlace compartido abre directamente "Nuevo Contacto" con el ID rellenado (incluso desde otras pestañas o tras desbloquear la bóveda), sin fugas HTTP (#fragment RFC 3986).
• Grupos Gratuitos: 1 grupo post-cuántico gratuito de hasta 50 personas en esta campaña inicial.
• Audio HD Efímero (1x), Mensajes con Contraseña y Bóveda SQLCipher 16KB blindada.
</es-ES>
<ru-RU>
OnionTalk v1.7.1 (Build 67):
• Мгновенные ссылки-приглашения: нажатие на ссылку сразу открывает окно «Новый контакт» с заполненным ID (даже из других вкладок или после разблокировки сейфа) без утечек по HTTP (#fragment RFC 3986).
• Бесплатные группы: 1 постквантовая группа до 50 участников бесплатно в стартовой кампании.
• Одноразовые (1x) HD-голосовые, сообщения с паролем и защита SQLCipher 16KB.
</ru-RU>
```

---

## 2. Destaques Técnicos da Release `v1.7.1` (Build `67`)

- **Convites Diretos Zero-Leak (`RFC 3986 #fragment` + Android App Links)**:
  - Tocar em um link compartilhado (`https://oniontalk.co/add/#<64-hex>`) abre diretamente o modal **Novo Contato** com o `@hash` preenchido, respeitando o bloqueio *Vault-First* e sem enviar o fragmento `#` pela rede HTTP.
- **Campanha Inicial de Grupos Gratuitos (`1 Grupo até 50 Pessoas` + Isenção Admin Raiz)**:
  - Qualquer usuário pode criar `1` grupo pós-quântico de até `50` membros gratuitamente com proteção anti-amplificação `Semaphore(6)` na malha Tor (`STRIX-28`), mantendo o Administrador Oficial isento (`500` membros).
- **Áudio HD Temporário (`1x`), Mídia Confidencial & Subcategorias (`STRIX-27`)**:
  - Gravação `AAC-LC 96kbps / 48kHz` com velocidades `1x / 1.5x / 2x`, seletor de escuta única (`1x`) com destruição DoD `0x00` imediata pós-reprodução, tema *Onion Mesh* e menu organizado em subcategorias.
