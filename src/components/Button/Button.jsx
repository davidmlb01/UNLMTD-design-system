import React from 'react';

const variants = {
  primary:   'bg-unlmtd-cream text-unlmtd-black hover:bg-unlmtd-champagne border border-unlmtd-cream hover:border-unlmtd-champagne',
  secondary: 'bg-transparent text-unlmtd-cream border border-unlmtd-cream hover:bg-unlmtd-cream hover:text-unlmtd-black',
  accent:    'bg-unlmtd-champagne text-unlmtd-black border border-unlmtd-champagne hover:brightness-90',
  danger:    'bg-unlmtd-rust text-unlmtd-cream border border-unlmtd-rust hover:brightness-90',
  ghost:     'bg-transparent text-neutral-400 border border-transparent hover:text-unlmtd-cream hover:border-neutral-600',
};

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-sm tracking-widest',
  lg: 'px-8 py-4 text-base tracking-widest',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center justify-center gap-2',
        'font-body font-medium uppercase tracking-widest',
        'transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-unlmtd-champagne focus:ring-offset-2 focus:ring-offset-unlmtd-black',
        variants[variant],
        sizes[size],
        fullWidth ? 'w-full' : '',
        disabled ? 'opacity-40 cursor-not-allowed pointer-events-none' : 'cursor-pointer',
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
