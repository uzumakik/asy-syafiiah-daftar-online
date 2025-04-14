
import React from 'react';
import AdminLoginComponent from '@/components/AdminLogin';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-school-primary">SDIT Asy-Syafiiah Admin</h1>
          <p className="text-gray-600">Panel Administrator Pendaftaran Siswa</p>
        </div>
        <AdminLoginComponent />
      </div>
    </div>
  );
};

export default AdminLogin;
