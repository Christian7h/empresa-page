import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';
import { NewsletterForm } from '../molecules/NewsletterForm';

const footerLinks = {
  services: [
    { name: 'Desarrollo Web', href: '#services' },
    { name: 'Apps Móviles', href: '#services' },
    { name: 'Soluciones Cloud', href: '#services' },
    { name: 'Consultoría', href: '#services' }
  ],
  company: [
    { name: 'Acerca de Nosotros', href: '#about' },
    { name: 'Nuestro Equipo', href: '#about' },
    { name: 'Carreras', href: '#' },
    { name: 'Contacto', href: '#contact' }
  ],
  resources: [
    { name: 'Blog', href: '#blog' },
    { name: 'Casos de Estudio', href: '#portfolio' },
    { name: 'Documentación', href: '#' },
    { name: 'Soporte', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-400">TechSolutions</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transformando empresas a través de soluciones tecnológicas innovadoras. 
              Ayudamos a las empresas a escalar, innovar y tener éxito en la era digital.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-300">hola@techsolutions.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-300">123 Tech Street, San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mantente Conectado</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Suscríbete para recibir las últimas actualizaciones e insights.
            </p>
            <NewsletterForm 
              variant="footer"
              placeholder="Tu correo electrónico"
            />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 TechSolutions. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};