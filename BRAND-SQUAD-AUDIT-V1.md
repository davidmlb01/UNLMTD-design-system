# UNLMTD: Auditoria Brand Squad + Copy Squad
## Design System + Identidade Visual + Tom de Voz

**Data:** 2026-05-07
**Avaliadores:** 9 designers + 3 voice agents
**Score anterior:** 8.5/10 (auditoria interna 2026-03-27)
**Material auditado:** brandbook (14 arquivos), DESIGN.md, tone-of-voice.md

---

## SCORE CONSOLIDADO

| Designer | Area | Score | Veredicto |
|----------|------|-------|-----------|
| Saul Bass | Mark/Simbolo | 80/100 | BOM: ∞ forte, wordmark custom, falta responsivo |
| Paula Scher | Tipografia | 92/100 | EXCELENTE: Canela + Neue Haas e sofisticado e proprietario |
| Paula Scher | Cor | 88/100 | MUITO BOM: paleta coerente, falta estados semanticos |
| Massimo Vignelli | Grid/Guidelines | 75/100 | BOM: tokens definidos, falta grid modular documentado |
| Wally Olins | Arquitetura | 55/100 | PARCIAL: submarcas (Video, Digital, IA) sem spec |
| Michael Bierut | Digital/Responsivo | 60/100 | PARCIAL: sem favicon, sem OG, sem responsive mark |
| Stefan Sagmeister | Emocao/Fotografia | 70/100 | BOM: manifesto forte, falta direcao de fotografia |
| Dieter Rams | Produto como marca | N/A | Nao aplicavel (UNLMTD nao e produto digital) |
| Muller-Brockmann | Dados/Grid | 78/100 | BOM: templates com grid, falta baseline rigoroso |
| Karin Fong | Motion | 35/100 | INSUFICIENTE: nenhum motion guideline |
| Lee Clow | Voice System | 72/100 | BOM: voz definida, falta modulacao e belief formal |
| Olivetto | Voz BR | 85/100 | MUITO BOM: manifesto e tom excepcionais |
| Mohallem | Headlines | 45/100 | PARCIAL: exemplos por contexto, falta banco de titulos |

**SCORE MEDIO: 69.5/100 (anterior: 85/100)**

**Nota:** o score anterior de 8.5/10 foi auto-avaliacao. A auditoria do Brand Squad e mais rigorosa porque avalia dimensoes que nao existiam no checklist anterior (motion, voice system, responsivo, arquitetura de submarcas).

---

## AVALIACOES DETALHADAS

### Saul Bass (Mark/Simbolo): 80/100

**Pontos fortes:**
- Simbolo ∞ multi-linha concentrico: conceito forte, proprietario, memoravel
- Wordmark com swashes customizados: impossivel de copiar, identidade unica
- Regra de clear space definida (altura da letra U / raio do simbolo)
- Reducao minima documentada (120px digital, 35mm print)
- 4 variantes de cor definidas

**Problemas:**
1. **Nao existe versao responsiva do mark.** O ∞ funciona em 48px, mas entre 16-32px (favicon, app icon) nao ha spec. Que versao simplificada usar em 16px?
2. **Nenhum asset vetorial disponivel.** O brandbook diz "usar SEMPRE asset vetorial" mas os SVGs nao foram fornecidos. Sem SVG, a marca nao pode ser implementada.
3. **Falta construcao geometrica.** Como o ∞ e construido? Quais proporcoes? Sem spec de construcao, cada designer vai interpretar diferente.

**Recomendacao:**
- Criar favicon-size variant (simplificar o ∞ para 1-2 linhas em 16px)
- David providenciar SVGs do wordmark e simbolo (BLOQUEADOR)
- Documentar construcao geometrica do ∞ (raio, espessura das linhas, proporcoes)

---

### Paula Scher (Tipografia): 92/100

**Pontos fortes:**
- Sistema dual-family Canela + Neue Haas e EXCEPCIONAL
- O contraste serif ornamental vs sans modernista E a marca
- Escala modular completa (display-xl ate label) com tokens CSS
- Tracking definido por nivel (-0.03em display, 0 body, +0.05em labels)
- Regras de uso claras (Canela nunca abaixo de 24px, nunca ALL CAPS)
- Alternativas gratuitas definidas (DM Serif Display + Inter)

**Problemas:**
1. **Licencas nao adquiridas.** Canela (Commercial Type) e Neue Haas Grotesk (Monotype) sao pagas. Sem licenca, o site usa DM Serif + Inter, que sao boas mas nao sao a marca.
2. **Falta responsive type scale.** Os tamanhos sao definidos para desktop. Em mobile, display-xl a 96px nao cabe. Precisa de breakpoints tipograficos.

