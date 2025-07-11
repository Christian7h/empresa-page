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

    // Agregar event listener con throttling para mejor rendimiento
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          calculateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Barra de progreso fija en la parte superior */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50 shadow-sm">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 transition-all duration-300 ease-out shadow-sm"
          style={{ 
            width: `${scrollProgress}%`,
            boxShadow: scrollProgress > 0 ? '0 0 10px rgba(59, 130, 246, 0.5)' : 'none'
          }}
        />
      </div>
      
      {/* Indicador de porcentaje discreto (solo visible cuando hay scroll significativo) */}
      {scrollProgress > 10 && (
        <div className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1 shadow-lg transition-all duration-300 hidden md:block">
          <span className="text-xs font-semibold text-gray-700">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      )}
    </>
  );
};
