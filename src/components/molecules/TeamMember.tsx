import React from 'react';
import { Card } from '../atoms/Card';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  socials
}) => {
  return (
    <Card hover className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-blue-600 font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{bio}</p>
      <div className="flex justify-center space-x-3">
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} />
          </a>
        )}
        {socials.twitter && (
          <a
            href={socials.twitter}
            className="text-gray-400 hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={20} />
          </a>
        )}
        {socials.email && (
          <a
            href={`mailto:${socials.email}`}
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            <Mail size={20} />
          </a>
        )}
      </div>
    </Card>
  );
};