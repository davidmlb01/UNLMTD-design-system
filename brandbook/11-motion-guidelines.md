# UNLMTD — Motion Guidelines
*Brand Squad: Karin Fong (motion identity) | 2026-05-07*

---

## Filosofia de Motion

A UNLMTD se move como cria: com intenção, craft, e ritmo. Nunca apressada. Nunca decorativa. Cada animação tem propósito. Se não tem propósito, não anima.

O DNA Creator + Outlaw se traduz em motion assim:
- **Creator:** movimento artesanal, preciso, revelador
- **Outlaw:** timing inesperado, ritmo que quebra monotonia

---

## Timing System

| Categoria | Duração | Uso |
|-----------|---------|-----|
| Micro | 100ms | Feedback de botão, toggle, hover |
| Small | 200ms | Menu abrir/fechar, tooltip, card flip |
| Medium | 350ms | Transição de página, modal, accordion |
| Large | 500ms | Hero animation, entrada de seção |
| Cinematic | 800ms+ | Logo reveal, onboarding, manifesto |

---

## Easing

| Tipo | Curva | Quando |
|------|-------|--------|
| Standard | ease-out (0.0, 0.0, 0.2, 1.0) | Padrão para tudo |
| Enter | ease-out (0.0, 0.0, 0.2, 1.0) | Elementos chegando |
| Exit | ease-in (0.4, 0.0, 1.0, 1.0) | Elementos saindo |
| Emphasis | cubic-bezier(0.2, 0.0, 0.0, 1.0) | Momentos de destaque |

**Regra:** nunca ease-in-out (parece lento e indeciso). Prefira ease-out (chega rápido, desacelera com graça).

---

## Padrões de Animação

### 1. Fade In Up (padrão de entrada)
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Duração: 350ms, ease-out, stagger 50ms entre elementos */
```

### 2. Logo Reveal (∞ símbolo)
As linhas concêntricas do ∞ se desenham sequencialmente, de dentro para fora.
- Linha interna: 0-400ms
- Linha do meio: 200-600ms
- Linha externa: 400-800ms
- Easing: emphasis
- Personalidade: artesanal, como se uma mão estivesse desenhando

### 3. Wordmark Reveal
O wordmark aparece por máscara horizontal, da esquerda para a direita.
- Duração: 600ms
- Easing: emphasis
- Delay: 400ms (depois do símbolo ∞)

### 4. Linha de Submarca
A linha colorida cresce do centro para as bordas.
- Duração: 300ms
- Easing: ease-out
- Delay: 200ms (depois do wordmark)

### 5. Hover em Botões
```css
.button:hover {
  transform: scale(1.02);
  transition: transform 200ms ease-out;
}
```
- Scale sutil (1.02, nunca 1.05+)
- Botão primary: darken 15% no hover
- Botão secondary: border opacity 100%

### 6. Page Transition
- Saída: fade out, 200ms, ease-in
- Entrada: fade in + translateY(8px), 350ms, ease-out
- Nunca slide lateral (muito SPA genérico)

### 7. Scroll Reveal
- Elementos entram com fadeInUp ao entrar no viewport
- Stagger: 50ms entre elementos irmãos
- Threshold: 20% do elemento visível
- Cada elemento anima apenas UMA VEZ (não re-anima ao scroll reverso)

---

## Coreografia

### Stagger (sequência entre elementos)
- Delay entre elementos: 50ms
- Máximo de elementos em stagger: 8 (depois disso, entra tudo junto)
- Direção: top-to-bottom ou left-to-right (nunca aleatório)

### Hierarquia de Animação
1. Fundo/container aparece primeiro (ou já está)
2. Título/headline entra segundo (fadeInUp)
3. Corpo/descrição entra terceiro (fadeInUp, +50ms delay)
4. CTAs entram por último (fadeInUp, +100ms delay)

---

## Regras Absolutas

✅ Toda animação tem propósito (revelar, guiar, celebrar)
✅ Motion segue hierarquia visual (o mais importante anima primeiro)
✅ Respeitar `prefers-reduced-motion` (desabilitar animações decorativas)
✅ Timing consistente (usar os 5 níveis, não inventar)

❌ Nunca animar sem propósito (decoração é ruído)
❌ Nunca bounce ou elastic (não combina com Creator + Outlaw)
❌ Nunca parallax excessivo (distrai do conteúdo)
❌ Nunca auto-play em vídeos (Outlaw respeita a escolha do visitante)
❌ Nunca animação infinita em loop (exceto loading spinner)

---

## CSS Variables (Design Tokens)

```css
/* Timing */
--motion-micro: 100ms;
--motion-small: 200ms;
--motion-medium: 350ms;
--motion-large: 500ms;
--motion-cinematic: 800ms;

/* Easing */
--ease-standard: cubic-bezier(0.0, 0.0, 0.2, 1.0);
--ease-enter: cubic-bezier(0.0, 0.0, 0.2, 1.0);
--ease-exit: cubic-bezier(0.4, 0.0, 1.0, 1.0);
--ease-emphasis: cubic-bezier(0.2, 0.0, 0.0, 1.0);

/* Stagger */
--stagger-delay: 50ms;

/* Scroll Reveal */
--reveal-distance: 16px;
--reveal-threshold: 0.2;
```
