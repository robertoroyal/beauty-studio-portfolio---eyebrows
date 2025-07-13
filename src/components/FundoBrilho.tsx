import React from 'react';

const FundoBrilho: React.FC = () => {
  const particlesCount = 30; // mais partículas para um efeito mais "brilhante"

  const particles = Array.from({ length: particlesCount }).map((_, i) => ({
    cx: Math.random() * 800,
    cy: Math.random() * 600,
    r: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill="#FFD700" // dourado
            opacity={0.6}
            style={{
              animation: 'floatUp 4s ease-in-out infinite',
              animationDelay: `${p.delay}s`,
              filter: 'drop-shadow(0 0 4px #FFC107)', // brilho dourado
            }}
          />
        ))}

        <style jsx>{`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 0.4;
            }
            50% {
              transform: translateY(-20px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(0);
              opacity: 0.4;
            }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default FundoBrilho;