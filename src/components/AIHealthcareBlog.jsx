import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import AppContext from '../context/AppContext';

const AIHealthcareBlog = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
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
              The Future of AI in Healthcare
            </h1>
            
            {/* Meta Information */}
            <div className={`flex flex-wrap items-center gap-6 mb-8 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>Dr. Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src="/images/AI.jpeg" 
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
                Artificial Intelligence is revolutionizing healthcare at an unprecedented pace, transforming how we diagnose, treat, and prevent diseases. From predictive analytics to personalized medicine, AI is reshaping the entire healthcare landscape.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Predictive Analytics: The Game Changer
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                One of the most significant applications of AI in healthcare is predictive analytics. By analyzing vast amounts of patient data, AI systems can identify patterns and predict potential health issues before they become critical. This proactive approach enables healthcare providers to intervene early, potentially saving lives and reducing treatment costs.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Personalized Treatment Plans
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                AI is making personalized medicine a reality. By considering individual genetic profiles, lifestyle factors, and medical history, AI algorithms can recommend tailored treatment plans that are more effective than traditional one-size-fits-all approaches. This personalization extends to drug dosing, therapy selection, and even dietary recommendations.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Diagnostic Accuracy and Speed
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                AI-powered diagnostic tools are achieving remarkable accuracy rates in identifying diseases from medical imaging, laboratory results, and clinical symptoms. Machine learning models can process and analyze medical images faster than human radiologists while maintaining high precision, leading to quicker diagnoses and faster treatment initiation.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Challenges and Ethical Considerations
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                While AI offers tremendous potential, it also presents challenges. Data privacy, algorithmic bias, and the need for regulatory frameworks are critical issues that must be addressed. Healthcare organizations must ensure that AI systems are transparent, fair, and secure while maintaining the human touch that is essential in patient care.
              </p>

              <h2 className={`text-2xl font-semibold mb-4 mt-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                The Road Ahead
              </h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                The future of AI in healthcare is bright, with emerging technologies like quantum computing and advanced neural networks promising even greater capabilities. As we move forward, the integration of AI will become more seamless, making healthcare more accessible, affordable, and effective for everyone.
              </p>

              <div className={`mt-12 p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-blue-900'}`}>
                  Key Takeaways
                </h3>
                <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-blue-800'}`}>
                  <li>• AI enables predictive healthcare, identifying issues before they become critical</li>
                  <li>• Personalized treatment plans improve patient outcomes</li>
                  <li>• Diagnostic accuracy and speed are significantly enhanced</li>
                  <li>• Ethical considerations and data privacy remain important challenges</li>
                  <li>• The future holds even greater potential for AI-healthcare integration</li>
                </ul>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
};

export default AIHealthcareBlog;
