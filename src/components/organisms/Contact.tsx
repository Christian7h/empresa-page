import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { Card } from '../atoms/Card';
import { useContact } from '../../hooks/useContact';

const contactInfo = [
  {
    icon: Mail,
    title: 'Escríbenos',
    details: 'hola@techsolutions.com',
    description: 'Envíanos un email cuando quieras'
  },
  {
    icon: Phone,
    title: 'Llámanos',
    details: '+1 (555) 123-4567',
    description: 'Soporte 24/7 disponible'
  },
  {
    icon: MapPin,
    title: 'Visítanos',
    details: '123 Tech Street, San Francisco, CA',
    description: 'Ven a visitar nuestra oficina'
  },
  {
    icon: MessageCircle,
    title: 'Chat en Vivo',
    details: 'Disponible 24/7',
    description: 'Chatea con nuestro equipo de soporte'
  }
];

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitMessageType, setSubmitMessageType] = useState<'success' | 'error' | null>(null);
  
  const { submitContact, loading } = useContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitMessage('Por favor completa todos los campos requeridos.');
      setSubmitMessageType('error');
      return;
    }

    const result = await submitContact({
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message
    });

    setSubmitMessage(result.message);
    setSubmitMessageType(result.success ? 'success' : 'error');

    if (result.success) {
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitMessageType(null);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-gray-600">
            ¿Listo para iniciar tu proyecto? Hablemos sobre cómo podemos ayudarte a tener éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Comencemos una Conversación
            </h3>
            <p className="text-gray-600 mb-8">
              Estamos aquí para ayudarte a hacer realidad tu visión. Ya sea que tengas un 
              proyecto específico en mente o solo quieras explorar posibilidades, nos 
              encantaría saber de ti.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-blue-600 font-medium">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Mapa Interactivo</p>
                <p className="text-sm text-gray-500">123 Tech Street, San Francisco, CA</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <Card>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Nombre Completo"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Correo Electrónico"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <Input
                label="Empresa"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>
              <Button type="submit" className="w-full">
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </>
                )}
              </Button>
            </form>
            
            {submitMessage && (
              <div className={`mt-4 p-4 rounded-md flex items-start ${
                submitMessageType === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitMessageType === 'success' ? (
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">¡Mensaje enviado exitosamente!</p>
                      <p className="text-sm mt-1">{submitMessage}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Error al enviar mensaje</p>
                      <p className="text-sm mt-1">{submitMessage}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};