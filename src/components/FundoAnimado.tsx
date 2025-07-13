// FundoBrilho.tsx
import React from 'react';

const FundoBrilho: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 20 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r={Math.random() * 2 + 1}
            fill="#fefce8"
            opacity={Math.random() * 0.3}
            style={{
              animation: 'floatUp 3s ease-in-out infinite',
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}

        <style jsx>{`
          @keyframes floatUp {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
        `}</style>
      </svg>
    </div>
  );
};

export default FundoBrilho;