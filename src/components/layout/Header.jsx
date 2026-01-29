// components/Layout/Header.jsx
import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

// Nav items data
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Turnkey Projects', href: '/projects' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Mobile menu close function
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-lg z-50 shadow-lg">
      <nav className="container px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with animated gradient */}
          <div className="flex items-center space-x-2">
            <NavLink 
              to="/" 
              className="flex items-center space-x-2"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CT</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                CoatTech
              </span>
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group relative font-medium transition-all px-2 py-1 ${
                    isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    <span 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            ))}
            <NavLink to="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Get Quote
              </button>
            </NavLink>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu with animation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 animate-slideDown">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`
                }
                onClick={closeMobileMenu}
              >
                {({ isActive }) => (
                  <>
                    <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                      {item.name}
                    </span>
                    <ChevronRight 
                      size={16} 
                      className={isActive ? 'text-blue-600' : 'text-gray-400'} 
                    />
                  </>
                )}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={closeMobileMenu}>
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-medium mt-4">
                Get Quote
              </button>
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;