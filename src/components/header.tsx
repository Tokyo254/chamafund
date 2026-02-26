import React, { useState } from 'react';
import { Search } from 'lucide-react';
import logo from '../assets/CF21.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'SERVICES', href: '#services' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'BLOG', href: '#blog' },
    { label: 'SAVE NOW', href: '#save' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff] shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Chamafund" 
              className="h-[50px] w-auto object-contain" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#626b7d] hover:text-[#193480] font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            
            {/* Search Icon */}
            <button className="p-2 hover:bg-[#f6f7fa] rounded-full transition-colors">
              <Search className="w-5 h-5 text-[#626b7d]" />
            </button>

            {/* Economic Empowerment Button */}
            <button className="bg-[#29a6c2] text-white px-6 py-2 rounded-md hover:bg-[#29aecb] transition-colors duration-200 font-medium">
              Economic Empowerment
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-[#626b7d] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#626b7d] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#626b7d]"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#626b7d] hover:text-[#193480] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4">
                <Search className="w-5 h-5 text-[#626b7d]" />
                <button className="bg-[#29a6c2] text-white px-6 py-2 rounded-md hover:bg-[#29aecb] transition-colors duration-200 font-medium">
                  Economic Empowerment
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;