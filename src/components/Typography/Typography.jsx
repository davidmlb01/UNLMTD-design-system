import React from 'react';

// Display — headlines de impacto (Playfair Display Bold Condensed)
export function Display({ children, size = '7xl', className = '', ...props }) {
  const sizes = {
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  };
  return (
    <h1
      className={[
        'font-display font-black uppercase tracking-tight leading-none',
        sizes[size] || 'text-7xl',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </h1>
  );
}

// Heading — títulos de seção
export function Heading({ children, level = 2, className = '', ...props }) {
  const Tag = `h${level}`;
  const sizes = { 1: 'text-5xl', 2: 'text-4xl', 3: 'text-3xl', 4: 'text-2xl', 5: 'text-xl', 6: 'text-lg' };
  return (
    <Tag
      className={[
        'font-display font-bold uppercase tracking-tight leading-tight',
        sizes[level],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Tag>
  );
}

// Body — texto corrido
export function Body({ children, size = 'base', weight = 'regular', muted = false, className = '', ...props }) {
  const sizes   = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
  const weights = { light: 'font-light', regular: 'font-normal', medium: 'font-medium' };
  return (
    <p
      className={[
        'font-body leading-relaxed',
        sizes[size],
        weights[weight],
        muted ? 'text-neutral-400' : 'text-unlmtd-cream',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </p>
  );
}

// Label — labels de UI, captions
export function Label({ children, className = '', ...props }) {
  return (
    <span
      className={[
        'font-body text-xs font-medium uppercase tracking-widest text-neutral-400',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}

// Eyebrow — pré-título (pequeno label acima de headings)
export function Eyebrow({ children, accent = false, className = '', ...props }) {
  return (
    <p
      className={[
        'font-body text-xs font-medium uppercase tracking-widest mb-3',
        accent ? 'text-unlmtd-champagne' : 'text-neutral-500',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </p>
  );
}
