import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { NewsletterForm } from '../molecules/NewsletterForm';

const blogPosts = [
  {
    id: 1,
    title: 'El Futuro del Desarrollo Web: Tendencias a Observar en 2024',
    excerpt: 'Descubre las últimas tendencias que están moldeando el futuro del desarrollo web, desde la integración de IA hasta las progressive web apps.',
    author: 'Sarah Johnson',
    date: '15 de Marzo, 2024',
    category: 'Desarrollo Web',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '5 min de lectura'
  },
  {
    id: 2,
    title: 'Construyendo Aplicaciones Móviles Escalables con React Native',
    excerpt: 'Aprende las mejores prácticas para crear aplicaciones móviles eficientes y escalables usando el framework React Native.',
    author: 'Mike Chen',
    date: '10 de Marzo, 2024',
    category: 'Desarrollo Móvil',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '8 min de lectura'
  },
  {
    id: 3,
    title: 'Seguridad Cloud: Protegiendo tus Datos en la Era Digital',
    excerpt: 'Medidas de seguridad esenciales y mejores prácticas para proteger tu infraestructura cloud y datos.',
    author: 'Emily Rodriguez',
    date: '8 de Marzo, 2024',
    category: 'Computación Cloud',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '6 min de lectura'
  },
  {
    id: 4,
    title: 'IA y Machine Learning en Aplicaciones Web Modernas',
    excerpt: 'Explora cómo la IA y ML están revolucionando el desarrollo web y las experiencias de usuario.',
    author: 'David Park',
    date: '5 de Marzo, 2024',
    category: 'IA & ML',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '10 min de lectura'
  },
  {
    id: 5,
    title: 'Mejores Prácticas DevOps para Equipos Pequeños',
    excerpt: 'Implementando prácticas DevOps efectivas cuando trabajas con recursos limitados y equipos de desarrollo pequeños.',
    author: 'Lisa Wang',
    date: '1 de Marzo, 2024',
    category: 'DevOps',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '7 min de lectura'
  },
  {
    id: 6,
    title: 'El Auge de la Arquitectura Serverless',
    excerpt: 'Entendiendo la computación serverless y cómo puede beneficiar tu próximo proyecto.',
    author: 'Alex Thompson',
    date: '28 de Febrero, 2024',
    category: 'Arquitectura',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
    readTime: '9 min de lectura'
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Últimas Novedades de Nuestro Blog
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Mantente actualizado con las últimas tendencias, consejos y conocimientos en tecnología
          </p>
          <div data-aos="fade-up" data-aos-delay="100">
            <Button variant="outline">
              Ver Todas las Publicaciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-8 max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <p className="text-sm text-gray-600 mb-4">
              Recibe notificaciones cuando publiquemos nuevos artículos
            </p>
            <NewsletterForm 
              variant="inline"
              placeholder="Suscríbete para actualizaciones"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card hover className="overflow-hidden p-0">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="ghost" size="sm" className="w-full">
                    Leer Más
                    <ArrowRight className="ml-2 h-4 w-4" />
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