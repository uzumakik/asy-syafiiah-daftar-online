
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CheckSquare, XSquare, Clock } from 'lucide-react';

const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    approved: 0,
    rejected: 0,
    pending: 0
  });

  useEffect(() => {
    // Check if user is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
    
    if (adminLoggedIn) {
      // Get stats from localStorage
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      
      setStats({
        total: registrations.length,
        approved: registrations.filter((r: any) => r.status === 'Diterima').length,
        rejected: registrations.filter((r: any) => r.status === 'Ditolak').length,
        pending: registrations.filter((r: any) => r.status === 'Menunggu Verifikasi').length
      });
    }
    
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-school-primary mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Total Pendaftar</CardTitle>
                <Users className="h-5 w-5 text-school-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.total}</div>
                <p className="text-xs text-gray-500">Jumlah total pendaftar</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Diterima</CardTitle>
                <CheckSquare className="h-5 w-5 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.approved}</div>
                <p className="text-xs text-gray-500">Pendaftar yang diterima</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Ditolak</CardTitle>
                <XSquare className="h-5 w-5 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.rejected}</div>
                <p className="text-xs text-gray-500">Pendaftar yang ditolak</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">Menunggu</CardTitle>
                <Clock className="h-5 w-5 text-yellow-500" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stats.pending}</div>
                <p className="text-xs text-gray-500">Pendaftar yang menunggu verifikasi</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-semibold text-school-primary mb-4">Aktivitas Terbaru</h2>
            {stats.total > 0 ? (
              <div className="text-gray-600">
                <p className="mb-2">
                  Anda memiliki {stats.pending} pendaftaran yang perlu diverifikasi.
                </p>
                <Button 
                  className="bg-school-primary hover:bg-school-secondary text-white"
                  onClick={() => window.location.href = '/admin/pending'}
                >
                  Lihat Pendaftaran
                </Button>
              </div>
            ) : (
              <p className="text-gray-600">Belum ada aktivitas pendaftaran.</p>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Informasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Selamat datang di Panel Admin SDIT Asy-Syafiiah. Gunakan panel ini untuk mengelola pendaftaran siswa baru.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Verifikasi pendaftaran siswa baru</li>
                  <li>Lihat data lengkap pendaftar</li>
                  <li>Ubah status pendaftaran</li>
                  <li>Kelola pengaturan pendaftaran</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Bantuan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Jika Anda memerlukan bantuan terkait penggunaan panel admin, hubungi:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: admin@asysyafiiah.sch.id</li>
                  <li>Telepon: (021) 1234-5678</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
