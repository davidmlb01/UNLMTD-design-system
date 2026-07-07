# UNLMTD — Digital & Responsive Specs
*Brand Squad: Michael Bierut (digital identity) | 2026-05-07*

---

## Responsive Mark System

O wordmark UNLMTD funciona em 4 variantes de escala:

| Variante | Altura | Contexto |
|----------|--------|----------|
| Full | 48px+ | Hero, capa, poster, apresentação |
| Default | 36px | Header de site, cards |
| Compact | 24px | Nav, assinatura de email, mobile header |
| Minimum | 16px | Favicon fallback, menções inline |

**Regra:** abaixo de 24px, remover a linha e o descriptor. Usar apenas o wordmark ou o símbolo ∞.

---

## Favicon System

| Tamanho | Asset | Uso |
|---------|-------|-----|
| 16x16 | Símbolo ∞ simplificado (1 linha) | Tab do browser |
| 32x32 | Símbolo ∞ (2 linhas) | Tab retina |
| 180x180 | Símbolo ∞ completo | Apple Touch Icon |
| 512x512 | Símbolo ∞ completo + espaço | PWA, Android |

**Cor favicon:** cream (#EDE8DC) sobre black (#0D0D0D), sempre.
**Forma:** quadrado com cantos arredondados (o OS decide o crop).

---

## OG Image Templates

### Padrão (1200x630)
```
┌──────────────────────────────────────┐
│  [wordmark] ═══ [descriptor]         │ ← topo esquerdo, 20px
│                                      │
│  Título da Página                    │ ← DM Serif Display 36px
│  em duas linhas.                     │ ← cream sobre black
│                                      │
│                          unlmtd.com  │ ← rodapé direito, 12px
└──────────────────────────────────────┘
```
- Fundo: #0D0D0D
- Wordmark: cream, 20px altura
- Linha: cor da vertical, 40px
- Título: DM Serif Display, 36px, cream, max 70% largura
- URL: Inter 400, 12px, 40% opacidade

### Square (1080x1080, para redes sociais)
Mesmo layout, mas título centralizado e maior (48px).

---

## Breakpoints

| Nome | Largura | Colunas | Margem | Gutter |
|------|---------|---------|--------|--------|
| Mobile | <768px | 4 | 16px | 16px |
| Tablet | 768-1024px | 8 | 24px | 24px |
| Desktop | 1025-1440px | 12 | 32px | 24px |
| Wide | >1440px | 12 | auto (max 1280px container) | 24px |

### Container
- Max-width: 1280px
- Centralizado com margin auto
- Padding lateral: 32px (desktop), 16px (mobile)

---

## Responsive Typography Scale

| Token | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| display-xl | 96px | 64px | 48px |
| h1 | 64px | 48px | 36px |
| h2 | 48px | 36px | 28px |
| h3 | 32px | 28px | 24px |
| h4 | 24px | 22px | 20px |
| body-lg | 18px | 18px | 17px |
| body | 16px | 16px | 16px |
| body-sm | 14px | 14px | 14px |
| caption | 12px | 12px | 12px |

### Fluid Typography (CSS)
```css
/* Exemplo para H1 */
font-size: clamp(2.25rem, 1.5rem + 3vw, 4rem);
/* 36px mínimo, escala com viewport, 64px máximo */
```

---

## Dark Page vs Cream Page

A UNLMTD não tem "dark mode toggle". Tem **alternância editorial** entre páginas dark e cream.

### Dark Page (padrão)
- Background: #0D0D0D
- Text: #EDE8DC
- Links: #C4622D (Terra)
- Borders: rgba(237,232,220,0.08)

### Cream Page
- Background: #EDE8DC
- Text: #0D0D0D
- Links: #C4622D (Terra)
- Borders: rgba(13,13,13,0.08)

### Regra de alternância
- Homepage: dark
- Sobre/Manifesto: cream
- Cases/Portfolio: dark (foto full bleed)
- Contato: cream
- Blog: alternado (post a post)

---

## Touch Targets

- Mínimo: 44x44px (WCAG)
- Botões: padding 16px 32px mínimo
- Links em texto: line-height 1.5 mínimo
- Ícones clicáveis: 44px hitarea mesmo se ícone menor

---

## Performance

- Fontes: preload Canela Display + Neue Haas (ou fallbacks)
- Imagens: WebP com fallback JPG, lazy loading
- SVG: inline para ícones, `<img>` para wordmark
- Máximo: 3 requests de fonte, 1 CSS, 1 JS bundle
