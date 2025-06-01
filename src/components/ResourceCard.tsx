import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  contactInfo?: string;
  website?: string;
  icon?: React.ReactNode;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  contactInfo,
  website,
  icon,
}) => {
  return (
    <div className="card p-6 h-full flex flex-col">
      <div className="flex items-start mb-4">
        {icon && <div className="mr-3 text-primary-600">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      {contactInfo && (
        <div className="text-sm text-gray-700 mb-3 font-medium">
          Contact: {contactInfo}
        </div>
      )}
      
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-secondary-600 hover:text-secondary-700"
        >
          Visit Website <ExternalLink className="h-4 w-4 ml-1" />
        </a>
      )}
    </div>
  );
};

export default ResourceCard;