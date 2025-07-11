import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface NewsletterSubscription {
  email: string;
  name?: string;
  preferences?: string[];
}

interface UseNewsletterReturn {
  subscribe: (data: NewsletterSubscription) => Promise<{ success: boolean; message: string }>;
  unsubscribe: (email: string) => Promise<{ success: boolean; message: string }>;
  checkSubscription: (email: string) => Promise<{ isSubscribed: boolean; subscriber?: any }>;
  loading: boolean;
}

export const useNewsletter = (): UseNewsletterReturn => {
  const [loading, setLoading] = useState(false);

  const subscribe = async (data: NewsletterSubscription) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: data.email,
          name: data.name || null,
          preferences: data.preferences || null,
          is_active: true
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          return {
            success: false,
            message: 'Este email ya está suscrito a nuestro newsletter.'
          };
        }
        throw error;
      }

      return {
        success: true,
        message: '¡Suscripción exitosa! Revisa tu email para la confirmación.'
      };
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return {
        success: false,
        message: 'Error al suscribirse. Por favor intenta más tarde.'
      };
    } finally {
      setLoading(false);
    }
  };

  const unsubscribe = async (email: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ is_active: false })
        .eq('email', email);

      if (error) throw error;

      return {
        success: true,
        message: 'Desuscripción exitosa del newsletter.'
      };
    } catch (error) {
      console.error('Newsletter unsubscribe error:', error);
      return {
        success: false,
        message: 'Error al desuscribirse. Por favor intenta más tarde.'
      };
    } finally {
      setLoading(false);
    }
  };

  const checkSubscription = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
        throw error;
      }

      return {
        isSubscribed: !!data,
        subscriber: data
      };
    } catch (error) {
      console.error('Check subscription error:', error);
      return {
        isSubscribed: false,
        subscriber: null
      };
    }
  };

  return {
    subscribe,
    unsubscribe,
    checkSubscription,
    loading
  };
};