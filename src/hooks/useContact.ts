import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface ContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
}

interface UseContactReturn {
  submitContact: (data: ContactSubmission) => Promise<{ success: boolean; message: string }>;
  loading: boolean;
}

export const useContact = (): UseContactReturn => {
  const [loading, setLoading] = useState(false);

  const submitContact = async (data: ContactSubmission) => {
    setLoading(true);
    try {
      // Get user's IP address and user agent for tracking (optional)
      const userAgent = navigator.userAgent;
      
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: data.name.trim(),
          email: data.email.trim(),
          company: data.company?.trim() || null,
          message: data.message.trim(),
          status: 'new',
          user_agent: userAgent
        });

      if (error) {
        console.error('Contact submission error:', error);
        throw error;
      }

      return {
        success: true,
        message: '¡Gracias por tu mensaje! Te responderemos dentro de 24 horas.'
      };
    } catch (error) {
      console.error('Contact submission error:', error);
      return {
        success: false,
        message: 'Error al enviar el mensaje. Por favor intenta nuevamente o contáctanos directamente.'
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitContact,
    loading
  };
};