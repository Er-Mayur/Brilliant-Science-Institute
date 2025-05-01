import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; 

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check if the current link is active
  const isActive = (path) => location.pathname === path ? 'text-brilliant-purple font-bold' : 'font-medium hover:text-brilliant-blue transition-colors';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? 'bg-white/80 backdrop-blur shadow-sm py-4' : 'bg-white/80 backdrop-blur shadow-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./logo.png"
            alt="Brilliant Science Institute Logo"
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`${isActive('/')}`}>Home</Link>
          <Link to="/batches" className={`${isActive('/batches')}`}>Batches</Link>
          <Link to="/about" className={`${isActive('/about')}`}>About Us</Link>
          {/* <Link to="/faculty" className={`${isActive('/faculty')}`}>Faculty</Link> */}
          <Link to="/results" className={`${isActive('/results')}`}>Results</Link>
          <Link to="/contact" className={`${isActive('/contact')}`}>Contact</Link>
        </nav>

        <div className="hidden lg:flex space-x-4">
          {user ? (
            <>
              <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark">
                <Link to="/dashboard"><User className="mr-2 h-4 w-4" /> Dashboard</Link>
              </Button>
              <Button onClick={handleLogout} className="bg-brilliant-purple hover:bg-brilliant-purple-dark">
                Logout
              </Button>
            </>
          ) : (
            <Button asChild className="bg-brilliant-purple hover:bg-brilliant-purple-dark">
              <Link to="/login">Login</Link>
            </Button>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            {['/', '/batches', '/about', '/faculty', '/results', '/contact'].map((path, i) => (
              <Link
                key={i}
                to={path}
                className={`font-medium hover:text-brilliant-blue px-4 py-2 ${location.pathname === path ? 'text-brilliant-blue font-semibold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">
              {user ? (
                <>
                  <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark w-full">
                    <Link to="/dashboard"><User className="mr-2 h-4 w-4" /> Dashboard</Link>
                  </Button>
                  <Button onClick={handleLogout} className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <Button asChild className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
