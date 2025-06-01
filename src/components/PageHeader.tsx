import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className={`relative py-16 md:py-20 lg:py-24 ${image ? 'bg-cover bg-center' : 'bg-gradient-to-r from-primary-700 to-secondary-700'}`}
      style={image ? { backgroundImage: `url(${image})` } : {}}
    >
      {/* Overlay for background images */}
      {image && <div className="absolute inset-0 bg-gray-900 bg-opacity-70"></div>}
      
      <div className="container-custom relative z-10">
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-gray-100 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;