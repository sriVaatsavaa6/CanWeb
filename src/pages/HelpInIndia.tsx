import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, HeartPulse, Phone, ArrowRight, GraduationCap, Banknote } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import ResourceCard from '../components/ResourceCard';

const HelpInIndia: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="Help in India" 
        subtitle="Support resources and facilities for cancer patients"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Cancer Support & Resources</h2>
              <p className="text-xl text-gray-600">
                There are many organizations and programs in India that provide support for cancer patients and their families.
              </p>
            </div>
            
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Government Programs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <ResourceCard
                  title="Ayushman Bharat (PMJAY)"
                  description="Provides free treatment up to ₹5 lakh per family per year for secondary and tertiary care hospitalization, including cancer treatment."
                  contactInfo="Call 14555 or 1800-111-565"
                  website="https://pmjay.gov.in/"
                  icon={<Banknote className="h-8 w-8" />}
                />
                
                <ResourceCard
                  title="Health Minister's Cancer Patient Fund"
                  description="Financial assistance for BPL patients receiving treatment at 27 Regional Cancer Centers."
                  contactInfo="Available through regional cancer centers"
                  icon={<Banknote className="h-8 w-8" />}
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Major Cancer Hospitals</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <ResourceCard
                  title="Tata Memorial Hospital"
                  description="India's leading cancer care and research center in Mumbai, providing comprehensive care."
                  contactInfo="022-24177000"
                  website="https://tmc.gov.in/"
                  icon={<Building2 className="h-8 w-8" />}
                />
                
                <ResourceCard
                  title="AIIMS - Delhi"
                  description="The All India Institute of Medical Sciences has a dedicated cancer center with advanced facilities."
                  contactInfo="011-26588500"
                  website="https://www.aiims.edu/"
                  icon={<Building2 className="h-8 w-8" />}
                />
                
                <ResourceCard
                  title="Adyar Cancer Institute"
                  description="One of the oldest specialized cancer treatment centers in India, located in Chennai."
                  contactInfo="044-22350131"
                  website="https://www.cancerinstitutewia.in/"
                  icon={<Building2 className="h-8 w-8" />}
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800">NGOs & Support Organizations</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <ResourceCard
                  title="Indian Cancer Society"
                  description="Provides awareness, detection, cure and survivorship programs across India."
                  contactInfo="1800 22 1951"
                  website="https://www.indiancancersociety.org/"
                  icon={<HeartPulse className="h-8 w-8" />}
                />
                
                <ResourceCard
                  title="CanSupport"
                  description="Provides free palliative care to cancer patients and their families in Delhi NCR."
                  contactInfo="011-2671 1212"
                  website="https://cansupport.org/"
                  icon={<HeartPulse className="h-8 w-8" />}
                />
                
                <ResourceCard
                  title="Cancer Patients Aid Association"
                  description="Offers financial assistance, medicines, prostheses, and counseling."
                  contactInfo="022-2417 1180"
                  website="https://www.cancer.org.in/"
                  icon={<HeartPulse className="h-8 w-8" />}
                />
              </div>
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl mb-12 border-l-4 border-primary-500">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <Phone className="h-20 w-20 text-primary-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">Helplines & Hotlines</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span><strong>National Cancer Grid Helpline:</strong> 1800-22-2322</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span><strong>National Cancer Institute Helpline:</strong> 155303</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span><strong>Palliative Care Helpline:</strong> 9845292227</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span><strong>Tata Memorial Hospital Helpline:</strong> 1800-209-6611</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Educational Resources</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-secondary-600 mr-3" />
                    <h4 className="text-xl font-semibold">Online Information</h4>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                      <span>National Cancer Grid: <a href="https://tmc.gov.in/ncg/" className="text-secondary-600 hover:underline" target="_blank" rel="noopener noreferrer">tmc.gov.in/ncg</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                      <span>Indian Council of Medical Research: <a href="https://www.icmr.gov.in/" className="text-secondary-600 hover:underline" target="_blank" rel="noopener noreferrer">icmr.gov.in</a></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mt-2 mr-2"></span>
                      <span>National Health Portal: <a href="https://www.nhp.gov.in/" className="text-secondary-600 hover:underline" target="_blank" rel="noopener noreferrer">nhp.gov.in</a></span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-secondary-600 mr-3" />
                    <h4 className="text-xl font-semibold">Support Groups</h4>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Many hospitals have patient support groups where you can meet others going through similar experiences.
                  </p>
                  <p className="text-gray-700">
                    Ask at your treatment center about local support groups or check with NGOs like CanSupport and Indian Cancer Society.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/about-akshay" 
                className="btn-primary"
              >
                About Akshay <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/warning-signs" 
                className="btn-outline"
              >
                Warning Signs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HelpInIndia;