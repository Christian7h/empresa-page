import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../atoms/Button';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center pt-20 md:pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforma tu Empresa con
              <span className="text-blue-600"> Innovación Digital</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
              Ayudamos a las empresas a crecer y tener éxito a través de soluciones tecnológicas de vanguardia, 
              desarrollo experto y transformación digital estratégica.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="300">
              <Button size="lg" className="group">
                Comenzar Hoy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Proyectos Entregados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Satisfacción del Cliente</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Soporte Disponible</div>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <div className="aspect-square bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="h-12 w-12 text-blue-600" />
                  </div>
                  <p className="text-gray-600">Innovación en Acción</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};