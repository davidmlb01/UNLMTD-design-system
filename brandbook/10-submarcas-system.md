# UNLMTD — Sistema de Submarcas v2
*Brand Squad: Wally Olins (arquitetura) + Paula Scher (tipografia) + Michael Bierut (digital) | 2026-05-07*
*Aprovado por David Levy em 2026-05-07*

---

## Modelo de Arquitetura

**Branded House com descriptor funcional.**

A UNLMTD é a marca-mãe. As submarcas são extensões funcionais identificadas por:
1. O wordmark real (SVG, sempre idêntico)
2. Uma linha colorida (cor única por vertical)
3. Um descriptor em texto (nome da vertical)

---

## Regra do Sistema

```
INVARIÁVEIS (nunca mudam):
  - Wordmark: asset vetorial SVG, proporções fixas
  - Posição: centralizado (vertical) ou inline (horizontal)
  - Tipografia do descriptor: Inter Semibold 600, caps, tracking 0.2em

VARIÁVEIS (mudam por submarca):
  - Cor da linha separadora (identifica a vertical)
  - Texto do descriptor (VIDEO, DIGITAL, IA, etc.)
```

---

## Cores por Vertical

| Vertical | Cor da Linha | Hex | Conceito |
|----------|-------------|-----|----------|
| Video | Terra | #C4622D | Calor, produção, craft |
| Digital | Ouro Editorial | #C8922A | Premium, tecnologia, entrega |
| IA | Blue | #3B82F6 | Inteligência, futuro, precisão |
| Branding | Cream 40% | rgba(237,232,220,0.4) | Neutro, fundação, identidade |
| Music | Purple | #9333EA | Expressão, criatividade, som |
| Strategy | Green | #22C55E | Crescimento, direção, resultado |

### Regra de adição
Para criar uma nova submarca (ex: "UNLMTD Performance"):
1. Escolher uma cor que não conflite com as existentes
2. Manter o descriptor em português ou inglês (consistente com o restante)
3. Aplicar o template: wordmark + linha na cor + descriptor
4. Sem reunião, sem design novo, sem aprovação especial

---

## Layout Vertical (padrão)

```
         ┌─────────────────────────┐
         │                         │
         │    [WORDMARK SVG]       │  ← wordmark cream (dark) ou black (light)
         │    ════════════         │  ← linha 2px, 80px, cor da vertical
         │      DESCRIPTOR         │  ← Inter 600, 15px, caps, 0.2em, 85% opacidade
         │                         │
         └─────────────────────────┘
```

### Especificações
- Wordmark: altura 48px (large), 36px (default), 24px (compact)
- Linha: 2px altura, 80px largura, centralizada
- Espaço wordmark → linha: 16px
- Espaço linha → descriptor: 16px
- Descriptor: Inter Semibold 600, 15px, uppercase, letter-spacing 0.2em
- Opacidade descriptor: 85% do texto principal

---

## Layout Horizontal (headers, assinaturas, nav)

```
  [WORDMARK SVG] ════ DESCRIPTOR
```

### Especificações
- Wordmark: altura 24px (default), 20px (compact), 16px (mínimo)
- Linha: 2px altura, 40px largura
- Espaço entre elementos: 16px
- Descriptor: Inter Semibold 600, 11-13px, uppercase, letter-spacing 0.2em
- Tudo alinhado verticalmente ao centro

---

## Dois Modos

### Dark (padrão)
- Fundo: #0D0D0D (UNLMTD Black)
- Wordmark: cream (asset SVG natural)
- Linha: cor da vertical
- Descriptor: #EDE8DC a 85% opacidade

### Light
- Fundo: #EDE8DC (UNLMTD Cream)
- Wordmark: black (SVG com filter brightness(0))
- Linha: cor da vertical (mesma)
- Descriptor: #0D0D0D a 75% opacidade

---

## Aplicações

### Social Media Avatar (circular)
- Fundo: #0D0D0D
- Wordmark: 16px altura
- Linha: 30px largura, 1.5px altura, cor da vertical
- Descriptor: 10px, weight 600, 90% opacidade
- Tudo centralizado no círculo

### Assinatura de Email
- Layout horizontal sobre fundo branco
- Wordmark: 20px altura, filter brightness(0)
- Linha: 24px, cor da vertical
- Descriptor: 10px, color #666
- Separado do nome/cargo por borda top 2px na cor da vertical

### OG Image (1200x630)
- Fundo: #0D0D0D
- Wordmark horizontal com descriptor no topo esquerdo (20px)
- Título da página em DM Serif Display 36px abaixo
- Linha separadora na cor da vertical

### Favicon (16x16 a 512x512)
- Marca-mãe: símbolo ∞ simplificado
- Submarcas: usar marca-mãe (não tentar colocar descriptor no favicon)

---

## Usos Incorretos

❌ Nunca mudar o fundo para a cor da vertical (o erro do sistema anterior)
❌ Nunca mudar a cor do wordmark (além de cream/black nos dois modos)
❌ Nunca usar o descriptor sem a linha separadora
❌ Nunca mudar a posição relativa (wordmark sempre acima do descriptor)
❌ Nunca usar mais de uma cor de linha na mesma peça
❌ Nunca usar o descriptor maior que o wordmark
❌ Nunca recriar o wordmark em fonte (sempre SVG)

---

## Assets

| Arquivo | Formato | Uso |
|---------|---------|-----|
| `brandbook/assets/unlmtd-wordmark.svg` | SVG vetorial | Todas as aplicações digitais |
| `brandbook/assets/unlmtd-wordmark.pdf` | PDF vetorial | Impressão, alta resolução |
| `brandbook/assets/unlmtd-wordmark.png` | PNG (fundo branco) | Fallback apenas |

---

## Referência Visual

Arquivo de exploração: `submarcas-explorations.html`
Contém: dark mode, light mode, horizontal, email, OG, avatars, do/don't.

---

*Sistema aprovado por David Levy em 2026-05-07.*
*Substitui o sistema anterior de submarcas (rejeitado por falta de coerência visual).*
