import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import {
  StarIcon,
  ArrowRightIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const AboutUs = () => {
  const { isDarkMode } = useContext(AppContext);

  // Theme-based classes with enhanced styling
  const bgSection = isDarkMode
    ? "bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b]"
    : "bg-gradient-to-br from-[#e0f2fe] via-[#f8fafc] to-[#f3f4f6]";
  const pillBg = isDarkMode 
    ? "bg-[#1e293b]/80 backdrop-blur-xl border border-[#334155]/50" 
    : "bg-[#eef6fb]/80 backdrop-blur-xl border border-[#e0f2fe]/50";
  const pillText = isDarkMode ? "text-[#e0f2fe]" : "text-[#3b82f6]";
  const heading = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
  const subheading = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
  const cardBg = isDarkMode 
    ? "bg-[#1e293b]/60 backdrop-blur-xl border border-[#334155]/40" 
    : "bg-white/70 backdrop-blur-xl border border-[#e0f2fe]/60";
  const cardTitle = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
  const cardText = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
  const cardShadow = isDarkMode 
    ? "shadow-[0_8px_32px_rgba(0,0,0,0.2)]" 
    : "shadow-[0_8px_32px_rgba(59,130,246,0.08)]";
  const gradientText =
    "bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] bg-clip-text text-transparent";

  return (
    <><SEO
    title="About 1MB Healthy - AI-Powered Healthcare Platform"
    description="Learn about 1MB Healthy’s mission to revolutionize healthcare with AI-driven personalization, ABHA integration, and predictive care."
    keywords="about 1mb healthy, AI healthcare, ABHA integration, predictive healthcare"
    url="https://1mbhealthy.com/about"
  />
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-16 sm:py-24 ${bgSection} transition-all duration-500 relative overflow-hidden`}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${isDarkMode ? 'bg-[#3b82f6]/5' : 'bg-[#3b82f6]/3'} rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${isDarkMode ? 'bg-[#10b981]/5' : 'bg-[#10b981]/3'} rounded-full blur-3xl animate-pulse`} style={{animationDelay: '1s'}}></div>
      </div>

      <div className="w-full max-w-[1100px] mx-auto text-center relative z-10">
        {/* Enhanced Pill with animation */}
        <div
          className={`inline-flex items-center ${pillBg} ${pillText} font-semibold px-6 py-3 mb-8 rounded-full text-base tracking-wide transform hover:scale-105 transition-all duration-300 hover:shadow-lg`}
          style={{
            animation: 'fadeInUp 0.8s ease-out'
          }}
        >
          <StarIcon className="w-5 h-5 mr-2 animate-spin" style={{animationDuration: '3s'}} />
          About Deepmindz AI
        </div>

        {/* Enhanced Heading with staggered animation */}
        <h1
          className={`font-extrabold mb-6 leading-tight ${heading} text-[2.2rem] sm:text-[3.2rem] md:text-[4.5rem] tracking-tight`}
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          <span className="block transform hover:scale-105 transition-transform duration-300">Our Mission to</span>
          <span className={`${gradientText} block transform hover:scale-105 transition-transform duration-300 bg-[length:200%_100%] animate-gradient`}>
            Transform Healthcare
          </span>
        </h1>

        {/* Enhanced Subheading */}
        <p
          className={`max-w-2xl mx-auto mb-12 font-normal text-base sm:text-lg leading-relaxed ${subheading}`}
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.4s both'
          }}
        >
          Founded with a vision to revolutionize healthcare through technology, Deepmindz AI is a leader in AI-driven solutions, empowering better health outcomes worldwide.
        </p>

        {/* Enhanced Story Sections with unique layouts */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Our Beginning - Tilted design */}
            <div
              className={`group ${cardBg} ${cardShadow} rounded-3xl p-8 text-center transform hover:-rotate-1 hover:scale-105 transition-all duration-500 relative overflow-hidden`}
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s both'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className={`font-bold text-xl mb-3 ${cardTitle}`}>
                  Our Beginning
                </div>
                <div className={`text-sm leading-relaxed ${cardText}`}>
                  Deepmindz AI was founded by healthcare and technology experts passionate about using AI to transform the healthcare industry.
                </div>
              </div>
            </div>

            {/* Card 2: Our Growth - Elevated design */}
            <div
              className={`group ${cardBg} ${cardShadow} rounded-3xl p-8 text-center transform hover:rotate-1 hover:scale-105 transition-all duration-500 relative overflow-hidden md:-mt-6`}
              style={{
                animation: 'fadeInUp 0.8s ease-out 0.8s both'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#10b981] flex items-center justify-center shadow-lg">
                  <StarIcon className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <div className={`font-bold text-xl mb-3 ${cardTitle}`}>
                  Our Growth
                </div>
                <div className={`text-sm leading-relaxed ${cardText}`}>
                  From humble beginnings, we've expanded our team and capabilities to deliver cutting-edge AI solutions across multiple industries.
                </div>
              </div>
            </div>

            {/* Card 3: Our Future - Futuristic design */}
            <div
              className={`group ${cardBg} ${cardShadow} rounded-3xl p-8 text-center transform hover:-rotate-1 hover:scale-105 transition-all duration-500 relative overflow-hidden`}
              style={{
                animation: 'fadeInUp 0.8s ease-out 1s both'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#3b82f6] flex items-center justify-center shadow-lg relative">
                  <ArrowRightIcon className="w-8 h-8 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#10b981] to-[#3b82f6] opacity-0 group-hover:opacity-20 animate-pulse"></div>
                </div>
                <div className={`font-bold text-xl mb-3 ${cardTitle}`}>
                  Our Future
                </div>
                <div className={`text-sm leading-relaxed ${cardText}`}>
                  We're committed to innovating with AI to shape the future of healthcare and beyond, pushing the boundaries of what's possible.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Button */}
        {/* <div className="mt-12" style={{animation: 'fadeInUp 0.8s ease-out 1.2s both'}}>
          <button
            className={`group relative inline-flex items-center justify-center ${btnGradient} ${btnText} ${btnShadow} px-10 py-4 font-bold text-lg transition-all duration-300 ${btnGradientHover} rounded-2xl overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Learn More About Our Vision</span>
            <ArrowRightIcon className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </button>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease-in-out infinite;
        }
      `}</style>
    </section>
    </>
  );
};

export default AboutUs;