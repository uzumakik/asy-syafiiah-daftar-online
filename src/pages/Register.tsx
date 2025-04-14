
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/RegisterForm';

const Register = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16 bg-school-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-school-primary mb-2">Pendaftaran Siswa Baru</h1>
            <p className="text-gray-600">
              Silakan isi formulir pendaftaran di bawah ini dengan data yang benar
            </p>
          </div>
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
