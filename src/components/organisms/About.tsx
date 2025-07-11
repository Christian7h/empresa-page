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
        <div className="text-center mb-16">
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
            <div key={index}>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Nuestra Historia</h3>
            <div className="space-y-5">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">El inicio de un sueño.</span> Todo comenzó en 2016 en los pasillos de la universidad, 
                cuando cinco estudiantes de ingeniería nos juntamos con una idea que parecía imposible: 
                democratizar la tecnología para las pequeñas y medianas empresas de Chile. Veíamos cómo 
                las grandes corporaciones tenían acceso a herramientas digitales de última generación, 
                mientras que las PyMEs —el verdadero motor económico de nuestro país— luchaban por 
                mantenerse relevantes en un mundo cada vez más digital.
              </p>
              
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">El despertar de una necesidad.</span> Durante nuestras prácticas profesionales, 
                conocimos a don Carlos, dueño de una ferretería de barrio con 30 años de historia. 
                Tenía los mejores productos y un servicio excepcional, pero estaba perdiendo clientes 
                frente a las grandes tiendas que vendían online. Esa noche, en una pizzería cerca de 
                la universidad, decidimos que nuestro proyecto de título no sería solo una nota: 
                sería la solución que transformaría la vida de miles de emprendedores como don Carlos.
              </p>
              
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Los primeros pasos.</span> Comenzamos trabajando desde el dormitorio de uno de nosotros, 
                con dos computadores prestados y mucho café. Nuestro primer cliente fue la panadería 
                de la esquina, donde desarrollamos un sistema de pedidos online que permitió que 
                doña María triplicara sus ventas durante la pandemia. Ver su sonrisa cuando le mostramos 
                las primeras órdenes digitales nos confirmó que estábamos en el camino correcto.
              </p>
              
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">El crecimiento orgánico.</span> Lo que empezó como un proyecto universitario se transformó 
                en una misión de vida. Cada PyME que ayudábamos nos enseñaba algo nuevo: cómo un 
                taller mecánico podía gestionar citas online, cómo una peluquería podía fidelizar 
                clientes con una app móvil, cómo artesanos locales podían vender sus creaciones 
                a todo Chile desde una plataforma e-commerce. Cada historia de éxito alimentaba 
                nuestra pasión por seguir innovando.
              </p>
              
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">El presente y futuro.</span> Hoy, casi una década después, somos más de 50 profesionales 
                unidos por la misma visión que nos motivó en la universidad. Hemos ayudado a más de 
                500 PyMEs a digitalizarse, creado empleos directos e indirectos, y contribuido al 
                crecimiento económico de comunidades enteras. Pero lo más importante: seguimos siendo 
                esos cinco jóvenes apasionados que creen firmemente que la tecnología debe estar al 
                alcance de todos, sin importar el tamaño de sus sueños.
              </p>
              
              <p className="text-gray-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <span className="font-semibold text-blue-800">Nuestro compromiso hoy:</span> Ser el puente tecnológico 
                que permita a cada emprendedor chileno competir en igualdad de condiciones en la 
                era digital, manteniendo siempre el trato cercano y humano que nos caracteriza desde 
                nuestros días universitarios.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 rounded-3xl p-1">
              <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col justify-center items-center">
                <div className="text-center">
                  <div className="text-6xl mb-6 animate-pulse">🎓</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">De Universidad a Realidad</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    5 estudiantes, 1 sueño, miles de PyMEs transformadas
                  </p>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    2016 - 2025
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute top-1/3 -left-6 w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conoce Nuestro Equipo</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestro diverso equipo de expertos reúne años de experiencia y pasión por la tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};