# UNLMTD — Figma Handoff Briefing
*Para designer responsável pela execução | v1.0 | 2026-04-11*

---

## Visão Geral

Este documento contém tudo que você precisa para executar o design system UNLMTD no Figma. Todos os valores, regras e especificações já estão definidos. Não é necessário tomar decisões de design — só executar o que está aqui.

**Tempo estimado de setup:** 3-4 horas para base completa (variáveis + estilos + componentes essenciais)

---

## Arquivos de Referência

| Arquivo | Conteúdo |
|---------|---------|
| `01-brand-foundation.md` | Arquétipo, posicionamento, manifesto |
| `02-color-system.md` | Paleta completa com valores e regras de uso |
| `03-typography-system.md` | Famílias, escala, tokens CSS |
| `04-tone-of-voice.md` | Tom e voz da marca |
| `05-design-tokens.json` | Todos os tokens em formato W3C DTCG |
| `figma-tokens.json` | Tokens em formato Token Studio (importar no Figma) |
| `06-instagram-templates-spec.md` | 3 templates Feed + 3 templates Stories |
| `07-presentation-template-spec.md` | Sistema de slides 1920x1080px |
| `08-proposal-template-spec.md` | Template de proposta comercial |
| `brandbook.html` | Preview visual completo do brandbook |
| `UNLMTD-Brandbook-v1.0.pdf` | PDF do brandbook para referencia |

---

## Passo 1 — Configurar o Arquivo Figma

### Estrutura de Pages recomendada

```
📄 Cover
📄 Variables & Tokens
📄 Typography
📄 Colors
📄 Components — Atoms
📄 Components — Molecules
📄 Templates — Instagram Feed
📄 Templates — Instagram Stories
📄 Templates — Apresentacao
📄 Templates — Proposta
📄 Assets — Logos
📄 Assets — Icones
📄 [Scratchpad]
```

---

## Passo 2 — Importar Tokens (Token Studio Plugin)

**Plugin necessario:** Token Studio for Figma (gratuito na Figma Community)

1. Instalar o plugin Token Studio
2. Abrir o plugin dentro do arquivo Figma
3. Em "Settings" > "Token Sources" > "Load from file"
4. Selecionar `figma-tokens.json`
5. Aplicar os token sets: `global`, `semantic`, `typography`, `spacing`

Se preferir criar manualmente (sem plugin), os valores estao na secao abaixo.

---

## Passo 3 — Criar Figma Variables

Na page "Variables & Tokens", criar as seguintes Collections:

### Collection: Colors

| Variable Name | Value | Group |
|--------------|-------|-------|
| `black` | #0D0D0D | Primitives |
| `cream` | #EDE8DC | Primitives |
| `terra` | #C4622D | Primitives |
| `ouro` | #C8922A | Primitives |
| `grafite` | #3D3D3D | Primitives |
| `background/dark` | {black} | Semantic |
| `background/light` | {cream} | Semantic |
| `text/on-dark` | {cream} | Semantic |
| `text/on-light` | {black} | Semantic |
| `text/secondary` | {grafite} | Semantic |
| `accent/default` | {terra} | Semantic |
| `accent/premium` | {ouro} | Semantic |

### Collection: Typography (Number variables)

| Variable Name | Value |
|--------------|-------|
| `font-size/xs` | 12 |
| `font-size/sm` | 14 |
| `font-size/base` | 16 |
| `font-size/lg` | 18 |
| `font-size/xl` | 20 |
| `font-size/2xl` | 24 |
| `font-size/3xl` | 32 |
| `font-size/4xl` | 48 |
| `font-size/5xl` | 64 |
| `font-size/6xl` | 96 |

### Collection: Spacing (Number variables)

| Variable Name | Value |
|--------------|-------|
| `spacing/1` | 4 |
| `spacing/2` | 8 |
| `spacing/3` | 12 |
| `spacing/4` | 16 |
| `spacing/6` | 24 |
| `spacing/8` | 32 |
| `spacing/12` | 48 |
| `spacing/16` | 64 |
| `spacing/24` | 96 |
| `spacing/32` | 128 |

---

## Passo 4 — Criar Text Styles

Na page "Typography", criar um frame de demonstracao e os seguintes Text Styles:

> Antes de criar os estilos, adicionar as fontes ao projeto Figma via "Share styles and variables" ou instalar localmente.
> - Canela Display: commercialtype.com/catalog/canela
> - Neue Haas Grotesk Display: myfonts.com/fonts/linotype/neue-haas-grotesk
> - Alternativas gratuitas: DM Serif Display + Inter (Google Fonts)

