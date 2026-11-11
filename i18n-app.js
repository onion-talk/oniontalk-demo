/* ==========================================================================
   OnionTalk P2P — Full-Site 4-Language i18n (PT / EN / ES / RU),
   Executive Comparison Matrix & Interactive P2P Phone Simulator
   ========================================================================== */

const CHARGE_IMAGES = [
  'charges/charge_01_fofoqueiro_no_sofa_p2p_16x9.png',
  'charges/charge_02_apagou_pra_quem_burn_p2p_16x9.png',
  'charges/charge_03_celular_na_mesa_15s_p2p_16x9.png',
  'charges/charge_04_golpe_do_print_preto_p2p_16x9.png',
  'charges/charge_05_pedagio_chip_55_p2p_16x9.png'
];

const SVG_ICONS = {
  yes: '<span class="verdict-icon verdict-yes"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></span>',
  warn: '<span class="verdict-icon verdict-warn"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>',
  no: '<span class="verdict-icon verdict-no"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>'
};

const I18N = {
  pt: {
    page_title: 'OnionTalk — Mensageiro Privado P2P | Direto de Celular para Celular',
    top_badge: 'Rede P2P Direta',
    top_banner_text: '100% Gratuito na Google Play • Sem Número (+55) • Zero Anúncios (Mantido por Doações da Comunidade & Grupos Privados)',
    nav_how: 'Por que P2P?',
    nav_comics: 'Entenda em 10s',
    nav_features: 'Privacidade',
    nav_compare: 'Comparativo',
    nav_support: 'Apoie / Doações',
    nav_faq: 'FAQ',
    nav_download: 'Baixar Grátis',

    hero_eyebrow: 'Mensageiro P2P Independente • Simples como o WhatsApp, Blindado de Verdade',
    hero_title: 'Converse em paz.<br /><span class="highlight">Direto de celular para celular.</span>',
    hero_subtitle: 'Nos apps comuns, suas mensagens e fotos passam por servidores centrais que guardam seu histórico e pedem seu número (+55). No <strong>OnionTalk</strong>, a conversa viaja em <strong>Rede P2P direta</strong> entre os dois aparelhos — sem intermediários, sem chip SIM e sem venda de dados.',
    check_1: 'Sem Número (+55) e Sem Chip SIM',
    check_2: '100% P2P (0 KB em Nuvem/Servidores)',
    check_3: 'Mensagens com Senha + Auto-Lock 15s',
    check_4: 'Print 100% Preto & Botão Burn nos 2',
    cta_playstore: 'Baixar na Google Play',
    cta_apk: 'Baixar APK Direto',
    cta_watch_video: 'Ver Vídeo (1m20s)',
    cta_support_hero: 'Apoiar Projeto',
    hero_trust: '<span><strong>Zero Anúncios</strong> • Hoje mantido por doações voluntárias e criação de grupos privados</span>',

    sim_contact_name: 'Marina (Sócia)',
    sim_contact_status: '● Conectado Direto P2P • Sem Servidor',
    sim_zero_cloud: '0 KB Nuvem',
    sim_banner: 'Conexão Direta Celular ↔ Celular. Nenhum servidor central recebe cópia desta conversa.',
    sim_msg_1: 'Lucas, me manda os dados do contrato novo? Estou no café com o notebook aberto.',
    sim_locked_badge: '🔒 Mensagem Trancada com Senha',
    sim_tap_open: 'Toque p/ abrir',
    sim_locked_hint: 'Protegido contra xeretas na mesa',
    sim_unlocked_html: '<strong>Contrato Assinado:</strong> Valor R$ 48.500,00 liberado.<br/><em style="color:#4ADE80;">✓ Senha validada localmente (tranca de novo em 15s)</em>',
    sim_locked_meta: '14:19 • Senha Individual Ativa',
    sim_msg_3: 'Perfeito! E se alguém tentar tirar print ou usar app modificado, a tela sai 100% preta.',
    sim_msg_3_meta: '14:20 • Anti-Print Nativo',
    sim_toast_default: 'Clique nos botões abaixo para testar na prática:',
    sim_toast_pw_open: 'Mensagem destrancada com senha individual! Toque novamente para trancar.',
    sim_toast_pw_closed: 'Mensagem trancada com senha individual dentro do chat.',
    sim_toast_print: 'Bloqueio nativo FLAG_SECURE contra prints e apps modificados.',
    sim_toast_lock: 'Proteção automática de 15s contra curiosos na mesa.',
    sim_toast_burn: 'Destruição bilateral P2P concluída nos dois aparelhos.',
    sim_ov_print_title: 'Escudo Anti-Print Ativado (Tela 100% Preta)',
    sim_ov_print_desc: 'Tentativa de captura de tela bloqueada! No OnionTalk, qualquer print ou gravação de tela gera apenas uma imagem 100% preta.',
    sim_ov_lock_title: 'Auto-Lock de 15 Segundos Ativado',
    sim_ov_lock_desc: 'O celular ficou 15 segundos parado em cima da mesa. O OnionTalk trancou todas as conversas automaticamente.',
    sim_ov_burn_title: 'Conversa Destruída nos 2 Celulares (Burn P2P)',
    sim_ov_burn_desc: '0 bytes restantes no seu celular, 0 bytes no celular da Marina e 0 bytes na nuvem. Tudo apagado em sincronia.',
    sim_back_btn: 'Voltar para a Conversa',
    sim_btn_1: '1. Abrir c/ Senha',
    sim_btn_2: '2. Testar Anti-Print',
    sim_btn_3: '3. Auto-Lock 15s',
    sim_btn_4: '4. Apagar nos 2 (Burn)',

    pillars_tag: 'Simples para Você • Impossível para Bisbilhoteiros',
    pillars_title: 'Por que milhares estão trocando o mensageiro comum pela Rede P2P?',
    pillars_desc: 'Unimos a facilidade de uso que você já conhece no WhatsApp com a arquitetura sem chip do Zangi — indo muito além na proteção física e digital do seu aparelho.',
    p1_title: 'Sem Número (+55) e Sem Chip SIM',
    p1_desc: 'Você não precisa entregar seu telefone pessoal, CPF ou e-mail para conversar. Adicione apenas quem quiser por QR Code ou convite, sem receber spam.',
    p1_metric: 'Imune a SIM Swap e Vazamentos',
    p2_title: 'Direto de Celular para Celular (P2P)',
    p2_desc: 'Sem servidor fofoqueiro sentado no meio da sala anotando com quem você fala. Suas mensagens e chamadas viajam diretamente entre os dois aparelhos.',
    p2_metric: '0.0 KB Guardados na Nuvem',
    p3_title: 'Senha por Mensagem & Auto-Lock 15s',
    p3_desc: 'Deixou o celular aberto na mesa do restaurante ou do escritório? Em 15 segundos ele se tranca sozinho, e mensagens sensíveis têm senha própria.',
    p3_metric: 'Proteção contra Curiosos Presenciais',
    p4_title: 'Anti-Print Preto & Botão Burn Real',
    p4_desc: 'Fotos enviadas não ficam soltas na galeria do outro, tentativas de print saem 100% pretas e o botão Burn destrói a conversa nos dois celulares na hora.',
    p4_metric: 'Apagou no Seu = Sumiu no Outro',

    comics_tag: 'Sem Termos Complicados • Direto ao Ponto',
    comics_title: 'Entenda em 10 segundos a diferença no seu dia a dia',
    comics_desc: 'Veja por que os aplicativos tradicionais deixam suas conversas expostas e como a conexão direta P2P do OnionTalk resolve isso de forma simples:',
    c_tab_0: '1. Sem Servidor Fofoqueiro (P2P)',
    c_tab_1: '2. Apagou pra Quem? (Botão Burn)',
    c_tab_2: '3. Celular na Mesa (Auto-Lock 15s)',
    c_tab_3: '4. Golpe do Print (Tela 100% Preta)',
    c_tab_4: '5. Sem Pedágio do +55 (Zero Chip)',
    comics_cta: 'Testar Agora no Meu Celular',
    charges: [
      { title: '1. Conversa a dois não precisa de plateia', desc: 'Nos apps comuns, um servidor central anota tudo no meio do caminho. No OnionTalk P2P, a conversa vai direto do seu celular para o outro.' },
      { title: '2. Apagou pra quem? O Botão Burn apaga nos 2 celulares', desc: 'Em vez de apagar só na sua tela e deixar cópias em backups na nuvem, o Botão Burn P2P limpa a conversa nos dois aparelhos na mesma hora.' },
      { title: '3. Esqueceu o celular na mesa? Auto-Lock em 15 segundos', desc: 'Curiosos ao redor da mesa não conseguem ler nada: o app se tranca sozinho em 15 segundos e protege mensagens individuais com senha.' },
      { title: '4. Contra o Golpe do Print: Tela 100% Preta', desc: 'Fotos enviadas não ficam soltas na galeria do outro aparelho e qualquer tentativa de tirar print ou gravar a tela sai 100% preta.' },
      { title: '5. Sem o pedágio do número +55 e sem spam', desc: 'Converse sem precisar entregar seu número de telefone pessoal ou chip SIM. Zero vazamento de dados e zero ligações de spam.' }
    ],

    s1_kicker: 'Privacidade Presencial & Digital',
    s1_title: 'Deixou o celular na mesa? Ninguém lê suas conversas.',
    s1_text: 'A maior parte dos vazamentos do dia a dia não vem de hackers: vem de alguém que pega seu celular destravado em cima da mesa ou olha por cima do seu ombro.',
    s1_b1: '<strong>Auto-Lock em 15 Segundos:</strong> Ficou 15 segundos sem tocar na tela? O cofre fecha sozinho automaticamente.',
    s1_b2: '<strong>Senha Individual por Mensagem:</strong> Envie senhas, contratos ou áudios importantes trancados com uma senha exclusiva dentro do chat.',
    s1_b3: '<strong>PIN por Conversa:</strong> Proteja contatos específicos na tela inicial com PIN dedicado.',
    s1_cta: 'Baixar com Auto-Lock Ativo',
    s1_badge: 'EXCLUSIVO',
    s1_callout: 'Mesmo com o celular desbloqueado na mão de outra pessoa, suas mensagens com senha continuam invisíveis.',

    s2_kicker: 'Controle Real sobre o que Você Envia',
    s2_title: 'Apagou no seu, sumiu no outro. E print sai 100% preto.',
    s2_text: 'Nos aplicativos tradicionais, apagar uma mensagem deixa rastros em backups na nuvem ou em apps modificados ("Mods") que salvam fotos escondidas na galeria.',
    s2_b1: '<strong>Botão Burn Sincronizado P2P:</strong> Um toque limpa o histórico no seu celular e no aparelho da outra pessoa instantaneamente.',
    s2_b2: '<strong>Escudo Anti-Print Nativo:</strong> Bloqueio em nível de sistema operacional que transforma qualquer print ou gravação de tela em um quadro 100% preto.',
    s2_b3: '<strong>Zero Fotos Soltas na Galeria:</strong> Mídias recebidas ficam isoladas e criptografadas dentro do cofre do aplicativo.',
    s2_cta: 'Experimentar o Botão Burn P2P',
    s2_badge: 'ZERO RASTROS',
    s2_callout: 'Destruição bilateral confirmada nos 2 aparelhos + 0 bytes em servidores de backup.',

    s3_kicker: 'Chamadas de Voz P2P & Grupos Privados',
    s3_title: 'Ligações cristalinas e grupos sem expor seu número para estranhos.',
    s3_text: 'Já entrou em um grupo e começou a receber spam porque seu número (+55) ficou visível para dezenas de desconhecidos? Aqui sua identidade fica sempre protegida.',
    s3_b1: '<strong>OnionVoice (Chamadas P2P Gratuitas):</strong> Ligações de áudio diretas de ponta a ponta sem passar por centrais telefônicas.',
    s3_b2: '<strong>Entrar em Grupos é 100% Grátis:</strong> Participe de qualquer grupo a convite sem que ninguém descubra seu telefone pessoal ou IP.',
    s3_b3: '<strong>Criação de Grupos Sustentável:</strong> Criar novos grupos privados é nossa forma inicial de monetização (US$ 10 libera 10 grupos permanentes, ou 1 nó ativo libera 1 grupo).',
    s3_cta: 'Criar Minha Identidade P2P Agora',
    s3_badge: 'SEM +55',
    s3_callout: 'Nos grupos do OnionTalk, nenhum participante tem acesso ao seu chip SIM ou operadora.',

    video_badge: 'Vídeo Oficial • 1 Minuto e 20 Segundos',
    video_title: 'Veja o OnionTalk funcionando na prática',
    video_desc: 'Assista à demonstração completa da nossa interface limpa, chamadas de voz P2P, trancamento por senha e destruição sincronizada de mensagens.',

    cmp_tag: 'Matriz Comparativa de Arquitetura & Privacidade',
    cmp_title: 'Por que o OnionTalk entrega mais qualidade e segurança?',
    cmp_desc: 'Compare critério por critério como a arquitetura P2P direta do OnionTalk supera os mensageiros tradicionais e alternativas sem chip como o Zangi:',
    cmp_col_0_kicker: 'Análise Técnica e Prática',
    cmp_col_0_title: 'Critério de Privacidade',
    cmp_featured_badge: 'Mais Completo',
    cmp_sub_onion: 'Rede P2P Direta • Zero-SIM',
    cmp_sub_zangi: 'Sem Chip • Híbrido',
    cmp_sub_wa: 'Nuvem Meta (+55)',
    cmp_sub_tg: 'Nuvem Central (+55)',
    cmp_sub_sg: 'Servidor Central (+55)',
    cmp_footnote: 'Dados auditáveis em código aberto (MIT) • Sem coleta de metadados, agenda de contatos ou localização GPS.',
    cmp_footer_cta: 'Migrar para o OnionTalk P2P →',
    cmp_rows: [
      {
        title: 'Cadastro sem Número (+55 / Chip SIM)',
        hint: 'Proteção contra spam e clonagem de chip (SIM Swap)',
        onion: ['yes', '100% Sem Chip SIM', 'ID P2P e QR Code em 5s'],
        zangi: ['yes', 'Sem Chip SIM', 'Número virtual interno'],
        wa: ['no', 'Exige Chip SIM', 'Vinculado ao seu +55'],
        tg: ['no', 'Exige Chip SIM', 'Pede SMS da operadora'],
        sg: ['no', 'Exige Chip SIM', 'Cadastro via telefone']
      },
      {
        title: 'Arquitetura de Rede',
        hint: 'Por onde suas mensagens e áudios trafegam',
        onion: ['yes', 'P2P Direto (0 KB Nuvem)', 'Direto celular ↔ celular'],
        zangi: ['warn', 'Roteamento Híbrido', 'Servidores de sinalização'],
        wa: ['no', 'Servidores Centrais', 'Metadados na nuvem Meta'],
        tg: ['no', 'Nuvem Centralizada', 'Histórico salvo no servidor'],
        sg: ['warn', 'Servidor Central', 'Fila central + Google FCM']
      },
      {
        title: 'Mensagens Trancadas com Senha',
        hint: 'Senha exclusiva por mensagem dentro da conversa',
        onion: ['yes', 'Nativo por Mensagem', 'Tranca individual no chat'],
        zangi: ['no', 'Não possui', 'Sem senha por mensagem'],
        wa: ['no', 'Apenas pasta inteira', 'Não tranca msg avulsa'],
        tg: ['no', 'Não possui', 'Sem senha por mensagem'],
        sg: ['no', 'Não possui', 'Sem senha por mensagem']
      },
      {
        title: 'Auto-Lock em 15 Segundos na Mesa',
        hint: 'Bloqueio rápido ao largar o aparelho destravado',
        onion: ['yes', 'Nativo (15s Inativo)', 'Tranca o cofre sozinho'],
        zangi: ['no', 'Não possui', 'Sem bloqueio de 15s'],
        wa: ['no', 'Mínimo 1 min / Manual', 'Janela longa de exposição'],
        tg: ['warn', 'Manual / 1 minuto', 'Exige ativar cadeado'],
        sg: ['warn', 'Bloqueio Manual', 'Sem timer curto de 15s']
      },
      {
        title: 'Escudo Anti-Print (Tela 100% Preta)',
        hint: 'Impede capturas de tela e gravações ocultas',
        onion: ['yes', 'Ativo em Todo o App', 'Bloqueio nativo do sistema'],
        zangi: ['warn', 'Proteção Parcial', 'Apenas modos específicos'],
        wa: ['no', 'Só Visualização Única', 'Chat normal aceita print'],
        tg: ['warn', 'Só no Chat Secreto', 'Aberto nos chats padrões'],
        sg: ['yes', 'Opcional nas Configs', 'Desativado por padrão']
      },
      {
        title: 'Botão Burn (Apagar nos 2 Celulares)',
        hint: 'Remoção sincronizada sem deixar rastros em backup',
        onion: ['yes', 'Destruição Bilateral', 'Limpa os 2 + 0 KB backup'],
        zangi: ['yes', 'Exclusão Remota', 'Apaga nos dois lados'],
        wa: ['no', 'Rastros em Backups', 'Vulnerável a Mods/nuvem'],
        tg: ['warn', 'Depende da Nuvem', 'Controlado pelo servidor'],
        sg: ['warn', 'Timer de Expiração', 'Sem botão Burn total']
      },
      {
        title: 'Ocultação de Endereço IP Real',
        hint: 'Impede rastrear sua localização pela conexão',
        onion: ['yes', 'Sempre Oculto (Zero-IP)', 'Roteamento anônimo nativo'],
        zangi: ['no', 'Expõe IP à Rede', 'Conexão direta padrão'],
        wa: ['no', 'Registra IP e Rede', 'Coleta contínua de IP'],
        tg: ['no', 'Registra IP no Cloud', 'Armazenado pela plataforma'],
        sg: ['warn', 'Apenas Relay de Voz', 'Opcional em chamadas']
      },
      {
        title: 'Modelo de Sustentabilidade',
        hint: 'Como o aplicativo paga suas contas',
        onion: ['yes', 'Doações + Criar Grupos', 'Zero anúncios • Zero dados'],
        zangi: ['warn', 'Freemium / B2B', 'Empresa privada fechada'],
        wa: ['no', 'Ecossistema de Dados', 'Monetização comercial Meta'],
        tg: ['no', 'Anúncios & Assinatura', 'Ads em canais públicos'],
        sg: ['yes', 'Fundação sem Fins Lucr.', 'Mantido por doações']
      }
    ],

    sus_tag: 'Transparência & Independência',
    sus_title: 'Zero anúncios. Zero venda de dados. Como nos mantemos?',
    sus_desc: 'Diferente das Big Techs, você nunca é o produto. No momento, o OnionTalk depende de <strong>doações voluntárias da comunidade</strong> e utiliza a <strong>criação de Grupos Privados como forma de monetização inicial</strong>.',
    don_badge: 'Mantido pela Comunidade no Momento',
    don_title: '1. Doações Voluntárias para Manter a Rede Livre',
    don_desc: 'Como nossa arquitetura é P2P (celular direto para celular), não temos custos milionários de nuvem espionando usuários. Hoje dependemos diretamente do apoio de quem valoriza a privacidade real para evoluir o aplicativo:',
    btn_copy: 'Copiar',
    btn_copied: 'Copiado! ✓',
    don_other_title: 'Quer apoiar via PIX ou outro meio?',
    don_other_desc: ' Chame nosso Admin diretamente dentro do app ou no Instagram ',
    btn_copy_admin: 'Copiar ID do Admin no App',

    grp_badge: 'Monetização Inicial Justa & Sem Anúncios',
    grp_title: '2. Grupos Privados como Forma de Monetização Inicial',
    grp_desc: 'Para garantir que o chat individual e as chamadas de voz nunca tenham propaganda nem coleta de dados, apenas a <strong>criação de novos Grupos Privados</strong> funciona como nossa monetização inicial:',
    grp_t1_pill: '100% GRÁTIS',
    grp_t1_text: '<strong>Conversas 1-a-1, Chamadas de Voz e Entrar em Grupos:</strong> participar de qualquer grupo a convite é totalmente gratuito para todos os membros.',
    grp_t2_pill: 'US$ 10 ÚNICO',
    grp_t2_text: '<strong>Passe Criador de Grupos (FounderPass):</strong> uma contribuição única de US$ 10 desbloqueia a criação de até <strong>10 grupos privados permanentes</strong> (até 64 membros cada, com Burn remoto).',
    grp_t3_pill: 'ALTERNATIVA P2P',
    grp_t3_text: '<strong>1 Nó Ativo = 1 Grupo Grátis:</strong> prefere contribuir com infraestrutura? Hospede 1 Nó Relay gratuito no Android ou Docker e libere 1 grupo enquanto o nó estiver ativo.',
    grp_cta: 'Baixar Grátis e Conhecer os Grupos',

    faq_tag: 'Dúvidas Frequentes',
    faq_title: 'Perguntas simples, respostas transparentes',
    faq_q1: 'O aplicativo é realmente gratuito? Como vocês se mantêm sem vender anúncios?',
    faq_a1: 'Sim, o OnionTalk é <strong>100% gratuito na Google Play Store</strong> e não exibe nenhum anúncio. Como nossa arquitetura é P2P (os próprios celulares se conectam diretamente entre si), não temos o custo milionário de manter data centers gigantes para guardar bilhões de fotos e vídeos dos usuários.<br /><br /><strong>No momento, dependemos de doações voluntárias da comunidade</strong> para financiar a evolução do projeto, e utilizamos a <strong>criação de Grupos Privados como nossa forma de monetização inicial</strong>: conversar no 1-a-1, fazer ligações de voz e participar de grupos por convite é totalmente grátis; apenas quem deseja criar novos grupos contribui com um apoio único (US$ 10 libera 10 grupos permanentes, ou você pode liberar 1 grupo gratuitamente mantendo um nó da rede ativo).',
    faq_q2: 'Como eu adiciono meus amigos se o OnionTalk não usa número de telefone (+55)?',
    faq_a2: 'É tão simples quanto escanear um PIX: ao abrir o aplicativo pela primeira vez, você recebe seu <strong>QR Code e seu Código de Contato P2P</strong> em 5 segundos. Basta mostrar o QR Code ou enviar seu convite para a pessoa te adicionar — sem nunca expor seu número pessoal.',
    faq_q3: 'O que acontece se a outra pessoa estiver sem internet quando eu mandar mensagem?',
    faq_a3: 'Sua mensagem fica selada com criptografia de ponta a ponta e é entregue automaticamente assim que os aparelhos voltam a ficar online na malha P2P, sem nunca existir histórico aberto ou backup em servidores centrais.',
    faq_q4: 'Sou da área de Tecnologia / Segurança: qual é a criptografia usada por baixo do capô?',
    faq_a4_intro: 'Para engenheiros e auditores de segurança, o OnionTalk utiliza transporte anônimo P2P com criptografia pós-quântica híbrida e banco local blindado:',
    faq_a4_specs: '• Transporte P2P Zero-IP: Roteamento ponto-a-ponto direto sobre Serviços Ocultos v3 (sem servidor central de contas e sem Google FCM)<br />• Acordo de Chaves Pós-Quântico (PQC): Híbrido X25519 + NIST FIPS 203 ML-KEM-768<br />• Cifra Simétrica de Mensagens, Grupos e Voz: ChaCha20-Poly1305 AEAD (256-bit) + HKDF-SHA256 + Ed25519<br />• Armazenamento Local no Aparelho: SQLCipher AES-256 com PBKDF2-HMAC-SHA256 + Android Hardware Keystore<br />• Proteção de Tela Nativa: WindowManager.LayoutParams.FLAG_SECURE (anti-print e gravação 100% preta)',
    faq_q5: 'Disclaimers Legais, Isenção de Responsabilidade & Política de Privacidade',
    faq_a5: 'O ecossistema <strong>OnionTalk</strong> (<code>org.oniontalk.messenger</code>) opera sob arquitetura <strong>Zero-Knowledge</strong> (Conhecimento Zero) e licença MIT (<em>AS IS</em>). Por não existirem servidores centrais de contas nem chaves mestras, os desenvolvedores não possuem meios técnicos para recuperar senhas perdidas, reverter exclusões (<em>Burn</em>) ou acessar mensagens. Doações são voluntárias e destinadas à manutenção independente do projeto. Consulte o documento completo em <a href="privacy.html" style="color:var(--emerald-dark); font-weight:700;">Política Oficial de Privacidade (Google Play)</a>.',

    ft_cta_title: 'Pronto para conversar sem ninguém bisbilhotando?',
    ft_cta_desc: 'Baixe gratuitamente na Google Play Store em menos de 30 segundos. Sem cadastro de telefone e sem anúncios.',
    ft_cta_btn: 'Baixar Grátis na Google Play',
    ft_donate_btn: 'Fazer uma Doação',
    ft_tagline: '• Privacidade Direta de Celular para Celular',
    ft_privacy_link: 'Política de Privacidade (Google Play)',
    cmp_swipe_hint: '← Deslize para o lado para ver todos os aplicativos →',
    ft_copy: '© 2026 OnionTalk • Mantido por Doações & Comunidade • Zero Servidores Centrais.'
  },

  en: {
    page_title: 'OnionTalk — Private P2P Messenger | Direct Phone-to-Phone Chat',
    top_badge: 'Direct P2P Network',
    top_banner_text: '100% Free on Google Play • No Phone Number Required • Zero Ads (Sustained by Community Donations & Private Groups)',
    nav_how: 'Why P2P?',
    nav_comics: 'Understand in 10s',
    nav_features: 'Privacy',
    nav_compare: 'Comparison',
    nav_support: 'Donate / Support',
    nav_faq: 'FAQ',
    nav_download: 'Download Free',

    hero_eyebrow: 'Independent P2P Messenger • Simple like WhatsApp, Truly Armored',
    hero_title: 'Chat in peace.<br /><span class="highlight">Directly phone to phone.</span>',
    hero_subtitle: 'In ordinary apps, your messages and photos pass through central servers that log your metadata and demand your phone number. On <strong>OnionTalk</strong>, chats travel via a <strong>direct P2P network</strong> between both phones — no middlemen, no SIM card, and zero data selling.',
    check_1: 'No Phone Number & No SIM Card',
    check_2: '100% Direct P2P (0 KB in Cloud/Servers)',
    check_3: 'Password Messages + 15s Auto-Lock',
    check_4: '100% Black Anti-Screenshot & Dual Burn',
    cta_playstore: 'Get it on Google Play',
    cta_apk: 'Direct APK Download',
    cta_watch_video: 'Watch Video (1m20s)',
    cta_support_hero: 'Support Project',
    hero_trust: '<span><strong>Zero Ads</strong> • Currently sustained by voluntary community donations and private groups</span>',

    sim_contact_name: 'Marina (Partner)',
    sim_contact_status: '● Direct P2P Connected • No Server',
    sim_zero_cloud: '0 KB Cloud',
    sim_banner: 'Direct Phone ↔ Phone Connection. No central server ever receives a copy of this chat.',
    sim_msg_1: 'Lucas, can you send the new contract details? I am at the coffee shop with my laptop open.',
    sim_locked_badge: '🔒 Password-Locked Message',
    sim_tap_open: 'Tap to unlock',
    sim_locked_hint: 'Protected against table snoopers',
    sim_unlocked_html: '<strong>Signed Contract:</strong> Wire of $48,500.00 approved.<br/><em style="color:#4ADE80;">✓ Password verified locally (re-locks in 15s)</em>',
    sim_locked_meta: '14:19 • Per-Message Password Active',
    sim_msg_3: 'Perfect! And if anyone tries to screenshot or use a modded app, the capture comes out 100% black.',
    sim_msg_3_meta: '14:20 • Native Anti-Screenshot',
    sim_toast_default: 'Click the buttons below to test live on the phone:',
    sim_toast_pw_open: 'Message unlocked with individual password! Tap again to lock.',
    sim_toast_pw_closed: 'Message locked with individual password inside the chat.',
    sim_toast_print: 'Native OS FLAG_SECURE shield blocking screenshots and screen recorders.',
    sim_toast_lock: 'Automatic 15-second idle lock against table snoopers.',
    sim_toast_burn: 'Bilateral P2P Burn completed on both phones simultaneously.',
    sim_ov_print_title: 'Anti-Screenshot Shield Active (100% Black Screen)',
    sim_ov_print_desc: 'Screenshot attempt blocked! On OnionTalk, any screenshot or screen recording produces a 100% solid black frame.',
    sim_ov_lock_title: '15-Second Auto-Lock Triggered',
    sim_ov_lock_desc: 'The phone sat idle on the table for 15 seconds. OnionTalk locked your vault and conversations automatically.',
    sim_ov_burn_title: 'Chat Destroyed on Both Phones (P2P Burn)',
    sim_ov_burn_desc: '0 bytes left on your phone, 0 bytes on Marina’s phone, and 0 bytes in the cloud. Wiped in real-time sync.',
    sim_back_btn: 'Return to Conversation',
    sim_btn_1: '1. Unlock w/ Password',
    sim_btn_2: '2. Test Anti-Screenshot',
    sim_btn_3: '3. 15s Auto-Lock',
    sim_btn_4: '4. Dual Burn (Both)',

    pillars_tag: 'Simple for You • Impossible for Snoopers',
    pillars_title: 'Why thousands are switching from ordinary messengers to Direct P2P',
    pillars_desc: 'We combine the everyday ease of WhatsApp with Zangi’s SIM-free concept — going much further in physical and digital protection on your device.',
    p1_title: 'No Phone Number & No SIM Card',
    p1_desc: 'Never hand over your personal phone number, ID, or email just to chat. Add only who you choose via QR Code or invite, with zero spam calls.',
    p1_metric: 'Immune to SIM Swap & Leaks',
    p2_title: 'Direct Phone-to-Phone (P2P)',
    p2_desc: 'No nosy central server sitting in the middle of the room logging who you talk to. Messages and calls travel directly between the two devices.',
    p2_metric: '0.0 KB Stored in the Cloud',
    p3_title: 'Per-Message Password & 15s Auto-Lock',
    p3_desc: 'Left your unlocked phone on a restaurant or office desk? In 15 seconds it locks itself, and sensitive messages have their own password.',
    p3_metric: 'Real-World Table Protection',
    p4_title: 'Black Anti-Screenshot & True Burn',
    p4_desc: 'Sent photos never leak into the other phone’s gallery, screenshot attempts turn 100% black, and Burn wipes the chat on both phones instantly.',
    p4_metric: 'Deleted on Yours = Gone on Theirs',

    comics_tag: 'Zero Jargon • Straight to the Point',
    comics_title: 'Understand the everyday difference in 10 seconds',
    comics_desc: 'See why traditional apps leave your private life exposed and how OnionTalk’s direct P2P connection fixes it effortlessly:',
    c_tab_0: '1. No Nosy Server (Direct P2P)',
    c_tab_1: '2. Deleted for Whom? (Dual Burn)',
    c_tab_2: '3. Phone on the Table (15s Auto-Lock)',
    c_tab_3: '4. Screenshot Trap (100% Black)',
    c_tab_4: '5. No Phone Number Toll (Zero SIM)',
    comics_cta: 'Try It Now on My Phone',
    charges: [
      { title: '1. A two-person chat doesn’t need an audience', desc: 'In ordinary apps, a central server logs metadata in the middle. On OnionTalk P2P, messages go straight from your phone to your friend’s.' },
      { title: '2. Deleted for whom? The Burn button wipes both phones', desc: 'Instead of deleting only on your screen while leaving cloud backups behind, P2P Burn wipes both devices at the exact same moment.' },
      { title: '3. Left your phone on the table? 15-second Auto-Lock', desc: 'Curious eyes at the table read nothing: the app locks itself after 15 seconds idle and protects individual messages with a password.' },
      { title: '4. Stopping screenshot betrayal: 100% Black Screen', desc: 'Photos stay encrypted inside the vault instead of the public gallery, and any screenshot or screen recording comes out 100% black.' },
      { title: '5. No phone-number toll and zero spam', desc: 'Chat freely without handing over your SIM card number or email. Zero data leaks and zero telemarketing spam.' }
    ],

    s1_kicker: 'In-Person & Digital Privacy',
    s1_title: 'Left your phone on the desk? Nobody reads your chats.',
    s1_text: 'Most everyday privacy leaks don’t come from elite hackers: they happen when someone picks up your unlocked phone from the table or looks over your shoulder.',
    s1_b1: '<strong>15-Second Auto-Lock:</strong> 15 seconds without touching the screen? Your encrypted vault locks itself automatically.',
    s1_b2: '<strong>Individual Message Password:</strong> Send passwords, contracts, or private voice notes locked behind a dedicated password inside the chat.',
    s1_b3: '<strong>Per-Chat PIN:</strong> Lock specific contacts on your home screen with an extra PIN.',
    s1_cta: 'Download with 15s Auto-Lock',
    s1_badge: 'EXCLUSIVE',
    s1_callout: 'Even if someone holds your unlocked phone in their hand, password-locked messages remain invisible.',

    s2_kicker: 'True Control Over What You Send',
    s2_title: 'Deleted on yours, gone on theirs. Screenshots turn 100% black.',
    s2_text: 'In traditional messengers, deleting a message often leaves copies in cloud backups or modified ("Mod") apps that silently save photos to the gallery.',
    s2_b1: '<strong>Synchronized P2P Burn Button:</strong> One tap shreds the conversation history on your phone and the recipient’s phone simultaneously.',
    s2_b2: '<strong>Native Anti-Screenshot Shield:</strong> OS-level protection turns any screenshot or screen-recording attempt into a 100% black image.',
    s2_b3: '<strong>Zero Loose Gallery Photos:</strong> Received media stays isolated and encrypted inside the app vault.',
    s2_cta: 'Try the P2P Burn Button',
    s2_badge: 'ZERO TRACES',
    s2_callout: 'Confirmed bilateral destruction on both devices + 0 bytes on backup servers.',

    s3_kicker: 'P2P Voice Calls & Private Groups',
    s3_title: 'Crystal-clear calls and groups without exposing your number to strangers.',
    s3_text: 'Ever joined a group chat and immediately started getting spam calls because your phone number became visible to dozens of strangers? Not anymore.',
    s3_b1: '<strong>OnionVoice (Free P2P Calls):</strong> Direct end-to-end voice calls without passing through telecom switches.',
    s3_b2: '<strong>Joining Groups is 100% Free:</strong> Join any group via invite without anyone ever seeing your phone number or IP address.',
    s3_b3: '<strong>Sustainable Group Creation:</strong> Creating new private groups is our initial monetization model ($10 unlocks 10 permanent groups, or run 1 active Relay node for 1 free group).',
    s3_cta: 'Create My P2P Identity Now',
    s3_badge: 'NO SIM LEAK',
    s3_callout: 'Inside OnionTalk groups, no member can ever discover your SIM card or mobile carrier.',

    video_badge: 'Official Video • 1 Minute 20 Seconds',
    video_title: 'Watch OnionTalk in action',
    video_desc: 'See a complete walkthrough of our clean interface, P2P voice calls, per-message password lock, and synchronized chat destruction.',

    cmp_tag: 'Architecture & Privacy Comparison Matrix',
    cmp_title: 'Why does OnionTalk deliver higher quality and security?',
    cmp_desc: 'Compare criterion by criterion how OnionTalk’s direct P2P architecture outperforms mainstream messengers and SIM-free alternatives like Zangi:',
    cmp_col_0_kicker: 'Technical & Practical Audit',
    cmp_col_0_title: 'Privacy Criterion',
    cmp_featured_badge: 'Most Complete',
    cmp_sub_onion: 'Direct P2P • Zero-SIM',
    cmp_sub_zangi: 'SIM-Free • Hybrid',
    cmp_sub_wa: 'Meta Cloud (SIM)',
    cmp_sub_tg: 'Central Cloud (SIM)',
    cmp_sub_sg: 'Central Server (SIM)',
    cmp_footnote: 'Open-source auditable protocol (MIT) • Zero collection of metadata, address books, or GPS location.',
    cmp_footer_cta: 'Switch to OnionTalk P2P →',
    cmp_rows: [
      {
        title: 'Sign-up without Phone Number / SIM',
        hint: 'Protection against spam & SIM-swap attacks',
        onion: ['yes', '100% SIM-Free', 'P2P ID & QR Code in 5s'],
        zangi: ['yes', 'SIM-Free', 'Internal virtual number'],
        wa: ['no', 'Requires SIM Card', 'Tied to your phone number'],
        tg: ['no', 'Requires SIM Card', 'Carrier SMS verification'],
        sg: ['no', 'Requires SIM Card', 'Phone number registration']
      },
      {
        title: 'Network Architecture',
        hint: 'Where your messages and voice calls travel',
        onion: ['yes', 'Direct P2P (0 KB Cloud)', 'Phone ↔ phone mesh'],
        zangi: ['warn', 'Hybrid Routing', 'Signaling servers involved'],
        wa: ['no', 'Centralized Servers', 'Metadata stored by Meta'],
        tg: ['no', 'Centralized Cloud', 'Cloud chat history by default'],
        sg: ['warn', 'Centralized Server', 'Central queue + Google FCM']
      },
      {
        title: 'Per-Message Password Lock',
        hint: 'Dedicated password for individual messages in chat',
        onion: ['yes', 'Native Per-Message', 'Individual lock inside chat'],
        zangi: ['no', 'Not available', 'No per-message password'],
        wa: ['no', 'Whole folder only', 'Cannot lock single messages'],
        tg: ['no', 'Not available', 'No per-message password'],
        sg: ['no', 'Not available', 'No per-message password']
      },
      {
        title: '15-Second Table Auto-Lock',
        hint: 'Fast automatic lock when left idle on a desk',
        onion: ['yes', 'Native (15s Idle)', 'Auto-locks vault on table'],
        zangi: ['no', 'Not available', 'No 15s idle auto-lock'],
        wa: ['no', '1 min min. / Manual', 'Wide exposure window'],
        tg: ['warn', 'Manual / 1 minute', 'Must tap lock icon'],
        sg: ['warn', 'Manual Lock', 'No fast 15s default lock']
      },
      {
        title: 'Anti-Screenshot Shield (100% Black)',
        hint: 'Blocks screenshots and covert screen recording',
        onion: ['yes', 'Active App-Wide', 'Native OS hardware shield'],
        zangi: ['warn', 'Partial Protection', 'Limited to specific modes'],
        wa: ['no', 'View-Once Only', 'Regular chats can be captured'],
        tg: ['warn', 'Secret Chats Only', 'Open in standard chats'],
        sg: ['yes', 'Optional Setting', 'Disabled by default']
      },
      {
        title: 'Burn Button (Wipe Both Phones)',
        hint: 'Synchronized deletion with zero cloud backup traces',
        onion: ['yes', 'True Bilateral Burn', 'Wipes both + 0 KB cloud'],
        zangi: ['yes', 'Remote Deletion', 'Deletes on both sides'],
        wa: ['no', 'Backup Traces Left', 'Exposed to cloud & Mods'],
        tg: ['warn', 'Cloud-Dependent', 'Managed by central server'],
        sg: ['warn', 'Disappearing Timer', 'No instant bilateral shred']
      },
      {
        title: 'Real IP Address Concealment',
        hint: 'Prevents tracking your physical location via IP',
        onion: ['yes', 'Always Hidden (Zero-IP)', 'Built-in anonymous routing'],
        zangi: ['no', 'Exposes IP to Network', 'Standard IP connection'],
        wa: ['no', 'Logs IP & Location', 'Continuous IP logging'],
        tg: ['no', 'Logs IP in Cloud', 'Stored on platform servers'],
        sg: ['warn', 'Call Relay Only', 'Optional for voice calls']
      },
      {
        title: 'Sustainability & Business Model',
        hint: 'How the platform pays its bills without selling you',
        onion: ['yes', 'Donations + Create Groups', 'Zero ads • Zero data sales'],
        zangi: ['warn', 'Freemium / B2B', 'Closed private company'],
        wa: ['no', 'Meta Data Ecosystem', 'Commercial metadata profiling'],
        tg: ['no', 'Ads & Subscriptions', 'Sponsored channel ads'],
        sg: ['yes', 'Nonprofit Foundation', 'Donor-supported']
      }
    ],

    sus_tag: 'Transparency & Independence',
    sus_title: 'Zero ads. Zero data selling. How do we sustain OnionTalk?',
    sus_desc: 'Unlike Big Tech, you are never the product. Right now, OnionTalk relies on <strong>voluntary community donations</strong> and uses <strong>Private Group creation as our initial monetization model</strong>.',
    don_badge: 'Community-Supported Right Now',
    don_title: '1. Voluntary Donations Keep the Network Independent',
    don_desc: 'Because our architecture is P2P (direct phone to phone), we don’t carry multi-million-dollar cloud bills spying on users. Today we rely directly on donations from people who value true privacy to keep building:',
    btn_copy: 'Copy',
    btn_copied: 'Copied! ✓',
    don_other_title: 'Want to donate via another method?',
    don_other_desc: ' Message our Admin directly inside the app or on Instagram ',
    btn_copy_admin: 'Copy Admin ID for the App',

    grp_badge: 'Fair Initial Monetization & Ad-Free',
    grp_title: '2. Private Groups as Initial Monetization',
    grp_desc: 'To guarantee that 1-on-1 chats and voice calls remain free forever without ads or tracking, only <strong>creating new Private Groups</strong> serves as our initial monetization:',
    grp_t1_pill: '100% FREE',
    grp_t1_text: '<strong>1-on-1 Chats, Voice Calls & Joining Groups:</strong> joining any group via invite is completely free for every participant.',
    grp_t2_pill: '$10 ONE-TIME',
    grp_t2_text: '<strong>Group Creator Pass (FounderPass):</strong> a one-time $10 USD contribution unlocks creation of up to <strong>10 permanent private groups</strong> (up to 64 members each, with remote Burn).',
    grp_t3_pill: 'P2P ALTERNATIVE',
    grp_t3_text: '<strong>1 Active Node = 1 Free Group:</strong> prefer contributing bandwidth? Run 1 free Relay Node on Android or Docker to unlock 1 group while active.',
    grp_cta: 'Download Free & Explore Groups',

    faq_tag: 'Frequently Asked Questions',
    faq_title: 'Simple questions, transparent answers',
    faq_q1: 'Is the app really free? How do you sustain yourselves without selling ads?',
    faq_a1: 'Yes — OnionTalk is <strong>100% free on the Google Play Store</strong> and displays zero ads. Because our architecture is P2P (phones connect directly to each other), we don’t have the multi-million-dollar cost of running giant data centers to store billions of user photos and videos.<br /><br /><strong>Right now, we depend on voluntary community donations</strong> to fund development, and we use <strong>Private Group creation as our initial form of monetization</strong>: 1-on-1 chats, voice calls, and joining groups via invite are completely free; only users who want to create new private groups make a one-time $10 contribution for 10 permanent groups (or unlock 1 group for free by hosting an active network relay node).',
    faq_q2: 'How do I add friends if OnionTalk doesn’t use phone numbers?',
    faq_a2: 'It’s as easy as scanning a QR code: the first time you open the app, your <strong>QR Code and P2P Contact ID</strong> are generated offline in 5 seconds. Just show your QR Code or share your invite code — without ever revealing your personal phone number.',
    faq_q3: 'What happens if my friend is offline when I send a message?',
    faq_a3: 'Your message stays end-to-end encrypted and is delivered automatically as soon as both devices reconnect on the P2P mesh, without ever leaving plaintext history or cloud backups on central servers.',
    faq_q4: 'I work in Tech / Security: what cryptography runs under the hood?',
    faq_a4_intro: 'For engineers and security auditors, OnionTalk combines anonymous P2P transport with hybrid post-quantum cryptography and a hardened local vault:',
    faq_a4_specs: '• Zero-IP P2P Transport: Direct peer-to-peer routing over v3 Hidden Services (zero central account server, zero Google FCM)<br />• Post-Quantum Key Agreement (PQC): Hybrid X25519 + NIST FIPS 203 ML-KEM-768<br />• Symmetric Message, Group & Voice Cipher: ChaCha20-Poly1305 AEAD (256-bit) + HKDF-SHA256 + Ed25519<br />• Local Device Storage: SQLCipher AES-256 with PBKDF2-HMAC-SHA256 + Android Hardware Keystore<br />• Native Screen Shield: WindowManager.LayoutParams.FLAG_SECURE (100% black screenshot/recording protection)',
    faq_q5: 'Legal Disclaimers, Liability Waiver & Privacy Policy',
    faq_a5: 'The <strong>OnionTalk</strong> ecosystem (<code>org.oniontalk.messenger</code>) operates under strict <strong>Zero-Knowledge</strong> architecture and the MIT License (<em>AS IS</em>). Because no central account servers or master keys exist, developers have no technical means to recover lost passwords, reverse bilateral deletions (<em>Burn</em>), or access messages. Donations are voluntary contributions toward independent maintenance. Read the full <a href="privacy.html" style="color:var(--emerald-dark); font-weight:700;">Official Privacy Policy (Google Play)</a>.',

    ft_cta_title: 'Ready to chat with nobody snooping?',
    ft_cta_desc: 'Download free on Google Play in under 30 seconds. No phone registration and zero ads.',
    ft_cta_btn: 'Get it Free on Google Play',
    ft_donate_btn: 'Make a Donation',
    ft_tagline: '• Direct Phone-to-Phone Privacy',
    ft_privacy_link: 'Privacy Policy (Google Play)',
    cmp_swipe_hint: '← Swipe sideways to compare all messengers →',
    ft_copy: '© 2026 OnionTalk • Community & Donor Supported • Zero Central Servers.'
  },

  es: {
    page_title: 'OnionTalk — Mensajero Privado P2P | Directo de Celular a Celular',
    top_badge: 'Red P2P Directa',
    top_banner_text: '100% Gratis en Google Play • Sin Número Telefónico • Cero Anuncios (Sostenido por Donaciones y Grupos Privados)',
    nav_how: '¿Por qué P2P?',
    nav_comics: 'Entiende en 10s',
    nav_features: 'Privacidad',
    nav_compare: 'Comparativa',
    nav_support: 'Donaciones / Apoyo',
    nav_faq: 'FAQ',
    nav_download: 'Descargar Gratis',

    hero_eyebrow: 'Mensajero P2P Independiente • Simple como WhatsApp, Blindado de Verdad',
    hero_title: 'Conversa en paz.<br /><span class="highlight">Directo de celular a celular.</span>',
    hero_subtitle: 'En las apps comunes, tus mensajes y fotos pasan por servidores centrales que guardan tu historial y piden tu número telefónico. En <strong>OnionTalk</strong>, la charla viaja por <strong>Red P2P directa</strong> entre ambos celulares — sin intermediarios, sin chip SIM y sin vender tus datos.',
    check_1: 'Sin Número Telefónico y Sin Chip SIM',
    check_2: '100% P2P (0 KB en Nube/Servidores)',
    check_3: 'Mensajes con Contraseña + Auto-Lock 15s',
    check_4: 'Captura 100% Negra y Botón Burn en Ambos',
    cta_playstore: 'Descargar en Google Play',
    cta_apk: 'Descargar APK Directo',
    cta_watch_video: 'Ver Video (1m20s)',
    cta_support_hero: 'Apoyar Proyecto',
    hero_trust: '<span><strong>Cero Anuncios</strong> • Hoy sostenido por donaciones voluntarias y creación de grupos privados</span>',

    sim_contact_name: 'Marina (Socia)',
    sim_contact_status: '● Conectado Directo P2P • Sin Servidor',
    sim_zero_cloud: '0 KB Nube',
    sim_banner: 'Conexión Directa Celular ↔ Celular. Ningún servidor central recibe copia de esta conversación.',
    sim_msg_1: 'Lucas, ¿me pasas los datos del nuevo contrato? Estoy en el café con la laptop abierta.',
    sim_locked_badge: '🔒 Mensaje Bloqueado con Contraseña',
    sim_tap_open: 'Toca p/ abrir',
    sim_locked_hint: 'Protegido contra curiosos en la mesa',
    sim_unlocked_html: '<strong>Contrato Firmado:</strong> Pago de $48.500 liberado.<br/><em style="color:#4ADE80;">✓ Contraseña validada localmente (se bloquea en 15s)</em>',
    sim_locked_meta: '14:19 • Contraseña Individual Activa',
    sim_msg_3: '¡Perfecto! Y si alguien intenta sacar captura o usar una app modificada, la pantalla sale 100% negra.',
    sim_msg_3_meta: '14:20 • Anti-Captura Nativo',
    sim_toast_default: 'Haz clic en los botones de abajo para probar en vivo:',
    sim_toast_pw_open: '¡Mensaje desbloqueado con contraseña individual! Toca otra vez para cerrar.',
    sim_toast_pw_closed: 'Mensaje protegido con contraseña individual dentro del chat.',
    sim_toast_print: 'Escudo nativo FLAG_SECURE contra capturas y grabaciones de pantalla.',
    sim_toast_lock: 'Protección automática de 15s contra curiosos en la mesa.',
    sim_toast_burn: 'Destrucción bilateral P2P completada en ambos celulares.',
    sim_ov_print_title: 'Escudo Anti-Captura Activado (Pantalla 100% Negra)',
    sim_ov_print_desc: '¡Intento de captura bloqueado! En OnionTalk, cualquier captura o grabación de pantalla genera una imagen 100% negra.',
    sim_ov_lock_title: 'Auto-Lock de 15 Segundos Activado',
    sim_ov_lock_desc: 'El celular quedó 15 segundos sin uso sobre la mesa. OnionTalk bloqueó todas las conversaciones automáticamente.',
    sim_ov_burn_title: 'Chat Destruido en los 2 Celulares (Burn P2P)',
    sim_ov_burn_desc: '0 bytes en tu celular, 0 bytes en el de Marina y 0 bytes en la nube. Todo borrado en sincronía.',
    sim_back_btn: 'Volver a la Conversación',
    sim_btn_1: '1. Abrir c/ Clave',
    sim_btn_2: '2. Probar Anti-Captura',
    sim_btn_3: '3. Auto-Lock 15s',
    sim_btn_4: '4. Borrar en 2 (Burn)',

    pillars_tag: 'Simple para Ti • Imposible para Curiosos',
    pillars_title: '¿Por qué miles están cambiando la mensajería común por la Red P2P?',
    pillars_desc: 'Unimos la facilidad de uso de WhatsApp con el enfoque sin chip de Zangi — llegando mucho más lejos en protección física y digital en tu teléfono.',
    p1_title: 'Sin Número y Sin Chip SIM',
    p1_desc: 'No necesitas entregar tu número personal, documento ni correo para chatear. Agrega solo a quien quieras por código QR sin recibir spam.',
    p1_metric: 'Inmune a SIM Swap y Filtraciones',
    p2_title: 'Directo de Celular a Celular (P2P)',
    p2_desc: 'Sin un servidor chismoso en medio anotando con quién hablas. Tus mensajes y llamadas viajan directamente entre ambos dispositivos.',
    p2_metric: '0.0 KB Guardados en la Nube',
    p3_title: 'Clave por Mensaje y Auto-Lock 15s',
    p3_desc: '¿Dejaste el celular abierto en la mesa del restaurante o la oficina? En 15 segundos se bloquea solo y cada mensaje sensible tiene clave.',
    p3_metric: 'Protección Frente a Curiosos',
    p4_title: 'Anti-Captura Negro y Botón Burn Real',
    p4_desc: 'Las fotos enviadas no quedan sueltas en la galería ajena, las capturas salen 100% negras y el botón Burn borra el chat en ambos celulares al instante.',
    p4_metric: 'Borrado en el Tuyo = Borrado en el Otro',

    comics_tag: 'Sin Tecnicismos • Directo al Grano',
    comics_title: 'Entiende en 10 segundos la diferencia en tu día a día',
    comics_desc: 'Mira por qué las aplicaciones tradicionales dejan tus charlas expuestas y cómo la conexión directa P2P de OnionTalk lo resuelve de forma sencilla:',
    c_tab_0: '1. Sin Servidor Chismoso (P2P)',
    c_tab_1: '2. ¿Borrado para Quién? (Botón Burn)',
    c_tab_2: '3. Celular en la Mesa (Auto-Lock 15s)',
    c_tab_3: '4. Trampa del Print (100% Negro)',
    c_tab_4: '5. Sin Peaje Telefónico (Cero SIM)',
    comics_cta: 'Probar Ahora en Mi Celular',
    charges: [
      { title: '1. Una charla entre dos no necesita público', desc: 'En las apps comunes, un servidor central anota todo en el medio. En OnionTalk P2P, la conversación va directo de tu celular al otro.' },
      { title: '2. ¿Borrado para quién? El Botón Burn borra en los 2 celulares', desc: 'En vez de borrar solo en tu pantalla dejando copias en la nube, el Botón Burn P2P limpia ambos teléfonos al mismo instante.' },
      { title: '3. ¿Dejaste el celular en la mesa? Auto-Lock en 15 segundos', desc: 'Los curiosos alrededor no leen nada: la app se cierra sola a los 15 segundos y protege mensajes individuales con contraseña.' },
      { title: '4. Contra la trampa de la captura: Pantalla 100% Negra', desc: 'Las fotos no quedan sueltas en la galería del otro teléfono y cualquier intento de captura o grabación sale 100% negro.' },
      { title: '5. Sin el peaje de tu número telefónico y sin spam', desc: 'Conversa sin entregar tu chip SIM ni correo personal. Cero filtraciones de base de datos y cero llamadas de spam.' }
    ],

    s1_kicker: 'Privacidad Presencial y Digital',
    s1_title: '¿Dejaste el celular en la mesa? Nadie lee tus conversaciones.',
    s1_text: 'La mayoría de las filtraciones cotidianas no vienen de hackers: ocurren cuando alguien toma tu teléfono desbloqueado en la mesa o mira sobre tu hombro.',
    s1_b1: '<strong>Auto-Lock en 15 Segundos:</strong> ¿Pasaron 15 segundos sin tocar la pantalla? Tu bóveda se bloquea automáticamente.',
    s1_b2: '<strong>Contraseña Individual por Mensaje:</strong> Envía claves, contratos o audios importantes protegidos con contraseña propia dentro del chat.',
    s1_b3: '<strong>PIN por Conversación:</strong> Protege contactos específicos en la pantalla principal con un PIN exclusivo.',
    s1_cta: 'Descargar con Auto-Lock Activo',
    s1_badge: 'EXCLUSIVO',
    s1_callout: 'Incluso con el celular desbloqueado en mano de otra persona, tus mensajes con contraseña siguen invisibles.',

    s2_kicker: 'Control Real Sobre lo que Envías',
    s2_title: 'Borrado en el tuyo, desaparece en el otro. Y la captura sale 100% negra.',
    s2_text: 'En las apps tradicionales, borrar un mensaje deja rastros en copias en la nube o en apps modificadas ("Mods") que guardan fotos a escondidas.',
    s2_b1: '<strong>Botón Burn Sincronizado P2P:</strong> Un toque destruye el historial en tu celular y en el de la otra persona simultáneamente.',
    s2_b2: '<strong>Escudo Anti-Captura Nativo:</strong> Bloqueo del sistema operativo que convierte cualquier captura o grabación en un cuadro 100% negro.',
    s2_b3: '<strong>Cero Fotos Sueltas en la Galería:</strong> Los archivos recibidos quedan aislados y cifrados dentro de la bóveda.',
    s2_cta: 'Probar el Botón Burn P2P',
    s2_badge: 'CERO RASTROS',
    s2_callout: 'Destrucción bilateral confirmada en ambos teléfonos + 0 bytes en servidores de respaldo.',

    s3_kicker: 'Llamadas de Voz P2P y Grupos Privados',
    s3_title: 'Llamadas nítidas y grupos sin exponer tu número ante desconocidos.',
    s3_text: '¿Entraste alguna vez a un grupo y empezaste a recibir spam porque tu número quedó visible para decenas de extraños? Aquí tu identidad está blindada.',
    s3_b1: '<strong>OnionVoice (Llamadas P2P Gratuitas):</strong> Llamadas de audio directas de extremo a extremo sin pasar por centrales telefónicas.',
    s3_b2: '<strong>Unirse a Grupos es 100% Gratis:</strong> Participa por invitación en cualquier grupo sin que nadie vea tu teléfono personal ni tu IP.',
    s3_b3: '<strong>Creación de Grupos Sostenible:</strong> Crear nuevos grupos privados es nuestra forma de monetización inicial (US$ 10 habilita 10 grupos permanentes, o 1 nodo activo habilita 1 grupo).',
    s3_cta: 'Crear Mi Identidad P2P Ahora',
    s3_badge: 'SIN NÚMERO',
    s3_callout: 'En los grupos de OnionTalk, ningún participante puede descubrir tu tarjeta SIM ni tu operadora.',

    video_badge: 'Video Oficial • 1 Minuto y 20 Segundos',
    video_title: 'Mira OnionTalk funcionando en la práctica',
    video_desc: 'Observa la demostración completa de nuestra interfaz limpia, llamadas P2P, mensajes con contraseña y destrucción sincronizada.',

    cmp_tag: 'Matriz Comparativa de Arquitectura y Privacidad',
    cmp_title: '¿Por qué OnionTalk ofrece mayor calidad y seguridad?',
    cmp_desc: 'Compara criterio por criterio cómo la arquitectura P2P directa de OnionTalk supera a los mensajeros tradicionales y alternativas sin chip como Zangi:',
    cmp_col_0_kicker: 'Auditoría Técnica y Práctica',
    cmp_col_0_title: 'Criterio de Privacidad',
    cmp_featured_badge: 'Más Completo',
    cmp_sub_onion: 'Red P2P Directa • Cero-SIM',
    cmp_sub_zangi: 'Sin Chip • Híbrido',
    cmp_sub_wa: 'Nube Meta (SIM)',
    cmp_sub_tg: 'Nube Central (SIM)',
    cmp_sub_sg: 'Servidor Central (SIM)',
    cmp_footnote: 'Protocolo auditable de código abierto (MIT) • Cero recolección de metadatos, agenda de contactos o ubicación GPS.',
    cmp_footer_cta: 'Migrar a OnionTalk P2P →',
    cmp_rows: [
      {
        title: 'Registro sin Número Telefónico / SIM',
        hint: 'Protección contra spam y robo de chip (SIM Swap)',
        onion: ['yes', '100% Sin Chip SIM', 'ID P2P y Código QR en 5s'],
        zangi: ['yes', 'Sin Chip SIM', 'Número virtual interno'],
        wa: ['no', 'Exige Chip SIM', 'Atado a tu teléfono'],
        tg: ['no', 'Exige Chip SIM', 'Pide SMS de operadora'],
        sg: ['no', 'Exige Chip SIM', 'Registro telefónico']
      },
      {
        title: 'Arquitectura de Red',
        hint: 'Por dónde viajan tus mensajes y llamadas',
        onion: ['yes', 'P2P Directo (0 KB Nube)', 'Directo celular ↔ celular'],
        zangi: ['warn', 'Enrutamiento Híbrido', 'Servidores de señalización'],
        wa: ['no', 'Servidores Centrales', 'Metadatos en nube Meta'],
        tg: ['no', 'Nube Centralizada', 'Historial en el servidor'],
        sg: ['warn', 'Servidor Central', 'Cola central + Google FCM']
      },
      {
        title: 'Mensajes Bloqueados con Contraseña',
        hint: 'Clave exclusiva por mensaje dentro del chat',
        onion: ['yes', 'Nativo por Mensaje', 'Bloqueo individual en chat'],
        zangi: ['no', 'No disponible', 'Sin clave por mensaje'],
        wa: ['no', 'Solo carpeta entera', 'No bloquea mensaje suelto'],
        tg: ['no', 'No disponible', 'Sin clave por mensaje'],
        sg: ['no', 'No disponible', 'Sin clave por mensaje']
      },
      {
        title: 'Auto-Lock en 15 Segundos en Mesa',
        hint: 'Bloqueo rápido al dejar el teléfono sin uso',
        onion: ['yes', 'Nativo (15s Inactivo)', 'Cierra la bóveda solo'],
        zangi: ['no', 'No disponible', 'Sin bloqueo de 15s'],
        wa: ['no', 'Mínimo 1 min / Manual', 'Amplia ventana expuesta'],
        tg: ['warn', 'Manual / 1 minuto', 'Requiere tocar candado'],
        sg: ['warn', 'Bloqueo Manual', 'Sin timer corto de 15s']
      },
      {
        title: 'Escudo Anti-Captura (100% Negro)',
        hint: 'Impide capturas y grabaciones de pantalla',
        onion: ['yes', 'Activo en Toda la App', 'Bloqueo nativo del sistema'],
        zangi: ['warn', 'Protección Parcial', 'Solo modos específicos'],
        wa: ['no', 'Solo Ver Una Vez', 'Chat normal permite print'],
        tg: ['warn', 'Solo Chat Secreto', 'Abierto en chats comunes'],
        sg: ['yes', 'Opcional en Ajustes', 'Desactivado por defecto']
      },
      {
        title: 'Botón Burn (Borrar en Ambos Celulares)',
        hint: 'Borrado sincronizado sin dejar copias en la nube',
        onion: ['yes', 'Destrucción Bilateral', 'Limpia ambos + 0 KB nube'],
        zangi: ['yes', 'Borrado Remoto', 'Elimina en ambos lados'],
        wa: ['no', 'Rastros en Backups', 'Expuesto a nube y Mods'],
        tg: ['warn', 'Depende de la Nube', 'Controlado por servidor'],
        sg: ['warn', 'Timer de Expiración', 'Sin botón Burn total']
      },
      {
        title: 'Ocultación de Dirección IP Real',
        hint: 'Impide rastrear tu ubicación por la conexión',
        onion: ['yes', 'Siempre Oculta (Zero-IP)', 'Enrutamiento anónimo nativo'],
        zangi: ['no', 'Expone IP a la Red', 'Conexión IP estándar'],
        wa: ['no', 'Registra IP y Red', 'Registro continuo de IP'],
        tg: ['no', 'Registra IP en Nube', 'Guardado en plataforma'],
        sg: ['warn', 'Solo Relay de Voz', 'Opcional en llamadas']
      },
      {
        title: 'Modelo de Sostenibilidad',
        hint: 'Cómo se financia sin vender tus datos',
        onion: ['yes', 'Donaciones + Crear Grupos', 'Cero anuncios • Cero datos'],
        zangi: ['warn', 'Freemium / B2B', 'Empresa privada cerrada'],
        wa: ['no', 'Ecosistema de Datos', 'Monetización comercial Meta'],
        tg: ['no', 'Anuncios y Suscripción', 'Publicidad en canales'],
        sg: ['yes', 'Fundación sin Lucro', 'Mantenido por donaciones']
      }
    ],

    sus_tag: 'Transparencia e Independencia',
    sus_title: 'Cero anuncios. Cero venta de datos. ¿Cómo nos mantenemos?',
    sus_desc: 'A diferencia de las Big Tech, tú nunca eres el producto. En este momento, OnionTalk depende de <strong>donaciones voluntarias de la comunidad</strong> y utiliza la <strong>creación de Grupos Privados como forma de monetización inicial</strong>.',
    don_badge: 'Mantenido por la Comunidad Actualmente',
    don_title: '1. Donaciones Voluntarias para Mantener la Red Libre',
    don_desc: 'Como nuestra arquitectura es P2P (celular directo a celular), no tenemos costos millonarios de servidores espiando usuarios. Hoy dependemos directamente del apoyo de quienes valoran la privacidad real:',
    btn_copy: 'Copiar',
    btn_copied: '¡Copiado! ✓',
    don_other_title: '¿Quieres apoyar por otro medio?',
    don_other_desc: ' Escribe a nuestro Admin directamente en la app o en Instagram ',
    btn_copy_admin: 'Copiar ID del Admin en la App',

    grp_badge: 'Monetización Inicial Justa y Sin Anuncios',
    grp_title: '2. Grupos Privados como Forma de Monetización Inicial',
    grp_desc: 'Para garantizar que el chat individual y las llamadas nunca tengan publicidad ni rastreo, únicamente la <strong>creación de nuevos Grupos Privados</strong> funciona como nuestra monetización inicial:',
    grp_t1_pill: '100% GRATIS',
    grp_t1_text: '<strong>Chats 1-a-1, Llamadas de Voz y Entrar en Grupos:</strong> participar en cualquier grupo por invitación es totalmente gratuito para todos los miembros.',
    grp_t2_pill: 'US$ 10 ÚNICO',
    grp_t2_text: '<strong>Pase Creador de Grupos (FounderPass):</strong> un aporte único de US$ 10 habilita la creación de hasta <strong>10 grupos privados permanentes</strong> (hasta 64 miembros cada uno, con Burn remoto).',
    grp_t3_pill: 'ALTERNATIVA P2P',
    grp_t3_text: '<strong>1 Nodo Activo = 1 Grupo Gratis:</strong> ¿prefieres aportar infraestructura? Hospeda 1 Nodo Relay gratuito en Android o Docker y habilita 1 grupo mientras esté activo.',
    grp_cta: 'Descargar Gratis y Conocer los Grupos',

    faq_tag: 'Preguntas Frecuentes',
    faq_title: 'Preguntas simples, respuestas transparentes',
    faq_q1: '¿La aplicación es realmente gratuita? ¿Cómo se mantienen sin vender anuncios?',
    faq_a1: 'Sí, OnionTalk es <strong>100% gratuito en Google Play Store</strong> y no muestra ningún anuncio. Como nuestra arquitectura es P2P (los propios celulares se conectan directamente entre sí), no tenemos el costo millonario de mantener centros de datos gigantes para guardar miles de millones de fotos y videos de los usuarios.<br /><br /><strong>En este momento dependemos de donaciones voluntarias de la comunidad</strong> para financiar la evolución del proyecto, y utilizamos la <strong>creación de Grupos Privados como nuestra forma de monetización inicial</strong>: chatear 1-a-1, hacer llamadas de voz y participar en grupos por invitación es totalmente gratis; solo quien desea crear nuevos grupos realiza un aporte único (US$ 10 habilita 10 grupos permanentes, o puedes habilitar 1 grupo gratis manteniendo un nodo activo en la red).',
    faq_q2: '¿Cómo agrego a mis amigos si OnionTalk no usa número de teléfono?',
    faq_a2: 'Es tan fácil como escanear un código QR: al abrir la app por primera vez, recibes tu <strong>Código QR e ID de Contacto P2P</strong> en 5 segundos. Solo muestra el QR o envía tu invitación — sin exponer jamás tu número personal.',
    faq_q3: '¿Qué pasa si la otra persona no tiene internet cuando le envío un mensaje?',
    faq_a3: 'Tu mensaje queda sellado con cifrado de extremo a extremo y se entrega automáticamente apenas ambos teléfonos vuelven a conectarse en la malla P2P, sin dejar historial abierto en servidores centrales.',
    faq_q4: 'Trabajo en Tecnología / Seguridad: ¿qué criptografía usan bajo el capó?',
    faq_a4_intro: 'Para ingenieros y auditores de seguridad, OnionTalk combina transporte anónimo P2P con criptografía post-cuántica híbrida y bóveda local blindada:',
    faq_a4_specs: '• Transporte P2P Zero-IP: Enrutamiento directo punto a punto sobre Servicios Ocultos v3 (sin servidor central de cuentas y sin Google FCM)<br />• Acuerdo de Claves Post-Cuántico (PQC): Híbrido X25519 + NIST FIPS 203 ML-KEM-768<br />• Cifrado Simétrico de Mensajes, Grupos y Voz: ChaCha20-Poly1305 AEAD (256-bit) + HKDF-SHA256 + Ed25519<br />• Almacenamiento Local: SQLCipher AES-256 con PBKDF2-HMAC-SHA256 + Android Hardware Keystore<br />• Escudo de Pantalla Nativo: WindowManager.LayoutParams.FLAG_SECURE (captura y grabación 100% negras)',
    faq_q5: 'Avisos Legales, Exención de Responsabilidad y Política de Privacidad',
    faq_a5: 'El ecosistema <strong>OnionTalk</strong> (<code>org.oniontalk.messenger</code>) opera bajo arquitectura <strong>Zero-Knowledge</strong> (Conocimiento Cero) y licencia MIT (<em>AS IS</em>). Al no existir servidores centrales ni claves maestras, los desarrolladores no poseen medios técnicos para recuperar contraseñas perdidas ni acceder a mensajes. Las donaciones son aportes voluntarios. Consulta la <a href="privacy.html" style="color:var(--emerald-dark); font-weight:700;">Política Oficial de Privacidad (Google Play)</a>.',

    ft_cta_title: '¿Listo para conversar sin nadie espiando?',
    ft_cta_desc: 'Descarga gratis en Google Play Store en menos de 30 segundos. Sin registro telefónico y sin anuncios.',
    ft_cta_btn: 'Descargar Gratis en Google Play',
    ft_donate_btn: 'Hacer una Donación',
    ft_tagline: '• Privacidad Directa de Celular a Celular',
    ft_privacy_link: 'Política de Privacidad (Google Play)',
    cmp_swipe_hint: '← Desliza hacia el lado para comparar todas las apps →',
    ft_copy: '© 2026 OnionTalk • Sostenido por Donaciones y Comunidad • Cero Servidores Centrales.'
  },

  ru: {
    page_title: 'OnionTalk — Приватный P2P-мессенджер | Напрямую с телефона на телефон',
    top_badge: 'Прямая P2P-сеть',
    top_banner_text: '100% Бесплатно в Google Play • Без номера телефона • Ноль рекламы (Поддерживается пожертвованиями и приватными группами)',
    nav_how: 'Почему P2P?',
    nav_comics: 'Понятно за 10 сек',
    nav_features: 'Приватность',
    nav_compare: 'Сравнение',
    nav_support: 'Донаты / Поддержка',
    nav_faq: 'FAQ',
    nav_download: 'Скачать бесплатно',

    hero_eyebrow: 'Независимый P2P-мессенджер • Простой как WhatsApp, защищённый по-настоящему',
    hero_title: 'Общайтесь спокойно.<br /><span class="highlight">Напрямую с телефона на телефон.</span>',
    hero_subtitle: 'В обычных мессенджерах ваши сообщения и фото проходят через центральные серверы и требуют номер телефона. В <strong>OnionTalk</strong> общение идёт через <strong>прямую P2P-сеть</strong> между двумя смартфонами — без посредников, без SIM-карты и без продажи данных.',
    check_1: 'Без номера телефона и без SIM-карты',
    check_2: '100% P2P (0 КБ в облаке и на серверах)',
    check_3: 'Пароль на сообщения + Автоблок за 15 сек',
    check_4: 'Чёрный скриншот и кнопка Burn у обоих',
    cta_playstore: 'Скачать в Google Play',
    cta_apk: 'Скачать APK напрямую',
    cta_watch_video: 'Смотреть видео (1м20с)',
    cta_support_hero: 'Поддержать проект',
    hero_trust: '<span><strong>Ноль рекламы</strong> • Сейчас проект живёт за счёт пожертвований сообщества и создания приватных групп</span>',

    sim_contact_name: 'Марина (Партнёр)',
    sim_contact_status: '● Прямое P2P-соединение • Без сервера',
    sim_zero_cloud: '0 КБ Облако',
    sim_banner: 'Прямая связь Телефон ↔ Телефон. Ни один центральный сервер не получает копию чата.',
    sim_msg_1: 'Лукас, скинешь данные по новому контракту? Я в кафе с открытым ноутбуком.',
    sim_locked_badge: '🔒 Сообщение под паролем',
    sim_tap_open: 'Открыть',
    sim_locked_hint: 'Защита от посторонних глаз за столом',
    sim_unlocked_html: '<strong>Контракт подписан:</strong> Перевод $48,500 одобрен.<br/><em style="color:#4ADE80;">✓ Пароль проверен локально (закроется через 15с)</em>',
    sim_locked_meta: '14:19 • Индивидуальный пароль',
    sim_msg_3: 'Отлично! А если кто-то попытается сделать скриншот, экран будет на 100% чёрным.',
    sim_msg_3_meta: '14:20 • Нативная защита от скриншотов',
    sim_toast_default: 'Нажмите кнопки ниже, чтобы протестировать:',
    sim_toast_pw_open: 'Сообщение открыто индивидуальным паролем! Нажмите снова, чтобы закрыть.',
    sim_toast_pw_closed: 'Сообщение закрыто индивидуальным паролем внутри чата.',
    sim_toast_print: 'Системная защита FLAG_SECURE блокирует скриншоты и запись экрана.',
    sim_toast_lock: 'Автоблокировка через 15 секунд простоя на столе.',
    sim_toast_burn: 'Двустороннее удаление P2P Burn выполнено на обоих телефонах.',
    sim_ov_print_title: 'Защита от скриншотов активна (100% чёрный экран)',
    sim_ov_print_desc: 'Попытка снимка экрана заблокирована! В OnionTalk любой скриншот или запись экрана даёт полностью чёрный кадр.',
    sim_ov_lock_title: 'Сработала автоблокировка 15 секунд',
    sim_ov_lock_desc: 'Телефон пролежал без движения 15 секунд на столе. OnionTalk автоматически заблокировал чаты.',
    sim_ov_burn_title: 'Чат уничтожен на обоих телефонах (Burn P2P)',
    sim_ov_burn_desc: '0 байт на вашем телефоне, 0 байт у Марины и 0 байт в облаке. Полное синхронное удаление.',
    sim_back_btn: 'Вернуться в чат',
    sim_btn_1: '1. Открыть паролем',
    sim_btn_2: '2. Тест Анти-Скрин',
    sim_btn_3: '3. Автоблок 15с',
    sim_btn_4: '4. Удалить у обоих',

    pillars_tag: 'Просто для вас • Недоступно для слежки',
    pillars_title: 'Почему тысячи людей переходят с обычных мессенджеров на P2P-сеть?',
    pillars_desc: 'Мы объединили привычное удобство WhatsApp с подходом без SIM-карты как у Zangi — и пошли гораздо дальше в защите вашего устройства.',
    p1_title: 'Без номера и без SIM-карты',
    p1_desc: 'Не нужно отдавать личный телефон, паспорт или почту. Добавляйте только нужных людей по QR-коду без спам-звонков.',
    p1_metric: 'Защита от SIM-свопа и утечек',
    p2_title: 'Напрямую с телефона на телефон (P2P)',
    p2_desc: 'Никакого любопытного сервера посередине, записывающего с кем вы общаетесь. Сообщения и звонки идут напрямую между устройствами.',
    p2_metric: '0.0 КБ хранится в облаке',
    p3_title: 'Пароль на сообщение и Автоблок 15с',
    p3_desc: 'Оставили телефон на столе в кафе или офисе? Через 15 секунд он заблокируется сам, а важные сообщения защищены отдельным паролем.',
    p3_metric: 'Защита от посторонних рядом',
    p4_title: 'Чёрный Анти-Скрин и кнопка Burn',
    p4_desc: 'Фото не сохраняются в чужую галерею, скриншоты выходят на 100% чёрными, а кнопка Burn мгновенно стирает переписку на обоих смартфонах.',
    p4_metric: 'Удалили у себя = Исчезло у собеседника',

    comics_tag: 'Без сложных терминов • Сразу к сути',
    comics_title: 'Поймите разницу за 10 секунд на живых примерах',
    comics_desc: 'Посмотрите, почему обычные приложения оставляют личные чаты уязвимыми и как прямое P2P-соединение OnionTalk решает эту проблему:',
    c_tab_0: '1. Без лишних ушей (P2P)',
    c_tab_1: '2. Удалено у кого? (Кнопка Burn)',
    c_tab_2: '3. Телефон на столе (Автоблок 15с)',
    c_tab_3: '4. Ловушка скриншота (100% чёрный)',
    c_tab_4: '5. Без номера телефона (Zero SIM)',
    comics_cta: 'Проверить на моём телефоне',
    charges: [
      { title: '1. Разговору двоих не нужны зрители', desc: 'В обычных мессенджерах центральный сервер собирает метаданные посередине. В OnionTalk P2P беседа идёт напрямую между двумя телефонами.' },
      { title: '2. Удалено у кого? Кнопка Burn стирает чат на обоих устройствах', desc: 'Вместо удаления только с вашего экрана с сохранением облачных копий, P2P Burn очищает оба телефона одновременно.' },
      { title: '3. Оставили телефон на столе? Автоблокировка за 15 секунд', desc: 'Любопытные взгляды ничего не прочитают: приложение закрывается через 15 секунд и защищает отдельные сообщения паролем.' },
      { title: '4. Против слива скриншотов: 100% чёрный экран', desc: 'Фото остаются зашифрованными внутри сейфа приложения, а любая попытка скриншота или записи экрана сохраняет чёрный квадрат.' },
      { title: '5. Без привязки номера телефона и без спама', desc: 'Общайтесь без SIM-карты и электронной почты. Ноль утечек баз данных и ноль рекламных звонков.' }
    ],

    s1_kicker: 'Физическая и цифровая приватность',
    s1_title: 'Оставили телефон на столе? Никто не прочитает ваши чаты.',
    s1_text: 'Большинство утечек в жизни происходит не из-за хакеров, а когда кто-то берёт разблокированный телефон со стола или заглядывает через плечо.',
    s1_b1: '<strong>Автоблокировка за 15 секунд:</strong> 15 секунд без касания экрана — и сейф автоматически закрывается.',
    s1_b2: '<strong>Индивидуальный пароль на сообщение:</strong> Отправляйте пароли, документы и аудио под отдельным паролем прямо внутри чата.',
    s1_b3: '<strong>PIN-код на диалог:</strong> Защитите отдельные контакты на главном экране собственным PIN-кодом.',
    s1_cta: 'Скачать с автоблокировкой 15с',
    s1_badge: 'ЭКСКЛЮЗИВ',
    s1_callout: 'Даже если чужой человек держит ваш разблокированный телефон, сообщения под паролем остаются скрытыми.',

    s2_kicker: 'Полный контроль над отправленным',
    s2_title: 'Удалили у себя — исчезло у собеседника. А скриншот на 100% чёрный.',
    s2_text: 'В традиционных мессенджерах удаление сообщения оставляет следы в облачных бэкапах или неофициальных модах, тайно сохраняющих фото.',
    s2_b1: '<strong>Синхронная кнопка P2P Burn:</strong> Одно нажатие мгновенно уничтожает историю на вашем телефоне и на устройстве собеседника.',
    s2_b2: '<strong>Нативный щит Анти-Скрин:</strong> Блокировка на уровне ОС превращает любой скриншот или запись экрана в чёрный кадр.',
    s2_b3: '<strong>Никаких фото в общей галерее:</strong> Все медиафайлы изолированы и зашифрованы внутри хранилища приложения.',
    s2_cta: 'Попробовать кнопку P2P Burn',
    s2_badge: 'НОЛЬ СЛЕДОВ',
    s2_callout: 'Подтверждённое двустороннее уничтожение на 2 устройствах + 0 байт в облачных копиях.',

    s3_kicker: 'Голосовые P2P-звонки и приватные группы',
    s3_title: 'Чистые звонки и группы без раскрытия вашего номера незнакомцам.',
    s3_text: 'Вступали в общий чат и тут же начинали получать спам, потому что ваш номер увидели десятки чужих людей? В OnionTalk это исключено.',
    s3_b1: '<strong>OnionVoice (Бесплатные P2P-звонки):</strong> Прямые аудиозвонки со сквозным шифрованием без телефонных АТС.',
    s3_b2: '<strong>Вход в группы 100% бесплатный:</strong> Присоединяйтесь по приглашению в любые группы, не раскрывая телефон и IP-адрес.',
    s3_b3: '<strong>Честная поддержка через создание групп:</strong> Создание новых групп — наша начальная монетизация ($10 открывает 10 постоянных групп, либо 1 активный узел даёт 1 группу).',
    s3_cta: 'Создать P2P-профиль сейчас',
    s3_badge: 'БЕЗ SIM',
    s3_callout: 'В группах OnionTalk ни один участник не узнает вашу SIM-карту или оператора.',

    video_badge: 'Официальное видео • 1 минута 20 секунд',
    video_title: 'Посмотрите, как OnionTalk работает вживую',
    video_desc: 'Полная демонстрация удобного интерфейса, P2P-звонков, паролей на сообщения и синхронного удаления переписки.',

    cmp_tag: 'Сравнительная матрица архитектуры и приватности',
    cmp_title: 'Почему OnionTalk обеспечивает более высокое качество и безопасность?',
    cmp_desc: 'Сравните по ключевым параметрам, чем прямая P2P-архитектура OnionTalk превосходит обычные мессенджеры и решения без SIM вроде Zangi:',
    cmp_col_0_kicker: 'Технический и практический разбор',
    cmp_col_0_title: 'Критерий защиты',
    cmp_featured_badge: 'Максимум защиты',
    cmp_sub_onion: 'Прямой P2P • Без SIM',
    cmp_sub_zangi: 'Без SIM • Гибрид',
    cmp_sub_wa: 'Облако Meta (SIM)',
    cmp_sub_tg: 'Центр. облако (SIM)',
    cmp_sub_sg: 'Центр. сервер (SIM)',
    cmp_footnote: 'Открытый проверяемый протокол (MIT) • Нулевой сбор метаданных, адресной книги и GPS-геолокации.',
    cmp_footer_cta: 'Перейти на OnionTalk P2P →',
    cmp_rows: [
      {
        title: 'Регистрация без номера телефона / SIM',
        hint: 'Защита от спама и перехвата SIM-карты',
        onion: ['yes', '100% без SIM-карты', 'P2P ID и QR-код за 5 сек'],
        zangi: ['yes', 'Без SIM-карты', 'Внутренний вирт. номер'],
        wa: ['no', 'Требует SIM-карту', 'Привязка к номеру'],
        tg: ['no', 'Требует SIM-карту', 'SMS от оператора'],
        sg: ['no', 'Требует SIM-карту', 'Регистрация по номеру']
      },
      {
        title: 'Сетевая архитектура',
        hint: 'Как передаются ваши сообщения и звонки',
        onion: ['yes', 'Прямой P2P (0 КБ облако)', 'Напрямую телефон ↔ телефон'],
        zangi: ['warn', 'Гибридная маршрутизация', 'Серверы сигнализации'],
        wa: ['no', 'Центральные серверы', 'Метаданные в облаке Meta'],
        tg: ['no', 'Централизованное облако', 'История хранится на сервере'],
        sg: ['warn', 'Центральный сервер', 'Очередь + Google FCM']
      },
      {
        title: 'Пароль на отдельные сообщения',
        hint: 'Индивидуальный пароль внутри диалога',
        onion: ['yes', 'Нативно на сообщение', 'Отдельный замок в чате'],
        zangi: ['no', 'Отсутствует', 'Нет пароля на сообщение'],
        wa: ['no', 'Только вся папка', 'Нельзя закрыть 1 сообщение'],
        tg: ['no', 'Отсутствует', 'Нет пароля на сообщение'],
        sg: ['no', 'Отсутствует', 'Нет пароля на сообщение']
      },
      {
        title: 'Автоблокировка за 15 секунд на столе',
        hint: 'Быстрая защита оставленного телефона',
        onion: ['yes', 'Нативно (15с простоя)', 'Сам закрывает сейф'],
        zangi: ['no', 'Отсутствует', 'Нет таймера 15 секунд'],
        wa: ['no', 'От 1 мин / Вручную', 'Долгое окно уязвимости'],
        tg: ['warn', 'Вручную / 1 минута', 'Нужно нажать замок'],
        sg: ['warn', 'Ручная блокировка', 'Нет быстрого таймера 15с']
      },
      {
        title: 'Щит Анти-Скриншот (100% чёрный)',
        hint: 'Блокировка снимков и скрытой записи экрана',
        onion: ['yes', 'Во всём приложении', 'Аппаратный блок ОС'],
        zangi: ['warn', 'Частичная защита', 'Только в отдельных режимах'],
        wa: ['no', 'Только одноразовые фото', 'Обычный чат скриншотится'],
        tg: ['warn', 'Только Секретный чат', 'Открыто в обычных чатах'],
        sg: ['yes', 'Опционально в настр.', 'Выключено по умолчанию']
      },
      {
        title: 'Кнопка Burn (Удаление у обоих)',
        hint: 'Синхронное стирание без следов в бэкапах',
        onion: ['yes', 'Двусторонний Burn', 'Очищает оба + 0 КБ бэкап'],
        zangi: ['yes', 'Удалённая очистка', 'Стирает с обеих сторон'],
        wa: ['no', 'Следы в облаке/модах', 'Копии в бэкапах'],
        tg: ['warn', 'Зависит от облака', 'Под контролем сервера'],
        sg: ['warn', 'Таймер исчезновения', 'Нет кнопки полного Burn']
      },
      {
        title: 'Скрытие реального IP-адреса',
        hint: 'Защита от вычисления локации по соединению',
        onion: ['yes', 'Всегда скрыт (Zero-IP)', 'Встроенная анонимная сеть'],
        zangi: ['no', 'Раскрывает IP сети', 'Обычное IP-подключение'],
        wa: ['no', 'Логирует IP и гео', 'Постоянный сбор IP'],
        tg: ['no', 'Хранит IP в облаке', 'Логи на серверах'],
        sg: ['warn', 'Только релей звонков', 'Опционально для голоса']
      },
      {
        title: 'Модель финансирования',
        hint: 'За счёт чего живёт проект без продажи данных',
        onion: ['yes', 'Донаты + Созд. групп', 'Ноль рекламы • Ноль данных'],
        zangi: ['warn', 'Freemium / B2B', 'Закрытая частная компания'],
        wa: ['no', 'Экосистема данных Meta', 'Рекламное профилирование'],
        tg: ['no', 'Реклама и подписка', 'Реклама в каналах'],
        sg: ['yes', 'Некоммерческий фонд', 'Пожертвования']
      }
    ],

    sus_tag: 'Прозрачность и независимость',
    sus_title: 'Ноль рекламы. Ноль продажи данных. Как мы существуем?',
    sus_desc: 'В отличие от техногигантов, вы никогда не являетесь товаром. Сейчас OnionTalk развивается за счёт <strong>добровольных пожертвований сообщества</strong> и использует <strong>создание приватных групп как начальную монетизацию</strong>.',
    don_badge: 'Сейчас проект живёт благодаря донатам',
    don_title: '1. Добровольные пожертвования сохраняют сеть свободной',
    don_desc: 'Поскольку наша архитектура P2P (телефон напрямую к телефону), у нас нет многомиллионных расходов на дата-центры слежки. Сегодня мы напрямую опираемся на поддержку пользователей, ценящих приватность:',
    btn_copy: 'Копировать',
    btn_copied: 'Скопировано! ✓',
    don_other_title: 'Хотите поддержать другим способом?',
    don_other_desc: ' Напишите нашему администратору прямо в приложении или в Instagram ',
    btn_copy_admin: 'Скопировать ID админа для приложения',

    grp_badge: 'Честная начальная монетизация без рекламы',
    grp_title: '2. Приватные группы как форма начальной монетизации',
    grp_desc: 'Чтобы личные чаты и звонки навсегда оставались бесплатными и без рекламы, только <strong>создание новых приватных групп</strong> служит нашей начальной монетизацией:',
    grp_t1_pill: '100% БЕСПЛАТНО',
    grp_t1_text: '<strong>Личные чаты 1-на-1, звонки и вход в группы:</strong> участие в любых группах по приглашению полностью бесплатно для всех участников.',
    grp_t2_pill: '$10 РАЗОВО',
    grp_t2_text: '<strong>Пропуск создателя групп (FounderPass):</strong> разовый взнос $10 USD открывает создание до <strong>10 постоянных приватных групп</strong> (до 64 участников, с функцией общего Burn).',
    grp_t3_pill: 'P2P АЛЬТЕРНАТИВА',
    grp_t3_text: '<strong>1 Активный узел = 1 Группа бесплатно:</strong> хотите помочь инфраструктурой? Запустите 1 бесплатный Relay-узел на Android или в Docker и получите 1 группу.',
    grp_cta: 'Скачать бесплатно и открыть группы',

    faq_tag: 'Частые вопросы',
    faq_title: 'Простые вопросы, честные ответы',
    faq_q1: 'Приложение действительно бесплатное? За счёт чего вы живёте без рекламы?',
    faq_a1: 'Да, OnionTalk <strong>на 100% бесплатен в Google Play Store</strong> и не показывает никакой рекламы. Поскольку наша архитектура P2P (смартфоны соединяются напрямую друг с другом), у нас нет миллионных затрат на гигантские дата-центры для хранения миллиардов чужих фото и видео.<br /><br /><strong>В данный момент мы зависим от добровольных пожертвований сообщества</strong> для развития проекта, а <strong>создание приватных групп является нашей начальной формой монетизации</strong>: личные чаты 1-на-1, голосовые звонки и вступление в группы по приглашению полностью бесплатны; только создание новых групп требует разовой поддержки ($10 за 10 постоянных групп, либо 1 группа бесплатно при запуске сетевого узла).',
    faq_q2: 'Как добавлять друзей, если OnionTalk не использует номер телефона?',
    faq_a2: 'Так же просто, как отсканировать QR-код: при первом запуске приложение за 5 секунд создаёт ваш <strong>QR-код и P2P ID контакта</strong>. Покажите QR-код другу или отправьте приглашение — не раскрывая личный номер.',
    faq_q3: 'Что будет, если у собеседника выключен интернет в момент отправки?',
    faq_a3: 'Сообщение остаётся запечатанным сквозным шифрованием и доставляется автоматически, как только устройства снова выходят в P2P-сеть, без хранения открытой истории на серверах.',
    faq_q4: 'Я из сферы ИБ / разработки: какое шифрование используется внутри?',
    faq_a4_intro: 'Для инженеров и аудиторов безопасности OnionTalk сочетает анонимный P2P-транспорт с гибридной постквантовой криптографией:',
    faq_a4_specs: '• Анонимный P2P-транспорт Zero-IP: Прямая маршрутизация через скрытые сервисы v3 (без серверов аккаунтов и без Google FCM)<br />• Постквантовый обмен ключами (PQC): Гибрид X25519 + NIST FIPS 203 ML-KEM-768<br />• Симметричное шифрование чатов, групп и голоса: ChaCha20-Poly1305 AEAD (256 бит) + HKDF-SHA256 + Ed25519<br />• Локальное хранилище: SQLCipher AES-256 с PBKDF2-HMAC-SHA256 + Android Hardware Keystore<br />• Защита экрана ОС: WindowManager.LayoutParams.FLAG_SECURE (100% чёрный скриншот и запись экрана)',
    faq_q5: 'Правовые оговорки, отказ от ответственности и Политика конфиденциальности',
    faq_a5: 'Экосистема <strong>OnionTalk</strong> (<code>org.oniontalk.messenger</code>) работает по архитектуре <strong>Zero-Knowledge</strong> под лицензией MIT (<em>AS IS</em>). Из-за отсутствия центральных серверов и мастер-ключей разработчики технически не могут восстановить забытые пароли или прочитать сообщения. Пожертвования добровольны. Полный текст: <a href="privacy.html" style="color:var(--emerald-dark); font-weight:700;">Официальная Политика конфиденциальности (Google Play)</a>.',

    ft_cta_title: 'Готовы общаться без посторонних глаз?',
    ft_cta_desc: 'Скачайте бесплатно в Google Play менее чем за 30 секунд. Без регистрации телефона и без рекламы.',
    ft_cta_btn: 'Скачать бесплатно в Google Play',
    ft_donate_btn: 'Поддержать донатом',
    ft_tagline: '• Прямая приватность с телефона на телефон',
    ft_privacy_link: 'Политика конфиденциальности (Google Play)',
    cmp_swipe_hint: '← Проведите в сторону для сравнения всех приложений →',
    ft_copy: '© 2026 OnionTalk • Поддерживается сообществом и донатами • Ноль центральных серверов.'
  }
};

