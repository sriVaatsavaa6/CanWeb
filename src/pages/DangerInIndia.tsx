import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, BarChart, Users, BookOpen } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const DangerInIndia: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Why Cancer Is Dangerous in India" 
        subtitle="Understanding the unique challenges we face"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <div className="bg-red-50 p-6 rounded-xl mb-10 border-l-4 border-red-500">
                <h2 className="text-red-700 text-2xl font-semibold mb-4">The Critical Problem</h2>
                <div className="text-center text-4xl font-bold text-red-600 mb-6">
                  70–80% of cancers in India are detected in late stages
                </div>
                <p className="text-lg text-gray-700">
                  When cancer is found in later stages, treatment becomes more difficult, more expensive, and less likely to succeed.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="card p-5">
                  <MapPin className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Limited Access</h3>
                  <p className="text-gray-600 text-sm">
                    Many people in rural areas have limited access to cancer screening and treatment facilities.
                  </p>
                </div>
                
                <div className="card p-5">
                  <BarChart className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Lack of Awareness</h3>
                  <p className="text-gray-600 text-sm">
                    Limited knowledge about cancer symptoms leads to delayed diagnosis.
                  </p>
                </div>
                
                <div className="card p-5">
                  <Users className="h-8 w-8 text-primary-600 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Social Stigma</h3>
                  <p className="text-gray-600 text-sm">
                    Fear and social stigma prevent people from seeking medical help early.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">Common Reasons for Late Detection</h2>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <div>
                    <h3 className="font-semibold text-lg">Ignoring Early Warning Signs</h3>
                    <p className="text-gray-700">People often dismiss early symptoms as minor health issues.</p>
                  </div>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <h3 className="font-semibold text-lg">Believing in Myths</h3>
                    <p className="text-gray-700">Many myths about cancer prevent people from seeking proper medical care.</p>
                  </div>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div>
                    <h3 className="font-semibold text-lg">Financial Concerns</h3>
                    <p className="text-gray-700">Worry about treatment costs delays seeking medical help.</p>
                  </div>
                </li>
                
                <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <span className="inline-block w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <div>
                    <h3 className="font-semibold text-lg">Using Alternative Treatments First</h3>
                    <p className="text-gray-700">Trying unproven remedies before seeking medical diagnosis.</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-secondary-50 p-6 rounded-xl mb-10 border-l-4 border-secondary-500">
                <h2 className="flex items-center text-secondary-700 text-2xl mb-3">
                  <BookOpen className="mr-2 h-6 w-6 flex-shrink-0" />
                  How This Website Helps
                </h2>
                <p className="text-gray-700 mb-4">
                  This site shares facts to help you protect yourself and your family by:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Teaching you to recognize warning signs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Dispelling common myths about cancer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Providing information about resources and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                    <span>Empowering you with knowledge to act early</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center space-x-4 mt-10">
                <Link 
                  to="/warning-signs" 
                  className="btn-primary"
                >
                  Learn Warning Signs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default DangerInIndia;