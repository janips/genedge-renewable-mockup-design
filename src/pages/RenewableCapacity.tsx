import React from 'react';
import Layout from '../components/Layout';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
const RenewableCapacity = () => {
  return <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Capacity Addition over the last 10 years across India</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-6 text-gray-700">
              India has witnessed a substantial increase in renewable energy capacity over the past decade, reflecting its commitment to sustainable energy and climate goals. According to the Ministry of New and Renewable Energy (MNRE), the country's installed renewable energy capacity (excluding large hydro) has grown from approximately 35.85 GW in March 2014 to about 167.71 GW by May 2025.
            </p>
            <p className="mb-8 text-gray-700">
              Over the past decade, India has made significant strides in expanding its renewable energy capacity, positioning itself as a global leader in clean energy adoption. The growth has been largely driven by proactive government policies, declining technology costs, and strong private sector participation.
            </p>
            <h3 className="text-xl font-semibold mb-4">Cumulative Installed Renewable Energy Capacity in India</h3>

            <div className="mb-8 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Sector</TableHead>
                    <TableHead>As of March 31, 2015 (MW)</TableHead>
                    <TableHead>As of May 31, 2025 (MW)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Solar Power</TableCell>
                    <TableCell>3,744</TableCell>
                    <TableCell>102,566</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wind Power</TableCell>
                    <TableCell>23,444</TableCell>
                    <TableCell>48,588</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Small Hydro Power</TableCell>
                    <TableCell>4,161</TableCell>
                    <TableCell>5,100</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Biomass Power/Cogeneration</TableCell>
                    <TableCell>4,418</TableCell>
                    <TableCell>10,652</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Waste-to-Energy</TableCell>
                    <TableCell>127</TableCell>
                    <TableCell>801</TableCell>
                  </TableRow>
                  <TableRow className="font-bold">
                    <TableCell>Total RE Capacity</TableCell>
                    <TableCell>35,896</TableCell>
                    <TableCell>167,709.53</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default RenewableCapacity;