let currentLang = 'pt';
let currentChargeIdx = 0;
let unlockedState = false;
let currentSimMode = 'default';

function renderCell(cellArr) {
  const [status, mainText, subText] = cellArr;
  const iconHtml = SVG_ICONS[status] || SVG_ICONS.no;
  return `
    <div class="verdict-cell">
      ${iconHtml}
      <div>
        <div class="verdict-main">${mainText}</div>
        <div class="verdict-sub">${subText}</div>
      </div>
    </div>
  `;
}

function renderComparisonTable(dict) {
  const tbody = document.getElementById('comparison-tbody');
  if (!tbody || !dict.cmp_rows) return;
  tbody.innerHTML = dict.cmp_rows.map(row => `
    <tr>
      <td class="col-criteria">
        <div class="criteria-title">${row.title}</div>
        <div class="criteria-hint">${row.hint}</div>
      </td>
      <td class="col-featured">${renderCell(row.onion)}</td>
      <td>${renderCell(row.zangi)}</td>
      <td>${renderCell(row.wa)}</td>
      <td>${renderCell(row.tg)}</td>
      <td>${renderCell(row.sg)}</td>
    </tr>
  `).join('');
}

function selectCharge(idx) {
  currentChargeIdx = idx;
  const dict = I18N[currentLang] || I18N.pt;
  const item = dict.charges[idx];
  const imgEl = document.getElementById('active-charge-img');
  if (imgEl && CHARGE_IMAGES[idx]) imgEl.src = CHARGE_IMAGES[idx];
  if (item) {
    document.getElementById('active-charge-title').textContent = item.title;
    document.getElementById('active-charge-desc').textContent = item.desc;
  }
  for (let i = 0; i < 5; i++) {
    const btn = document.getElementById('tab-charge-' + i);
    if (btn) btn.classList.toggle('active', i === idx);
  }
}

