import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export const NewsletterBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <Mail className="h-5 w-5 flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium">
              ¡Mantente actualizado con nuestros últimos insights y consejos!
            </p>
          </div>
        </div>
    
        <div className="hidden md:block flex-shrink-0 ml-4">
          <NewsletterForm 
            variant="inline"
            placeholder="Ingresa email"
            className="max-w-sm"
          />
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
          aria-label="Cerrar banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      {/* Mobile form */}
      <div className="md:hidden mt-3 pt-3 border-t border-white/20">
        <NewsletterForm 
          variant="inline"
          placeholder="Ingresa tu email"
        />
      </div>
    </div>
  );
};