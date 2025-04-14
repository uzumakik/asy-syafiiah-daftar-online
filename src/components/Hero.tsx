
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap, Book, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-pattern py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-school-primary mb-4 leading-tight">
              Pendaftaran Siswa Baru
              <span className="block text-school-secondary">SDIT Asy-Syafiiah</span>
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Segera daftarkan putra-putri Anda di SDIT Asy-Syafiiah untuk mendapatkan pendidikan berkualitas dengan kurikulum terintegrasi nilai-nilai Islam.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/register">
                <Button className="bg-school-primary hover:bg-school-secondary text-white w-full sm:w-auto">
                  Daftar Sekarang
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary hover:text-white w-full sm:w-auto">
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://via.placeholder.com/600x400?text=SDIT+Asy-Syafiiah" 
              alt="SDIT Asy-Syafiiah" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
