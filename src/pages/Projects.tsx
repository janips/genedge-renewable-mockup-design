
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PageBanner from '../components/PageBanner';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Updated project data per user table (27 projects)
  const projectsData = [
    { id: 1, name: "Devki Galol", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", ppa: "Yes", status: "Commissioned" },
    { id: 2, name: "Mendapara", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", ppa: "Yes", status: "Commissioned" },
    { id: 3, name: "Mandodara", state: "GJ", mwac: 2, mwp: 2.4, discom: "PGVCL", ppa: "Yes", status: "Commissioned" },
    { id: 4, name: "Kanja", state: "GJ", mwac: 4, mwp: 4.8, discom: "PGVCL", ppa: "Yes", status: "Commissioned" },
    { id: 5, name: "Mandawri", state: "RJ", mwac: 2.25, mwp: 2.25, discom: "AVVNL", ppa: "Yes", status: "Commissioned" },
    { id: 6, name: "Jiva ka Kheda", state: "RJ", mwac: 2.54, mwp: 2.74, discom: "AVVNL", ppa: "Yes", status: "Commissioned" },
    { id: 7, name: "Sudri", state: "RJ", mwac: 2.33, mwp: 2.61, discom: "AVVNL", ppa: "Yes", status: "Commissioned" },
    { id: 8, name: "GUVNL", state: "GJ", mwac: 243, mwp: 340.2, discom: "GUVNL", ppa: "Yes", status: "Under Development" },
    { id: 9, name: "Bhujela", state: "RJ", mwac: 2, mwp: 2, discom: "Jodhpur", ppa: "Yes", status: "Under Construction" },
    { id: 10, name: "Anadara", state: "RJ", mwac: 4, mwp: 4, discom: "Jodhpur", ppa: "Yes", status: "Under Construction" },
    { id: 11, name: "Padeev", state: "RJ", mwac: 2, mwp: 2, discom: "Jodhpur", ppa: "Yes", status: "Under Construction" },
    { id: 12, name: "Alwara", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 13, name: "Borwada", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 14, name: "Kauber", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 15, name: "Elana", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 16, name: "Bhadrai Pumping Station", state: "RJ", mwac: 1.5, mwp: 1.95, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 17, name: "Chorau lata", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 18, name: "Khaprol ki Dhani", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 19, name: "Otwara", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 20, name: "Sangana", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 21, name: "Veerana", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 22, name: "NCP- Dabli", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 23, name: "Dabli (Plant-1)", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 24, name: "Dabli (Plant-2)", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 25, name: "Mandar", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 26, name: "Harshwara", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" },
    { id: 27, name: "Moruwara", state: "RJ", mwac: 2, mwp: 2.6, discom: "Jodhpur", ppa: "Yes", status: "Under Development" }
  ];

  // Totals from spreadsheet
  const totalMwac = 299.62;
  const totalMwp = 408.74;

  return (
    <Layout>
      <PageBanner 
        title="Our Project Portfolio"
        subtitle="Delivering Clean Energy Solutions Across India"
        backgroundImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-10">
              <p className="text-gray-700 leading-relaxed text-center">
                At Genedge Renewables, We're already making a measurable impact. Our early projects reflect our commitment to accessible, reliable, and sustainable energy. Each project is a step toward a cleaner, more resilient energy future—and a proof of concept for what we're building at scale.
              </p>
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
                    <TableHead>PPA</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectsData.map(project => (
                    <TableRow key={project.id}>
                      <TableCell>{project.id}</TableCell>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>{project.state}</TableCell>
                      <TableCell>{project.mwac}</TableCell>
                      <TableCell>{project.mwp}</TableCell>
                      <TableCell>{project.discom}</TableCell>
                      <TableCell>{project.ppa}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === "Commissioned"
                            ? "bg-green-100 text-green-800"
                            : project.status === "Under Construction"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {project.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-bold bg-gray-50">
                    <TableCell colSpan={3} className="text-right">Total:</TableCell>
                    <TableCell>{totalMwac}</TableCell>
                    <TableCell>{totalMwp}</TableCell>
                    <TableCell colSpan={3}></TableCell>
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
