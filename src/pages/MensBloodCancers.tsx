import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale as Male, Activity, Brain, AlertCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import CancerTypeCard from '../components/CancerTypeCard';

const MensBloodCancers: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Men's & Blood Cancers" 
        subtitle="Understanding cancers affecting men and blood disorders"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Men's Cancers and Blood Malignancies</h2>
              <p className="text-xl text-gray-600">
                These include cancers specific to men and those affecting the blood and lymphatic system.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <CancerTypeCard
                title="Prostate Cancer"
                symptoms={[
                  "Difficulty urinating",
                  "Weak or interrupted urine flow",
                  "Frequent urination, especially at night",
                  "Blood in urine or semen",
                  "Pain or burning during urination",
                  "Pain in lower back, hips or thighs"
                ]}
                iconColor="bg-blue-600"
                icon={<Male className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Testicular Cancer"
                symptoms={[
                  "Lump or swelling in testicle",
                  "Pain or discomfort in testicle or scrotum",
                  "Feeling of heaviness in scrotum",
                  "Dull ache in lower abdomen or groin",
                  "Sudden fluid collection in scrotum",
                  "Pain in lower back (in advanced cases)"
                ]}
                iconColor="bg-blue-700"
                icon={<Male className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Blood Cancers"
                symptoms={[
                  "Persistent fatigue and weakness",
                  "Frequent infections",
                  "Easy bruising or bleeding",
                  "Swollen lymph nodes",
                  "Fever or night sweats",
                  "Unexplained weight loss"
                ]}
                iconColor="bg-blue-800"
                icon={<Activity className="h-6 w-6" />}
                to="/cancer-types"
              />
              
              <CancerTypeCard
                title="Brain Tumors"
                symptoms={[
                  "Persistent headaches",
                  "Seizures",
                  "Changes in vision or hearing",
                  "Balance problems",
                  "Memory problems or confusion",
                  "Personality changes"
                ]}
                iconColor="bg-blue-900"
                icon={<Brain className="h-6 w-6" />}
                to="/cancer-types"
              />
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl mb-10 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <AlertCircle className="h-20 w-20 text-blue-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Important Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span><strong>Prostate Cancer:</strong> The most common cancer in men worldwide. Risk increases significantly after age 50.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span><strong>Testicular Cancer:</strong> Most common in young men between 15-35 years. Highly treatable when detected early.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span><strong>Blood Cancers:</strong> Include leukemia, lymphoma, and myeloma. Can affect people of all ages.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span><strong>Brain Tumors:</strong> Can be benign or malignant. Symptoms vary depending on location in the brain.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Screening and Early Detection</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Prostate Cancer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Digital rectal exam (DRE)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>PSA (Prostate-Specific Antigen) blood test</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Men over 50 should discuss screening with their doctor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Earlier screening for men with family history</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-lg mb-3 text-blue-700">Testicular Cancer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Monthly self-examination is recommended</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Check for any lumps, swelling, or changes in size</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Report any abnormalities to a doctor immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                      <span>Most cases can be cured if detected early</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/myths-facts" 
                className="btn-primary"
              >
                Cancer Myths & Facts <ArrowRight className="ml-2 h-4 w-4" />
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

export default MensBloodCancers;