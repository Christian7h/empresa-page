import React from 'react';
import { Mail, TrendingUp, Users, Zap } from 'lucide-react';
import { NewsletterForm } from '../molecules/NewsletterForm';
import { Card } from '../atoms/Card';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Conocimientos de la Industria',
    description: 'Obtén las últimas tendencias y conocimientos en tecnología y desarrollo'
  },
  {
    icon: Zap,
    title: 'Consejos de Expertos',
    description: 'Consejos prácticos y mejores prácticas de nuestro equipo experimentado'
  },
  {
    icon: Users,
    title: 'Contenido Exclusivo',
    description: 'Acceso a contenido exclusivo, casos de estudio y actualizaciones detrás de escena'
  }
];

export const Newsletter: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Mantente Actualizado
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              Únete a nuestro newsletter para recibir las últimas actualizaciones, conocimientos de expertos, 
              y contenido exclusivo directamente en tu bandeja de entrada.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div>
            <Card className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Suscríbete a Nuestro Newsletter
            </h3>
            <p className="text-gray-600 mb-6">
              Recibe actualizaciones semanales y no te pierdas nuevo contenido y ofertas exclusivas.
            </p>
            
            <NewsletterForm 
              showName={true}
              placeholder="tu.email@ejemplo.com"
            />
            
            <p className="text-xs text-gray-500 mt-4">
              Respetamos tu privacidad. Puedes darte de baja en cualquier momento. 
              Lee nuestra <a href="#" className="text-blue-600 hover:underline">Política de Privacidad</a>.
            </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};