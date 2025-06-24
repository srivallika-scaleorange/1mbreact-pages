import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const features = [
  {
    title: "Seamless ABHA Integration",
    description:
      "Users can log into their ABHA account via 1MBHealthy to securely store and access digital health records, eliminating the need for physical documents.",
    image: "/integration.jpeg",
    reverse: false,
  },
  {
    title: "Interoperable Healthcare Ecosystem",
    description:
      "Leverages ABDM’s framework to connect with hospitals, labs, pharmacies, and doctors for efficient data sharing and care coordination.",
    image: "/1mbhealthy.jpeg",
    reverse: true,
  },
  {
    title: "Empowered Patients and Doctors",
    description:
      "Patients can share previous health data with doctors instantly, enabling faster diagnoses and personalized treatment plans.",
    image: "/4person.jpeg",
    reverse: false,
  },
  {
    title: "Compliance and Security",
    description:
      "Built on ABDM’s HIPAA-compliant architecture, ensuring data privacy and adherence to NHA’s regulatory standards.",
    image: "adbm-nha.jpeg",
    reverse: true,
  },
];

const AbdmIntegration = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
    <section
      id="abdm-nha"
      className={`py-16 md:py-24 ${
        isDarkMode ? "bg-slate-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2
            className={`inline-block text-3xl md:text-4xl font-extrabold tracking-tight relative ${
              isDarkMode ? "text-slate-100" : "text-slate-900"
            }`}
          >
            ABDM & NHA Integration
            {/* Gradient underline */}
            <span
              className="block absolute left-1/2 -translate-x-1/2 w-1/2 h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #4f46e5 0%, #10b981 100%)",
                bottom: -10,
              }}
            ></span>
          </h2>
          <p
            className={`mt-6 max-w-2xl mx-auto text-base md:text-lg ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            1MBHealthy is fully integrated with the Ayushman Bharat Digital
            Mission (ABDM) and National Health Authority (NHA) infrastructure,
            enabling seamless storage, management, and sharing of health records
            through the Ayushman Bharat Health Account (ABHA).
          </p>
        </div>

        {/* Features */}
        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`
                flex flex-col md:flex-row ${
                  feature.reverse ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-16
              `}
            >
              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p
                  className={`text-base md:text-lg ${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
              {/* Image */}
              <div className="flex-1 flex justify-center items-center">
                <div
                  className={`
                    w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden shadow-xl
                    ${
                      isDarkMode
                        ? "bg-slate-800 shadow-indigo-500/20"
                        : "bg-white shadow-emerald-400/10"
                    }
                    border border-transparent hover:border-emerald-400 transition
                  `}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 md:h-64 object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className={`mt-20 py-6 text-center ${
          isDarkMode
            ? "bg-slate-900 border-t border-slate-800"
            : "bg-blue-900"
        }`}
      >
        <span className="text-sm text-white tracking-wide">
          © 2025 DEEPMINDZ AI PRIVATE LIMITED. All rights reserved.
        </span>
      </footer>
    </section>
  );
};

export default AbdmIntegration;
