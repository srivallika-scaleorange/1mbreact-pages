import React from 'react';
import SEO from './SEO'; // Assuming SEO is a custom component for metadata

const DataDeletionPolicy = () => {
  return (
    <>
      <SEO
        title="Data Deletion Policy - 1MB Healthy"
        description="Understand how to request the deletion of your personal data from 1MB Healthy’s AI-powered healthcare platform."
        keywords="data deletion policy, 1MB Healthy, privacy, data protection"
        url="https://1mbhealthy.com/datadeletionpolicy"
      />
      <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">1MB Healthy – Data Deletion Policy</h1>
        <p className="mb-4 text-gray-700">
          At 1MB Healthy, we value your privacy and give you full control over your personal health data. This Data Deletion Policy outlines how users can request the deletion of their data and what happens when such a request is made.
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">1. Requesting Data Deletion</h2>
          <p className="mb-4 text-gray-700">
            Users can request deletion of their account and personal data at any time through any of the following methods:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
            <li><strong>Email Request</strong>: Send an email to <a href="mailto:contact@1mbhealthy.com" className="text-indigo-600 hover:underline">contact@1mbhealthy.com</a> from your registered email address with the subject line: “Delete My Account and Data”.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">2. What Data Will Be Deleted</h2>
          <p className="mb-4 text-gray-700">
            Upon receiving a valid request, the following user data will be permanently deleted from our servers:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
            <li>Personal identifiers (Name, Email, Phone)</li>
            <li>Health profile data (Vitals, Conditions, Medications)</li>
            <li>Uploaded documents and reports</li>
            <li>Linked family member profiles</li>
            <li>Any interaction or usage data associated with the account</li>
          </ul>
          <p className="mb-4 text-gray-700">
            Note: Some anonymized and aggregated data may be retained for analytics and product improvement, but it will not be identifiable to any user.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">3. Processing Time</h2>
          <p className="mb-4 text-gray-700">
            All verified deletion requests will be processed within 7 working days. You will receive an email confirmation once the process is completed.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">4. Exceptions</h2>
          <p className="mb-4 text-gray-700">
            We may retain certain information if required to:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
            <li>Comply with legal obligations (e.g., tax, audit, compliance)</li>
            <li>Resolve disputes or enforce our Terms of Service</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">5. Contact Us</h2>
          <p className="mb-4 text-gray-700">
            If you have questions or concerns about your data or the deletion process, please contact us at:
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700 ml-4">
            <li><strong>Email</strong>: <a href="mailto:contact@1mbhealthy.com" className="text-indigo-600 hover:underline">contact@1mbhealthy.com</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DataDeletionPolicy;