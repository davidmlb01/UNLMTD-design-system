import React from 'react';

// O símbolo ∞ geométrico multi-linha — elemento core da marca UNLMTD
export function InfinityMark({
  size = 80,
  color = '#EDE8DC',
  strokeWidth = 2,
  lines = 4,
  className = '',
  ...props
}) {
  const w = size;
  const h = size * 0.5;
  const cx = w / 2;
  const cy = h / 2;
  const rx = w * 0.28;
  const ry = h * 0.38;

  const strokes = Array.from({ length: lines }, (_, i) => {
    const offset = (i - (lines - 1) / 2) * (strokeWidth * 2.2);
    return offset;
  });

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="UNLMTD infinity mark"
      role="img"
      {...props}
    >
      {strokes.map((offset, i) => (
        <ellipse
          key={i}
          cx={cx - rx * 0.5}
          cy={cy + offset * 0.3}
          rx={rx}
          ry={ry - Math.abs(offset) * 0.15}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`rotate(-8, ${cx - rx * 0.5}, ${cy + offset * 0.3})`}
          opacity={1 - Math.abs(offset) * 0.04}
        />
      ))}
      {strokes.map((offset, i) => (
        <ellipse
          key={`r${i}`}
          cx={cx + rx * 0.5}
          cy={cy + offset * 0.3}
          rx={rx}
          ry={ry - Math.abs(offset) * 0.15}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`rotate(8, ${cx + rx * 0.5}, ${cy + offset * 0.3})`}
          opacity={1 - Math.abs(offset) * 0.04}
        />
      ))}
    </svg>
  );
}
