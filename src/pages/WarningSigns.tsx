import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Weight, Droplet, Thermometer, Sun as Lung, Coffee, ArrowDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const WarningSigns: React.FC = () => {
  const warningSignsData = [
    {
      icon: <Weight className="h-10 w-10" />,
      title: "Unexplained Weight Loss",
      description: "Losing 10 pounds or more without trying could be an early sign of cancer."
    },
    {
      icon: <Lung className="h-10 w-10" />,
      title: "Persistent Cough or Hoarseness",
      description: "A cough that doesn't go away after 2-3 weeks, especially with blood."
    },
    {
      icon: <Droplet className="h-10 w-10" />,
      title: "Unusual Bleeding",
      description: "Blood in urine, stool, or unexpected vaginal bleeding, coughing up blood."
    },
    {
      icon: <Coffee className="h-10 w-10" />,
      title: "Changes in Bowel or Bladder",
      description: "Long-term constipation, diarrhea, or change in size of stool."
    },
    {
      icon: <Thermometer className="h-10 w-10" />,
      title: "Persistent Fever",
      description: "Fever that comes and goes frequently, especially at night."
    },
    {
      icon: <ArrowDown className="h-10 w-10" />,
      title: "Difficulty Swallowing",
      description: "Persistent difficulty swallowing can indicate throat or esophageal cancer."
    }
  ];

  return (
    <PageTransition>
      <PageHeader 
        title="Early Warning Signs of Cancer" 
        subtitle="Know what to watch for - even small symptoms matter"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Watch for These Warning Signs</h2>
              <p className="text-xl text-gray-600">
                These symptoms don't always mean cancer, but they should be checked by a doctor, especially if they persist.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="card p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
                  <div className="text-primary-600 mb-4">{sign.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{sign.title}</h3>
                  <p className="text-gray-600 flex-grow">{sign.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl mb-10 border-l-4 border-primary-500">
              <h3 className="text-primary-800 text-xl font-semibold mb-4">Other Important Warning Signs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Lumps or thickening under the skin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Sores that don't heal</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Unusual breast changes</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Persistent fatigue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Frequent infections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                    <span>Unexplained pain</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl mb-10">
              <h3 className="text-center text-xl font-bold text-red-700 mb-4">IMPORTANT</h3>
              <p className="text-center text-lg text-gray-800 mb-4">
                Even small symptoms matter. Get checked early.
              </p>
              <p className="text-center text-gray-700">
                Many of these symptoms can be caused by conditions other than cancer, but it's important to get them checked by a doctor - especially if they persist for more than two weeks.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/prevention" 
                className="btn-primary"
              >
                Learn About Prevention <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WarningSigns;