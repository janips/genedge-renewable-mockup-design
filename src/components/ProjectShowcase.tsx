
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'solar', label: 'Solar' },
    { id: 'wind', label: 'Wind' },
    { id: 'hybrid', label: 'Hybrid' },
    { id: 'bess', label: 'BESS' },
  ];
  
  const projects = [
    {
      id: 1,
      title: "50 MW Solar Farm",
      location: "Gujarat, India",
      category: "solar",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Large-scale solar project powering thousands of homes with clean electricity."
    },
    {
      id: 2,
      title: "100 MW Wind Project",
      location: "Rajasthan, India",
      category: "wind",
      image: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Strategic wind farm development with state-of-the-art turbine technology."
    },
    {
      id: 3,
      title: "PM-KUSUM Agricultural Solar",
      location: "Madhya Pradesh, India",
      category: "solar",
      image: "https://images.unsplash.com/photo-1593461082561-31fe80648712?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Empowering farmers with dedicated solar energy solutions for irrigation needs."
    },
    {
      id: 4,
      title: "25 MW Solar-Wind Hybrid",
      location: "Maharashtra, India",
      category: "hybrid",
      image: "https://images.unsplash.com/photo-1548014178-90aeff482a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Innovative hybrid solution maximizing energy production throughout the day and night."
    },
    {
      id: 5,
      title: "10 MWh BESS Facility",
      location: "Karnataka, India",
      category: "bess",
      image: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Next-generation battery storage providing grid stability and peak demand support."
    },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-genedge-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-genedge-green mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our flagship renewable energy projects delivering clean, 
            sustainable power across India.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-white rounded-lg shadow-sm p-1">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md ${
                  activeCategory === category.id
                    ? 'bg-genedge-green text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-xs font-semibold text-genedge-orange uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-genedge-green hover:underline font-medium text-sm"
                >
                  View Project Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center px-6 py-3 border border-genedge-green text-genedge-green hover:bg-genedge-green hover:text-white rounded-md font-medium transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <div className="mt-20">
        <div className="bg-gradient-to-r from-genedge-green to-genedge-orange py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Switch to Clean Energy?</h3>
                <p className="text-white text-opacity-90">
                  Join our mission to power a greener India. Get in touch with our team today.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link
                  to="/contact"
                  className="bg-white text-genedge-green px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all"
                >
                  Contact Us
                </Link>
                <Link
                  to="/careers"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-genedge-green transition-colors"
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
