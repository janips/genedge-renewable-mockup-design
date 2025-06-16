import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'solar',
    label: 'Solar'
  }, {
    id: 'wind',
    label: 'Wind'
  }, {
    id: 'hybrid',
    label: 'Hybrid'
  }, {
    id: 'bess',
    label: 'BESS'
  }];
  const projects = [{
    id: 1,
    title: "50 MW Solar Farm",
    location: "Gujarat, India",
    category: "solar",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Large-scale solar project powering thousands of homes with clean electricity."
  }, {
    id: 2,
    title: "100 MW Wind Project",
    location: "Rajasthan, India",
    category: "wind",
    image: "https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Strategic wind farm development with state-of-the-art turbine technology."
  }, {
    id: 3,
    title: "PM-KUSUM Agricultural Solar",
    location: "Madhya Pradesh, India",
    category: "solar",
    image: "https://images.unsplash.com/photo-1593461082561-31fe80648712?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Empowering farmers with dedicated solar energy solutions for irrigation needs."
  }, {
    id: 4,
    title: "25 MW Solar-Wind Hybrid",
    location: "Maharashtra, India",
    category: "hybrid",
    image: "https://images.unsplash.com/photo-1548014178-90aeff482a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Innovative hybrid solution maximizing energy production throughout the day and night."
  }, {
    id: 5,
    title: "10 MWh BESS Facility",
    location: "Karnataka, India",
    category: "bess",
    image: "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Next-generation battery storage providing grid stability and peak demand support."
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <section className="bg-genedge-light-gray py-0">
      
      
      <div className="mt-20">
        <div className="bg-gradient-to-r from-genedge-green to-genedge-orange py-[50px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center py-[60px]">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Switch to Clean Energy?</h3>
                <p className="text-white text-opacity-90">
                  Join our mission to power a greener India. Get in touch with our team today.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link to="/contact" className="bg-white text-genedge-green px-6 py-3 rounded-md font-medium hover:shadow-lg transition-all">
                  Contact Us
                </Link>
                <Link to="/careers" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-genedge-green transition-colors">
                  Join Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectShowcase;