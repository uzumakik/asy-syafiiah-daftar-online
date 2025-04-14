import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-12 w-auto mr-2"
                src="/lovable-uploads/9a5725dd-a19c-495c-a779-f00914e3d7f9.png"
                alt="SDIT Asy-Syafiiah Logo"
              />
              <span className="text-xl font-bold text-school-primary">SDIT Asy-Syafiiah</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 text-school-primary hover:text-school-secondary font-medium">
              Beranda
            </Link>
            <Link to="/register" className="px-3 py-2 text-school-primary hover:text-school-secondary font-medium">
              Pendaftaran
            </Link>
            <Link to="/about" className="px-3 py-2 text-school-primary hover:text-school-secondary font-medium">
              Tentang Kami
            </Link>
            <Link to="/admin/login">
              <Button variant="outline" className="ml-4 border-school-primary text-school-primary hover:bg-school-primary hover:text-white">
                Admin Login
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-school-primary hover:text-school-secondary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-school-primary hover:text-school-secondary font-medium" onClick={() => setIsMenuOpen(false)}>
              Beranda
            </Link>
            <Link to="/register" className="block px-3 py-2 text-school-primary hover:text-school-secondary font-medium" onClick={() => setIsMenuOpen(false)}>
              Pendaftaran
            </Link>
            <Link to="/about" className="block px-3 py-2 text-school-primary hover:text-school-secondary font-medium" onClick={() => setIsMenuOpen(false)}>
              Tentang Kami
            </Link>
            <Link to="/admin/login" className="block px-3 py-2 text-school-primary hover:text-school-secondary font-medium" onClick={() => setIsMenuOpen(false)}>
              Admin Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
