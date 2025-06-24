import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-indigo-700">Privacy Policy</h1>
      <p className="mb-4 text-gray-600">Effective Date: June 24, 2025</p>

      <p className="mb-4">
        Welcome to <strong className="text-green-600">1MBHealthy</strong>, a product of <strong className="text-green-600">DeepMindzAI</strong>, focused on providing hyper-personalized, AI-powered healthcare solutions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Personal info (e.g., name, email, ABHA ID, etc.)</li>
        <li>Health data from wearables, diagnostics, assessments</li>
        <li>Usage data (IP, browser, device info)</li>
        <li>Cookies for analytics and UX</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">2. How We Use Your Data</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Personalize recommendations</li>
        <li>Store medical data securely</li>
        <li>Notify you with updates & alerts</li>
        <li>Improve our platform</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">3. Data Sharing</h2>
      <p className="mb-4 text-gray-700">
        We do <strong className="text-red-600">not sell</strong> your data. We share only with trusted partners or when required by law and only with your consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">4. Your Rights</h2>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Access, update, or delete data</li>
        <li>Withdraw consent anytime</li>
        <li>Use ABHA for portability</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">5. Data Security</h2>
      <p className="mb-4 text-gray-700">We use encryption and follow ABDM guidelines for full compliance and safety.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">6. Third-Party Services</h2>
      <p className="mb-4 text-gray-700">We are not responsible for data practices of linked third-party services like wearables or labs.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">7. Children’s Privacy</h2>
      <p className="mb-4 text-gray-700">Users under 13 need parental consent to use the platform.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-indigo-600">8. Changes</h2>
      <p className="mb-4 text-gray-700">We may update this policy. Check back periodically.</p>

     
    </div>
  );
};

export default PrivacyPolicy;