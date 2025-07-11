import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  price
}) => {
  return (
    <Card hover className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
        <Icon size={32} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-left space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <Button className="w-full">Saber Más</Button>
    </Card>
  );
};