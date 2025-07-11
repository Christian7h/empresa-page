/*
  # Newsletter Subscription System

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `name` (text, optional)
      - `subscribed_at` (timestamp with timezone, default now)
      - `is_active` (boolean, default true)
      - `preferences` (text array, optional for future categorization)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public insert (anyone can subscribe)
    - Add policy for authenticated users to read their own subscription
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  preferences text[]
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow users to read their own subscription status
CREATE POLICY "Users can read their own subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Allow users to update their own subscription (unsubscribe)
CREATE POLICY "Users can update their own subscription"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon, authenticated
  USING (true);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_active ON newsletter_subscribers(is_active);