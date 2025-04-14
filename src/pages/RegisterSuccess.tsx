
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const RegisterSuccess = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16 bg-school-light min-h-[calc(100vh-12rem)] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-school-primary" />
            </div>
            <h1 className="text-3xl font-bold text-school-primary mb-4">Pendaftaran Berhasil!</h1>
            <p className="text-gray-600 mb-6">
              Terima kasih telah mendaftarkan putra/putri Anda di SDIT Asy-Syafiiah.
              Data pendaftaran Anda telah kami terima dan akan segera kami proses.
            </p>
            <div className="bg-school-light p-4 rounded-md mb-6">
              <p className="text-gray-700">
                Tim kami akan mengirimkan informasi selanjutnya melalui email dan/atau nomor telepon yang telah Anda daftarkan.
                Silakan periksa email Anda secara berkala.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/">
                <Button className="bg-school-primary hover:bg-school-secondary text-white w-full sm:w-auto">
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-school-primary text-school-primary hover:bg-school-primary hover:text-white w-full sm:w-auto">
                  Tentang Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterSuccess;
