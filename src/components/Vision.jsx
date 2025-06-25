// import React, { useState, useEffect, useContext } from "react";
// import { AppContext } from "../context/AppContext";
// const VisionSection = ({ mode }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     "/images/health.jpeg",
//     "/images/abha.jpeg",
//     "/images/aicopilot.jpeg",
//     "/images/aidriven.jpeg",
//     "/images/360deg.jpeg",
//   ];

//   // Auto-cycle images every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   // Handle manual navigation
//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <section
//       id="vision"
//       className={`py-16 md:py-24 text-center transition-colors duration-300 ${
//         mode ? "bg-[#101F3C]" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
//         {/* Text Content */}
//         <div className="md:w-1/2 mb-8 md:mb-0">
//           <h2
//             className={`font-extrabold mb-4 text-3xl sm:text-4xl ${
//               mode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Our Vision
//           </h2>
//           <p
//             className={`mx-auto max-w-xl text-lg ${
//               mode ? "text-gray-200" : "text-slate-600"
//             }`}
//           >
//                 1MBHealthy is set to revolutionize digital healthcare by shifting the focus from reactive treatments to proactive well-being. With data-driven precision medicine and AI-powered diagnostics, we empower individuals to take control of their health, reducing healthcare costs and improving overall well-being.

//           </p>
//         </div>

//         {/* Image Carousel */}
//         <div className="md:w-1/2 flex flex-col items-center">
//           <div className="relative w-full max-w-xs">
//             <img
//               src={images[currentImageIndex]}
//               alt={`Vision Image ${currentImageIndex + 1}`}
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//               &lt;
//             </button>
//             <button
//               onClick={handleNext}
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
//             >
//               &gt;
//             </button>
//           </div>
//           <div className="flex justify-center mt-4 space-x-2">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImageIndex(index)}
//                 className={`w-3 h-3 rounded-full ${
//                   currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// const VisionPageSection = () => {
//   const { isDarkMode } = useContext(AppContext);
//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <VisionSection mode={isDarkMode} />
//     </div>
//   );
// };

// export default VisionPageSection;

import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const VisionSection = ({ mode }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/images/health.jpeg",
    "/images/abha.jpeg",
    "/images/aicopilot.jpeg",
    "/images/aidriven.jpeg",
    "/images/360deg.jpeg",
  ];

  // Auto-cycle images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="vision"
      className={`py-16 md:py-24 text-center transition-colors duration-300 ${
        mode ? "bg-[#101F3C]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2
            className={`font-extrabold mb-4 text-3xl sm:text-4xl ${
              mode ? "text-white" : "text-gray-900"
            }`}
          >
            Our Vision
          </h2>
          <p
            className={`mx-auto max-w-xl text-lg ${
              mode ? "text-gray-200" : "text-slate-600"
            }`}
          >
            1MBHealthy is set to revolutionize digital healthcare by shifting the focus from reactive treatments to proactive well-being. With data-driven precision medicine and AI-powered diagnostics, we empower individuals to take control of their health, reducing healthcare costs and improving overall well-being.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="md:w-1/2 flex flex-col items-center">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <img
              src={images[currentImageIndex]}
              alt={`Vision Image ${currentImageIndex + 1}`}
              className="w-full h-80 md:h-96 lg:h-[28rem] object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full transition-all duration-200"
            />
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionPageSection = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <VisionSection mode={isDarkMode} />
    </div>
  );
};

export default VisionPageSection;