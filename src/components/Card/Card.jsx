import React from 'react';

const variants = {
  default: 'bg-unlmtd-ink border border-neutral-800',
  elevated:'bg-neutral-800 border border-neutral-700',
  outlined:'bg-transparent border border-neutral-700',
  cream:   'bg-unlmtd-cream text-unlmtd-black border border-unlmtd-cream',
};

export function Card({ children, variant = 'default', className = '', ...props }) {
  return (
    <div
      className={[
        'relative overflow-hidden',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={['px-6 pt-6 pb-4', className].join(' ')}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={['px-6 py-4', className].join(' ')}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={['px-6 pt-4 pb-6 border-t border-neutral-800', className].join(' ')}>
      {children}
    </div>
  );
}
