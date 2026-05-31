export function IslamicArch({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer arch frame */}
      <path
        d="M20 500 L20 200 Q20 20 200 20 Q380 20 380 200 L380 500"
        stroke="url(#goldGrad)" strokeWidth="2" fill="none"
      />
      {/* Inner arch */}
      <path
        d="M50 500 L50 210 Q50 60 200 60 Q350 60 350 210 L350 500"
        stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.7"
      />
      {/* Decorative top medallion */}
      <circle cx="200" cy="20" r="12" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" />
      <circle cx="200" cy="20" r="6" fill="url(#goldGrad)" opacity="0.8" />
      {/* Corner flourishes */}
      <path d="M20 200 Q10 180 20 160 Q30 180 20 200Z" fill="url(#goldGrad)" opacity="0.6" />
      <path d="M380 200 Q390 180 380 160 Q370 180 380 200Z" fill="url(#goldGrad)" opacity="0.6" />
      {/* Geometric top details */}
      <path d="M160 20 Q180 10 200 20 Q220 10 240 20" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.6" />
      {/* Side decorations */}
      <path d="M20 300 L35 300 L35 320 L20 320" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M380 300 L365 300 L365 320 L380 320" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M20 340 L35 340 L35 360 L20 360" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M380 340 L365 340 L365 360 L380 360" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.4" />
      {/* Keyhole arch detail at top */}
      <path d="M170 60 Q170 45 200 45 Q230 45 230 60 L230 80 L170 80 Z" stroke="url(#goldGrad)" strokeWidth="1" fill="none" opacity="0.5" />
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9A7B0A" />
          <stop offset="30%" stopColor="#D4AF37" />
          <stop offset="60%" stopColor="#F5E4B0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IslamicGeometricBorder({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Repeating geometric pattern */}
      {Array.from({ length: 13 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 62}, 0)`}>
          <polygon
            points={`31,4 58,20 58,52 31,68 4,52 4,20`}
            stroke="url(#borderGold)" strokeWidth="0.8" fill="none" opacity="0.6"
          />
          <polygon
            points={`31,14 48,24 48,48 31,58 14,48 14,24`}
            stroke="url(#borderGold)" strokeWidth="0.5" fill="none" opacity="0.4"
          />
          <circle cx="31" cy="36" r="4" stroke="url(#borderGold)" strokeWidth="0.8" fill="none" opacity="0.5" />
        </g>
      ))}
      <defs>
        <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="20%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="50%" stopColor="#F5E4B0" stopOpacity="1" />
          <stop offset="80%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FloralCorner({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <g opacity="0.8">
        {/* Main stem */}
        <path d="M10 110 Q30 70 70 30" stroke="url(#floralGold)" strokeWidth="1.5" fill="none" />
        {/* Petals */}
        <ellipse cx="70" cy="30" rx="12" ry="6" transform="rotate(-45 70 30)" stroke="url(#floralGold)" strokeWidth="1" fill="none" opacity="0.7" />
        <ellipse cx="70" cy="30" rx="12" ry="6" transform="rotate(45 70 30)" stroke="url(#floralGold)" strokeWidth="1" fill="none" opacity="0.7" />
        <ellipse cx="70" cy="30" rx="12" ry="6" transform="rotate(0 70 30)" stroke="url(#floralGold)" strokeWidth="1" fill="none" opacity="0.7" />
        <circle cx="70" cy="30" r="4" fill="url(#floralGold)" opacity="0.8" />
        {/* Branch 1 */}
        <path d="M40 80 Q55 60 65 50" stroke="url(#floralGold)" strokeWidth="1" fill="none" />
        <circle cx="65" cy="50" r="5" stroke="url(#floralGold)" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle cx="65" cy="50" r="2" fill="url(#floralGold)" opacity="0.6" />
        {/* Branch 2 */}
        <path d="M25 95 Q35 82 45 72" stroke="url(#floralGold)" strokeWidth="1" fill="none" />
        <circle cx="45" cy="72" r="4" stroke="url(#floralGold)" strokeWidth="0.8" fill="none" opacity="0.5" />
        {/* Small leaves */}
        <ellipse cx="55" cy="65" rx="8" ry="4" transform="rotate(-30 55 65)" stroke="url(#floralGold)" strokeWidth="0.7" fill="none" opacity="0.5" />
        <ellipse cx="30" cy="88" rx="7" ry="3" transform="rotate(-50 30 88)" stroke="url(#floralGold)" strokeWidth="0.7" fill="none" opacity="0.4" />
        {/* Corner border lines */}
        <path d="M2 118 L2 2 L118 2" stroke="url(#floralGold)" strokeWidth="1" opacity="0.4" />
        <path d="M8 112 L8 8 L112 8" stroke="url(#floralGold)" strokeWidth="0.5" opacity="0.3" />
      </g>
      <defs>
        <linearGradient id="floralGold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9A7B0A" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#F5E4B0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GoldenDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="15" x2="240" y2="15" stroke="url(#divGold)" strokeWidth="1" />
      <path d="M270 15 L280 8 L290 15 L280 22 Z" fill="url(#divGold)" opacity="0.9" />
      <circle cx="260" cy="15" r="3" fill="url(#divGold)" opacity="0.8" />
      <circle cx="300" cy="15" r="3" fill="url(#divGold)" opacity="0.8" />
      <path d="M310 15 L320 8 L330 15 L320 22 Z" fill="url(#divGold)" opacity="0.9" />
      <line x1="360" y1="15" x2="600" y2="15" stroke="url(#divGold)" strokeWidth="1" />
      <circle cx="295" cy="15" r="1.5" fill="url(#divGold)" opacity="0.6" />
      <circle cx="305" cy="15" r="1.5" fill="url(#divGold)" opacity="0.6" />
      <defs>
        <linearGradient id="divGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="30%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="50%" stopColor="#F5E4B0" stopOpacity="1" />
          <stop offset="70%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SmallFloral({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx="30" cy="30"
          rx="12" ry="5"
          transform={`rotate(${angle} 30 30) translate(0 -8)`}
          stroke="url(#smallFloral)" strokeWidth="0.8"
          fill="rgba(212,175,55,0.1)"
          opacity="0.7"
        />
      ))}
      <circle cx="30" cy="30" r="4" fill="url(#smallFloral)" />
      <defs>
        <radialGradient id="smallFloral">
          <stop offset="0%" stopColor="#F5E4B0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </radialGradient>
      </defs>
    </svg>
  );
}
