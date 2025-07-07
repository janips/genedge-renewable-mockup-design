
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const RenewablePolicies = () => {
  return (
    <Layout>
      <SEO 
        title="Key Renewable Energy Policies & Regulations" 
        description="Comprehensive overview of India's renewable energy policies including JNNSM, Green Energy Open Access Rules, RPO, PLI schemes, and state-specific policies driving clean energy growth."
        keywords="renewable energy policies India, JNNSM, Green Energy Open Access, RPO, PLI scheme, solar policy, wind policy"
        url="/renewable-sector/policies"
      />
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Key Policies & Regulations</h1>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="mb-8 text-gray-700">
              India is undertaking a massive transition to clean energy to meet its climate goals and ensure energy security. The Government of India, through the Ministry of New and Renewable Energy (MNRE), has developed a comprehensive framework of policies and regulations to promote the development, deployment, and integration of renewable energy sources across the country.<br/><br/>
              The National Electricity Policy (Draft 2021) aims to facilitate large-scale integration of renewable energy into the grid. It encourages the development of smart grids, energy storage systems, and Time-of-Day (ToD) tariffs. The policy also promotes round-the-clock (RTC) renewable energy supply by integrating storage technologies with intermittent renewable sources.<br/><br/>
              Launched in 2010, the Jawaharlal Nehru National Solar Mission (JNNSM) forms the cornerstone of India's solar energy push. Initially targeting 100 GW of solar capacity by 2022, the mission has now expanded to 280 GW by 2030. Major schemes under JNNSM include the Solar Park Scheme, CPSU Scheme Phase II, Rooftop Solar Programme (Phases I & II), Viability Gap Funding (VGF), and PM-KUSUM for agricultural solarization.<br/><br/>
              The Green Energy Open Access Rules, first notified in 2022 and updated in 2023, aim to facilitate easier access to renewable energy for commercial and industrial consumers with a sanctioned load of 100 kW or more. These rules ensure faster application processing (within 15 days), allow banking of energy, and exempt open access consumers from additional surcharges.<br/><br/>
              Renewable Purchase Obligations (RPOs) mandate electricity distribution companies (DISCOMs), open access consumers, and captive power producers to procure a fixed percentage of their electricity from renewable sources. Energy Storage Obligations (ESOs), introduced from FY 2023–24, complement RPOs by mandating the inclusion of energy storage systems. The trajectory for both has been notified up to 2030.<br/><br/>
              Tariff-based competitive bidding guidelines issued by MNRE and CERC ensure transparency and efficiency in the procurement of renewable energy. These guidelines apply to solar, wind, hybrid, RTC RE, and RE+Storage projects, fostering fair price discovery and standardization across the sector.<br/><br/>
              The National Green Hydrogen Mission, launched in 2023, sets a target of producing 5 million metric tonnes of green hydrogen annually by 2030. The mission includes financial incentives under the SIGHT programme, promotes domestic manufacturing of electrolysers, and ensures open access and grid connectivity for hydrogen projects.<br/><br/>
              To encourage domestic manufacturing, the government launched the Production Linked Incentive (PLI) Scheme for solar PV modules with a total outlay of ₹24,000 crore. The scheme promotes vertical integration in solar manufacturing and aims to reduce dependence on imports, aligning with the Aatmanirbhar Bharat initiative.<br/><br/>
              Green Energy Corridor (GEC) projects are critical for integrating renewable energy into the grid. With two phases implemented, the project targets over 20,000 circuit kilometers of transmission lines. Phase II includes central financial assistance (CFA) of up to 33% for transmission infrastructure in renewable-rich states.<br/><br/>
              Several Indian states have developed their own renewable energy policies, supporting solar, wind, hybrid, and rooftop installations. These policies address local needs and provide incentives related to land, grid connectivity, net metering, and financing. Leading states include Gujarat, Rajasthan, Tamil Nadu, Karnataka, and Maharashtra.<br/><br/>
              India's renewable energy ecosystem is underpinned by a robust and evolving policy framework. With ambitious targets such as achieving 500 GW of non-fossil capacity by 2030, the sector is positioned to drive long-term sustainability, attract private investment, and establish India as a global clean energy leader.
            </p>
            <div className="space-y-6">
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RenewablePolicies;
