import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';
import MythFactCard from '../components/MythFactCard';

const MythsFacts: React.FC = () => {
  const mythsAndFacts = [
    {
      myth: "Cancer means death.",
      fact: "Many cancers are curable if caught early. With modern treatments, even advanced cancers can often be managed as chronic diseases."
    },
    {
      myth: "Cancer biopsies cause cancer to spread.",
      fact: "This is false. Biopsies are safe procedures and do not cause cancer to spread. They are essential for accurate diagnosis."
    },
    {
      myth: "Only smokers get cancer.",
      fact: "While smoking is a major risk factor, cancer can affect anyone. Many factors including genetics, environment, diet, and viral infections can cause cancer."
    },
    {
      myth: "Cancer is contagious.",
      fact: "Cancer cannot be transmitted from person to person. You cannot catch cancer from someone who has it."
    },
    {
      myth: "It's karma or fate.",
      fact: "Cancer is a medical condition caused by genetic mutations and other biological factors. It's not a punishment or result of karma."
    },
    {
      myth: "Cancer always has symptoms.",
      fact: "Early-stage cancer often has no symptoms. This is why regular check-ups and screenings are important for early detection."
    },
    {
      myth: "Cancer only affects old people.",
      fact: "Cancer can occur at any age. Some cancers are more common in young people, like certain leukemias, lymphomas, and testicular cancer."
    },
    {
      myth: "Surgery causes cancer to spread.",
      fact: "Modern surgical techniques are designed to safely remove cancer. Surgery is often an essential part of successful cancer treatment."
    }
  ];

  return (
    <PageTransition>
      <PageHeader 
        title="Cancer Myths vs Facts" 
        subtitle="Separating truth from misconceptions"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Common Cancer Myths in India</h2>
              <p className="text-xl text-gray-600">
                Misconceptions about cancer can lead to fear, delayed diagnosis, and poor decisions. Let's address some common myths.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {mythsAndFacts.slice(0, 6).map((item, index) => (
                <MythFactCard
                  key={index}
                  myth={item.myth}
                  fact={item.fact}
                />
              ))}
            </div>
            
            <div className="bg-primary-50 p-8 rounded-xl mb-12 border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-center text-primary-800 mb-4">Why Myths Are Dangerous</h3>
              <p className="text-lg text-gray-700 mb-6 text-center">
                Cancer myths can lead to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-red-600">Delayed Diagnosis</h4>
                  <p className="text-gray-700">
                    Believing myths can cause people to ignore symptoms and avoid medical care.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-red-600">Unproven Treatments</h4>
                  <p className="text-gray-700">
                    Some people try ineffective remedies instead of seeking medical help.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-red-600">Unnecessary Fear</h4>
                  <p className="text-gray-700">
                    Cancer myths create unnecessary fear and anxiety that can be harmful.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {mythsAndFacts.slice(6).map((item, index) => (
                <MythFactCard
                  key={index}
                  myth={item.myth}
                  fact={item.fact}
                />
              ))}
            </div>
            
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Trust Medical Professionals</h3>
              <p className="text-lg text-gray-700">
                Always get your cancer information from reliable sources like doctors, recognized hospitals, and reputable health organizations. Be wary of unverified information from social media or word of mouth.
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-10">
              <Link 
                to="/help-in-india" 
                className="btn-primary"
              >
                Find Help in India <ArrowRight className="ml-2 h-4 w-4" />
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

export default MythsFacts;