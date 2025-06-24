// import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import {
//   StarIcon,
//   ArrowRightIcon,
//   HeartIcon,
// } from "@heroicons/react/24/solid";
// import FooterSections from "./Footer";

// const Hero = () => {
//   const { isDarkMode } = useContext(AppContext);


//   // Theme-based classes
//   const bgSection = isDarkMode
//     ? "bg-gradient-to-br from-[#1e293b] to-[#334155]"
//     : "bg-gradient-to-br from-[#e0f2fe] to-[#f3f4f6]";
//   const pillBg = isDarkMode ? "bg-[#1e293b]" : "bg-[#eef6fb]";
//   const pillText = isDarkMode ? "text-[#e0f2fe]" : "text-[#3b82f6]";
//   const heading = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
//   const subheading = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
//   const cardBg = isDarkMode ? "bg-[#1e293b]" : "bg-white";
//   const cardTitle = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
//   const cardText = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
//   const cardShadow = "shadow-[0_2px_12px_#e0e7ef60]";
//   const cardBorder = "border border-[#e0e7ef]";
//   const gradientText =
//     "bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] bg-clip-text text-transparent";
//   const btnGradient =
//     "bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#10b981]";
//   const btnGradientHover =
//     "hover:from-[#2563eb] hover:via-[#2563eb] hover:to-[#059669]";
//   const btnText = "text-white";
//   const btnShadow = "shadow-[0_2px_16px_0_rgba(16,185,129,0.12)]";
//   const btnRounded = "rounded-md";

//   return (

//     <section
//       className={`min-h-screen flex items-center justify-center px-2 py-12 sm:py-24 ${bgSection} transition-colors duration-300`}
//     >
      
//       <div className="w-full max-w-[1100px] mx-auto text-center">
//         {/* Pill */}
//         <div
//           className={`inline-flex items-center ${pillBg} ${pillText} font-semibold px-5 py-2 mb-6 rounded-full text-base tracking-wide`}
//         >
//           <StarIcon className="w-5 h-5 mr-2" />
//           AI-Powered Healthcare Super App
//         </div>

//         {/* Heading */}
//         <h1
//           className={`font-extrabold mb-3 leading-tight ${heading} text-[2.2rem] sm:text-[3.2rem] md:text-[4rem]`}
//         >
//           <span className="block">Your Health,</span>
//           <span className={gradientText}>Predicted & Protected</span>
//         </h1>

//         {/* Subheading */}
//         <p
//           className={`max-w-xl mx-auto mb-6 font-normal text-base sm:text-lg ${subheading}`}
//         >
//           1MBHealthy combines real-time monitoring, predictive AI, and personalized insights to keep you ahead of health issues. From wearables to wellness—your complete healthcare companion in one app.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
//         <button
//   onClick={() => {
//     document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
//   }}
//   className={`flex items-center justify-center ${btnGradient} ${btnText} ${btnShadow} ${btnRounded} px-8 py-3 font-semibold text-lg transition-all duration-200 ${btnGradientHover}`}
// >
//   Start Your Health Journey
//   <ArrowRightIcon className="w-6 h-6 ml-2" />
// </button>
        
//         </div>

