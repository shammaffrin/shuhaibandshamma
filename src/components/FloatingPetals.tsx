import { useEffect, useRef } from 'react';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  type: 'petal' | 'particle' | 'star';
  opacity: number;
}

export default function FloatingPetals({ count = 20, petals = true, particles = true }: {
  count?: number;
  petals?: boolean;
  particles?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const items: Petal[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 14 + 6,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 12,
    driftX: (Math.random() - 0.5) * 80,
    type: i % 3 === 0 ? 'star' : i % 2 === 0 ? 'particle' : 'petal',
    opacity: Math.random() * 0.5 + 0.3,
  }));

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute particle"
          style={{
            left: `${item.x}%`,
            top: '110%',
            width: item.size,
            height: item.size,
            '--duration': `${item.duration}s`,
            '--delay': `${item.delay}s`,
            '--drift-x': `${item.driftX}px`,
            opacity: item.opacity,
          } as React.CSSProperties}
        >
          {item.type === 'petal' && petals && (
            <svg viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 22 Q2 14 2 8 Q2 2 10 2 Q18 2 18 8 Q18 14 10 22Z"
                fill="rgba(212,175,55,0.6)"
                stroke="rgba(212,175,55,0.3)"
                strokeWidth="0.5"
              />
            </svg>
          )}
          {item.type === 'particle' && particles && (
            <div
              className="rounded-full"
              style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.8) 0%, rgba(212,175,55,0) 100%)',
              }}
            />
          )}
          {item.type === 'star' && (
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 2 L11.5 7 L17 7 L12.5 10.5 L14 16 L10 12.5 L6 16 L7.5 10.5 L3 7 L8.5 7 Z"
                fill="rgba(245,228,176,0.7)"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

export function AmbientParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: '110%',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `rgba(212,175,55,${Math.random() * 0.4 + 0.1})`,
            '--duration': `${Math.random() * 12 + 8}s`,
            '--delay': `${Math.random() * 10}s`,
            '--drift-x': `${(Math.random() - 0.5) * 60}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
