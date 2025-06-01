import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CancerTypeCardProps {
  title: string;
  symptoms: string[];
  iconColor: string;
  icon: React.ReactNode;
  to: string;
}

const CancerTypeCard: React.FC<CancerTypeCardProps> = ({
  title,
  symptoms,
  iconColor,
  icon,
  to,
}) => {
  return (
    <div className="card h-full flex flex-col hover:scale-105 transition-transform duration-300">
      <div className={`p-4 ${iconColor} text-white rounded-t-xl`}>
        <div className="flex items-center">
          {icon}
          <h3 className="ml-3 text-xl font-semibold">{title}</h3>
        </div>
      </div>
      
      <div className="p-5 flex-grow">
        <h4 className="text-sm font-medium text-gray-500 mb-3">Common Symptoms:</h4>
        <ul className="space-y-2 mb-4">
          {symptoms.map((symptom, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-1.5 mr-2"></span>
              <span className="text-gray-700">{symptom}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 border-t border-gray-100">
        <Link 
          to={to}
          className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
        >
          Learn More <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CancerTypeCard;