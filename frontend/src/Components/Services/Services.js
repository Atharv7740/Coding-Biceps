import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Code, Search, Target, Users, User } from 'lucide-react';

const services = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Strategy & Consulting",
    description: "Data-backed digital strategies tailored to your business goals, market position, and target audience.",
    path: "/services/strategy-consulting",
    color: "blue"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web & App Development",
    description: "Custom, responsive websites and applications built by experienced engineers for optimal performance.",
    path: "/services/web-development",
    color: "cyan"
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO & Content",
    description: "Strategic SEO implementation and compelling content creation that drives organic traffic and engagement.",
    path: "/services/seo-content",
    color: "indigo"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Paid Ads & Performance",
    description: "Results-focused digital advertising across platforms with transparent reporting and continuous optimization.",
    path: "/services/paid-ads",
    color: "blue"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Engineering Mentorship",
    description: "Expert guidance and training for your tech team from senior developers and engineers.",
    path: "/services/engineering-mentorship",
    color: "cyan"
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "Automation & CRM",
    description: "Custom workflow automation solutions and CRM implementation to streamline your business processes.",
    path: "/services/automation-crm",
    color: "indigo"
  }
];

const ServiceCard = ({ icon, title, description, path, color }) => {
  const gradientColors = {
    blue: 'bg-blue-600',
    cyan: 'bg-gradient-to-r from-blue-600 to-cyan-500',
    indigo: 'bg-gradient-to-r from-indigo-600 to-purple-500',
  };

  const borderColors = {
    blue: 'border-blue-600',
    cyan: 'border-cyan-500',
    indigo: 'border-indigo-500',
  };

  return (
    <Link 
      to={path}
      className={`block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 ${borderColors[color]}`}
    >
      <div className={`w-12 h-12 ${gradientColors[color]} text-white rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-blue-600 font-medium flex items-center gap-2 group">
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Services
            <span className="block mt-2 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions powered by skilled engineers and marketing strategists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 