
import React from 'react';
import Layout from '../components/Layout';
import ProjectMapInteractive from '../components/ProjectMapInteractive';

const ProjectMap = () => {
  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Project Map</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center mb-6">
                Explore our renewable energy projects across India. Click on any red pin 
                to view the project location on Google Maps. Hover over pins to see project details.
              </p>
              
              {/* Interactive Map */}
              <div className="flex justify-center mb-8">
                <ProjectMapInteractive />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">Gujarat Projects</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Devki Galol - 2.4 MWp (Commissioned)</li>
                    <li>• Mendapara - 2.4 MWp (Commissioned)</li>
                    <li>• Mandodara - 2.4 MWp (Commissioned)</li>
                    <li>• Kanja - 4.8 MWp (Commissioned)</li>
                    <li>• GUVNL - 340.2 MWp (Under Development)</li>
                    <li>• Sheradi - 2.2 MWp (Under Development)</li>
                    <li>• Satapar - 2.2 MWp (Under Development)</li>
                    <li>• Sarpdad - 2.2 MWp (Under Development)</li>
                    <li>• Gokhlana - 1.65 MWp (Under Development)</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Rajasthan Projects</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Mandawri - 2.25 MWp (Under Construction)</li>
                    <li>• Jiva ka Kheda - 2.33 MWp (Under Construction)</li>
                    <li>• Sudri - 2.54 MWp (Under Construction)</li>
                    <li>• Bhujela - 2 MWp (Under Development)</li>
                    <li>• Bant - 4 MWp (Under Development)</li>
                    <li>• Anadara - 4 MWp (Under Development)</li>
                    <li>• Padiv - 2 MWp (Under Development)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectMap;
