import React, { useState, useEffect } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    // Calcular progreso inicial
    calculateScrollProgress();

    // Agregar event listener
    window.addEventListener('scroll', calculateScrollProgress);

    // Cleanup
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  return (
    <>
      {/* Barra de progreso fija en la parte superior */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      {/* Indicador circular flotante (opcional) */}
      <div className="fixed top-4 right-4 z-50 w-12 h-12 hidden md:flex items-center justify-center">
        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
          {/* Círculo de fondo */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth="4"
          />
          {/* Círculo de progreso */}
          <circle
            cx="24"
            cy="24"
            r="20"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-150 ease-out"
          />
          {/* Gradiente para el círculo */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>
          </defs>
        </svg>
        {/* Porcentaje en el centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-semibold text-gray-700">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </>
  );
};