function triggerSimMode(mode) {
  const dict = I18N[currentLang] || I18N.pt;
  const overlay = document.getElementById('sim-overlay');
  const overlayTitle = document.getElementById('sim-overlay-title');
  const overlayDesc = document.getElementById('sim-overlay-desc');
  const lockedText = document.getElementById('sim-locked-text');
  const toastText = document.getElementById('sim-toast-text');

  ['password', 'antiprint', 'autolock', 'burn'].forEach(id => {
    const btn = document.getElementById('btn-sim-' + id);
    if (btn) btn.classList.toggle('active', id === mode);
  });

  currentSimMode = mode;

  if (mode === 'password') {
    overlay.classList.remove('visible');
    unlockedState = !unlockedState;
    if (unlockedState) {
      lockedText.innerHTML = dict.sim_unlocked_html;
      toastText.textContent = dict.sim_toast_pw_open;
    } else {
      lockedText.innerHTML = `••••••••••••••••••••••<br /><em>${dict.sim_locked_hint}</em>`;
      toastText.textContent = dict.sim_toast_pw_closed;
    }
  } else if (mode === 'antiprint') {
    overlay.classList.add('visible');
    overlayTitle.textContent = dict.sim_ov_print_title;
    overlayDesc.textContent = dict.sim_ov_print_desc;
    toastText.textContent = dict.sim_toast_print;
  } else if (mode === 'autolock') {
    overlay.classList.add('visible');
    overlayTitle.textContent = dict.sim_ov_lock_title;
    overlayDesc.textContent = dict.sim_ov_lock_desc;
    toastText.textContent = dict.sim_toast_lock;
  } else if (mode === 'burn') {
    overlay.classList.add('visible');
    overlayTitle.textContent = dict.sim_ov_burn_title;
    overlayDesc.textContent = dict.sim_ov_burn_desc;
    toastText.textContent = dict.sim_toast_burn;
  }
}

