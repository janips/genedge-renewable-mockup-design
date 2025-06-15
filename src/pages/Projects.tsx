import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const projectsData = [{
    id: 1,
    name: "Devki Galol",
    state: "GJ",
    mwac: 2,
    mwp: 2.4,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Commissioned"
  }, {
    id: 2,
    name: "Mendapara",
    state: "GJ",
    mwac: 2,
    mwp: 2.4,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Commissioned"
  }, {
    id: 3,
    name: "Mandodara",
    state: "GJ",
    mwac: 2,
    mwp: 2.4,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Commissioned"
  }, {
    id: 4,
    name: "Kanja",
    state: "GJ",
    mwac: 4,
    mwp: 4.8,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Under Construction"
  }, {
    id: 5,
    name: "Mandawri",
    state: "RJ",
    mwac: 2.25,
    mwp: 2.25,
    discom: "AVVNL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Under Construction"
  }, {
    id: 6,
    name: "Jiva ka Kheda",
    state: "RJ",
    mwac: 2.54,
    mwp: 2.54,
    discom: "AVVNL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Under Construction"
  }, {
    id: 7,
    name: "Sudri",
    state: "RJ",
    mwac: 2.33,
    mwp: 2.33,
    discom: "AVVNL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Yes",
    status: "Under Construction"
  }, {
    id: 8,
    name: "Sheradi",
    state: "GJ",
    mwac: 2,
    mwp: 2.2,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 9,
    name: "Satapar",
    state: "GJ",
    mwac: 2,
    mwp: 2.2,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 10,
    name: "Sarpdad",
    state: "GJ",
    mwac: 2,
    mwp: 2.2,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 11,
    name: "Gokhlana",
    state: "GJ",
    mwac: 1.5,
    mwp: 1.65,
    discom: "PGVCL",
    loi: "Yes",
    loa: "Yes",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 12,
    name: "GUVNL - 243 MW",
    state: "GJ",
    mwac: 243,
    mwp: 340.2,
    discom: "GUVNL",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 13,
    name: "Khanedi",
    state: "RJ",
    mwac: 2,
    mwp: 2.2,
    discom: "Jodhpur",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 14,
    name: "Mandwa",
    state: "RJ",
    mwac: 2,
    mwp: 2.2,
    discom: "Jodhpur",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 15,
    name: "Dhawali",
    state: "RJ",
    mwac: 2,
    mwp: 2.2,
    discom: "Jodhpur",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 16,
    name: "Gulabganj",
    state: "RJ",
    mwac: 2,
    mwp: 2.2,
    discom: "Jodhpur",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }, {
    id: 17,
    name: "Sangwara",
    state: "RJ",
    mwac: 2,
    mwp: 2.2,
    discom: "Jodhpur",
    loi: "Yes",
    loa: "Awaited",
    ppa: "Awaited",
    status: "Under Development"
  }];
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
  return <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Project Portfolio</h1>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <p className="text-gray-700 mb-6">At Genedge Renewables, We’re already making a measurable impact. Our early projects reflect our commitment to accessible, reliable, and sustainable energy. Each project is a step toward a cleaner, more resilient energy future—and a proof of concept for what we’re building at scale.</p>
              
              
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
                  {projectsData.map(project => <TableRow key={project.id}>
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
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === "Commissioned" ? "bg-green-100 text-green-800" : project.status === "Under Construction" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                          {project.status}
                        </span>
                      </TableCell>
                    </TableRow>)}
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
    </Layout>;
};
export default Projects;