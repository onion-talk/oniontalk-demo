# OnionTalk Messenger — Release Notes (`v1.7.2` Build `68`)

- **App Version**: `v1.7.2` (`versionCode = 68`)
- **Relay Node APK Version**: `v1.7.2` (`versionCode = 21`)
- **Application ID**: `org.oniontalk.messenger`
- **Security Gate**: `/pentest-strix` `28/28 PASS` (`0 CVEs`, `0 Leaks`)

---

## 1. Formato Unificado Google Play Console (XML Tags)

```xml
<pt-BR>
OnionTalk v1.7.2 (Build 68):
• Painel de Grupos Renovado: layout limpo em subcategorias com ícones vetoriais, IDs compactos em linha única e integração dinâmica aos temas (Onion Mesh).
• Grupos Gratuitos: 1 grupo pós-quântico de até 50 pessoas grátis na campanha inicial.
• Convites Instantâneos: tocar no link compartilhado abre direto "Novo Contato" sem vazamento HTTP (#fragment).
• Áudio HD Temporário (1x), Mensagens com Senha e Cofre 16KB blindado.
</pt-BR>
<en-US>
OnionTalk v1.7.2 (Build 68):
• Redesigned Group Sheet: clean subcategory layout with crisp vector icons, single-line compact IDs, and dynamic Onion Mesh theme integration.
• Free Campaign Groups: create 1 free Post-Quantum group of up to 50 people.
• Instant Contact Links: tapping a shared invite opens "New Contact" directly with zero HTTP metadata leak (#fragment).
• Listen-Once (1x) HD Voice, Password Messages & 16KB SQLCipher Vault.
</en-US>
<es-419>
OnionTalk v1.7.2 (Build 68):
• Panel de Grupos Renovado: diseño limpio en subcategorías con íconos vectoriales, IDs compactos en una línea e integración con temas Onion Mesh.
• Grupos Gratuitos: 1 grupo post-cuántico gratis de hasta 50 personas en la campaña inicial.
• Enlaces de Invitación Directos: abre directo "Nuevo Contacto" sin fugas HTTP (#fragment).
• Audio HD Efímero (1x), Mensajes con Contraseña y Bóveda 16KB blindada.
</es-419>
<es-ES>
OnionTalk v1.7.2 (Build 68):
• Panel de Grupos Renovado: diseño limpio en subcategorías con iconos vectoriales, IDs compactos en una línea e integración con temas Onion Mesh.
• Grupos Gratuitos: 1 grupo post-cuántico gratuito de hasta 50 personas en la campaña inicial.
• Enlaces de Invitación Directos: abre directamente "Nuevo Contacto" sin fugas HTTP (#fragment).
• Audio HD Efímero (1x), Mensajes con Contraseña y Bóveda 16KB blindada.
</es-ES>
<ru-RU>
OnionTalk v1.7.2 (Build 68):
• Обновлённая панель групп: чистый макет с подкатегориями, векторными иконками, компактными ID в одну строку и поддержкой тем Onion Mesh.
• Бесплатные группы: 1 постквантовая группа до 50 участников бесплатно в стартовой кампании.
• Мгновенные приглашения: открытие «Новый контакт» по ссылке без утечек по HTTP (#fragment).
• Одноразовые (1x) HD-голосовые, пароли на сообщения и сейф 16KB.
</ru-RU>
```

---

## 2. Destaques Técnicos da Release `v1.7.2` (Build `68`)

- **Painel Padronizado de Dados do Grupo (`OnionMesh` + Subcategorias Limpas)**:
  - Substituição integral de cores legadas e emojis soltos por superfícies do Design System (`TelegramSurface` / `TelegramBubbleIn` + acento dinâmico do tema ativo), ícones vetoriais Material, IDs truncados ao meio em linha única (`@69e3eb37…428d8c`), avatar vetorial para membros sem apelido salvo e remoção da duplicação do botão **Excluir Grupo**.
- **Convites Diretos Zero-Leak (`RFC 3986 #fragment` + Android App Links)** e **1 Grupo Grátis até 50 Pessoas (`STRIX-28`)**.