| Style Name | Font | Weight | Size | Line Height | Letter Spacing |
|-----------|------|--------|------|-------------|----------------|
| `Display XL` | Canela Display | Regular | 96px | 115% | -3% |
| `H1` | Canela Display | Regular | 64px | 115% | -3% |
| `H2` | Canela Display | Regular | 48px | 115% | -3% |
| `H3` | Canela Display | Italic | 32px | 115% | -1% |
| `H4` | Neue Haas Grotesk | Medium (500) | 24px | 115% | 0% |
| `H5` | Neue Haas Grotesk | Medium (500) | 20px | 115% | 0% |
| `Body Large` | Neue Haas Grotesk | Regular (400) | 18px | 150% | 0% |
| `Body` | Neue Haas Grotesk | Regular (400) | 16px | 150% | 0% |
| `Body Small` | Neue Haas Grotesk | Regular (400) | 14px | 150% | 0% |
| `Caption` | Neue Haas Grotesk | Light (300) | 12px | 150% | 0% |
| `Label` | Neue Haas Grotesk | Medium (500) | 11px | 115% | 5% |

**Nota:** Agrupar os estilos como `UNLMTD/Display XL`, `UNLMTD/H1`, etc.

---

## Passo 5 — Criar Color Styles

| Style Name | Hex | Uso |
|-----------|-----|-----|
| `UNLMTD/Black` | #0D0D0D | Fundo principal dark, tipografia |
| `UNLMTD/Cream` | #EDE8DC | Fundo principal light, tipografia |
| `UNLMTD/Terra` | #C4622D | Acento, CTAs (max 20% da peca) |
| `UNLMTD/Ouro` | #C8922A | Premio, celebracao (nunca com Terra) |
| `UNLMTD/Grafite` | #3D3D3D | Texto secundario, bordas |

---

## Passo 6 — Preparar Assets de Logo

Solicitar ao David os arquivos vetoriais originais do logo:

- [ ] Wordmark UNLMTD — cream sobre black (SVG + PDF)
- [ ] Wordmark UNLMTD — black sobre cream (SVG + PDF)
- [ ] Wordmark UNLMTD — monocromatico preto (SVG)
- [ ] Wordmark UNLMTD — monocromatico branco (SVG)
- [ ] Simbolo infinito — black sobre cream (SVG)
- [ ] Simbolo infinito — cream sobre black (SVG)

**ATENCAO:** O wordmark usa fonte customizada com swashes. Nunca recriar como texto — sempre usar o asset vetorial.

Importar todos na page "Assets — Logos" com area de clear space demonstrada (equivalente a altura da letra U em todos os lados).

---

## Passo 7 — Templates Instagram

Criar na page "Templates — Instagram Feed":

### Frame F1 — Editorial de Texto (criar versao dark e light)

**Dimensao:** 1080 x 1350px (4:5)

