import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Card } from '../atoms/Card';

const pricingPlans = [
  {
    name: 'Inicial',
    price: { monthly: 99, yearly: 999 },
    description: 'Perfecto para pequeñas empresas y startups',
    features: [
      '5 Páginas Web',
      'Configuración SEO Básica',
      'Diseño Responsivo',
      'Formulario de Contacto',
      'Analítica Básica',
      'Soporte por Email'
    ],
    popular: false
  },
  {
    name: 'Profesional',
    price: { monthly: 299, yearly: 2999 },
    description: 'Ideal para empresas en crecimiento',
    features: [
      '15 Páginas Web',
      'SEO Avanzado',
      'Listo para E-commerce',
      'Funcionalidades Personalizadas',
      'Analítica Avanzada',
      'Soporte Prioritario',
      'Optimización de Rendimiento',
      'Monitoreo de Seguridad'
    ],
    popular: true
  },
  {
    name: 'Empresarial',
    price: { monthly: 699, yearly: 6999 },
    description: 'Para organizaciones grandes',
    features: [
      'Páginas Ilimitadas',
      'Suite SEO Completa',
      'Desarrollo Personalizado',
      'Integración de APIs',
      'Seguridad Avanzada',
      'Soporte Dedicado',
      'Monitoreo de Rendimiento',
      'Capacitación Personalizada',
      'Garantía SLA'
    ],
    popular: false
  }
];

export const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Precios Transparentes
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Elige el plan perfecto para las necesidades de tu empresa
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual
            </span>
            {isYearly && (
              <span className="text-sm text-green-600 font-medium">Ahorra 20%</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index}>
              <Card className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  <span className="text-gray-600">
                    /{isYearly ? 'año' : 'mes'}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.popular ? 'primary' : 'outline'}
                  className="w-full"
                >
                  {plan.popular ? 'Comenzar' : 'Elegir Plan'}
                </Button>
              </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};