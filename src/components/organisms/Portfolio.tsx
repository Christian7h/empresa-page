import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';

const categories = ['Todos', 'Desarrollo Web', 'Apps Móviles', 'E-commerce', 'Soluciones Cloud'];

const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce',
    category: 'E-commerce',
    description: 'Tienda online completa con integración de pagos',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'App Bancaria Móvil',
    category: 'Apps Móviles',
    description: 'Aplicación bancaria segura con autenticación biométrica',
    image: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['React Native', 'Firebase', 'API Biométrica'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Dashboard Cloud',
    category: 'Soluciones Cloud',
    description: 'Panel de monitoreo en tiempo real para infraestructura cloud',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Vue.js', 'AWS', 'Docker', 'Kubernetes'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Sitio Web Corporativo',
    category: 'Desarrollo Web',
    description: 'Sitio web corporativo moderno con integración CMS',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 5,
    title: 'App Delivery de Comida',
    category: 'Apps Móviles',
    description: 'Solución completa de delivery con seguimiento en tiempo real',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['Flutter', 'Firebase', 'Google Maps API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 6,
    title: 'Plataforma SaaS',
    category: 'Desarrollo Web',
    description: 'Aplicación SaaS multi-tenant con gestión de suscripciones',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400',
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explora nuestros últimos proyectos e historias de éxito
          </p>
          
          <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card hover className="overflow-hidden p-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Github className="h-4 w-4 mr-1" />
                    Código
                  </Button>
                </div>
              </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};