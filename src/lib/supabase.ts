import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      newsletter_subscribers: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          subscribed_at: string;
          is_active: boolean;
          preferences: string[] | null;
        };
        Insert: {
          id?: string;
          email: string;
          name?: string | null;
          subscribed_at?: string;
          is_active?: boolean;
          preferences?: string[] | null;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          subscribed_at?: string;
          is_active?: boolean;
          preferences?: string[] | null;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          message: string;
          status: string;
          submitted_at: string;
          ip_address: string | null;
          user_agent: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          message: string;
          status?: string;
          submitted_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          message?: string;
          status?: string;
          submitted_at?: string;
          ip_address?: string | null;
          user_agent?: string | null;
        };
      };
    };
  };
};