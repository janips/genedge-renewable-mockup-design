
import React from 'react';
import { Sun, Wind, Users, Award } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <Sun className="h-10 w-10 text-genedge-orange" />,
      value: "200+",
      label: "MW Solar Capacity",
    },
    {
      icon: <Wind className="h-10 w-10 text-genedge-green" />,
      value: "100+",
      label: "MW Wind Projects",
    },
    {
      icon: <Users className="h-10 w-10 text-blue-500" />,
      value: "500+",
      label: "Farmers Empowered",
    },
    {
      icon: <Award className="h-10 w-10 text-purple-500" />,
      value: "10+",
      label: "Years Experience",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-white shadow-sm">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
