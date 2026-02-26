import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Community Focused",
      description: "We bring people together to pool resources and support each other's financial growth through collective decision-making.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Investments",
      description: "Our members benefit from carefully selected investment opportunities with long-term growth potential.",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure & Transparent",
      description: "All investments are managed with full transparency and security measures to protect our members' interests.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#f6f7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3e3e3e] mb-4">
            About Chamafund
          </h2>
          <p className="text-[#626b7d] max-w-3xl mx-auto">
            We are revolutionizing financial empowerment by creating accessible investment opportunities 
            for communities. Our model combines collective wisdom with professional financial management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-[0px_3px_6px_#00000029] hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-[#29a6c2] mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#3e3e3e] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#626b7d]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-[0px_3px_6px_#00000029] overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-[#3e3e3e] mb-6">
                Our Mission & Vision
              </h3>
              <p className="text-[#626b7d] mb-6">
                At Chamafund, we envision a world where everyone has access to 
                financial tools and opportunities regardless of their background 
                or starting point.
              </p>
              <ul className="space-y-4">
                {[
                  "Democratizing investment access",
                  "Fostering financial literacy",
                  "Building sustainable wealth",
                  "Creating community impact"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#626b7d]">
                    <div className="w-2 h-2 bg-[#29a6c2] rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#29a6c2]/10 to-[#193480]/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#193480] mb-2">10,000+</div>
                <div className="text-[#626b7d]">Active Members</div>
                <div className="border-t border-[#dadada] my-6"></div>
                <div className="text-4xl font-bold text-[#29a6c2] mb-2">$50M+</div>
                <div className="text-[#626b7d]">Assets Under Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;