import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const CTASection = () => (
  <section
    id="cta"
    className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-500 to-emerald-500 text-white"
  >
    <div className="max-w-2xl mx-auto px-4">
      <h2 className="font-extrabold mb-4 text-3xl sm:text-4xl text-white">
        Join the Healthcare Revolution!
      </h2>
      <p className="mx-auto max-w-lg text-lg text-blue-100 mb-8">
        We're seeking strategic partners, investors, and collaborators to shape
        the future of hyper-personalized healthcare. Let's drive this
        transformation together!
      </p>
  
      <button
            onClick={() => {
              document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block rounded-lg px-8 py-3 font-semibold text-lg bg-white text-emerald-500 shadow-lg hover:bg-blue-50 hover:text-blue-600 transition"
            >
            Contact Us Now
          </button>
    </div>
  </section>
);

const MainPageSections = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      {/* <VisionSection mode={isDarkMode} /> */}
      <CTASection mode={isDarkMode} />
    </div>
  );
};

export default MainPageSections;