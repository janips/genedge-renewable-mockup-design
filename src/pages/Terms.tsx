
import React from 'react';
import Layout from '../components/Layout';

const Terms = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                These Terms of Service ("Terms") govern your access to and use of the website and services 
                provided by Genedge Renewables Pvt. Ltd. ("Genedge," "we," or "us"). By accessing or using our 
                website or services, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Use of Our Website and Services</h2>
              <p className="mb-4">
                You may use our website and services only for lawful purposes and in accordance with these Terms. 
                You agree not to use our website or services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                <li>To attempt to interfere with the proper working of our website or services</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Intellectual Property</h2>
              <p className="mb-4">
                The content on our website, including text, graphics, logos, images, and software, is the property 
                of Genedge or our licensors and is protected by copyright, trademark, and other intellectual 
                property laws. You may not use, reproduce, or distribute any content from our website without our 
                prior written permission.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Limitation of Liability</h2>
              <p className="mb-4">
                To the fullest extent permitted by law, Genedge shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of or relating to your access to or use of, 
                or inability to access or use, our website or services.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Changes to These Terms</h2>
              <p className="mb-4">
                We may revise these Terms from time to time. When we make changes, we will update the "Last Updated" 
                date at the top of these Terms and post the revised Terms on our website.
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at legal@genedge.in.
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

export default Terms;
