import React from 'react';
import { TrendingUp, Lock, Globe, Award, Clock, BarChart } from 'lucide-react';

const Content: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Investment",
      description: "Long-term investment strategies focused on sustainable growth and wealth accumulation.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Savings",
      description: "Protected savings plans with competitive returns and flexible withdrawal options.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Opportunities",
      description: "Access to international markets and diversified investment portfolios.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Professional financial advice and regular portfolio reviews.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Automated Investing",
      description: "Set-it-and-forget-it investment plans with automatic contributions.",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Performance Tracking",
      description: "Real-time tracking and detailed performance reports.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-4">
            Our Services
          </h2>
          <p className="text-[#626b7d] max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet diverse needs 
            and help you achieve your financial goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-[#dadada] hover:border-[#29a6c2] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-[#29a6c2] mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3e3e3e] mb-3">
                {service.title}
              </h3>
              <p className="text-[#626b7d]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#29a6c2] to-[#29aecb] rounded-2xl p-8 md:p-12 text-white">
          <div className="md:flex items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Financial Journey?
              </h3>
              <p className="opacity-90">
                Join thousands of satisfied members who have transformed their 
                financial future with Chamafund.
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-[#29a6c2] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;