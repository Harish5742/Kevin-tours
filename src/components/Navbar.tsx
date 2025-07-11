
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Travel Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm soft-shadow fixed w-full z-50 border-b border-green-200 dark:border-green-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-lg p-2 -m-2"
            aria-label="Kevin Tour & Travels - Go to homepage"
          >
            <Logo className="transition-transform duration-200" />
            <span className="font-semibold text-xl text-green-800 dark:text-green-300 ml-2 transition-colors duration-200">
              Kevin Tour & Travels
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4" role="navigation" aria-label="Main navigation">
            <div className="flex space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ${
                    isActive(item.path)
                      ? 'text-white bg-green-700 dark:bg-green-600'
                      : 'text-green-800 dark:text-green-300 hover:text-green-700 dark:hover:text-green-200 hover:bg-green-50 dark:hover:bg-green-900'
                  }`}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 rounded-lg p-2 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-green-200 dark:border-green-800 rounded-b-lg soft-shadow">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 ${
                    isActive(item.path)
                      ? 'text-white bg-green-700 dark:bg-green-600'
                      : 'text-green-800 dark:text-green-300 hover:text-green-700 dark:hover:text-green-200 hover:bg-green-50 dark:hover:bg-green-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.path) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
