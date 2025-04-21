import React from 'react';
import { Target, BarChart2, Users, Zap, PieChart, Award, Search, MessageSquare, TrendingUp, Globe, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import ScrollToTop from '../ScrollToTop';

const PaidAds = () => {
  const features = [
    {
      title: 'Conversion-Driven Strategy',
      description: "We don't focus on clicks. We focus on ROI.",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: 'Ad Creatives That Hook',
      description: 'Scroll-stopping visuals and thumb-stopping copy',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Real-Time Optimization',
      description: 'We tweak, test, and scale daily',
      icon: <BarChart2 className="w-6 h-6" />
    },
    {
      title: 'End-to-End Execution',
      description: 'From copy to creatives, we manage everything',
      icon: <Award className="w-6 h-6" />
    }
  ];

  const platforms = [
    {
      title: 'Google Search & Display Ads',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Facebook & Instagram Ads',
      icon: <Facebook className="w-6 h-6" />
    },
    {
      title: 'LinkedIn B2B Lead Gen',
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      title: 'YouTube Video Campaigns',
      icon: <Youtube className="w-6 h-6" />
    }
  ];

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
              Paid Ads That Actually{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Convert
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Not Just Burn Your Budget. High-Performance Google, Meta, LinkedIn & YouTube Ads Managed by Experts
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Tired of low ROI and generic ad campaigns? At Coding Biceps, we don't run ads. We build money machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#audit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-8 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Request Free Audit
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white py-4 px-8 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platforms We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Dominate
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{platform.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Paid Ads Services{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Include
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Competitor & Keyword Research',
              'Offer Design & Funnel Mapping',
              'Landing Page Copy + Design',
              'Campaign Setup & A/B Testing',
              'Retargeting & Sales Funnel Automation',
              'Detailed Reporting & Analytics'
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Excel In
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'eCommerce',
              'Real Estate',
              'Coaching & EdTech',
              'SaaS',
              'D2C Brands',
              'Service Businesses'
            ].map((industry, index) => (
              <span key={index} className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Coding Biceps
            </span>
            {' '}for Paid Ads?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
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
            {[
              '5X ROAS for a D2C brand in 21 days',
              '700+ Quality Leads for a Real Estate launch',
              '65% Drop in cost-per-lead for a B2B SaaS'
            ].map((result, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                  {result}
                </h3>
              </div>
            ))}
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
              Get a Free Paid Ads Audit
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Find out what's working, what's wasting your money, and how we'd fix it — for FREE.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Request Free Audit
              </a>
              <a
                href="#contact"
                className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                Book Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PaidAds; 