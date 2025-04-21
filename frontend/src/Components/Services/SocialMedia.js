import React from 'react';
import { Instagram, Youtube, Twitter, Facebook, Linkedin, TrendingUp, Users, MessageSquare, BarChart2, Zap, Video, Hash, Heart, Share2 } from 'lucide-react';
import ScrollToTop from '../ScrollToTop';

const features = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "Viral Content Creation",
    description: "Reels, Shorts & Memes that catch fire"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Trend Hijacking",
    description: "Real-time engagement with trending topics"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community Building",
    description: "Turn followers into loyal customers"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Engagement Management",
    description: "Active community interaction & growth"
  }
];

const services = [
  'Full Account Setup & Branding',
  'Monthly Content Calendar + Trend Planning',
  'Reel + Story + Post Creation',
  'Hashtag & Caption Strategy',
  'Platform Optimization & Insights Reports',
  'Comment & DM Engagement Handling'
];

const platforms = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />
  },
  {
    name: 'YouTube',
    icon: <Youtube className="w-6 h-6" />
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-6 h-6" />
  },
  {
    name: 'X (Twitter)',
    icon: <Twitter className="w-6 h-6" />
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />
  }
];

const results = [
  '+180K Organic Reach in 7 days',
  '1.2M Views on Viral Reel Series',
  '3X Lead Generation in 30 Days'
];

const SocialMedia = () => {
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
              Go Viral or{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Go Home
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We Don't Just Manage Social Media. We Make It Explode.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              In a world ruled by reels, trends, and thumb-stopping content — Brands that don't go viral, get forgotten. At Coding Biceps, we engineer virality with creative that spreads like wildfire.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#audit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 px-8 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Book Free Social Audit
              </a>
              <a
                href="#case-studies"
                className="border-2 border-white text-white py-4 px-8 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Social Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Why Social Media{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              In today's digital landscape, social media isn't just about posting content—it's about creating moments that capture attention and drive action. We blend trend-driven creativity with data-fueled strategy to make your brand impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Social Media{' '}
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
            What You{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Get
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
              Dominate
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                {platform.icon}
                <span>{platform.name}</span>
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
            <h2 className="text-3xl font-bold mb-6">Featured Success Story</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              How We Generated 1.2M Views for a Local Brand
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Through strategic content planning and trend hijacking, we helped a local brand go viral with a series of reels that generated massive engagement and real business results.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              👉 View Success Story
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
              Let's Make You the Brand Everyone Talks About
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Only 3 Onboardings Per Month. Reserve Before It's Gone.
            </p>
            <p className="text-sm text-cyan-400 mb-8">
              Limited Slots Available
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <input type="text" placeholder="Name" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="text" placeholder="Brand/Company" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <select className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400">
                <option value="">Current Social Following</option>
                <option value="0-1000">0-1,000</option>
                <option value="1000-10000">1,000-10,000</option>
                <option value="10000-50000">10,000-50,000</option>
                <option value="50000+">50,000+</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                Get Free Social Audit
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

export default SocialMedia; 