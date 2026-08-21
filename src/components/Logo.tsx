import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSlogan?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showSlogan = false,
  className = '',
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  const textDimensions = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  }[size];

  const sloganDimensions = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand High-Tech Emblem */}
      <div className={`relative flex items-center justify-center ${iconDimensions} group`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-md group-hover:bg-blue-400/40 transition-all duration-300"></div>
        
        {/* SVG Emblem Replica of Sahly Web Logo */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full relative z-10 drop-shadow-[0_0_12px_rgba(0,163,255,0.8)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circuit Circle */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="url(#circuitGrad)"
            strokeWidth="2.5"
            strokeDasharray="4 6 12 4"
            className="animate-spin"
            style={{ animationDuration: '30s' }}
          />
          
          {/* Circuit nodes */}
          <circle cx="94" cy="50" r="2.5" fill="#00D2FF" />
          <circle cx="6" cy="50" r="2.5" fill="#00D2FF" />
          <circle cx="50" cy="94" r="2.5" fill="#0066FF" />
          <circle cx="50" cy="6" r="2.5" fill="#0066FF" />

          {/* Inner Glowing Ring */}
          <circle
            cx="50"
            cy="50"
            r="35"
            stroke="url(#blueGrad)"
            strokeWidth="3.5"
            strokeOpacity="0.85"
          />

          {/* Stylized 'S' Arc */}
          <path
            d="M 32 30 C 40 18, 65 18, 68 34 C 70 45, 30 52, 32 68 C 34 82, 60 84, 68 72"
            stroke="url(#silverGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeOpacity="0.75"
          />

          {/* Lightning Bolt with Arrow pointing up-right */}
          <path
            d="M 58 12 L 62 12 L 62 28 L 52 38 L 40 38 L 38 48 L 56 48 L 40 88 L 64 36 L 50 36 L 68 18 L 74 24 L 74 12 Z"
            fill="url(#lightningGrad)"
            stroke="#E0F7FF"
            strokeWidth="1.2"
          />

          {/* Glowing Center Particle */}
          <circle cx="50" cy="50" r="3" fill="#E0F7FF" className="animate-ping opacity-75" />

          {/* Gradients */}
          <defs>
            <linearGradient id="lightningGrad" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F0FF" />
              <stop offset="0.5" stopColor="#0088FF" />
              <stop offset="1" stopColor="#0051FF" />
            </linearGradient>

            <linearGradient id="blueGrad" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0066FF" />
              <stop offset="1" stopColor="#00F0FF" />
            </linearGradient>

            <linearGradient id="circuitGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00F0FF" />
              <stop offset="0.5" stopColor="#0066FF" />
              <stop offset="1" stopColor="#00F0FF" />
            </linearGradient>

            <linearGradient id="silverGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" />
              <stop offset="0.6" stopColor="#93C5FD" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`font-black font-alexandria text-cyan-400 tracking-tight ${textDimensions} drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]`}>
            سَهْلي
          </span>
          <span className={`font-extrabold font-jakarta text-white tracking-wide ${textDimensions}`}>
            Web
          </span>
        </div>
        
        {showSlogan && (
          <div className={`text-slate-400 font-medium tracking-normal mt-1 flex items-center gap-1.5 ${sloganDimensions}`}>
            <span className="text-cyan-400">سرعة</span>
            <span className="text-blue-500">•</span>
            <span className="text-slate-200">سهولة</span>
            <span className="text-blue-500">•</span>
            <span className="text-blue-400">احترافية</span>
          </div>
        )}
      </div>
    </div>
  );
};