**Versao Dark:**
- Fundo: `UNLMTD/Black` (#0D0D0D)
- Margens internas: 64px todos os lados
- Logo: Wordmark cream, canto superior direito, 120px de largura
- Texto principal: Text Style `Display XL`, cor `UNLMTD/Cream`, max 3 linhas, max 40 chars/linha
- Subtexto (opcional): Text Style `Label`, cor `UNLMTD/Cream` a 60% opacidade, uppercase

**Versao Light:**
- Fundo: `UNLMTD/Cream` (#EDE8DC)
- Mesma estrutura, cores invertidas (black no lugar do cream)

### Frame F2 — Case/Projeto

**Dimensao:** 1080 x 1350px

- Imagem do projeto: full bleed (marcar area como placeholder)
- Overlay: Rectangle black 40% opacidade sobre a imagem
- Logo: Wordmark cream, topo direito
- Titulo do case: Text Style `H2` ou `H1`, cor cream, rodape esquerdo (64px da borda inferior)
- Cliente: Text Style `Label`, cor cream, uppercase, acima do titulo, com 1px divider de 80px

### Frame F3 — Dado/Estatistica

**Dimensao:** 1080 x 1350px

**Versao Dark:**
- Fundo: `UNLMTD/Black`
- Acento: Linha horizontal `UNLMTD/Terra`, 2px altura, 80px comprimento, acima do numero
- Numero: Text Style `Display XL` (customizar para 120-160px se necessario), cor cream
- Unidade: Neue Haas Grotesk Regular 32px, cream, alinhado a base do numero
- Contexto: Text Style `Body`, cream a 60%, abaixo do numero
- Logo: Wordmark cream, rodape direito

---

## Passo 8 — Templates Stories

Criar na page "Templates — Instagram Stories":

### Frame S1 — Anuncio/Novidade

**Dimensao:** 1080 x 1920px

- Zona segura superior (0-250px): Logo centralizado
- Zona de conteudo (centro): Titulo `H1`, Subtitulo `Body Large`
- Zona segura inferior (1670-1920px): Pill button 560x72px, raio 36px, Neue Haas Medium 16px caps
- Criar versoes dark e light

### Frame S2 — Pergunta/Interacao

**Dimensao:** 1080 x 1920px

- Zona segura superior: Logo
- Pergunta: Canela Display Italic, 64-80px, centralizado
- Sticker zone: Rectangle 600x200px centralizado (placeholder para sticker nativo do Instagram)
- Hashtag: `Caption`, rodape

### Frame S3 — Bastidores

**Dimensao:** 1080 x 1920px

- Foto: full bleed placeholder
- Overlay: Gradiente preto 0% a 60%, apenas terco inferior
- Texto: `Body Large`, cream, rodape
- Logo: Wordmark cream, 100px, canto superior esquerdo

---

## Passo 9 — Template Apresentacao

Criar na page "Templates — Apresentacao":

**Dimensao de todos os slides:** 1920 x 1080px

**Elementos fixos em todo slide:**
- Logo: Wordmark (versao correspondente ao fundo), canto superior esquerdo, 160px de largura, 80px do topo, 80px da esquerda
- Copyright: "COPYRIGHT [ANO]" — Neue Haas Light 10px, tracking 10%, 30% opacidade, rodape esquerdo, rotacionado 90 graus

**Slides a criar:**
1. Capa Dark — simbolo centralizado cream 400px + titulo H1 + subtitulo Body Large
2. Capa Light — mesma estrutura, cores invertidas
3. Slide Conteudo Dark — titulo H2 esquerda, corpo Body em coluna de 60%
4. Slide Conteudo Light
5. Slide Citacao — Canela Display Italic centralizado, grande
6. Slide Final/Contato

---

## Passo 10 — Componentes Atomicos

Criar na page "Components — Atoms":

### Button

| Variante | Estado | Cor de fundo | Cor do texto | Padding | Raio |
|---------|--------|-------------|-------------|---------|------|
| Primary | Default | `Terra` #C4622D | `Cream` | 16px / 32px | 0px (retangular) |
| Primary | Hover | `Terra` 85% | `Cream` | 16px / 32px | 0px |
| Secondary | Default | Transparente | `Cream` | 16px / 32px | 0px (com borda 1px cream) |
| Pill | Default | `Terra` | `Cream` | 20px / 40px | 36px |

Tipografia do botao: Neue Haas Grotesk Medium, 14px, tracking 5%, uppercase

### Tag/Label

- Neue Haas Grotesk Medium, 11px, uppercase, tracking 5%
- Versao dark: cream sobre black
- Versao light: black sobre cream

### Divider

- 1px, cor do texto a 20% opacidade
- Horizontal (larguras: 80px, 120px, full)

---

## Regras de Uso — Resumo para o Designer

### SEMPRE
- Black + Cream como cores dominantes
- Wordmark como asset vetorial (nunca recriar como texto)
- Canela Display so acima de 24px
- Tracking -0.03em no Canela Display

### NUNCA
- Usar #000000 puro — usar UNLMTD Black #0D0D0D
- Terra + Ouro na mesma peca (colidem)
- Mais de 3 cores por peca
- Gradientes entre as cores primarias
- Bold no Neue Haas para simular display
- ALL CAPS com Canela ornamental (perde os swashes)

### COMBINACOES APROVADAS
| Fundo | Texto Principal | Acento |
|-------|----------------|--------|
| Black | Cream | Terra |
| Black | Cream | Ouro |
| Cream | Black | Terra |
| Cream | Black | Ouro |
| Terra | Cream | nenhum |
| Grafite | Cream | nenhum |

---

## Entregaveis Esperados

- [ ] Figma file com Variables configuradas (cores, tipografia, espacamento)
- [ ] Text Styles criados e nomeados
- [ ] Color Styles criados
- [ ] Assets de logo importados (4 variacoes wordmark + 2 variacoes simbolo)
- [ ] 3 templates Feed Instagram (F1 dark+light, F2, F3)
- [ ] 3 templates Stories Instagram (S1 dark+light, S2, S3)
- [ ] 6 slides de apresentacao (capa dark+light, conteudo dark+light, citacao, final)
- [ ] Componentes atomicos: Button (4 variantes), Tag, Divider
- [ ] Cover page com nome do projeto, versao e data

**Compartilhar o arquivo Figma com:** david@unlmtd.com.br

---

*Brandbook UNLMTD v1.0 — gerado pelo AIOX Brand Squad em 2026-03-27*
*Briefing de execucao gerado em 2026-04-11*
