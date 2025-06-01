import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const AboutAkshay: React.FC = () => {
  return (
    <PageTransition>
      <PageHeader 
        title="About Akshay" 
        subtitle="Who made this website — and why?"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <div className="flex justify-center mb-10">
                <div className="bg-primary-50 p-6 rounded-full">
                  <Heart className="h-20 w-20 text-red-500" />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                Hi, I'm Akshay — the creator of this website.
              </h2>
              
              <p className="text-xl mb-6">
                I built <span className="font-semibold text-primary-700">Cancer Comes Silently</span> to help every Indian understand what cancer really is — without fear, confusion, or delay.
              </p>
              
              <p className="mb-6">
                I noticed most people only learn about cancer when it's too late, especially in small towns and rural areas. That's not fair. People deserve to know what signs to watch, what tests to do, and where to get help — in simple language and with no medical jargon.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-xl mb-8 border-l-4 border-primary-500">
                <h3 className="text-xl font-semibold mb-3 text-primary-800">My Mission</h3>
                <p className="text-gray-700">
                  This website is for you — your family, your village, your community.
                </p>
                <p className="text-gray-700 mt-3">
                  Let's not wait until Stage 4. Let's talk about it now. Let's act early.
                </p>
              </div>
              
              <p className="mb-6">
                Cancer awareness is not just about knowing the disease exists. It's about understanding how to detect it early, how to prevent it when possible, and how to find help when needed.
              </p>
              
              <p className="mb-6">
                In India, we face unique challenges with cancer. Limited resources, social stigma, and lack of awareness lead to late diagnoses. Through this website, I hope to change that by providing accessible information that can save lives.
              </p>
              
              <p className="mb-8">
                Together, we can save lives with knowledge.
              </p>
              
              <div className="text-center italic text-xl font-medium text-primary-700 mb-10">
                – Akshay Srivatsava. B
              </div>
              
              <div className="flex justify-center space-x-4 mt-12">
                <Link 
                  to="/" 
                  className="btn-primary"
                >
                  Back to Home
                </Link>
                <Link 
                  to="/cancer-types" 
                  className="btn-outline"
                >
                  Explore Cancer Types <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default AboutAkshay;