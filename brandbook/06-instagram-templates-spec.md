# UNLMTD — Especificação de Templates Instagram
*Visual Generator + Design System Architect | 2026-03-27*

---

## Princípios Visuais para Social

1. **Reconhecível sem ler o nome** — o grid UNLMTD tem cara própria
2. **Tipografia massiva como elemento visual** — não só como texto
3. **Espaço negativo intencional** — o vazio também comunica
4. **Alternância dark/light** — cria ritmo no feed
5. **Sem filtro genérico** — fotos em P&B ou tratamento flat

---

## FEED 4:5 — 1080 × 1350px

### Template F1 — Editorial de Texto (Manifesto/Declarações)

**Conceito:** Texto grande como imagem. Sem foto. Só tipografia + cor.

**Versão Dark:**
```
Fundo:          UNLMTD Black (#0D0D0D)
Texto principal: Canela Display Regular, cream (#EDE8DC)
                 72-96px, tracking -0.03em
Subtexto:       Neue Haas Grotesk Light, cream 60% opacidade
                 16px, tracking 0.05em, uppercase
Logo:           Wordmark cream, canto superior direito, 120px
Margem interna: 64px todos os lados
```

**Versão Light:**
```
Fundo:          UNLMTD Cream (#EDE8DC)
Texto principal: Canela Display Regular, black (#0D0D0D)
                 72-96px, tracking -0.03em
Subtexto:       Neue Haas Grotesk Light, black 50% opacidade
Logo:           Wordmark black, canto superior direito, 120px
Margem interna: 64px todos os lados
```

**Estrutura de conteúdo:**
```
[LOGO]                              (topo direito)

[TEXTO PRINCIPAL]                   (centro-esquerdo)
máx 3 linhas
máx 40 caracteres por linha

[subtexto opcional]                 (abaixo do texto principal)
máx 1 linha, caps, tracking wide
```

---

### Template F2 — Case/Projeto

**Conceito:** Imagem de projeto com overlay e identificação da marca.

**Estrutura:**
```
Fundo:          Imagem do projeto (full bleed)
Overlay:        Black 40% (versão dark) ou Cream 30% (versão light)
LOGO:           Wordmark cream ou black, topo direito
Título do case: Canela Display, 48-64px, rodapé esquerdo
Cliente:        Neue Haas Grotesk Medium, 14px caps, acima do título
Linha divisória: 1px, cor do texto, 80px de comprimento
```

**Tratamento de foto:**
- Preto e branco preferencial (mantém identidade editorial)
- Cor flat aceitável quando faz parte da identidade do cliente
- Nunca foto com filtro Instagram genérico

---

### Template F3 — Dado/Estatística

**Conceito:** Número grande como protagonista. Contexto em texto pequeno.

**Estrutura Dark:**
```
Fundo:          UNLMTD Black (#0D0D0D)
Número:         Canela Display Regular, 120-160px, cream
Unidade:        Neue Haas Grotesk Regular, 32px, cream, alinhado à base do número
Contexto:       Neue Haas Grotesk Light, 16px, cream 60%, abaixo do número
Acento:         Linha horizontal Terra (#C4622D), 2px, 80px, acima do número
Logo:           Wordmark cream, rodapé direito
```

---

## STORIES 9:16 — 1080 × 1920px

### Template S1 — Anúncio/Novidade

**Conceito:** Impacto imediato. Texto grande no topo. CTA no final.

**Estrutura:**
```
Zona segura superior (250px): Logo centralizado
Zona de conteúdo (centro):
  Título:     Canela Display, 80-96px, máx 3 linhas
  Subtítulo:  Neue Haas Grotesk Regular, 20px
Zona segura inferior (250px):
  CTA:        Neue Haas Grotesk Medium, 16px caps
              Pill button: 560×72px, raio 36px
```

**Versões:** Dark (black + cream) e Light (cream + black)

---

### Template S2 — Pergunta/Interação

**Conceito:** Pergunta central. Espaço para sticker de enquete do Instagram.

**Estrutura:**
```
Zona segura superior: Logo
Pergunta:     Canela Display Italic, 64-80px, centralizado
              máx 4 linhas
Sticker zone: 600×200px, centralizado verticalmente
              (espaço reservado para sticker nativo do Instagram)
Hashtag:      Neue Haas Grotesk Light, 14px, rodapé
```

---

### Template S3 — Bastidores/Behind the Scenes

**Conceito:** Foto pessoal com identidade da marca. Mais humano, menos produzido.

**Estrutura:**
```
Foto:         Full bleed, sem crop artificial
Overlay:      Gradiente black 0% → 60% (apenas no terço inferior)
Texto:        Neue Haas Grotesk Regular, 20px, cream, rodapé
Logo:         Wordmark cream, 100px, canto superior esquerdo
```

---

## Grid Sugerido para o Feed

Sequência de 9 posts que funciona como uma grade visual coesa:

```
[F1-dark]   [F2-case]   [F1-light]
[F3-dado]   [F1-dark]   [F2-case]
[F1-light]  [F3-dado]   [F1-dark]
```

**Princípio:** Nunca dois templates iguais seguidos. Alternância dark/light garante ritmo. Máx 2 posts F2 (com foto) por 9 posts.

---

## Especificações Técnicas de Exportação

| Formato | Dimensão | Resolução | Formato | Modo de cor |
|---|---|---|---|---|
| Feed 4:5 | 1080×1350px | 72dpi | PNG ou JPG 95% | RGB |
| Stories | 1080×1920px | 72dpi | PNG ou JPG 95% | RGB |
| Feed quadrado | 1080×1080px | 72dpi | PNG ou JPG 95% | RGB |
