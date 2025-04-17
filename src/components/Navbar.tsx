import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/AalCloudLogo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="AalCloud Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-brand-600 transition-colors">
              Products
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-600 transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-brand-600 transition-colors">
              About
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-brand-600 transition-colors">
              Careers
            </Link>
            <a href="mailto:contact@aalcloud.com" className="text-gray-700 hover:text-brand-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/careers"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <a
                href="mailto:contact@aalcloud.com"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-brand-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 