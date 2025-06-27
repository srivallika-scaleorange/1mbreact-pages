import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import AppContext from '../context/AppContext';
import SEO from './SEO'; // Assuming you have a SEO component for managing meta tags
const ABDMBlog = () => {
  const { isDarkMode } = useContext(AppContext);
  const description = 'Understand the impact of Ayushman Bharat Digital Mission (ABDM) and how 1MB Healthy integrates ABHA for seamless healthcare.';
  return (
   <>
   <SEO
        title="Understanding ABDM’s Impact - 1MB Healthy Blog"
        description={description}
        keywords="ABDM, Ayushman Bharat, ABHA integration, digital healthcare, 1MB Healthy"
        url="https://1mbhealthy.com/blog/abdm-impact-understanding"
        type="article"
      />
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blogs"
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-lg transition-all duration-200 ${
            isDarkMode 
              ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-white'
          }`}
        >
          <ArrowLeft size={20} />
          Back to Blogs
        </Link>

        {/* Article Header */}
        <article className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg overflow-hidden`}>
          <div className="p-8 sm:p-12">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Understanding ABDM and Its Impact
            </h1>
            
            {/* Meta Information */}
            <div className={`flex flex-wrap items-center gap-6 mb-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>December 10, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Dr. Rajesh Kumar</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>6 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src="/images/abdm.jpeg" 
                alt="AI in Healthcare" 
                className="w-full h-64 sm:h-80 object-cover object-center"
                style={{
                  backgroundColor: isDarkMode ? '#374151' : '#e5e7eb'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/600x320?text=AI+Healthcare";
                }}
              />
            </div>


            {/* Article Content */}
            <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The Ayushman Bharat Digital Mission (ABDM) represents India's ambitious vision to create a seamless digital health ecosystem. This revolutionary initiative is transforming how healthcare services are delivered, accessed, and managed across the country.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                What is ABDM?
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                ABDM is a comprehensive digital health infrastructure that aims to bridge the existing gaps in health services and create a unified digital health ecosystem. It provides citizens with digital health IDs, facilitates easy access to health records, and connects healthcare providers across the nation through a standardized digital platform.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Key Components of ABDM
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  1. Health ID
                </h3>
                <p className="mb-4">
                  A unique digital identity for every citizen that enables seamless access to health services and maintains a comprehensive health record throughout their lifetime.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  2. Healthcare Professionals Registry (HPR)
                </h3>
                <p className="mb-4">
                  A comprehensive repository of all healthcare professionals, ensuring verification and easy discovery of qualified practitioners.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  3. Health Facility Registry (HFR)
                </h3>
                <p className="mb-4">
                  A complete database of all healthcare facilities, from hospitals to clinics, enabling citizens to find and access appropriate care.
                </p>

                <h3 className={`text-xl font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  4. Personal Health Records (PHR)
                </h3>
                <p className="mb-4">
                  Secure digital storage of individual health records, making medical history portable and accessible to authorized healthcare providers.
                </p>
              </div>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Benefits for Patients
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                ABDM empowers patients with complete control over their health data. Citizens can access their medical records anytime, share them with healthcare providers as needed, and maintain a continuous health journey record. This eliminates the need for carrying physical documents and ensures no critical health information is lost.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Impact on Healthcare Providers
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Healthcare providers benefit from improved efficiency, better patient data access, and streamlined processes. The standardized digital infrastructure enables better coordination between different healthcare providers, leading to improved patient outcomes and reduced healthcare costs.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Challenges and Solutions
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                While ABDM presents numerous opportunities, implementation challenges include digital literacy, privacy concerns, and infrastructure requirements. The government is addressing these through comprehensive training programs, robust security measures, and gradual rollout strategies.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                The Future of Digital Health in India
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                ABDM is laying the foundation for a truly connected healthcare ecosystem in India. As adoption increases and technology advances, we can expect to see more innovative health solutions, improved healthcare access in rural areas, and better health outcomes for all citizens.
              </p>

              <div className={`mt-12 p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-green-900'}`}>
                  ABDM Key Benefits
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-green-800'}`}>
                  <li>• Universal Health ID for all citizens</li>
                  <li>• Seamless access to health records</li>
                  <li>• Improved coordination between healthcare providers</li>
                  <li>• Enhanced patient data security and privacy</li>
                  <li>• Reduced healthcare costs and improved efficiency</li>
                  <li>• Better health outcomes through data-driven insights</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  );
};

export default ABDMBlog;
