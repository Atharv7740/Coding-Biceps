import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '#industries' },
    { name: 'About Us', path: '#about-us' },
    { name: 'Blog', path: '#blog' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group relative z-10">
            <div className="relative">
              <i className="fas fa-code text-2xl text-blue-500 group-hover:text-blue-600 transition-colors"></i>
              <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-lg group-hover:bg-blue-600/30 transition-colors opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              CodingBiceps
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block relative z-10">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <a 
                      href={item.path}
                      className={`text-${isScrolled ? 'gray-700' : 'white'} hover:text-blue-500 transition-all duration-300 relative group`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`text-${isScrolled ? 'gray-700' : 'white'} hover:text-blue-500 transition-all duration-300 relative group ${
                        location.pathname === item.path ? 'text-blue-500' : ''
                      }`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4 relative z-10">
            <a 
              href="https://wa.me/1234567890" 
              className={`inline-flex items-center px-4 py-2 border-2 rounded-lg transition-all duration-300
                ${isScrolled 
                  ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-blue-600'
                }`}
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden relative z-10 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 focus:outline-none transition-colors`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-x-0 top-[72px] ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
          <nav className="mx-6 mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4">
            <ul className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('#') ? (
                    <a
                      href={item.path}
                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all ${
                        location.pathname === item.path ? 'text-blue-600 bg-blue-50' : ''
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-4 mt-6 p-4 border-t border-gray-100">
              <a 
                href="https://wa.me/1234567890" 
                className="inline-flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-glow transition-all duration-300 text-center"
              >
                Book Free Call
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 