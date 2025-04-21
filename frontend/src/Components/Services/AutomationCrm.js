import React from 'react';
import { Settings, Users, Workflow, BarChart, MessageSquare, Zap, Cloud, Database, Shield, Terminal, GitBranch } from 'lucide-react';
import ScrollToTop from '../ScrollToTop';

const features = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent automation"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "CRM Implementation",
    description: "Custom CRM solutions tailored to your business needs"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Customer Communication",
    description: "Automated customer engagement and follow-up systems"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics & Reporting",
    description: "Comprehensive reporting and performance tracking"
  }
];

const services = [
  'CRM Implementation & Customization',
  'Workflow Automation',
  'Email Marketing Automation',
  'Customer Support Automation',
  'Sales Pipeline Automation',
  'Data Integration & Migration'
];

const platforms = [
  'HubSpot',
  'Salesforce',
  'Zoho',
  'Microsoft Dynamics',
  'Pipedrive',
  'Custom Solutions'
];

const results = [
  '40% Increase in Sales Efficiency',
  '50% Reduction in Manual Tasks',
  '3X Faster Customer Response Times'
];

const AutomationCrm = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 bg-gray-900 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-grid-gray-100/5 bg-[size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Automation & CRM That{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Streamlines Operations
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform Your Business Processes with Intelligent Automation
            </p>
            <p className="text-lg text-gray-400 mb-12">
              From CRM implementation to workflow automation, we help businesses streamline operations, enhance customer relationships, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </a>
              <a
                href="#case-studies"
                className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Automation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Why Automation & CRM{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              In today's fast-paced business environment, automation and CRM systems are essential for maintaining efficiency and building strong customer relationships. Our solutions help businesses automate repetitive tasks, streamline workflows, and provide better customer experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Automation{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Automation & CRM{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platforms We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <span key={index} className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                {platform}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Results That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                  {result}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Featured Case Study</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              How We Automated a B2B Sales Process
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Through CRM implementation and workflow automation, we helped a B2B company reduce manual tasks by 50% and increase sales efficiency by 40%.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              👉 View Case Study
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-grid-gray-100/5 bg-[size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Automate Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a free consultation and discover how we can help you streamline your operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <input type="text" placeholder="Name" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="text" placeholder="Company" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <select className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400">
                <option value="">Current CRM</option>
                <option value="none">No CRM</option>
                <option value="hubspot">HubSpot</option>
                <option value="salesforce">Salesforce</option>
                <option value="zoho">Zoho</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AutomationCrm; 