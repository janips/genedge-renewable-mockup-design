
import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                This Privacy Policy describes how Genedge Renewables Pvt. Ltd. ("Genedge," "we," or "us") 
                collects, uses, and shares information about you when you visit our website, use our services, 
                or otherwise interact with us.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
              <p className="mb-4">
                We collect information you provide directly to us, such as when you fill out a contact form, 
                apply for a job, or communicate with us. This information may include your name, email address, 
                phone number, and any other information you choose to provide.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Process job applications</li>
                <li>Send you technical notices and updates</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Sharing Your Information</h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside parties 
                except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who perform services on our behalf</li>
                <li>Professional advisors, such as lawyers and accountants</li>
                <li>Regulatory authorities, government agencies, or other third parties where required by law</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights and Choices</h2>
              <p className="mb-4">
                You have certain rights regarding your personal information, including the right to access, 
                correct, or delete your personal information. To exercise these rights, please contact us at 
                privacy@genedge.in.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. When we make changes, we will update the 
                "Last Updated" date at the top of this policy and post the revised policy on our website.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns about our privacy practices, please contact us at 
                privacy@genedge.in.
              </p>
              
              <p className="mb-4 text-sm">
                Last Updated: May 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
