
import React from 'react';
import Layout from '../components/Layout';

const Gallery = () => {
  const projectImages = [
    {
      id: 1,
      title: "Solar Farm Gujarat",
      location: "Gujarat, India",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Solar"
    },
    {
      id: 2,
      title: "Wind Farm Rajasthan",
      location: "Rajasthan, India",
      image: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Wind"
    },
    {
      id: 3,
      title: "Agricultural Solar Project",
      location: "Madhya Pradesh, India",
      image: "https://images.unsplash.com/photo-1593461082561-31fe80648712?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Solar"
    },
    {
      id: 4,
      title: "Hybrid Solar-Wind",
      location: "Karnataka, India",
      image: "https://images.unsplash.com/photo-1548014178-90aeff482a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Hybrid"
    },
    {
      id: 5,
      title: "BESS Installation",
      location: "Maharashtra, India",
      image: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "BESS"
    },
    {
      id: 6,
      title: "Rooftop Solar C&I",
      location: "Tamil Nadu, India",
      image: "https://images.unsplash.com/photo-1611365892117-00d03937791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Solar"
    }
  ];

  return (
    <Layout>
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Project Gallery</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Explore our portfolio of renewable energy projects across India. 
                From solar farms to wind installations, each project represents 
                our commitment to clean energy and sustainable development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectImages.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                      project.category === 'Solar' ? 'bg-green-100 text-green-800' :
                      project.category === 'Wind' ? 'bg-blue-100 text-blue-800' :
                      project.category === 'Hybrid' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
