import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

interface MythFactCardProps {
  myth: string;
  fact: string;
}

const MythFactCard: React.FC<MythFactCardProps> = ({ myth, fact }) => {
  return (
    <div className="card overflow-hidden">
      <div className="p-5 bg-red-50 border-b border-red-100">
        <div className="flex items-start">
          <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-red-700">Myth</h3>
            <p className="text-gray-800">{myth}</p>
          </div>
        </div>
      </div>
      
      <div className="p-5 bg-green-50">
        <div className="flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
          <div className="ml-3">
            <h3 className="text-lg font-semibold text-green-700">Fact</h3>
            <p className="text-gray-800">{fact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MythFactCard;