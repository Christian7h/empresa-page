import React from 'react';
import { Code, Smartphone, Cloud, Shield, Zap, Users } from 'lucide-react';
import { ServiceCard } from '../molecules/ServiceCard';

const services = [
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web personalizadas construidas con tecnologías modernas',
    features: [
      'Desarrollo en React & Next.js',
      'Soluciones Full-stack',
      'Plataformas E-commerce',
      'Desarrollo e Integración de APIs'
    ],
    price: 'Desde $5.000'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas y multiplataforma',
    features: [
      'Desarrollo iOS & Android',
      'Apps en React Native',
      'Progressive Web Apps',
      'Optimización App Store'
    ],
    price: 'Desde $8.000'
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description: 'Infraestructura cloud escalable y despliegue',
    features: [
      'Configuración AWS & Azure',
      'DevOps & CI/CD',
      'Gestión de Bases de Datos',
      'Optimización de Rendimiento'
    ],
    price: 'Desde $3.000'
  },
  {
    icon: Shield,
    title: 'Auditoría de Seguridad',
    description: 'Evaluación integral de seguridad y protección',
    features: [
      'Pruebas de Vulnerabilidad',
      'Revisión de Código',
      'Verificaciones de Cumplimiento',
      'Capacitación en Seguridad'
    ],
    price: 'Desde $2.500'
  },
  {
    icon: Zap,
    title: 'Optimización de Rendimiento',
    description: 'Acelera tus aplicaciones y mejora la experiencia del usuario',
    features: [
      'Optimización de Velocidad',
      'Mejoras SEO',
      'Core Web Vitals',
      'Configuración de Monitoreo'
    ],
    price: 'Desde $1.500'
  },
  {
    icon: Users,
    title: 'Consultoría',
    description: 'Consultoría tecnológica estratégica y planificación',
    features: [
      'Revisión de Arquitectura',
      'Estrategia Tecnológica',
      'Capacitación de Equipos',
      'Gestión de Proyectos'
    ],
    price: 'Desde $200/hr'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para ayudar a tu empresa a crecer y tener éxito en la era digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};