import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Terms and Conditions</h1>
      <p className="mb-4 text-gray-600">Effective Date: June 24, 2025</p>

      <p className="mb-4">
        By accessing or using <strong className="text-green-600">1MBHealthy</strong>, you agree to these Terms and Conditions ("Terms"). Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">1. Use of Service</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Must be 13+ years or have parental consent</li>
        <li>Provide accurate info</li>
        <li>You’re responsible for your account security</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">2. User Responsibilities</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>No illegal or unethical use of the platform</li>
        <li>Don’t upload false health data</li>
        <li>Consult doctors before acting on AI advice</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">3. Health Disclaimer</h2>
      <p className="mb-4 text-gray-700">Our AI insights are not medical diagnoses. Use them as guidance, not prescriptions.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">4. Intellectual Property</h2>
      <p className="mb-4 text-gray-700">
        All content, branding, and code belong to <strong className="text-green-600">DeepMindzAI</strong>. Do not copy without permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">5. Termination</h2>
      <p className="mb-4 text-gray-700">
        We may suspend access for violations, misuse, or illegal activity.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">6. Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        We’re not liable for decisions based on AI output or temporary service downtime.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">7. Modifications</h2>
      <p className="mb-4 text-gray-700">We may update these Terms. Continued use = agreement to updated terms.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">8. Governing Law</h2>
      <p className="mb-4 text-gray-700">These Terms follow Indian law and ABDM/IT Act compliance.</p>

     
    </div>
  );
};

export default TermsAndConditions;