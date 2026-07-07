import React from 'react';

const variants = {
  default:    'bg-unlmtd-ink text-unlmtd-cream border border-neutral-700',
  premium:    'bg-unlmtd-champagne text-unlmtd-black border border-unlmtd-champagne',
  danger:     'bg-unlmtd-rust text-unlmtd-cream border border-unlmtd-rust',
  outline:    'bg-transparent text-unlmtd-cream border border-neutral-600',
  new:        'bg-transparent text-unlmtd-champagne border border-unlmtd-champagne',
};

export function Badge({ children, variant = 'default', ...props }) {
  return (
    <span
      className={[
        'inline-flex items-center px-2.5 py-0.5',
        'text-xs font-body font-medium uppercase tracking-widest',
        variants[variant],
      ].join(' ')}
      {...props}
    >
      {children}
    </span>
  );
}
