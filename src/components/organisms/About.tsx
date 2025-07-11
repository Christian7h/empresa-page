import React from 'react';
import { Award, Users, Clock, Globe } from 'lucide-react';
import { TeamMember } from '../molecules/TeamMember';
import { Card } from '../atoms/Card';

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Miembros del Equipo',
    description: 'Profesionales talentosos'
  },
  {
    icon: Award,
    value: '500+',
    label: 'Proyectos Completados',
    description: 'Entregas exitosas'
  },
  {
    icon: Clock,
    value: '8+',
    label: 'Años de Experiencia',
    description: 'Expertise en la industria'
  },
  {
    icon: Globe,
    value: '25+',
    label: 'Países Atendidos',
    description: 'Alcance global'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO y Co-Fundadora',
    bio: 'Líder visionaria con más de 15 años en la industria tecnológica, apasionada por la innovación y el desarrollo de equipos.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@techsolutions.com'
    }
  },
  {
    name: 'Mike Chen',
    role: 'CTO y Co-Fundador',
    bio: 'Arquitecto full-stack con experiencia en sistemas escalables y prácticas de desarrollo modernas.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'mike@techsolutions.com'
    }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Jefa de Diseño',
    bio: 'Diseñadora creativa enfocada en experiencia de usuario e interfaz con pasión por la accesibilidad.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'emily@techsolutions.com'
    }
  },
  {
    name: 'David Park',
    role: 'Desarrollador Principal',
    bio: 'Desarrollador senior especializado en React, Node.js y arquitectura cloud con más de 10 años de experiencia.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'david@techsolutions.com'
    }
  },
  {
    name: 'Lisa Wang',
    role: 'Ingeniera DevOps',
    bio: 'Especialista en infraestructura con experiencia en AWS, Docker y optimización de pipelines CI/CD.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'lisa@techsolutions.com'
    }
  },
  {
    name: 'Alex Thompson',
    role: 'Desarrollador Móvil',
    bio: 'Experto en aplicaciones móviles enfocado en desarrollo React Native y Flutter para iOS y Android.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    socials: {
      linkedin: '#',
      twitter: '#',
      email: 'alex@techsolutions.com'
    }
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acerca de TechSolutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos un equipo apasionado de desarrolladores, diseñadores y entusiastas de la tecnología 
            dedicados a ayudar a las empresas a transformarse a través de soluciones digitales innovadoras.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <stat.icon size={32} className="text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-600">{stat.description}</div>
              </Card>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4">
              Fundada en 2016, TechSolutions comenzó como un pequeño equipo de desarrolladores apasionados 
              que creían que la tecnología debería ser accesible y transformadora para empresas 
              de todos los tamaños. Lo que comenzó como una visión para cerrar la brecha entre tecnología compleja 
              y las necesidades empresariales ha crecido hasta convertirse en un socio integral de transformación digital.
            </p>
            <p className="text-gray-600 mb-4">
              Hoy trabajamos con empresas que van desde startups innovadoras hasta empresas establecidas, 
              ayudándolas a aprovechar tecnología de vanguardia para alcanzar sus objetivos 
              y mantenerse competitivas en un panorama digital en constante evolución.
            </p>
            <p className="text-gray-600">
              Nuestro compromiso con la excelencia, innovación y éxito del cliente nos ha ganado la 
              confianza de más de 500 clientes en todo el mundo, con una tasa de satisfacción del 98% e innumerables 
              entregas exitosas de proyectos.
            </p>
          </div>
          <div className="aspect-square bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8" data-aos="fade-left" data-aos-delay="200">
            <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovación Primero</h4>
                <p className="text-gray-600">
                  Creemos en traspasar límites y crear soluciones que marquen la diferencia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conoce Nuestro Equipo</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro diverso equipo de expertos reúne años de experiencia y pasión por la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};