
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Github, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
  }`;

  return (
    <header className={navbarClasses}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-horizon-700">Horizon AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-sm font-medium hover:text-horizon-600 transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-horizon-600 transition-colors">
            Pricing
          </Link>
          <Link to="/docs" className="text-sm font-medium hover:text-horizon-600 transition-colors">
            Documentation
          </Link>
          <div className="flex space-x-4">
            <Button variant="outline" size="sm" className="rounded-full px-4">
              Log In
            </Button>
            <Button size="sm" className="rounded-full px-4 bg-horizon-600 hover:bg-horizon-700">
              Try Free
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 right-0 z-40"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <Link to="/features" className="text-sm font-medium py-2 hover:text-horizon-600 transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm font-medium py-2 hover:text-horizon-600 transition-colors">
              Pricing
            </Link>
            <Link to="/docs" className="text-sm font-medium py-2 hover:text-horizon-600 transition-colors">
              Documentation
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full justify-center rounded-full">
                Log In
              </Button>
              <Button className="w-full justify-center rounded-full bg-horizon-600 hover:bg-horizon-700">
                Try Free
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
