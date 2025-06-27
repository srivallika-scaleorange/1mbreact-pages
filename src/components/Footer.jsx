
// import React, { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import logoImage from "/logo.png";

// const FooterSection = ({ mode }) => {
//   const [message, setMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setIsError(false);

//     const formData = {
//       name: e.target.name.value,
//       phone: e.target.phone.value,
//       email: e.target.email.value,
//       organisation: e.target.organisation.value || "",
//       notes: e.target.notes.value || "",
//     };

//     try {
//       const response = await fetch("https://dev.1mbhealthy.com/api/v1/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         setMessage("Your message has been sent successfully!");
//         e.target.reset();
//       } else {
//         setMessage(result.message || "Failed to send message.");
//         setIsError(true);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setMessage("An error occurred while sending your message.");
//       setIsError(true);
//     }
//   };

//   return (
//     <footer
//       className={`pt-12 pb-8 transition-colors duration-300 ${
//         mode ? "bg-[#101F3C] text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* Quick Links & Branding */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-2">
//               <div className="w-52 h-20 rounded-lg flex items-center justify-center">
//                 <img
//                   src={logoImage}
//                   alt="1MBHealthy Logo"
//                   className="w-44 h-40 object-contain"
//                 />
//               </div>
//               {/* <span className="text-xl font-bold">1MBHealthy</span> */}
//             </div>
//             <p className={`${mode ? "text-gray-500" : "text-gray-600"}`}>
//               Operated by Deepmindz AI Private Limited. Your AI-powered healthcare
//               companion for predictive and preventive wellness.
//             </p>
//             <div className="flex flex-col md:flex-row gap-20">
//               <div>
//                 <h4 className="font-semibold">Product</h4>
//                 <ul
//                   className={`${
//                     mode ? "text-gray-400" : "text-gray-700"
//                   } space-y-2 mt-2 text-sm`}
//                 >
//                   <li>
//                     <a href="/" className="hover:text-blue-400">
//                       Vision
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/solutions" className="hover:text-blue-400">
//                       Solutions
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/blogs" className="hover:text-blue-400">
//                       1MBWellness
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/abdm" className="hover:text-blue-400">
//                       ABDM & NHA
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="font-semibold mt-4 md:mt-0">Company</h4>
//                 <ul
//                   className={`${
//                     mode ? "text-gray-400" : "text-gray-700"
//                   } space-y-2 mt-2 text-sm`}
//                 >
//                   <li>
//                     <a href="/about" className="hover:text-blue-400">
//                       About Us
//                     </a>
//                   </li>
//                   {/* <li>
//                     <a href="" className="hover:text-blue-400">
//                       Careers
//                     </a>
//                   </li> */}
//                   <li>
//                     <a href="/privacypolicy" className="hover:text-blue-400">
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/termsandconditions" className="hover:text-blue-400">
//                       Terms of Service
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           {/* Contact Info */}
//           <div className="space-y-4" id="contact-us"> {/* Add ID here */}
//             <h3 className="text-lg font-bold">Contact Us</h3>
//             <div
//               className={`${
//                 mode ? "text-gray-400" : "text-gray-700"
//               } space-y-2 text-sm`}
//             >
//               <div>
//                 <strong>Address:</strong> ITPL Main Road, Hoodi Whitefield,
//                 Bangalore, Pin: 560048
//               </div>
//               <div>
//                 <strong>Parent Company:</strong> DeepMindz AI Private Limited
//                 <br />
//                 <a
//                   href="https://deepmindzai.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={`${
//                     mode
//                       ? "text-indigo-400 hover:text-indigo-600"
//                       : "text-indigo-600 hover:text-indigo-800"
//                   }`}
//                 >
//                   https://deepmindzai.com
//                 </a>
//               </div>
//               <div>
//                 <strong>Email:</strong>{" "}
//                 <a
//                   href="mailto:contact@1mbhealthy.com"
//                   className={`${
//                     mode
//                       ? "text-indigo-400 hover:text-indigo-600"
//                       : "text-indigo-600 hover:text-indigo-800"
//                   }`}
//                 >
//                   contact@1mbhealthy.com
//                 </a>
//               </div>
//               <div>
//                 <strong>Phone:</strong>{" "}
//                 <a
//                   href="tel:+919739006696"
//                   className={`${
//                     mode
//                       ? "text-indigo-400 hover:text-indigo-600"
//                       : "text-indigo-600 hover:text-indigo-800"
//                   }`}
//                 >
//                   +91 97390 06696
//                 </a>
//               </div>
//             </div>
//           </div>
//           {/* Contact Form */}
//           <div className="space-y-4">
//             <h3 className="text-lg font-bold">Get in Touch</h3>
//             <form onSubmit={handleSubmit} className="space-y-3">
//               <input
//                 className={`w-full rounded-md border text-sm ${
//                   mode
//                     ? "border-gray-600 bg-[#182848] text-white"
//                     : "border-gray-300 bg-white text-gray-900"
//                 } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Name *"
//                 name="name"
//                 required
//                 type="text"
//               />
//               <input
//                 className={`w-full rounded-md border text-sm ${
//                   mode
//                     ? "border-gray-600 bg-[#182848] text-white"
//                     : "border-gray-300 bg-white text-gray-900"
//                 } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Phone Number *"
//                 name="phone"
//                 required
//                 type="tel"
//               />
//               <input
//                 className={`w-full rounded-md border text-sm ${
//                   mode
//                     ? "border-gray-600 bg-[#182848] text-white"
//                     : "border-gray-300 bg-white text-gray-900"
//                 } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Email *"
//                 name="email"
//                 required
//                 type="email"
//               />
//               <input
//                 className={`w-full rounded-md border text-sm ${
//                   mode
//                     ? "border-gray-600 bg-[#182848] text-white"
//                     : "border-gray-300 bg-white text-gray-900"
//                 } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Organisation (Optional)"
//                 name="organisation"
//                 type="text"
//               />
//               <input
//                 className={`w-full rounded-md border text-sm ${
//                   mode
//                     ? "border-gray-600 bg-[#182848] text-white"
//                     : "border-gray-300 bg-white text-gray-900"
//                 } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
//                 placeholder="Notes"
//                 name="notes"
//                 type="text"
//               />
//               <button
//                 type="submit"
//                 className="w-full rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-600 hover:to-emerald-600 transition"
//               >
//                 Submit
//               </button>
//               {message && (
//                 <div
//                   className={`text-sm ${
//                     isError ? "text-red-500" : "text-green-500"
//                   }`}
//                 >
//                   {message}
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//         <div
//           className={`text-center text-sm mt-8 ${
//             mode ? "text-gray-500" : "text-gray-500"
//           }`}
//         >
//           © 2025 DEEPMINDZ AI PRIVATE LIMITED. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// const FooterSections = () => {
//   const { isDarkMode } = useContext(AppContext);
//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <FooterSection mode={isDarkMode} />
//     </div>
//   );
// };

