# UNLMTD — Especificação de Template de Apresentação
*Design System Architect | 2026-03-27*

---

## Formato e Grid

```
Dimensão:       1920 × 1080px (16:9)
Margem externa: 80px todos os lados
Coluna texto:   Máx 60% da largura (1152px)
Grid:           12 colunas, gutter 24px
```

---

## Elementos Fixos (todos os slides)

**Logo — canto superior esquerdo**
```
Tipo:     Wordmark (versão correspondente ao fundo)
Tamanho:  160px de largura
Posição:  80px do topo, 80px da esquerda
```

**Copyright — rodapé esquerdo, rotacionado 90°**
```
Texto:    "COPYRIGHT [ANO]"
Fonte:    Neue Haas Grotesk Light, 10px, tracking 0.1em
Cor:      Tom do texto principal, 30% opacidade
```

---

## Slides do Sistema

### CAPA (versão dark e light)

**Dark:**
```
Fundo:          UNLMTD Black (#0D0D0D)
Símbolo ∞:      Centralizado, cream, 400px de largura
Título:         Canela Display, 80px, cream, abaixo do símbolo
Subtítulo:      Neue Haas Grotesk Light, 20px, cream 60%
Cliente/Data:   Neue Haas Grotesk Regular, 14px caps, cream, rodapé direito
```

**Light:**
```
Fundo:          UNLMTD Cream (#EDE8DC)
Título:         Canela Display, 120px, black, esquerda
Símbolo ∞:      Direita, black, 320px
Subtítulo:      Neue Haas Grotesk Light, 20px, black 50%
```

---

### TÍTULO DE SEÇÃO

**Dark:**
```
Fundo:          UNLMTD Black
Número da seção: Canela Display, 200px, cream 8% opacidade, fundo
Título:         Canela Display, 96px, cream, sobre o número
Linha:          1px horizontal, Terra (#C4622D), 120px, abaixo do título
```

**Light:**
```
Fundo:          UNLMTD Cream
Mesmo layout, cores invertidas
Linha acento:   Terra (#C4622D) — mantém a cor mesmo no light
```

---

### CONTEÚDO TEXTO (coluna única)

```
Fundo:          Cream (preferencial para texto longo)
Título H2:      Canela Display, 64px, black
Corpo:          Neue Haas Grotesk Regular, 20px, black, line-height 1.6
Destaque:       Neue Haas Grotesk Medium, 20px, Terra
Bullet:         Traço simples "—" em Terra + texto em black
Área de texto:  Máx 55 caracteres por linha
```

---

### DOIS TERÇOS (texto + visual)

```
Layout:         Divisão 55% texto / 45% visual
Divisor:        Linha vertical 1px, mesma cor do texto
Texto:          Coluna esquerda, mesma spec do conteúdo texto
Visual:         Imagem, ícone grande, dado, ou área de destaque
```

---

### DADO / ESTATÍSTICA

```
Fundo:          Black ou Cream
Número:         Canela Display, 160px
Unidade:        Canela Display, 48px, alinhado à base do número
Contexto:       Neue Haas Grotesk Regular, 18px, abaixo, máx 60 chars
Acento:         Linha Terra 2px, 80px, acima do número
Layout:         Centralizado ou grid de 2-3 dados lado a lado
```

---

### PROCESSO / NUMERADO

**Referência:** Slide "Nosso Processo" da apresentação existente

```
Fundo:          Cream
Título seção:   Canela Display, 80px, black, esquerda
Itens:          Círculo negro com número branco (60px diâmetro)
Título item:    Canela Display, 40px, black, à direita do círculo
Descrição:      Neue Haas Grotesk Regular, 16px, black 70%, abaixo do título
Layout:         Lista vertical, 80px de gap entre itens
```

---

### CITAÇÃO / DESTAQUE

```
Fundo:          Black
Aspas:          Canela Display, 200px, cream 10%, decorativo
Citação:        Canela Display Italic, 48-64px, cream, centralizada
Fonte:          Neue Haas Grotesk Regular, 16px, cream 60%
```

---

### GRID DE LOGOS (clientes)

```
Fundo:          Black (preferencial) ou Cream
Título:         Canela Display, 80px
Grid logos:     Logos em branco (sobre black) ou preto (sobre cream)
                Alinhamento ótico, não matemático
                4 colunas, máx 4 linhas
Linha divisória: Vertical 1px, divide título e logos
```

---

### ENCERRAMENTO / CTA

```
Fundo:          Black
Símbolo ∞:      Grande, 500px, cream 15%, fundo
Mensagem:       Canela Display, 80px, cream, centralizada
CTA:            Neue Haas Grotesk Regular, 20px, cream
                URL ou email em Terra (#C4622D)
```

---

## Regras de Composição

1. **Alternância dark/light** — nunca 3+ slides do mesmo fundo seguidos
2. **Tipografia massiva** — usar o espaço generosamente, não miniaturizar
3. **Uma ideia por slide** — complexidade vai para o orador, não para o slide
4. **Fotos sempre P&B** — cor só se for identidade do cliente
5. **Sem clip art, sem stock photo genérico** — só trabalho real ou abstrato
6. **Linha Terra como acento** — usar com parcimônia, máx 2× por apresentação
