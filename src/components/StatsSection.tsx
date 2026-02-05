import React from 'react';
import { Sun, Wind, Users, Award, MapPin } from 'lucide-react';
const StatsSection: React.FC = () => {
  const stats = [{
    icon: <Sun className="h-10 w-10 text-genedge-orange" />,
    value: "400+",
    label: "MWp Solar Capacity"
  }, {
    icon: <MapPin className="h-10 w-10 text-genedge-green" />,
    value: "16+",
    label: "Sites spread across Gujarat & Rajasthan"
  }, {
    icon: <Users className="h-10 w-10 text-blue-500" />,
    value: "35+",
    label: "Years of Superior Eng. & Construction Management Experience."
  }, {
    icon: <Award className="h-10 w-10 text-purple-500" />,
    value: "1 GW+",
    label: "Targeted Diversified Portfolio"
  }];
  return <section className="bg-white py-[20px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => <div key={index} className="bg-gray-50 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white shadow-sm">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default StatsSection;
