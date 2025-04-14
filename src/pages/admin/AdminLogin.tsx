
import React from 'react';
import AdminLoginComponent from '@/components/AdminLogin';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-school-primary">SDIT Asy-Syafiiah Admin</h1>
          <p className="text-gray-600">Panel Administrator Pendaftaran Siswa</p>
          <div className="mt-4 text-sm text-gray-500 max-w-xl mx-auto">
            <p className="mb-2">Untuk mengakses panel admin dan memeriksa pendaftaran dari perangkat lain:</p>
            <ol className="list-decimal text-left pl-8 space-y-1">
              <li>Masuk dengan kredensial admin (Username: admin, Password: admin123)</li>
              <li>Lihat semua pendaftaran di menu "Semua Pendaftar"</li>
              <li>Periksa pendaftaran yang baru masuk di menu "Menunggu"</li>
              <li>Terima atau tolak pendaftaran sesuai kebutuhan</li>
            </ol>
          </div>
        </div>
        <AdminLoginComponent />
      </div>
    </div>
  );
};

export default AdminLogin;
