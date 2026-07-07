import React from 'react';

export function Divider({ orientation = 'horizontal', label, className = '' }) {
  if (orientation === 'vertical') {
    return (
      <div
        className={['w-px bg-neutral-700 self-stretch', className].join(' ')}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div className={['flex items-center gap-4', className].join(' ')} role="separator">
        <div className="flex-1 h-px bg-neutral-700" />
        <span className="text-xs font-body uppercase tracking-widest text-neutral-500">
          {label}
        </span>
        <div className="flex-1 h-px bg-neutral-700" />
      </div>
    );
  }

  return (
    <hr
      className={['border-0 h-px bg-neutral-700', className].join(' ')}
      role="separator"
    />
  );
}
