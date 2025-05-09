import React from 'react';
import { Search, BarChart2, FileText, Globe, Megaphone, TrendingUp, Target, BookOpen, Link, ChartBar, ShoppingCart, Globe2, Rocket, MessageSquare } from 'lucide-react';
import ScrollToTop from '../ScrollToTop';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Keyword Strategy",
    description: "Deep keyword research and gap analysis"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Technical SEO",
    description: "Comprehensive website optimization"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Strategic content planning and clusters"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Creation",
    description: "High-quality content that converts"
  }
];

const services = [
  'Keyword Research & Strategy',
  'On-Page SEO Optimization',
  'Content Creation & Marketing',
  'Technical SEO Audits',
  'Link Building & PR',
  'Local SEO & GMB Optimization'
];

const industries = [
  'eCommerce',
  'SaaS & Technology',
  'Professional Services',
  'Healthcare',
  'Real Estate',
  'Education'
];

const results = [
  '300% Organic Traffic Growth in 6 Months',
  '45+ Top 3 Rankings for Target Keywords',
  '2.5X Lead Generation from Organic Search'
];

const SeoContent = () => {
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
              SEO & Content That{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Drives Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Rank Higher. Get Found. Convert More. Full-Stack SEO & Content Marketing That Actually Works.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Not just content for content's sake. We create SEO-driven content strategies that build authority and drive conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#audit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Get Free SEO Audit
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Why SEO + Content Still{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Wins
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              Search is where your buyers begin—and content is what keeps them engaged. At CodingBiceps, we blend deep keyword research, high-quality content, and technical SEO to build long-term authority and steady growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our SEO{' '}
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
            Our SEO & Content{' '}
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

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Excel In
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <span key={index} className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                {industry}
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
              How We Grew a SaaS Blog from 0 to 100K Monthly Visitors
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Through strategic keyword research, content clusters, and technical SEO optimization, we helped a B2B SaaS company achieve exponential organic growth.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              👉 Download Case Study
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="audit" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
        <div className="absolute inset-0 bg-grid-gray-100/5 bg-[size:20px_20px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Grow Your Organic Traffic?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a free, no-obligation SEO audit and discover untapped growth opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <input type="text" placeholder="Name" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="text" placeholder="Website" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <select className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400">
                <option value="">Monthly Traffic</option>
                <option value="0-1000">0-1,000</option>
                <option value="1000-10000">1,000-10,000</option>
                <option value="10000+">10,000+</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                Get My Free SEO Audit
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">FREE Download: "2024 SEO Playbook"</h2>
            <p className="text-gray-700 mb-6">30 Pages of Proven Growth Tactics</p>
            <p className="text-gray-600 mb-6">Everything we use to scale our clients to the top of search.</p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              📥 Download the PDF
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeoContent; 