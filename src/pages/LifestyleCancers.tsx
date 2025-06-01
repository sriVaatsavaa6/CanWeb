import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cigarette, AlertCircle, BookOpen } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import CancerTypeCard from '../components/CancerTypeCard';

const LifestyleCancers: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Lifestyle-Related Cancers" 
        subtitle="Cancers often linked to habits and lifestyle choices"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Cancers Linked to Lifestyle</h2>
              <p className="text-xl text-gray-600">
                These cancers are often associated with tobacco use, alcohol, diet, and other lifestyle factors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <CancerTypeCard
                title="Lung Cancer"
                symptoms={[
                  "Persistent cough",
                  "Coughing up blood",
                  "Chest pain that worsens with breathing",
                  "Shortness of breath",
                  "Unexplained weight loss",
                  "Hoarseness"
                ]}
                iconColor="bg-red-600"
                icon={<Cigarette className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Oral Cancer"
                symptoms={[
                  "Persistent mouth sores",
                  "Red or white patches in the mouth",
                  "Loose teeth",
                  "Jaw pain or stiffness",
                  "Painful or difficult swallowing",
                  "Ear pain"
                ]}
                iconColor="bg-red-700"
                icon={<Cigarette className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Stomach Cancer"
                symptoms={[
                  "Indigestion or heartburn",
                  "Nausea and vomiting",
                  "Feeling full quickly",
                  "Stomach pain",
                  "Unintentional weight loss",
                  "Blood in stool"
                ]}
                iconColor="bg-red-800"
                icon={<Cigarette className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Esophageal Cancer"
                symptoms={[
                  "Difficulty swallowing",
                  "Chest pain or pressure",
                  "Unintentional weight loss",
                  "Chronic cough",
                  "Vomiting",
                  "Hoarseness"
                ]}
                iconColor="bg-red-900"
                icon={<Cigarette className="h-6 w-6" />}
                to="/cancer-types"
              />
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl mb-10 border-l-4 border-red-500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <AlertCircle className="h-20 w-20 text-red-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-4">Risk Factors You Can Control</h3>
                  <p className="text-gray-700 mb-4">
                    Many of these cancers are linked to lifestyle choices you can change:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span><strong>Tobacco:</strong> Responsible for about 30% of all cancer deaths in India</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span><strong>Alcohol:</strong> Regular consumption increases risk of many cancers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span><strong>Diet:</strong> High salt, processed foods, and lack of fresh fruits and vegetables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                      <span><strong>Physical inactivity:</strong> Being inactive increases cancer risk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Prevention is Critical</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <BookOpen className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <h4 className="text-xl font-semibold">What You Can Do</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Stop using all tobacco products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Limit or avoid alcohol</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Eat a balanced diet with plenty of fruits and vegetables</span>
                    </li>
                  </ul>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Maintain a healthy weight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Be physically active daily</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                      <span>Get regular health check-ups</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/digestive-cancers" 
                className="btn-primary"
              >
                Digestive Cancers <ArrowRight className="ml-2 h-4 w-4" />
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

export default LifestyleCancers;