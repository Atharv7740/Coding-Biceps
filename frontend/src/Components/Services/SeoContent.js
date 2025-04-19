import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, FileText, Globe, Megaphone, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "Keyword Research",
    description: "In-depth analysis of high-value search terms and user intent"
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Technical SEO",
    description: "Website optimization for better search engine performance"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Strategic content planning aligned with SEO goals"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "On-Page SEO",
    description: "Optimization of meta tags, headers, and content structure"
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Content Creation",
    description: "High-quality, SEO-optimized content that engages readers"
  }
];

const SeoContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
            >
              SEO & Content Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Drive organic traffic and engage your audience with strategic SEO and compelling content
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-navy-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300" />
                <div className="relative">
                  <div className="h-12 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to improve your search rankings?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Let's discuss how our SEO and content services can help you reach more customers organically.
            </p>
            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              Get Your SEO Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoContent; 