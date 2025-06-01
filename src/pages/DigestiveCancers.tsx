import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Coffee, AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import CancerTypeCard from '../components/CancerTypeCard';

const DigestiveCancers: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Digestive System Cancers" 
        subtitle="Understanding cancers affecting the digestive organs"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Cancers of the Digestive System</h2>
              <p className="text-xl text-gray-600">
                These cancers affect organs involved in digesting food and processing nutrients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <CancerTypeCard
                title="Liver Cancer"
                symptoms={[
                  "Yellowing skin and eyes (jaundice)",
                  "Abdominal pain and swelling",
                  "Weight loss",
                  "Weakness and fatigue",
                  "Nausea and vomiting",
                  "White, chalky stools"
                ]}
                iconColor="bg-yellow-600"
                icon={<Droplet className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Colon Cancer"
                symptoms={[
                  "Change in bowel habits",
                  "Blood in stool",
                  "Persistent abdominal discomfort",
                  "Feeling that bowel doesn't empty completely",
                  "Weakness or fatigue",
                  "Unexplained weight loss"
                ]}
                iconColor="bg-yellow-700"
                icon={<Coffee className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Pancreatic Cancer"
                symptoms={[
                  "Abdominal or back pain",
                  "Weight loss",
                  "Yellowing of skin (jaundice)",
                  "Loss of appetite",
                  "Light-colored stools",
                  "New-onset diabetes"
                ]}
                iconColor="bg-yellow-800"
                icon={<Droplet className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Gallbladder Cancer"
                symptoms={[
                  "Abdominal pain and swelling",
                  "Nausea and vomiting",
                  "Jaundice",
                  "Fever",
                  "Weight loss",
                  "Itchy skin"
                ]}
                iconColor="bg-yellow-900"
                icon={<Droplet className="h-6 w-6" />}
                to="/cancer-types"
              />
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-xl mb-10 border-l-4 border-yellow-500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <AlertCircle className="h-20 w-20 text-yellow-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-yellow-800 mb-4">Important Facts About Digestive Cancers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span><strong>Common in India:</strong> Digestive cancers are among the most prevalent in India, with gallbladder cancer being particularly common in northern regions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span><strong>Often diagnosed late:</strong> These cancers frequently have vague early symptoms that can be mistaken for digestive problems.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span><strong>Risk factors:</strong> Diet high in processed foods, chronic infections (hepatitis for liver cancer), gallstones, and genetic factors.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Warning Signs You Shouldn't Ignore</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-yellow-700">General Digestive Symptoms</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Persistent abdominal pain or discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Unexplained weight loss</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Jaundice (yellowing of skin and eyes)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Changes in bowel habits lasting more than a few weeks</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-yellow-700">When to See a Doctor</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Blood in stool or black, tarry stools</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Persistent vomiting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Severe abdominal pain that doesn't go away</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mt-2 mr-2"></span>
                      <span>Any digestive symptoms that persist for more than two weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/mens-blood-cancers" 
                className="btn-primary"
              >
                Men's & Blood Cancers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/cancer-types" 
                className="btn-outline"
              >
                Back to All Cancer Types
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default DigestiveCancers;