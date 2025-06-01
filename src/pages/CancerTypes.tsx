import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Cigarette, Coffee, Scale as Male, Stethoscope } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const CancerTypes: React.FC = () => {
  const cancerCategories = [
    {
      title: "Women's Cancers",
      description: "Cancers that primarily affect women",
      icon: <Users className="h-12 w-12" />,
      bgColor: "bg-pink-600",
      path: "/womens-cancers",
      types: ["Breast Cancer", "Cervical Cancer", "Ovarian Cancer"]
    },
    {
      title: "Lifestyle Cancers",
      description: "Cancers often linked to lifestyle factors",
      icon: <Cigarette className="h-12 w-12" />,
      bgColor: "bg-red-600",
      path: "/lifestyle-cancers",
      types: ["Lung Cancer", "Oral Cancer", "Stomach Cancer", "Esophageal Cancer"]
    },
    {
      title: "Digestive Cancers",
      description: "Cancers affecting the digestive system",
      icon: <Coffee className="h-12 w-12" />,
      bgColor: "bg-yellow-600",
      path: "/digestive-cancers",
      types: ["Liver Cancer", "Colon Cancer", "Pancreatic Cancer", "Gallbladder Cancer"]
    },
    {
      title: "Men's & Blood Cancers",
      description: "Cancers affecting men and blood cancers",
      icon: <Male className="h-12 w-12" />,
      bgColor: "bg-blue-600",
      path: "/mens-blood-cancers",
      types: ["Prostate Cancer", "Testicular Cancer", "Blood Cancers", "Brain Tumors"]
    }
  ];

  return (
    <PageTransition>
      <PageHeader 
        title="Types of Cancer" 
        subtitle="An overview of major cancer types"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Common Cancer Types in India</h2>
              <p className="text-xl text-gray-600">
                Different cancers have different symptoms. Learn about the major types to help with early detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {cancerCategories.map((category, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-xl transition-all hover:scale-105">
                  <div className={`${category.bgColor} text-white p-5 flex items-center`}>
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <h4 className="font-medium text-gray-700 mb-3">Includes:</h4>
                    <ul className="space-y-2 mb-6">
                      {category.types.map((type, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={category.path}
                      className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-medium"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl mb-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <Stethoscope className="h-24 w-24 text-primary-600" />
                </div>
                
                <div className="md:w-3/4 md:pl-6">
                  <h3 className="text-2xl font-bold text-primary-800 mb-4">Understanding Cancer Types is Important</h3>
                  <p className="text-gray-700 mb-4">
                    Each cancer type has unique symptoms, risk factors, and warning signs. Knowing about different cancers can help you:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span>Recognize symptoms early</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span>Understand your personal risk factors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span>Make informed lifestyle choices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                      <span>Know when to seek medical attention</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/womens-cancers" 
                className="btn-primary"
              >
                Women's Cancers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/myths-facts" 
                className="btn-outline"
              >
                Cancer Myths & Facts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default CancerTypes;