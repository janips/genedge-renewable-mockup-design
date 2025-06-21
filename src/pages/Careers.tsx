
import React from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Mail, Zap, Users, TrendingUp, Heart } from 'lucide-react';

const Careers = () => {
  return (
    <Layout>
      <PageBanner 
        title="Careers"
        subtitle="Be part of something powerful"
        backgroundImage="/lovable-uploads/bd8ce70a-3cb9-4642-9f6d-b171ff4994c3.png"
      />
      <div className="pt-8 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Genedge, we're not just building a company, we are building a clean energy future. 
              As a fast-growing renewable energy startup, we are driven by innovation, urgency, and a 
              commitment to sustainability. Join us on our journey to power the world—responsibly and equitably.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-4">
                  <Zap className="h-8 w-8 text-genedge-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">Mission-Driven Impact</h3>
                    <p className="text-gray-700">
                      We're tackling one of the planet's most pressing challenges—climate change—by 
                      accelerating the adoption of renewable energy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-4">
                  <TrendingUp className="h-8 w-8 text-genedge-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">Start-Up Energy, Big Ideas</h3>
                    <p className="text-gray-700">
                      We move fast, think boldly, and give our people room to lead. Your work here 
                      won't sit in a file. It'll shape the future of our business and industry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-4">
                  <Users className="h-8 w-8 text-genedge-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">Growth From Day One</h3>
                    <p className="text-gray-700">
                      Whether you're an engineer, analyst, project manager, or creative thinker, 
                      you'll play a key role from the start—and grow as we grow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start mb-4">
                  <Heart className="h-8 w-8 text-genedge-orange mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-3">Culture That Cares</h3>
                    <p className="text-gray-700">
                      We believe in transparency, respect, inclusion, and a healthy dose of optimism. 
                      We hire people, not résumés.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-genedge-green mr-3" />
                <h3 className="text-2xl font-semibold">Ready to Join Us?</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Email us at <a href="mailto:info@genedge.in" className="text-genedge-green hover:underline font-medium">info@genedge.in</a> — we'd love to hear your side of story.
              </p>
              <a 
                href="mailto:info@genedge.in" 
                className="inline-block bg-genedge-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
