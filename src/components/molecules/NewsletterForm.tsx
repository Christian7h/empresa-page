import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { useNewsletter } from '../../hooks/useNewsletter';

interface NewsletterFormProps {
  variant?: 'default' | 'footer' | 'inline';
  showName?: boolean;
  placeholder?: string;
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  variant = 'default',
  showName = false,
  placeholder = 'Ingresa tu correo electrónico',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);
  
  const { subscribe, loading } = useNewsletter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Por favor ingresa un correo electrónico válido');
      setMessageType('error');
      return;
    }

    const result = await subscribe({
      email: email.trim(),
      name: name.trim() || undefined
    });

    setMessage(result.message);
    setMessageType(result.success ? 'success' : 'error');

    if (result.success) {
      setEmail('');
      setName('');
      // Clear success message after 5 seconds
      setTimeout(() => {
        setMessage('');
        setMessageType(null);
      }, 5000);
    }
  };

  const getFormClasses = () => {
    switch (variant) {
      case 'footer':
        return 'space-y-3';
      case 'inline':
        return 'flex flex-col sm:flex-row gap-3';
      default:
        return 'space-y-4';
    }
  };

  const getInputClasses = () => {
    switch (variant) {
      case 'footer':
        return 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400';
      default:
        return '';
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className={getFormClasses()}>
        {showName && (
          <Input
            type="text"
            placeholder="Tu nombre (opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={getInputClasses()}
          />
        )}
        
        <div className={variant === 'inline' ? 'flex-1' : ''}>
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={getInputClasses()}
          />
        </div>
        
        <Button
          type="submit"
          disabled={loading}
          variant={variant === 'footer' ? 'secondary' : 'primary'}
          className={variant === 'inline' ? 'sm:w-auto' : 'w-full'}
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Suscribiendo...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Suscribirse
            </>
          )}
        </Button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-md flex items-center ${
          messageType === 'success' 
            ? 'bg-green-50 text-green-800 border border-green-200' 
            : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {messageType === 'success' ? (
            <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          )}
          <span className="text-sm">{message}</span>
        </div>
      )}
    </div>
  );
};