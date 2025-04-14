
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import InfoSection from '@/components/InfoSection';
import TestimonialSection from '@/components/TestimonialSection';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <FeatureSection />
        <InfoSection />
        <TestimonialSection />
        
        {/* Informasi Admin Access */}
        <div className="bg-gray-50 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-school-primary mb-4">Informasi untuk Admin</h2>
              <p className="text-gray-600 mb-4">
                Panel admin dapat diakses untuk memverifikasi pendaftaran siswa dari perangkat manapun.
              </p>
              <div className="p-4 bg-yellow-50 rounded-md border border-yellow-200 mb-4">
                <h3 className="font-medium text-yellow-800 mb-2">Cara Menggunakan Panel Admin:</h3>
                <ol className="list-decimal pl-5 text-yellow-700 space-y-1">
                  <li>Akses panel admin melalui menu Admin Login di navbar atau kunjungi <code className="bg-yellow-100 px-1 py-0.5 rounded">/admin/login</code></li>
                  <li>Login menggunakan kredensial (Username: admin, Password: admin123)</li>
                  <li>Lihat semua pendaftaran di menu "Semua Pendaftar"</li>
                  <li>Periksa pendaftaran baru di menu "Menunggu"</li>
                  <li>Terima atau tolak pendaftaran sesuai kebutuhan</li>
                </ol>
              </div>
              <Link to="/admin/login" className="inline-block">
                <button className="bg-school-primary hover:bg-school-secondary text-white font-medium py-2 px-4 rounded transition-colors">
                  Akses Panel Admin
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
