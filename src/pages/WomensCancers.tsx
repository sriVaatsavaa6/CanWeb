import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope, Calendar, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import CancerTypeCard from '../components/CancerTypeCard';

const WomensCancers: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Women's Cancers" 
        subtitle="Understanding cancers that affect women"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Common Cancers Affecting Women</h2>
              <p className="text-xl text-gray-600">
                These cancers primarily affect women. Knowing their symptoms can help with early detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <CancerTypeCard
                title="Breast Cancer"
                symptoms={[
                  "Lump in breast or underarm",
                  "Change in breast size or shape",
                  "Skin dimpling or puckering",
                  "Nipple changes or discharge",
                  "Breast pain or redness"
                ]}
                iconColor="bg-pink-600"
                icon={<Users className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Cervical Cancer"
                symptoms={[
                  "Abnormal vaginal bleeding",
                  "Pain during sex",
                  "Unusual vaginal discharge",
                  "Pelvic pain",
                  "Bleeding after menopause"
                ]}
                iconColor="bg-pink-700"
                icon={<Users className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Ovarian Cancer"
                symptoms={[
                  "Bloating or swollen abdomen",
                  "Feeling full quickly",
                  "Pelvic or back pain",
                  "Frequent urination",
                  "Changes in bowel habits"
                ]}
                iconColor="bg-pink-800"
                icon={<Users className="h-6 w-6" />}
                to="/cancer-types"
              />
            </div>
            
            <div className="bg-pink-50 p-8 rounded-xl mb-10 border-l-4 border-pink-500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <Stethoscope className="h-20 w-20 text-pink-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4">Screening and Early Detection</h3>
                  <p className="text-gray-700 mb-4">
                    Regular screening helps detect cancer early when it's most treatable:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Breast Cancer:</strong> Monthly self-exams, clinical breast exams, and mammograms after age 40</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Cervical Cancer:</strong> Regular Pap tests starting at age 21</span>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Ovarian Cancer:</strong> No standard screening; report unusual symptoms promptly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Risk Factors</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-pink-700">Breast Cancer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Family history of breast cancer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Early menstruation or late menopause</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Having first child after 30 or never having children</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Obesity and lack of physical activity</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-pink-700">Cervical Cancer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>HPV infection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Multiple sexual partners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Smoking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Weakened immune system</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-pink-700">Ovarian Cancer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Family history of ovarian, breast, or colorectal cancer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Age (most common after 50)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Never having children</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-pink-500 mt-2 mr-2"></span>
                      <span>Obesity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/lifestyle-cancers" 
                className="btn-primary"
              >
                Lifestyle Cancers <ArrowRight className="ml-2 h-4 w-4" />
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

export default WomensCancers;