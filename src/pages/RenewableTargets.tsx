import React from 'react';
import Layout from '../components/Layout';
const RenewableTargets = () => {
  return <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Targets by the Government of India</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">

            <p className="mb-8 text-gray-700">
              India has established ambitious goals to transition towards a sustainable energy future, aligning with its commitments under the Paris Agreement and subsequent national policies.
            </p>
            <h3 className="text-xl font-semibold mb-4">Key Renewable Energy Targets:</h3>
            <ul className="mb-6 list-disc pl-8 text-gray-700 space-y-2">
              <li>
                <span className="font-semibold">500 GW of Non-Fossil Fuel Capacity by 2030:</span>
                {" "}India aims to achieve 500 gigawatts (GW) of non-fossil fuel-based power capacity by 2030, encompassing solar, wind, hydro, and nuclear energy sources.
              </li>
              <li>
                <span className="font-semibold">50% Share of Non-Fossil Fuel-Based Electricity by 2030:</span>
                {" "}The country targets that 50% of its cumulative electric power installed capacity will come from non-fossil fuel-based energy resources by 2030.
              </li>
              <li>
                <span className="font-semibold">Net-Zero Emissions by 2070:</span>
                {" "}India has committed to achieving net-zero carbon emissions by 2070, as announced at the COP26 summit.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Progress and Initiatives:</h3>
            <ul className="mb-6 list-disc pl-8 text-gray-700 space-y-2">
              <li>
                As of October 2024, India's total renewable energy-based electricity generation capacity stands at 203.18 GW, accounting for more than 46.3% of the country's total installed capacity.
              </li>
              <li>
                The government has introduced various schemes and policies to support these targets, including the PM-KUSUM scheme for solarization of agriculture, Production Linked Incentive (PLI) schemes for manufacturing solar modules, and guidelines for Battery Energy Storage Systems (BESS).
              </li>
              <li>
                Financial institutions have pledged significant investments to support renewable energy projects, with public sector banks committing ₹10 lakh crore towards achieving the 500 GW target.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>;
};
export default RenewableTargets;