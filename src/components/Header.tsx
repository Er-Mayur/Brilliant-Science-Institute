
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-poppins font-bold text-2xl lg:text-3xl">
            <span className="text-brilliant-blue-dark">Brilliant</span>
            <span className="text-brilliant-purple">Science</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="font-medium hover:text-brilliant-blue transition-colors">Home</a>
          <a href="#programs" className="font-medium hover:text-brilliant-blue transition-colors">Programs</a>
          <a href="#about" className="font-medium hover:text-brilliant-blue transition-colors">About Us</a>
          <a href="#faculty" className="font-medium hover:text-brilliant-blue transition-colors">Our Faculty</a>
          <a href="#testimonials" className="font-medium hover:text-brilliant-blue transition-colors">Testimonials</a>
          <a href="#contact" className="font-medium hover:text-brilliant-blue transition-colors">Contact</a>
        </nav>
        
        <div className="hidden lg:block">
          <Button className="bg-brilliant-purple hover:bg-brilliant-purple-dark">Enroll Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a href="#" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#programs" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Programs</a>
            <a href="#about" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#faculty" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Our Faculty</a>
            <a href="#testimonials" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="#contact" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">Enroll Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
