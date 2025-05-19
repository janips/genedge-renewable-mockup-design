
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projectsData = [
    { id: 1, name: "Devki Galol", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Commissioned" },
    { id: 2, name: "Mendapara", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Commissioned" },
    { id: 3, name: "Mandodara", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Commissioned" },
    { id: 4, name: "Kanja", state: "GJ", mwac: 4, mwp: 4.8, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Under Construction" },
    { id: 5, name: "Mandawri", state: "RJ", mwac: 2.25, mwp: 2.25, discom: "AVVNL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Under Construction" },
    { id: 6, name: "Jiva ka Kheda", state: "RJ", mwac: 2.54, mwp: 2.54, discom: "AVVNL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Under Construction" },
    { id: 7, name: "Sudri", state: "RJ", mwac: 2.33, mwp: 2.33, discom: "AVVNL", loi: "Yes", loa: "Yes", ppa: "Yes", status: "Under Construction" },
    { id: 8, name: "Sheradi", state: "GJ", mwac: 2, mwp: 2.2, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Awaited", status: "Under Development" },
    { id: 9, name: "Satapar", state: "GJ", mwac: 2, mwp: 2.2, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Awaited", status: "Under Development" },
    { id: 10, name: "Sarpdad", state: "GJ", mwac: 2, mwp: 2.2, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Awaited", status: "Under Development" },
    { id: 11, name: "Gokhlana", state: "GJ", mwac: 1.5, mwp: 1.65, discom: "PGVCL", loi: "Yes", loa: "Yes", ppa: "Awaited", status: "Under Development" },
    { id: 12, name: "GUVNL - 243 MW", state: "GJ", mwac: 243, mwp: 340.2, discom: "GUVNL", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
    { id: 13, name: "Khanedi", state: "RJ", mwac: 2, mwp: 2.2, discom: "Jodhpur", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
    { id: 14, name: "Mandwa", state: "RJ", mwac: 2, mwp: 2.2, discom: "Jodhpur", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
    { id: 15, name: "Dhawali", state: "RJ", mwac: 2, mwp: 2.2, discom: "Jodhpur", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
    { id: 16, name: "Gulabganj", state: "RJ", mwac: 2, mwp: 2.2, discom: "Jodhpur", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
    { id: 17, name: "Sangwara", state: "RJ", mwac: 2, mwp: 2.2, discom: "Jodhpur", loi: "Yes", loa: "Awaited", ppa: "Awaited", status: "Under Development" },
  ];
  
  const totalMwac = projectsData.reduce((sum, project) => sum + project.mwac, 0);
  const totalMwp = projectsData.reduce((sum, project) => sum + project.mwp, 0);
  
  const categories = ["all", "solar", "wind", "hybrid", "bess"];
  
  const getFilteredProjects = () => {
    if (activeCategory === 'all') return projectsData;
    // This is a simple filter - in a real app you'd have a category field for each project
    if (activeCategory === 'solar') return projectsData.filter(project => !project.name.toLowerCase().includes('hybrid'));
    if (activeCategory === 'hybrid') return projectsData.filter(project => project.name.toLowerCase().includes('hybrid'));
    return [];
  };
  
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Project Portfolio</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <p className="text-gray-700 mb-6">
                At Genedge Renewables, we have successfully implemented a diverse portfolio of renewable energy 
                projects across India. Our project experience spans utility-scale installations, agricultural 
                solar projects, commercial & industrial solutions, and integrated energy systems.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`px-4 py-2 rounded-full ${
                      activeCategory === category 
                        ? 'bg-genedge-green text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Solar Project"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-genedge-green text-sm font-medium mb-2">Solar</span>
                  <h3 className="text-xl font-semibold mb-2">20 MW Solar Project</h3>
                  <p className="text-gray-600 mb-2">Gujarat, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1467533003447-e295ff1b0435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Wind Farm"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-2">Wind</span>
                  <h3 className="text-xl font-semibold mb-2">15 MW Wind Farm</h3>
                  <p className="text-gray-600 mb-2">Rajasthan, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1548014178-90aeff482a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Solar-Wind Hybrid"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-2">Hybrid</span>
                  <h3 className="text-xl font-semibold mb-2">10 MW Solar-Wind Hybrid</h3>
                  <p className="text-gray-600 mb-2">Madhya Pradesh, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1593461082561-31fe80648712?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Agricultural Solar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-600 text-sm font-medium mb-2">PM-KUSUM</span>
                  <h3 className="text-xl font-semibold mb-2">5 MW Agricultural Solar</h3>
                  <p className="text-gray-600 mb-2">Gujarat, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1611365892117-00d03937791b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Rooftop Solar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium mb-2">C&I</span>
                  <h3 className="text-xl font-semibold mb-2">2 MW Rooftop Solar</h3>
                  <p className="text-gray-600 mb-2">Maharashtra, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584277261846-c6a1672ed979?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="BESS Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-2">BESS</span>
                  <h3 className="text-xl font-semibold mb-2">5 MW / 10 MWh BESS</h3>
                  <p className="text-gray-600 mb-2">Karnataka, India</p>
                  <p className="text-gray-700">
                    Brief description of the project's key features, technologies used, and impacts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
              <h2 className="text-2xl font-bold mb-4">Project Details</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sr No</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>MWac</TableHead>
                    <TableHead>MWp</TableHead>
                    <TableHead>Discom</TableHead>
                    <TableHead>LoI</TableHead>
                    <TableHead>LoA</TableHead>
                    <TableHead>PPA</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectsData.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>{project.id}</TableCell>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.state}</TableCell>
                      <TableCell>{project.mwac}</TableCell>
                      <TableCell>{project.mwp}</TableCell>
                      <TableCell>{project.discom}</TableCell>
                      <TableCell>{project.loi}</TableCell>
                      <TableCell>{project.loa}</TableCell>
                      <TableCell>{project.ppa}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === "Commissioned" ? "bg-green-100 text-green-800" :
                          project.status === "Under Construction" ? "bg-yellow-100 text-yellow-800" :
                          "bg-blue-100 text-blue-800"
                        }`}>
                          {project.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-bold bg-gray-50">
                    <TableCell colSpan={3} className="text-right">Total:</TableCell>
                    <TableCell>{totalMwac.toFixed(2)}</TableCell>
                    <TableCell>{totalMwp.toFixed(2)}</TableCell>
                    <TableCell colSpan={5}></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
