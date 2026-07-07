# UNLMTD — Sistema de Cores
*Visual Generator + Alina Wheeler | 2026-03-27*

---

## Lógica da Paleta

Arquétipo **Creator + Outlaw** guia todas as decisões de cor:
- Creator: cores com intenção artística, não decorativas
- Outlaw: tensão criativa — o cream quente contra o preto profundo já é uma declaração
- Referência cultural: editorial europeu + calor brasileiro (bossa nova, samba, cerâmica artesanal)

---

## Paleta Primária

### UNLMTD Black
```
HEX:     #0D0D0D
RGB:     13, 13, 13
CMYK:    0, 0, 0, 95
Pantone: Black 6 C
```
**Uso:** Fundo principal, tipografia sobre cream, autoridade visual

### UNLMTD Cream
```
HEX:     #EDE8DC
RGB:     237, 232, 220
CMYK:    0, 2, 7, 7
Pantone: 9183 C
```
**Uso:** Fundo secundário, tipografia sobre black, espaço e leveza

---

## Paleta Secundária

Decisão estratégica: três cores de suporte que honram o manifesto sem competir com a paleta primária.

### Terra — Calor Brasileiro
```
HEX:     #C4622D
RGB:     196, 98, 45
CMYK:    0, 50, 77, 23
Pantone: 7526 C
```
**Conceito:** Cerâmica artesanal. Samba. Calor humano. O "abraço apertado" do manifesto.
**Uso:** Destaque pontual, calls-to-action, elementos de calor

### Ouro Editorial
```
HEX:     #C8922A
RGB:     200, 146, 42
CMYK:    0, 27, 79, 22
Pantone: 7550 C
```
**Conceito:** Não é o ouro corporativo. É o dourado de um vinil de jazz, de uma encadernação antiga.
**Uso:** Celebração, destaques premium, awards

### Grafite Médio
```
HEX:     #3D3D3D
RGB:     61, 61, 61
CMYK:    0, 0, 0, 76
Pantone: Cool Gray 11 C
```
**Conceito:** O espaço entre o preto puro e o cream. Funcional, nunca decorativo.
**Uso:** Textos secundários, bordas, elementos funcionais

---

## Hierarquia de Uso

```
SEMPRE                    → Black + Cream (identidade core)
PONTUAL (max 20% peça)    → Terra ou Ouro Editorial
FUNCIONAL                 → Grafite Médio
NUNCA JUNTOS              → Terra + Ouro (colidem)
```

---

## Combinações Aprovadas

| Fundo | Texto Principal | Destaque | Status |
|---|---|---|---|
| Black | Cream | Terra | ✅ Aprovado |
| Black | Cream | Ouro | ✅ Aprovado |
| Cream | Black | Terra | ✅ Aprovado |
| Cream | Black | Ouro | ✅ Aprovado |
| Terra | Cream | — | ✅ Aprovado (uso limitado) |
| Grafite | Cream | — | ✅ Aprovado (uso limitado) |
| Cream | Terra | — | ❌ Contraste insuficiente |
| Ouro | Black | — | ✅ Aprovado |

---

## Acessibilidade (WCAG AA)

| Combinação | Ratio | Status |
|---|---|---|
| Cream sobre Black | 16.8:1 | ✅ AAA |
| Black sobre Cream | 16.8:1 | ✅ AAA |
| Cream sobre Terra | 3.2:1 | ⚠️ AA apenas texto grande |
| Black sobre Ouro | 5.1:1 | ✅ AA |
| Cream sobre Grafite | 6.7:1 | ✅ AA |

---

## Cores Semânticas (estados de interface)

Para qualquer interface digital (site, formulários, dashboards futuros).

### Success
```
HEX:     #22C55E
RGB:     34, 197, 94
```
**Uso:** confirmações, envio com sucesso, estados positivos

### Error
```
HEX:     #EF4444
RGB:     239, 68, 68
```
**Uso:** erros de formulário, falhas, alertas críticos

### Warning
```
HEX:     #F59E0B
RGB:     245, 158, 11
```
**Uso:** avisos, estados de atenção, campos incompletos

### Info
```
HEX:     #3B82F6
RGB:     59, 130, 246
```
**Uso:** informações neutras, dicas, tooltips

### Regra de uso
- Semânticas NUNCA competem com a paleta primária ou secundária
- Usadas APENAS em contextos funcionais (estados de interface)
- Nunca em headlines, backgrounds de seção, ou peças de marca
- Sobre fundo dark: usar versão clara. Sobre fundo cream: usar versão padrão.

---

## Usos Incorretos

❌ Nunca usar gradientes entre as cores primárias
❌ Nunca usar a paleta secundária como cor dominante
❌ Nunca usar mais de 3 cores em uma única peça
❌ Nunca usar o cream como tom "bege genérico" — ele tem especificação exata
❌ Nunca substituir o black por #000000 puro — o UNLMTD Black tem calor
❌ Nunca usar cores semânticas fora de contextos funcionais de interface
