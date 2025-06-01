import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, MapPin, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-secondary-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Cancer Comes Silently. 
              <span className="block text-accent-300 mt-2">Don't Wait for Pain.</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              In India, most cancers are detected too late. Early stages usually show no pain or obvious signs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/what-is-cancer"
                className="btn-primary text-lg px-8 py-4"
              >
                Start Learning About Cancer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              This website will help everyone — in simple words — understand what cancer is, what symptoms to watch, and how to act early.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recognize Warning Signs</h3>
                <p className="text-gray-600">Learn the early symptoms that are often missed or ignored.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <Clock className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Act Early</h3>
                <p className="text-gray-600">Early detection dramatically increases survival rates.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Find Help in India</h3>
                <p className="text-gray-600">Locate resources, hospitals and support near you.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                to="/warning-signs" 
                className="btn-secondary mr-4 mb-4 sm:mb-0"
              >
                Warning Signs
              </Link>
              <Link 
                to="/help-in-india" 
                className="btn-outline"
              >
                Help Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Knowledge is power. Early detection saves lives.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Website created by Akshay, for every Indian. Let's stop cancer before it's too late.
            </p>
            <Link 
              to="/about-akshay" 
              className="btn-accent"
            >
              About Akshay
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;