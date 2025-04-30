
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // adjust the path

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // cleanup on unmount
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);

    navigate('/login');
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 shadow-sm z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./logo.png" // Adjust the path to your logo
            alt="Brilliant Science Institute Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-brilliant-blue transition-colors">Home</Link>
          <Link to="/batches" className="font-medium hover:text-brilliant-blue transition-colors">Batches</Link>
          <Link to="/about" className="font-medium hover:text-brilliant-blue transition-colors">About Us</Link>
          <Link to="/faculty" className="font-medium hover:text-brilliant-blue transition-colors">Faculty</Link>
          <Link to="/results" className="font-medium hover:text-brilliant-blue transition-colors">Results</Link>
          <Link to="/contact" className="font-medium hover:text-brilliant-blue transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:flex space-x-4">
          {user ? (
            <>
              <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark">
                <Link to="/dashboard"><User className="mr-2 h-4 w-4" /> Dashboard</Link>
              </Button>
              <Button onClick={() => handleLogout()} className="bg-brilliant-purple hover:bg-brilliant-purple-dark">
                Logout
              </Button>
            </>
          ) : (
            <>
              {/* <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark">
                <Link to="/register">Register</Link>
              </Button> */}
              <Button asChild className="bg-brilliant-purple hover:bg-brilliant-purple-dark">
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
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
            <Link to="/" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/batches" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Batches</Link>
            <Link to="/about" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/faculty" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Faculty</Link>
            <Link to="/results" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Results</Link>
            <Link to="/contact" className="font-medium hover:text-brilliant-blue px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex flex-col space-y-2 pt-2">
              {user ? (
                <>
                  <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark w-full">
                    <Link to="/dashboard"><User className="mr-2 h-4 w-4" /> Dashboard</Link>
                  </Button>
                  <Button onClick={() => handleLogout()} className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {/* <Button asChild className="bg-brilliant-blue hover:bg-brilliant-blue-dark w-full">
                    <Link to="/register">Register</Link>
                  </Button> */}
                  <Button asChild className="bg-brilliant-purple hover:bg-brilliant-purple-dark w-full">
                    <Link to="/login">Login</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
