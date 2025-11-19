import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/blog', label: 'Blog' },
    { path: '/corporate', label: 'Planes Corporativos' },
    { path: '/contact', label: 'Contacto' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md py-5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center transform hover:scale-105 transition-transform duration-200">
            <Logo size="small" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Comenzar Proyecto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t mt-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                location.pathname === item.path
                  ? 'text-primary bg-blue-50'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block bg-primary hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition text-center mt-2"
            onClick={() => setIsOpen(false)}
          >
            Comenzar Proyecto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;