**Recomendacao:**
- Priorizar licenciamento (Canela e a identidade da marca, sem ela e outra marca)
- Criar scale mobile: display-xl 48-56px, H1 36-40px, H2 28-32px em telas <768px
- Documentar fluid typography (clamp() em CSS)

---

### Paula Scher (Cor): 88/100

**Pontos fortes:**
- Paleta primorosamente curada: cada cor tem conceito, nao so hex
- Black (#0D0D0D, NAO #000000) tem "calor". Detalhe sofisticado.
- Cream (#EDE8DC) com spec Pantone precisa. Nao e "bege generico".
- Hierarquia de uso clara (sempre, pontual 20%, funcional, nunca juntos)
- WCAG documentado com ratios exatos
- Combinacoes aprovadas E reprovadas com tabela

**Problemas:**
1. **Cores semanticas de estado ausentes.** Nao ha cor para erro, sucesso, warning, info. Se a UNLMTD tiver qualquer interface digital (site com formulario, dashboard futuro), precisa dessas cores.
2. **Cream sobre Terra falha WCAG** (3.2:1, apenas texto grande). Documentado, mas nao ha alternativa sugerida para quando Terra e background.

**Recomendacao:**
- Adicionar semanticas: Success #22C55E, Error #EF4444, Warning #F59E0B, Info #3B82F6 (cores neutras que nao competem com a paleta)
- Para Terra como background: usar Black como texto (nao Cream). Documentar.

---

### Massimo Vignelli (Grid/Guidelines): 75/100

**Pontos fortes:**
- Spacing scale completo (4px base, 12 niveis ate 128px)
- Grid de 12 colunas com gutter 24px para apresentacao
- Templates de Instagram, presentation e proposta com specs detalhados
- Margens definidas por formato (64px Instagram, 80px presentation, 20mm A4)

**Problemas:**
1. **Grid nao esta documentado como SISTEMA.** Os templates usam grid, mas nao ha um "grid system page" no brandbook explicando a logica.
2. **Sem baseline grid.** Spacing scale existe, mas nao ha alinhamento vertical sistematico.
3. **Sem container max-width para web.** Se o site for construido, qual e a largura maxima? 1200px? 1440px?

**Recomendacao:**
- Criar pagina "Grid System" no brandbook com: colunas, baseline, margens por formato
- Definir container max-width para web (recomendo 1280px, gutter 24px, margem 32px)
- Definir baseline grid: 8px (todos os espacamentos verticais multiplos de 8)

---

### Wally Olins (Arquitetura): 55/100

**Pontos fortes:**
- UNLMTD como marca-mae esta bem definida (manifesto, voz, visual)
- Simbolo ∞ como marca unificadora e forte

**Problemas:**
1. **Submarcas (Video, Digital, IA) sem spec.** A auditoria anterior ja apontou isso. Como UNLMTD Video se relaciona visualmente com UNLMTD mae? Cor propria? Descritor? Mesma tipografia?
2. **Modelo de arquitetura nao declarado.** E Branded House (como Destaka)? E Endorsed? O manifesto diz "plural", mas a execucao visual das submarcas nao existe.
3. **Sem regra de co-branding.** Quando a UNLMTD aparece ao lado de um cliente (Google, Coca-Cola), qual e a hierarquia? Tamanho relativo? Posicao?

**Recomendacao:**
- Definir modelo: Branded House (UNLMTD + descriptor funcional, ex: "UNLMTD Video")
- Criar spec de submarca: mesma tipografia, mesmo ∞, cor diferente? Ou mesma cor, descriptor diferente?
- Criar regra de co-branding (UNLMTD + logo cliente lado a lado, proporcoes, clear space)

---

### Michael Bierut (Digital/Responsivo): 60/100

**Pontos fortes:**
- Tokens CSS definidos (variaveis para fontes, cores, spacing)
- Alternativas web gratuitas definidas (DM Serif + Inter)
- Rounded scale inclui 0px (sharp, on-brand) ate pill

**Problemas:**
1. **Sem favicon.** Nenhuma spec de como o ∞ funciona em 16px.
2. **Sem OG image.** Quando alguem compartilha o link da UNLMTD no WhatsApp/LinkedIn, o que aparece?
3. **Sem responsive breakpoints.** Tipografia, grid e componentes sao desktop-only.
4. **Sem dark mode spec formal.** A marca E dark (black primary), mas quando o fundo e cream, como os componentes se adaptam?

**Recomendacao:**
- Criar favicon: ∞ simplificado em 16x16, 32x32, 180x180, 512x512
- Criar OG image template: black background + wordmark cream + titulo
- Definir breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Documentar "dark page" vs "cream page" como dois modos oficiais (nao e dark mode toggle, e alternancia editorial)

---

### Stefan Sagmeister (Emocao/Fotografia): 70/100

**Pontos fortes:**
- Manifesto e EXCEPCIONAL. Carregado de emocao, autenticidade, brasilidade.
- "Ziriguigum e mojo" e memoravel. "Bossa nova, jazz e roda de samba. Tudo junto."
- A marca TEM alma. Nao e uma marca corporativa vestida de cool.
- Templates de Instagram com F2-case (foto + overlay) demonstram direcao visual

**Problemas:**
1. **Sem direcao de fotografia formal.** O F2-case template diz "Foto full bleed + overlay black 40%" mas nao diz: que tipo de foto? P&B? Colorida? Estudio? Bastidores? Qual o tom?
2. **Sem direcao de ilustracao.** A UNLMTD usa ilustracoes? Se sim, qual estilo?
3. **Sem "brand moments".** O manifesto e lindo, mas como ele se manifesta visualmente alem do texto? Qual e o equivalente visual do "abraco apertado"?

**Recomendacao:**
- Criar direcao de fotografia: recomendo P&B (coerente com black/cream), bastidores reais, pessoas trabalhando juntas (cocriacao), NUNCA stock. Colorida apenas com filtro editorial (desaturado, contraste alto).
- Nao usar ilustracoes (a marca e tipografica, ilustracao dilui)
- Brand moment: o momento em que o ∞ aparece grande, dominando o espaco, com uma frase do manifesto. E o "abraco visual".

---

### Karin Fong (Motion): 35/100

**Pontos fortes:**
- Nenhum. Nao existe motion guideline.

**Problemas:**
1. **Zero motion specs.** Como o ∞ anima? Como o wordmark entra? Como as paginas transicionam? Nada definido.
2. **Para um site, isso e CRITICO.** Sem motion, o site sera estatico e nao vai refletir a energia do manifesto.

**Recomendacao:**
- ∞ animation: as linhas do ∞ se desenham sequencialmente (draw-on), revelando a forma camada por camada. Personalidade: artesanal, preciso, nunca apressado.
- Page transitions: fade cross, 300ms, ease-out
- Scroll: elementos entram com fade-in-up, stagger 50ms
- Hover: buttons scale 1.02 + darken, 200ms
- Timing: micro 100ms, small 200ms, medium 350ms, large 500ms
- Easing: ease-out para entradas, ease-in para saidas

---

### Lee Clow (Voice System): 72/100

**Pontos fortes:**
- 6 principios de comunicacao bem definidos (plural, direto, anti-corporativo, curioso, brasileiro, sem ego)
- Escala de tom (formal 3, serio 5, irreverente 6, entusiasmado 7) e util
- Vocabulario ON/OFF documentado (50+ palavras)
- Guia por contexto (social, apresentacao, proposta, email) com exemplos

**Problemas:**
1. **Sem core belief formal.** Os principios estao la, mas falta o statement raiz: "A UNLMTD acredita que ____." De onde tudo deriva.
2. **Sem modulacao por intensidade.** O guia por contexto e bom, mas falta o espectro whisper-to-shout: como a UNLMTD sussurra (footer, legenda) vs como grita (manifesto, campanha)?
3. **Sem naming conventions.** Como a UNLMTD nomeia coisas? Servicos? Formatos de trabalho? O "UNLMTD Video" segue que logica?

**Recomendacao:**
- Core belief: "Cocriacao radical produz trabalho que formulas nao conseguem."
- Whisper: footer, legenda, credito. Tom: minimal, 2-3 palavras max. "UNLMTD, 2026."
- Conversa: email, DM, social reply. Tom: "a gente", quente, sem formalidade.
- Statement: apresentacao, site, proposta. Tom: confiante, direto, com dados.
- Shout: manifesto, campanha, video. Tom: poetico, ritmado, emocional. Maximo volume.
- Naming: "[UNLMTD] + [disciplina em portugues]": UNLMTD Video, UNLMTD Digital, UNLMTD IA

---

### Washington Olivetto (Voz BR): 85/100

**Pontos fortes:**
- O manifesto e OBRA-PRIMA de voz de marca brasileira. "E ziriguigum e mojo" e inesquecivel.
- O tom "a gente" e genuino, nao performado. Nao e startup fingindo ser casual.
- As construcoes "UNLMTD nao e X. E Y." criam ritmo e memorabilidade.
- A brasilidade e real (bossa nova, samba, Bruce Lee) sem ser caricata.

**Problemas:**
1. **Falta frase-identidade.** O manifesto tem varias frases fortes, mas nenhuma FOI ESCOLHIDA como a frase principal. Qual e a "Nao e assim uma Brastemp" da UNLMTD?
2. **Falta territorio verbal de longo prazo.** O manifesto e lindo para ser lido uma vez. Mas qual e o conceito que gera CAMPANHAS por anos?

**Candidatas a frase-identidade:**
1. "Sem caixa, sem rotulos." (mais curto, mais forte)
2. "E um convite a fazer diferente." (mais aberto, mais inclusivo)
3. "A gente nao acredita em bala de prata. E na transpiracao mesmo." (mais honesto, mais Olivetto)
4. "Cocriacao sem limites." (mais literal, menos poetico)

**Recomendacao:** David escolher UMA dessas (ou outra do manifesto) como frase-identidade principal que vai em toda peca, toda assinatura, todo email.

---

### Eugenio Mohallem (Headlines): 45/100

**Pontos fortes:**
- Os exemplos no guia por contexto sao bons ("A gente esteve la." para clientes)
- O anti-headline da apresentacao e brilhante: "Aqui deveria entrar um texto sedutor... mas isso e tao mais do mesmo, ne?"

**Problemas:**
1. **Sem banco de titulos.** Nao ha 10-20 headlines prontas para usar em diferentes situacoes.
2. **Sem titulo para o site.** Qual e o H1 da homepage?
3. **Sem titulos para social.** Posts no Instagram precisam de frases de impacto recorrentes.

**Recomendacao:** Criar banco de 15-20 titulos UNLMTD:
1. **Site H1:** "A gente nao sabia o que era UNLMTD. Por isso criamos do zero."
2. **Site servicos:** "Problema. Analise. Time. Solucao. Assim a gente funciona."
3. **Site clientes:** "Google, Coca-Cola, Heineken. A gente esteve la."
4. **Instagram feed:** "Quando a gente muda o processo pra melhorar o resultado, a gente pode ir UNLMTD."
5. **Instagram dado:** "[Numero]. [Contexto]. [Frase curta de impacto]."
6. **LinkedIn:** "A gente descobriu que equipes enxutas chegam mais longe. Na maioria das vezes."
7. **Proposta capa:** "Isso nao e uma proposta. E um convite."
8. **Email assinatura:** "Qualquer duvida, a gente ta aqui."
9. **Recrutamento:** "Sem caixa, sem rotulos. Sem vagas tambem. Tem convites."
10. **404 page:** "A gente foi longe demais. Essa pagina nao existe."

---

## RESUMO EXECUTIVO

### Os 5 problemas mais graves

| # | Problema | Score | Impacto |
|---|---------|-------|---------|
| 1 | **SVGs do mark nao existem** (Bass) | BLOQUEADOR | Sem SVG, NENHUMA peca pode ser implementada |
| 2 | **Motion inexistente** (Fong: 35/100) | CRITICO | Site sera estatico, nao reflete energia da marca |
| 3 | **Submarcas sem spec** (Olins: 55/100) | GRAVE | UNLMTD Video, Digital, IA sem identidade visual |
| 4 | **Sem responsive/digital** (Bierut: 60/100) | GRAVE | Favicon, OG image, breakpoints ausentes |
| 5 | **Fontes nao licenciadas** (Scher) | GRAVE | Sem Canela + Neue Haas, marca usa substitutos |

### Os 5 pontos fortes (manter e amplificar)

| # | Ponto forte | Score | Por que e excepcional |
|---|------------|-------|----------------------|
| 1 | **Tipografia** (Scher: 92) | EXCELENTE | Canela + Neue Haas e o DNA visual da marca |
| 2 | **Cor** (Scher: 88) | MUITO BOM | Paleta com conceito, WCAG, Pantone, hierarquia |
| 3 | **Voz BR** (Olivetto: 85) | MUITO BOM | Manifesto e obra-prima, tom genuino |
| 4 | **Mark** (Bass: 80) | BOM | ∞ concentrico e forte e memoravel |
| 5 | **Templates** (M-Brockmann: 78) | BOM | Instagram, presentation, proposta com specs |

### Decisoes que David precisa tomar

1. **Providenciar SVGs do wordmark e simbolo ∞** (bloqueador absoluto)
2. **Licenciar Canela + Neue Haas Grotesk** (ou aceitar DM Serif + Inter como permanentes)
3. **Escolher frase-identidade** entre as 4 candidatas (ou outra do manifesto)
4. **Definir modelo de submarcas:** UNLMTD Video usa cor propria? Descritor diferente? Mesmo ∞?
5. **Direcao de fotografia:** P&B editorial (recomendacao) ou colorida desaturada?

---

*Auditoria realizada pelo Brand Squad (9 designers) + Copy Squad Tier 1E (3 voice agents).*
*Score anterior: 85/100 (auto-avaliacao). Score Brand Squad: 69.5/100 (auditoria rigorosa).*
*Proximo passo: David resolver bloqueadores, depois squad executa gaps.*
