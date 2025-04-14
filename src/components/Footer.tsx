
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-school-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SDIT Asy-Syafiiah</h3>
            <p className="mb-4">Memberikan pendidikan berkualitas dengan nilai-nilai Islam untuk mempersiapkan generasi unggul di masa depan.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-school-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-school-accent">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-school-accent">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Link Penting</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-school-accent">Beranda</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-school-accent">Pendaftaran</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-school-accent">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/admin/login" className="hover:text-school-accent">Admin Login</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Jl. Pendidikan No. 123, Kota</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>info@asysyafiiah.sch.id</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-green-700">
          <p className="text-center">&copy; {new Date().getFullYear()} SDIT Asy-Syafiiah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
