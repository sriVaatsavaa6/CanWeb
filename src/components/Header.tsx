import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Ribbon } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'What Is Cancer?', path: '/what-is-cancer' },
    { name: 'Warning Signs', path: '/warning-signs' },
    { name: 'Prevention', path: '/prevention' },
    { name: 'Cancer Types', path: '/cancer-types' },
    { name: 'Myths & Facts', path: '/myths-facts' },
    { name: 'Help in India', path: '/help-in-india' },
    { name: 'Hospitals in India', path: '/hospitals-in-india' },
    { name: 'About Akshay', path: '/about-akshay' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Ribbon className="h-8 w-8 text-primary-600" />
            <span className="font-poppins font-bold text-xl md:text-2xl text-primary-700">
              Cancer Comes Silently
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${isActive 
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  block px-3 py-2 rounded-md text-base font-medium
                  ${isActive 
                    ? 'text-primary-700 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-100'
                  }
                `}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;