import React from 'react';
import { Lightbulb, Code, Search, Target, Users, User, Building2, GraduationCap, Leaf, Heart } from 'lucide-react';
import HeroVideo from '../../assets/HS video.mp4';

const Home = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.6) contrast(1.2)' }}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-blue-900/70"></div>
        </div>

        {/* Geometric Shapes with reduced opacity for video */}
        <div className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400/5 to-cyan-300/5 blur-xl"></div>
        <div className="absolute left-0 bottom-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-300/5 to-purple-400/5 blur-xl"></div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-8 relative z-10 pt-32 pb-20 md:py-36 lg:py-48">
          <div className="max-w-3xl md:max-w-2xl lg:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Elevate Your Digital Presence with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Expert Engineers
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-xl sm:max-w-2xl">
              We blend innovation, technical expertise, and strategic marketing to scale your brand and deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium text-center hover:shadow-glow transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Get a Free Strategy Session
              </a>
              <a
                href="#services"
                className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative inline-block">
              Our Tech-Driven Services
              <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-blue-600 transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions powered by skilled engineers and marketing strategists
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Lightbulb className="w-6 h-6" />}
              title="Strategy & Consulting"
              description="Data-backed digital strategies tailored to your business goals, market position, and target audience."
              color="blue"
            />
            <ServiceCard
              icon={<Code className="w-6 h-6" />}
              title="Web & App Development"
              description="Custom, responsive websites and applications built by experienced engineers for optimal performance."
              color="cyan"
            />
            <ServiceCard
              icon={<Search className="w-6 h-6" />}
              title="SEO & Content"
              description="Strategic SEO implementation and compelling content creation that drives organic traffic and engagement."
              color="indigo"
            />
            <ServiceCard
              icon={<Target className="w-6 h-6" />}
              title="Paid Ads & Performance"
              description="Results-focused digital advertising across platforms with transparent reporting and continuous optimization."
              color="blue"
            />
            <ServiceCard
              icon={<Users className="w-6 h-6" />}
              title="Engineering Mentorship"
              description="Expert guidance and training for your tech team from senior developers and engineers."
              color="cyan"
            />
            <ServiceCard
              icon={<User className="w-6 h-6" />}
              title="Automation & CRM"
              description="Custom workflow automation solutions and CRM implementation to streamline your business processes."
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 relative inline-block">
              Industries We Serve
              <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform -translate-x-1/2 translate-y-4"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized experience across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              icon={<Building2 className="w-16 h-16" />}
              bgColor="from-cyan-50 to-blue-100"
              iconColor="text-blue-600"
              title="E-commerce & D2C"
              description="Direct-to-consumer brands and online retailers"
            />
            <IndustryCard
              icon={<Code className="w-16 h-16" />}
              bgColor="from-blue-50 to-indigo-100"
              iconColor="text-indigo-600"
              title="SaaS & B2B Tech"
              description="Software companies and tech-driven businesses"
            />
            <IndustryCard
              icon={<Building2 className="w-16 h-16" />}
              bgColor="from-cyan-50 to-blue-100"
              iconColor="text-blue-600"
              title="Real Estate & PropTech"
              description="Property developers and real estate technology"
            />
            <IndustryCard
              icon={<GraduationCap className="w-16 h-16" />}
              bgColor="from-blue-50 to-indigo-100"
              iconColor="text-indigo-600"
              title="EdTech & Training"
              description="Educational platforms and learning solutions"
            />
            <IndustryCard
              icon={<Leaf className="w-16 h-16" />}
              bgColor="from-green-50 to-cyan-100"
              iconColor="text-green-600"
              title="EV & Sustainability"
              description="Green tech and environmental solutions"
            />
            <IndustryCard
              icon={<Heart className="w-16 h-16" />}
              bgColor="from-cyan-50 to-blue-100"
              iconColor="text-cyan-600"
              title="Health & Wellness"
              description="Fitness, nutrition, and healthcare technology"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get our comprehensive 2025 Digital Marketing & Technology Blueprint
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-600 py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Download Free Guide
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

// Service Card Component
const ServiceCard = ({ icon, title, description, color }) => {
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

  // Determine if this is the Paid Ads card
  const isPaidAdsCard = title === "Paid Ads & Performance";
  const linkHref = isPaidAdsCard ? "/paid-ads" : "#";

  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border-t-4 ${borderColors[color]}`}>
      <div className={`w-12 h-12 ${gradientColors[color]} text-white rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={linkHref}
        className="text-blue-600 font-medium flex items-center gap-2 group"
      >
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </a>
    </div>
  );
};

// Updated Industry Card Component
const IndustryCard = ({ icon, bgColor, iconColor, title, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className={`h-40 bg-gradient-to-br ${bgColor} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <div className={`${iconColor} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Home; 