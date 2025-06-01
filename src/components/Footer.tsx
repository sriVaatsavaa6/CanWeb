import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Info } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Cancer Comes Silently</h3>
            <p className="text-gray-300 text-sm">
              Website created by Akshay Srivatsava, for every Indian — to raise awareness and fight cancer with knowledge.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Heart className="h-4 w-4 text-red-400" />
              <span>With love and care for every Indian</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="hover:text-primary-300 transition-colors">Home</Link></li>
              <li><Link to="/what-is-cancer" className="hover:text-primary-300 transition-colors">What Is Cancer?</Link></li>
              <li><Link to="/warning-signs" className="hover:text-primary-300 transition-colors">Warning Signs</Link></li>
              <li><Link to="/cancer-types" className="hover:text-primary-300 transition-colors">Cancer Types</Link></li>
              <li><Link to="/hospitals-in-india" className="hover:text-primary-300 transition-colors">Hospitals in India</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/help-in-india" className="hover:text-primary-300 transition-colors">Help in India</Link></li>
              <li><Link to="/myths-facts" className="hover:text-primary-300 transition-colors">Myths & Facts</Link></li>
              <li><Link to="/prevention" className="hover:text-primary-300 transition-colors">Prevention</Link></li>
              <li><Link to="/about-akshay" className="hover:text-primary-300 transition-colors">About Akshay</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Helplines</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>National Cancer Institute: 155303</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>Indian Cancer Society: 1800 22 1951</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>CanSupport: 011 2671 1054</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Cancer Comes Silently. Created by Akshay Srivatsava. B.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors">
              <Info className="h-5 w-5" />
              <span className="sr-only">Information</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;