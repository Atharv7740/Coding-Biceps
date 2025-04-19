import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-20 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
        <div className="absolute inset-0 bg-grid-gray-100/5 bg-[size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <i className="fas fa-code text-2xl text-blue-400 group-hover:text-blue-300 transition-colors"></i>
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-400/30 transition-colors opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                CodingBiceps
              </span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge technology solutions and innovative digital strategies.
            </p>
            <div className="flex space-x-5">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="relative">
                    <i className={`fab fa-${social} text-xl`}></i>
                    <div className="absolute -inset-2 bg-blue-500/0 rounded-full blur-md group-hover:bg-blue-400/20 transition-all duration-300"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
            </h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Industries', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
            </h3>
            <ul className="space-y-4">
              {[
                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'UI/UX Design',
                'Digital Marketing',
                'IT Consulting'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 relative inline-block">
              Get In Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  123 Business Avenue, Tech City, 12345
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <i className="fas fa-phone text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +1 234 567 8900
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <i className="fas fa-envelope text-blue-400 group-hover:scale-110 transition-transform duration-300"></i>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  info@codingbiceps.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CodingBiceps. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy) => (
                <a 
                  key={policy}
                  href="#" 
                  className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
                >
                  {policy}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 