function resetSim() {
  document.getElementById('sim-overlay').classList.remove('visible');
}

function copyText(text, btnEl) {
  const dict = I18N[currentLang] || I18N.pt;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
  }
  if (btnEl) {
    const prev = btnEl.textContent;
    btnEl.textContent = dict.btn_copied;
    btnEl.style.background = '#059669';
    setTimeout(() => {
      btnEl.textContent = prev;
      btnEl.style.background = '';
    }, 1800);
  }
}

function setLang(lang) {
  currentLang = I18N[lang] ? lang : 'pt';
  const dict = I18N[currentLang];

  document.documentElement.lang = { pt: 'pt-BR', en: 'en', es: 'es', ru: 'ru' }[currentLang] || 'pt-BR';
  document.title = dict.page_title;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  ['pt', 'en', 'es', 'ru'].forEach(code => {
    const btn = document.getElementById('btn-lang-' + code);
    if (btn) btn.classList.toggle('active', code === currentLang);
  });

  // Re-render comparison matrix & active cartoon & active phone state in chosen language
  renderComparisonTable(dict);
  selectCharge(currentChargeIdx);

  const lockedText = document.getElementById('sim-locked-text');
  if (lockedText) {
    lockedText.innerHTML = unlockedState
      ? dict.sim_unlocked_html
      : `••••••••••••••••••••••<br /><em>${dict.sim_locked_hint}</em>`;
  }
  if (currentSimMode === 'antiprint') {
    document.getElementById('sim-overlay-title').textContent = dict.sim_ov_print_title;
    document.getElementById('sim-overlay-desc').textContent = dict.sim_ov_print_desc;
  } else if (currentSimMode === 'autolock') {
    document.getElementById('sim-overlay-title').textContent = dict.sim_ov_lock_title;
    document.getElementById('sim-overlay-desc').textContent = dict.sim_ov_lock_desc;
  } else if (currentSimMode === 'burn') {
    document.getElementById('sim-overlay-title').textContent = dict.sim_ov_burn_title;
    document.getElementById('sim-overlay-desc').textContent = dict.sim_ov_burn_desc;
  }

  try { localStorage.setItem('oniontalk_site_lang', currentLang); } catch (_) {}
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const urlLang = params.get('lang');
  let savedLang = null;
  try { savedLang = localStorage.getItem('oniontalk_site_lang'); } catch (_) {}
  const initialLang = (urlLang && I18N[urlLang]) ? urlLang : ((savedLang && I18N[savedLang]) ? savedLang : 'pt');
  setLang(initialLang);
});
