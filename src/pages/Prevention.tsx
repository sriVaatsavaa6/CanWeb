import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cigarette, Wine, Apple, Activity, Calendar, Sun, PlusCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const Prevention: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="What You Can Do (Prevention)" 
        subtitle="Steps to lower your cancer risk"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Lower Your Risk of Cancer</h2>
              <p className="text-xl text-gray-600">
                While not all cancers can be prevented, you can reduce your risk by making healthy choices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Tobacco */}
              <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-red-600 text-white p-4 flex items-center">
                  <Cigarette className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">Quit Tobacco</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Tobacco use is the single largest preventable cause of cancer worldwide.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Avoid all forms: cigarettes, bidis, hookah, gutka, and chewing tobacco</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Quitting at any age has benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span>Avoid secondhand smoke too</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Alcohol */}
              <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-purple-600 text-white p-4 flex items-center">
                  <Wine className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">Limit Alcohol</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Alcohol increases risk for several types of cancer.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>If you drink, limit consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>The less you drink, the lower your cancer risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                      <span>Combining alcohol with tobacco greatly increases risk</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Healthy Diet */}
              <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-green-600 text-white p-4 flex items-center">
                  <Apple className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">Eat Healthy</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    A healthy diet can help reduce cancer risk.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Eat plenty of fruits and vegetables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Choose whole grains over refined grains</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Limit red meat and processed foods</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Include fiber in your diet</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Physical Activity */}
              <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4 flex items-center">
                  <Activity className="h-8 w-8 mr-3" />
                  <h3 className="text-xl font-semibold">Stay Active</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">
                    Regular physical activity lowers the risk of several cancers.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Aim for at least 30 minutes of activity daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Even walking helps - you don't need intense exercise</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Maintain a healthy weight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-secondary-50 p-5 rounded-lg border border-secondary-100">
                <div className="flex items-center mb-4">
                  <Sun className="h-6 w-6 text-secondary-600 mr-2" />
                  <h3 className="font-semibold">Sun Protection</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Limit sun exposure, use sunscreen, and avoid tanning beds to reduce skin cancer risk.
                </p>
              </div>
              
              <div className="bg-secondary-50 p-5 rounded-lg border border-secondary-100">
                <div className="flex items-center mb-4">
                  <PlusCircle className="h-6 w-6 text-secondary-600 mr-2" />
                  <h3 className="font-semibold">Get Vaccinated</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  HPV vaccine prevents cervical cancer. Hepatitis B vaccine reduces liver cancer risk.
                </p>
              </div>
              
              <div className="bg-secondary-50 p-5 rounded-lg border border-secondary-100">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-secondary-600 mr-2" />
                  <h3 className="font-semibold">Regular Checkups</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  After age 35, get regular health checkups for early detection of any issues.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl mb-10 border-l-4 border-primary-500">
              <h3 className="text-primary-800 text-xl font-semibold mb-4">Remember</h3>
              <p className="text-gray-700">
                Prevention is better than cure. Making these lifestyle changes can significantly reduce your cancer risk. Even small changes can make a difference.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/cancer-types" 
                className="btn-primary"
              >
                Learn About Cancer Types <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Prevention;