//         {/* Feature Cards */}
//         <div className="max-w-3xl mx-auto">
//           <div
//             className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${cardShadow}`}
//           >
//             {/* Card 1 */}
//             <div
//               className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
//             >
//               <HeartIcon className="w-8 h-8 mb-2 text-[#3b82f6]" />
//               <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
//                 Real-time Monitoring
//               </div>
//               <div className={`text-sm ${cardText}`}>
//                 Continuous vital signs tracking
//               </div>
//             </div>
//             {/* Card 2 */}
//             <div
//               className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
//             >
//               <div className="w-9 h-9 mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
//                 <StarIcon className="w-6 h-6 text-white" />
//               </div>
//               <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
//                 AI Predictions
//               </div>
//               <div className={`text-sm ${cardText}`}>
//                 Forecast health risks early
//               </div>
//             </div>
//             {/* Card 3 */}
//             <div
//               className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
//             >
//               <div className="w-9 h-9 mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-[#10b981] to-[#3b82f6]">
//                 <ArrowRightIcon className="w-6 h-6 text-white" />
//               </div>
//               <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
//                 Personalized Care
//               </div>
//               <div className={`text-sm ${cardText}`}>
//                 Tailored health recommendations
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { StarIcon, ArrowRightIcon, HeartIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const { isDarkMode } = useContext(AppContext);

  // Theme-based classes
  const bgSection = isDarkMode
    ? "bg-gradient-to-br from-[#1e293b] to-[#334155]"
    : "bg-gradient-to-br from-[#e0f2fe] to-[#f3f4f6]";
  const pillBg = isDarkMode ? "bg-[#1e293b]" : "bg-[#eef6fb]";
  const pillText = isDarkMode ? "text-[#e0f2fe]" : "text-[#3b82f6]";
  const heading = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
  const subheading = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
  const cardBg = isDarkMode ? "bg-[#1e293b]" : "bg-white";
  const cardTitle = isDarkMode ? "text-[#e0f2fe]" : "text-[#22223b]";
  const cardText = isDarkMode ? "text-[#cbd5e1]" : "text-[#475569]";
  const cardShadow = "shadow-[0_2px_12px_#e0e7ef60]";
  const cardBorder = "border border-[#e0e7ef]";
  const gradientText =
    "bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#3b82f6] bg-clip-text text-transparent";
  const btnGradient =
    "bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#10b981]";
  const btnGradientHover =
    "hover:from-[#2563eb] hover:via-[#2563eb] hover:to-[#059669]";
  const btnText = "text-white";
  const btnShadow = "shadow-[0_2px_16px_0_rgba(16,185,129,0.12)]";
  const btnRounded = "rounded-md";

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-2 py-12 sm:py-24 ${bgSection} transition-colors duration-300`}
    >
      <div className="w-full max-w-[1100px] mx-auto text-center">
        {/* Pill */}
        <div
          className={`inline-flex items-center ${pillBg} ${pillText} font-semibold px-5 py-2 mb-6 rounded-full text-base tracking-wide`}
        >
          <StarIcon className="w-5 h-5 mr-2" />
          AI-Powered Healthcare Super App
        </div>

        {/* Heading */}
        <h1
          className={`font-extrabold mb-3 leading-tight ${heading} text-[2.2rem] sm:text-[3.2rem] md:text-[4rem]`}
        >
          <span className="block">Your Health,</span>
          <span className={gradientText}>Predicted & Protected</span>
        </h1>

        {/* Subheading */}
        <p
          className={`max-w-xl mx-auto mb-6 font-normal text-base sm:text-lg ${subheading}`}
        >
          1MBHealthy combines real-time monitoring, predictive AI, and personalized insights to keep you ahead of health issues. From wearables to wellness—your complete healthcare companion in one app.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <button
            onClick={() => {
              document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`flex items-center justify-center ${btnGradient} ${btnText} ${btnShadow} ${btnRounded} px-8 py-3 font-semibold text-lg transition-all duration-200 ${btnGradientHover}`}
          >
            Start Your Health Journey
            <ArrowRightIcon className="w-6 h-6 ml-2" />
          </button>
        </div>

        {/* Feature Cards */}
        <div className="max-w-3xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${cardShadow}`}>
            {/* Card 1 */}
            <div
              className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
            >
              <HeartIcon className="w-8 h-8 mb-2 text-[#3b82f6]" />
              <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
                Real-time Monitoring
              </div>
              <div className={`text-sm ${cardText}`}>
                Continuous vital signs tracking
              </div>
            </div>
            {/* Card 2 */}
            <div
              className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
            >
              <div className="w-9 h-9 mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-[#3b82f6] to-[#10b981]">
                <StarIcon className="w-6 h-6 text-white" />
              </div>
              <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
                AI Predictions
              </div>
              <div className={`text-sm ${cardText}`}>
                Forecast health risks early
              </div>
            </div>
            {/* Card 3 */}
            <div
              className={`flex flex-col items-center ${cardBg} ${cardBorder} rounded-2xl p-6 text-center`}
            >
              <div className="w-9 h-9 mb-2 flex items-center justify-center rounded-md bg-gradient-to-r from-[#10b981] to-[#3b82f6]">
                <ArrowRightIcon className="w-6 h-6 text-white" />
              </div>
              <div className={`font-semibold text-lg mb-1 ${cardTitle}`}>
                Personalized Care
              </div>
              <div className={`text-sm ${cardText}`}>
                Tailored health recommendations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;