// export default FooterSections;


import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import logoImage from "/logo.png";

const FooterSection = ({ mode }) => {
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const validateForm = (formData) => {
    const errors = {
      name: "",
      phone: "",
      email: "",
    };
    let isValid = true;

    // Name validation: required, min 2 characters
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    // Phone validation: required, basic phone number format
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Email validation: required, valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      organisation: e.target.organisation.value || "",
      notes: e.target.notes.value || "",
    };

    // Validate form before submitting
    if (!validateForm(formData)) {
      setMessage("Please correct the form errors");
      setIsError(true);
      return;
    }

    try {
      const response = await fetch("https://dev.1mbhealthy.com/api/v1/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Your message has been sent successfully!");
        e.target.reset();
        setFormErrors({ name: "", phone: "", email: "" });
      } else {
        setMessage(result.message || "Failed to send message.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred while sending your message.");
      setIsError(true);
    }
  };

  return (
    <footer
      className={`pt-12 pb-8 transition-colors duration-300 ${
        mode ? "bg-[#101F3C] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quick Links & Branding */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-52 h-20 rounded-lg flex items-center justify-center">
                <img
                  src={logoImage}
                  alt="1MBHealthy Logo"
                  className="w-44 h-40 object-contain"
                />
              </div>
            </div>
            <p className={`${mode ? "text-gray-500" : "text-gray-600"}`}>
              Operated by Deepmindz AI Private Limited. Your AI-powered healthcare
              companion for predictive and preventive wellness.
            </p>
            <div className="flex flex-col md:flex-row gap-20">
              <div>
                <h4 className="font-semibold">Product</h4>
                <ul
                  className={`${
                    mode ? "text-gray-400" : "text-gray-700"
                  } space-y-2 mt-2 text-sm`}
                >
                  <li>
                    <a href="/" className="hover:text-blue-400">
                      Vision
                    </a>
                  </li>
                  <li>
                    <a href="/solutions" className="hover:text-blue-400">
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/blogs" className="hover:text-blue-400">
                      1MBWellness
                    </a>
                  </li>
                  <li>
                    <a href="/abdm" className="hover:text-blue-400">
                      ABDM & NHA
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mt-4 md:mt-0">Company</h4>
                <ul
                  className={`${
                    mode ? "text-gray-400" : "text-gray-700"
                  } space-y-2 mt-2 text-sm`}
                >
                  <li>
                    <a href="/about" className="hover:text-blue-400">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/privacypolicy" className="hover:text-blue-400">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/termsandconditions" className="hover:text-blue-400">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="space-y-4" id="contact-us">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div
              className={`${
                mode ? "text-gray-400" : "text-gray-700"
              } space-y-2 text-sm`}
            >
              <div>
                <strong>Address:</strong> ITPL Main Road, Hoodi Whitefield,
                Bangalore, Pin: 560048
              </div>
              <div>
                <strong>Parent Company:</strong> DeepMindz AI Private Limited
                <br />
                <a
                  href="https://deepmindzai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    mode
                      ? "text-indigo-400 hover:text-indigo-600"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                >
                  https://deepmindzai.com
                </a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:contact@1mbhealthy.com"
                  className={`${
                    mode
                      ? "text-indigo-400 hover:text-indigo-600"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                >
                  contact@1mbhealthy.com
                </a>
              </div>
              <div>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919739006696"
                  className={`${
                    mode
                      ? "text-indigo-400 hover:text-indigo-600"
                      : "text-indigo-600 hover:text-indigo-800"
                  }`}
                >
                  +91 97390 06696
                </a>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <input
                  className={`w-full rounded-md border text-sm ${
                    mode
                      ? "border-gray-600 bg-[#182848] text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                  placeholder="Name *"
                  name="name"
                  required
                  type="text"
                />
                {formErrors.name && (
                  <div className="text-red-500 text-xs pl-1">{formErrors.name}</div>
                )}
              </div>
              <div className="space-y-1">
                <input
                  className={`w-full rounded-md border text-sm ${
                    mode
                      ? "border-gray-600 bg-[#182848] text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 ${
                    formErrors.phone ? "border-red-500" : ""
                  }`}
                  placeholder="Phone Number *"
                  name="phone"
                  required
                  type="tel"
                />
                {formErrors.phone && (
                  <div className="text-red-500 text-xs pl-1">{formErrors.phone}</div>
                )}
              </div>
              <div className="space-y-1">
                <input
                  className={`w-full rounded-md border text-sm ${
                    mode
                      ? "border-gray-600 bg-[#182848] text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  placeholder="Email *"
                  name="email"
                  required
                  type="email"
                />
                {formErrors.email && (
                  <div className="text-red-500 text-xs pl-1">{formErrors.email}</div>
                )}
              </div>
              <div className="space-y-1">
                <input
                  className={`w-full rounded-md border text-sm ${
                    mode
                      ? "border-gray-600 bg-[#182848] text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
                  placeholder="Organisation (Optional)"
                  name="organisation"
                  type="text"
                />
              </div>
              <div className="space-y-1">
                <input
                  className={`w-full rounded-md border text-sm ${
                    mode
                      ? "border-gray-600 bg-[#182848] text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } py-2 px-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-400`}
                  placeholder="Notes"
                  name="notes"
                  type="text"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:from-blue-600 hover:to-emerald-600 transition"
              >
                Submit
              </button>
              {message && (
                <div
                  className={`text-sm pl-1 ${
                    isError ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
        <div
          className={`text-center text-sm mt-8 ${
            mode ? "text-gray-500" : "text-gray-500"
          }`}
        >
          © 2025 DEEPMINDZ AI PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterSections = () => {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <FooterSection mode={isDarkMode} />
    </div>
  );
};

export default FooterSections;