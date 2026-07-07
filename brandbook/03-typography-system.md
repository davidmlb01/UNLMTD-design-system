# UNLMTD — Sistema Tipográfico
*Design System Architect + Visual Generator | 2026-03-27*

---

## Filosofia Tipográfica

A tipografia da UNLMTD comunica antes mesmo de ser lida. O contraste entre o **serif display ornamental** e o **sans-serif funcional limpo** cria a tensão Creator + Outlaw: sofisticação que se recusa a ser genérica.

---

## Família Primária — Display & Headlines

**Canela Display** (Commercial Type)
*Alternativa: Freight Display Pro (Darden Studio)*

```
Família:    Canela Display
Foundry:    Commercial Type
Licença:    Comercial (necessária para uso corporativo)
URL:        commercialtype.com/catalog/canela
```

**Por que Canela?** Os swashes ornamentais do wordmark UNLMTD têm o mesmo DNA tipográfico do Canela — editorial europeu com calor e personalidade. Usado por The New York Times, Airbnb, e The Atlantic.

**Alternativa gratuita:** DM Serif Display (Google Fonts) — mantém a autoridade do serif sem os swashes ornamentais.

### Escala de Uso

| Nível | Peso | Tamanho Digital | Tamanho Impresso | Uso |
|---|---|---|---|---|
| Display XL | Display Regular | 96-120px | 72-96pt | Capas, aberturas de seção |
| H1 | Display Regular | 64-80px | 48-64pt | Título principal de página |
| H2 | Display Regular | 48-56px | 36-48pt | Seções e capítulos |
| H3 | Italic | 32-40px | 24-32pt | Sub-seções |

---

## Família Secundária — Corpo e Interface

**Neue Haas Grotesk** (Monotype)
*Alternativa: Inter (Google Fonts — gratuita)*

```
Família:    Neue Haas Grotesk Display
Foundry:    Monotype
Licença:    Comercial
URL:        myfonts.com/fonts/linotype/neue-haas-grotesk
```

**Por que Neue Haas Grotesk?** É o sans-serif que alimentou o modernismo suíço. Neutral sem ser genérico. Legível em qualquer tamanho. Cria o contraste perfeito com o Canela.

**Alternativa gratuita:** Inter — design system-friendly, excelente legibilidade, open source.

### Escala de Uso

| Nível | Peso | Tamanho Digital | Tamanho Impresso | Uso |
|---|---|---|---|---|
| H4 | Medium (500) | 24-28px | 18-22pt | Títulos de bloco |
| H5 | Medium (500) | 18-20px | 14-16pt | Labels e subtítulos |
| Body Large | Regular (400) | 18px | 13pt | Intro de seção, lead |
| Body | Regular (400) | 16px | 11pt | Corpo principal |
| Body Small | Regular (400) | 14px | 9pt | Notas, legendas |
| Caption | Light (300) | 12px | 8pt | Créditos, rodapés |
| Label | Medium (500) | 11px | 8pt | UI labels, tags |

---

## Regras de Uso

### ✅ Correto
- Canela Display para tudo que precisa de impacto visual
- Neue Haas Grotesk para tudo que precisa ser lido
- Tracking (letter-spacing) no display: -0.02em a -0.04em (mais condensado = mais luxo)
- Line-height no body: 1.6 (espaço para respirar)

### ❌ Incorreto
- Nunca usar Canela em corpo de texto (abaixo de 24px)
- Nunca usar bold em Neue Haas para simular display — use Canela
- Nunca usar mais de 2 famílias em uma peça
- Nunca misturar dois serifs ou dois sans-serifs
- Nunca usar ALL CAPS com Canela ornamental — perde os swashes

---

## Tipografia do Wordmark

O wordmark UNLMTD usa uma fonte customizada/modificada com swashes específicos. **Não é replicável com fonte padrão.** Usar sempre como asset vetorial (SVG/PDF), nunca recriar em texto.

---

## Escala Completa — Design Tokens

```css
/* Famílias */
--font-display: 'Canela Display', 'DM Serif Display', Georgia, serif;
--font-body: 'Neue Haas Grotesk', 'Inter', system-ui, sans-serif;

/* Tamanhos (escala modular 1.25) */
--text-xs:    0.75rem;   /* 12px - Caption */
--text-sm:    0.875rem;  /* 14px - Body Small */
--text-base:  1rem;      /* 16px - Body */
--text-lg:    1.125rem;  /* 18px - Body Large */
--text-xl:    1.25rem;   /* 20px - H5 */
--text-2xl:   1.5rem;    /* 24px - H4 */
--text-3xl:   2rem;      /* 32px - H3 */
--text-4xl:   3rem;      /* 48px - H2 */
--text-5xl:   4rem;      /* 64px - H1 */
--text-6xl:   6rem;      /* 96px - Display */

/* Pesos */
--font-light:   300;
--font-regular: 400;
--font-medium:  500;
--font-display-weight: 400; /* Canela é sempre Regular/Italic */

/* Tracking */
--tracking-display: -0.03em;
--tracking-tight:   -0.01em;
--tracking-normal:   0em;
--tracking-wide:     0.05em;  /* para labels em caps */

/* Line Heights */
--leading-tight:  1.15;  /* headlines */
--leading-normal: 1.5;   /* body text */
--leading-loose:  1.75;  /* leitura longa */
```
