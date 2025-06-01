import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Bell as Cells, Activity, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const WhatIsCancer: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="What Is Cancer?" 
        subtitle="Understanding cancer in simple terms"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div className="bg-primary-50 p-6 rounded-xl mb-10 border-l-4 border-primary-500">
                <h2 className="flex items-center text-primary-800 text-2xl mb-3">
                  <AlertCircle className="mr-2 h-6 w-6 flex-shrink-0" />
                  Simple Definition
                </h2>
                <p className="text-xl text-gray-700">
                  Cancer is when cells grow too fast, forming lumps or spreading to organs. It starts small and grows quietly. You won't always feel pain.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="card p-6">
                  <Cells className="h-10 w-10 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Abnormal Cell Growth</h3>
                  <p className="text-gray-600">
                    Normal cells grow and divide in an orderly way. Cancer cells continue to grow without control.
                  </p>
                </div>
                
                <div className="card p-6">
                  <Activity className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Spreads Through Body</h3>
                  <p className="text-gray-600">
                    Cancer can spread from where it started to other parts of the body, a process called metastasis.
                  </p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Why Cancer Is Often Silent</h2>
              <p className="mb-6">
                Early cancer usually doesn't cause pain. Your body has plenty of room for a tumor to grow, and some areas don't have pain-sensing nerves. By the time you feel pain, the cancer may have already grown or spread.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-xl mb-10">
                <h3 className="flex items-center text-xl font-semibold mb-4">
                  <Target className="mr-2 h-6 w-6 text-secondary-600" />
                  Why Early Detection Matters
                </h3>
                <p className="text-gray-700 mb-4">
                  When found early, cancer is:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>More likely to respond to treatment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>Less likely to have spread</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>More likely to be cured</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>Requires less aggressive treatment</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center space-x-4 mt-12">
                <Link 
                  to="/danger-in-india" 
                  className="btn-primary"
                >
                  Why It's Dangerous in India <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WhatIsCancer;