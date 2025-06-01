import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, IndianRupee } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PageHeader from '../components/PageHeader';

const HospitalsInIndia: React.FC = () => {
  const hospitals = {
    'Delhi NCR': [
      {
        name: 'All India Institute of Medical Sciences (AIIMS)',
        details: 'Premier government institute with comprehensive cancer care',
        contact: '011-26588500',
        website: 'www.aiims.edu'
      },
      {
        name: 'Rajiv Gandhi Cancer Institute',
        details: 'Specialized cancer hospital with advanced treatment facilities',
        contact: '011-47022222',
        website: 'www.rgcirc.org'
      }
    ],
    'Maharashtra': [
      {
        name: 'Tata Memorial Hospital, Mumbai',
        details: "India's leading cancer care and research center",
        contact: '022-24177000',
        website: 'tmc.gov.in'
      },
      {
        name: 'Advanced Centre for Treatment, Research and Education in Cancer (ACTREC)',
        details: 'Research and treatment center in Navi Mumbai',
        contact: '022-27405000'
      }
    ],
    'Karnataka': [
      {
        name: 'Kidwai Memorial Institute of Oncology, Bangalore',
        details: 'Regional cancer center providing affordable treatment',
        contact: '080-26094000',
        website: 'kidwai.karnataka.gov.in'
      },
      {
        name: 'Sri Shankara Cancer Hospital, Bangalore',
        details: 'Comprehensive cancer care with modern technology and affordable treatment',
        contact: '080-26683222',
        website: 'www.sricancer.org'
      },
      {
        name: 'HCG Cancer Centre, Bangalore',
        details: 'Network of cancer centers across Karnataka',
        contact: '080-22482222'
      }
    ],
    'Tamil Nadu': [
      {
        name: 'Cancer Institute (WIA), Chennai',
        details: 'One of the oldest specialized cancer treatment centers',
        contact: '044-22350131',
        website: 'www.cancerinstitutewia.in'
      },
      {
        name: 'Apollo Speciality Cancer Hospital, Chennai',
        details: 'Comprehensive cancer care with modern facilities',
        contact: '044-28290200'
      }
    ],
    'West Bengal': [
      {
        name: 'Chittaranjan National Cancer Institute, Kolkata',
        details: 'Government institute for cancer treatment and research',
        contact: '033-24765101',
        website: 'www.cnci.org.in'
      },
      {
        name: 'Tata Medical Center, Kolkata',
        details: 'State-of-the-art cancer care facility',
        contact: '033-66057000'
      }
    ],
    'Odisha': [
      {
        name: 'Acharya Harihar Post Graduate Institute of Cancer, Cuttack',
        details: 'Regional cancer center with comprehensive treatment facilities',
        contact: '0671-2304341'
      },
      {
        name: 'Sri Shankara Cancer Hospital, Bhubaneswar',
        details: 'Modern cancer care facility with advanced treatment options',
        contact: '0674-2744444'
      }
    ],
    'Kerala': [
      {
        name: 'Regional Cancer Centre, Thiruvananthapuram',
        details: 'Premier cancer treatment and research center',
        contact: '0471-2522244',
        website: 'www.rcctvm.gov.in'
      },
      {
        name: 'Malabar Cancer Centre, Thalassery',
        details: 'Comprehensive cancer care for northern Kerala',
        contact: '0490-2355881'
      }
    ],
    'Gujarat': [
      {
        name: 'Gujarat Cancer & Research Institute, Ahmedabad',
        details: 'Leading cancer care facility in Western India',
        contact: '079-22688000',
        website: 'www.gcriindia.org'
      },
      {
        name: 'HCG Cancer Centre, Ahmedabad',
        details: 'Modern cancer treatment facility',
        contact: '079-44000000'
      }
    ],
    'Telangana': [
      {
        name: 'MNJ Institute of Oncology, Hyderabad',
        details: 'Regional cancer center with comprehensive care',
        contact: '040-23397000'
      },
      {
        name: 'Basavatarakam Indo American Cancer Hospital, Hyderabad',
        details: 'Specialized cancer care hospital',
        contact: '040-23551235'
      }
    ],
    'Rajasthan': [
      {
        name: 'Bhagwan Mahaveer Cancer Hospital, Jaipur',
        details: 'Comprehensive cancer care center',
        contact: '0141-2700107'
      },
      {
        name: 'SMS Medical College & Hospital, Jaipur',
        details: 'Government hospital with oncology department',
        contact: '0141-2518380'
      }
    ],
    'Punjab': [
      {
        name: 'Homi Bhabha Cancer Hospital, Sangrur',
        details: 'TMC-operated cancer care facility',
        contact: '01672-500000'
      },
      {
        name: 'Advanced Cancer Institute, Bathinda',
        details: 'Modern cancer treatment center',
        contact: '0164-2970000'
      }
    ]
  };

  return (
    <PageTransition>
      <PageHeader 
        title="Cancer Hospitals Across India" 
        subtitle="Find quality cancer care in your region"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-50 p-6 rounded-xl mb-10 border-l-4 border-primary-500">
              <div className="flex items-start">
                <IndianRupee className="h-6 w-6 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">Financial Assistance Available</h3>
                  <p className="text-gray-700">
                    Government schemes like Ayushman Bharat and PMJAY provide free treatment up to ₹5 lakh per family per year. Ask the hospital's help desk about these schemes.
                  </p>
                </div>
              </div>
            </div>

            {Object.entries(hospitals).map(([state, hospitalList]) => (
              <div key={state} className="mb-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
                  <MapPin className="h-6 w-6 text-primary-600 mr-2" />
                  {state}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hospitalList.map((hospital, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-start">
                        <Building2 className="h-6 w-6 text-secondary-600 mt-1 mr-3" />
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{hospital.name}</h3>
                          <p className="text-gray-600 mb-3">{hospital.details}</p>
                          <div className="space-y-1 text-sm">
                            {hospital.contact && (
                              <p className="text-gray-700">
                                <strong>Contact:</strong> {hospital.contact}
                              </p>
                            )}
                            {hospital.website && (
                              <a 
                                href={`https://${hospital.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary-600 hover:text-secondary-700"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-gray-50 p-6 rounded-xl mb-10">
              <h3 className="text-xl font-semibold mb-4">Important Notes for Patients:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span>If advanced treatment is not available in your state, consider traveling to nearby states with specialized facilities.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span>Government hospitals often provide more affordable treatment options and accept Ayushman Bharat cards.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span>Many hospitals have special schemes and support for patients from rural areas.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mt-2 mr-2"></span>
                  <span>Don't delay treatment due to financial concerns - seek help from hospital social workers about available schemes.</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center space-x-4">
              <Link 
                to="/help-in-india" 
                className="btn-primary"
              >
                Find More Help Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/warning-signs" 
                className="btn-outline"
              >
                Check Warning Signs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HospitalsInIndia;