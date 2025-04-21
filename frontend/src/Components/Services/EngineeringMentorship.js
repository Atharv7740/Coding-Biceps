import React from 'react';
import { Code, BookOpen, Users, Zap, Terminal, GitBranch, Shield, Cloud, Database, Cpu, Layout } from 'lucide-react';
import ScrollToTop from '../ScrollToTop';

const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Code Review & Best Practices",
    description: "Learn industry-standard coding practices and receive expert code reviews"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Technical Learning Path",
    description: "Structured learning paths tailored to your career goals"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Career Guidance",
    description: "Personalized career advice and industry insights"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Project Mentoring",
    description: "Guidance on real-world projects and technical challenges"
  }
];

const services = [
  'One-on-One Mentoring Sessions',
  'Code Review & Feedback',
  'Technical Interview Preparation',
  'Project Architecture Guidance',
  'Career Path Planning',
  'Technology Stack Selection'
];

const technologies = [
  'JavaScript/TypeScript',
  'React/Next.js',
  'Node.js',
  'Python',
  'Java',
  'Cloud Technologies'
];

const results = [
  '90% Success Rate in Technical Interviews',
  '50% Faster Career Growth',
  '3X More Confident in Technical Skills'
];

const EngineeringMentorship = () => {
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
              Engineering Mentorship That{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Accelerates Growth
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Personalized Guidance for Your Engineering Career
            </p>
            <p className="text-lg text-gray-400 mb-12">
              From code reviews to career advice, our mentorship program helps engineers at all levels grow their skills and advance their careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                Book Free Consultation
              </a>
              <a
                href="#case-studies"
                className="border-2 border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mentorship Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">
              Why Engineering Mentorship{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-gray-700 text-lg">
              In the fast-evolving tech industry, having a mentor can significantly accelerate your learning curve and career growth. Our mentorship program provides personalized guidance, helping you navigate technical challenges and career decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Mentorship{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Approach
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
            Our Mentorship{' '}
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technologies We{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Mentor
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300">
                {tech}
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
            <h2 className="text-3xl font-bold mb-6">Featured Success Story</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              From Junior to Senior in 12 Months
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Through our mentorship program, a junior developer accelerated their career growth, landing a senior position within a year while improving their technical skills and confidence.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              👉 Read Success Story
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
              Ready to Accelerate Your Engineering Career?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a free consultation and discover how our mentorship program can help you grow.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <input type="text" placeholder="Name" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="email" placeholder="Email" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <input type="text" placeholder="Current Role" className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400" />
              <select className="bg-navy-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400">
                <option value="">Experience Level</option>
                <option value="junior">Junior Developer</option>
                <option value="mid">Mid-Level Developer</option>
                <option value="senior">Senior Developer</option>
                <option value="lead">Tech Lead</option>
              </select>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                Book Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Program Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EngineeringMentorship; 