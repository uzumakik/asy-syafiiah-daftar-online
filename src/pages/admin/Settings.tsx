
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { toast } from 'sonner';
import { Calendar } from 'lucide-react';

const Settings = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({
    registrationOpen: true,
    registrationStartDate: '2025-12-01',
    registrationEndDate: '2026-03-31',
    announcementDate: '2026-04-15',
    reregistrationStart: '2026-04-16',
    reregistrationEnd: '2026-04-30',
    schoolYear: '2026/2027',
    contactEmail: 'info@asysyafiiah.sch.id',
    contactPhone: '(021) 1234-5678'
  });

  useEffect(() => {
    // Check if user is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
    
    if (adminLoggedIn) {
      // Get settings from localStorage if exists
      const storedSettings = localStorage.getItem('adminSettings');
      if (storedSettings) {
        setSettings(JSON.parse(storedSettings));
      }
    }
    
    setLoading(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setSettings(prev => ({ ...prev, registrationOpen: checked }));
  };

  const saveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('adminSettings', JSON.stringify(settings));
    toast.success('Pengaturan berhasil disimpan');
  };

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
          <h1 className="text-3xl font-bold text-school-primary mb-8">Pengaturan</h1>
          
          <form onSubmit={(e) => { e.preventDefault(); saveSettings(); }}>
            <div className="grid grid-cols-1 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-school-primary">Status Pendaftaran</CardTitle>
                  <CardDescription>
                    Atur status penerimaan pendaftaran siswa baru
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id="registration-status" 
                      checked={settings.registrationOpen}
                      onCheckedChange={handleSwitchChange}
                    />
                    <Label htmlFor="registration-status">
                      Pendaftaran {settings.registrationOpen ? 'Dibuka' : 'Ditutup'}
                    </Label>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-school-primary">Jadwal Pendaftaran</CardTitle>
                  <CardDescription>
                    Atur jadwal penerimaan siswa baru
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="registrationStartDate">Tanggal Pembukaan Pendaftaran</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="registrationStartDate"
                          name="registrationStartDate"
                          type="date"
                          value={settings.registrationStartDate}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="registrationEndDate">Tanggal Penutupan Pendaftaran</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="registrationEndDate"
                          name="registrationEndDate"
                          type="date"
                          value={settings.registrationEndDate}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="announcementDate">Tanggal Pengumuman Hasil</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="announcementDate"
                          name="announcementDate"
                          type="date"
                          value={settings.announcementDate}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="schoolYear">Tahun Ajaran</Label>
                      <Input
                        id="schoolYear"
                        name="schoolYear"
                        value={settings.schoolYear}
                        onChange={handleInputChange}
                        placeholder="contoh: 2026/2027"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="reregistrationStart">Tanggal Mulai Daftar Ulang</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="reregistrationStart"
                          name="reregistrationStart"
                          type="date"
                          value={settings.reregistrationStart}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reregistrationEnd">Tanggal Selesai Daftar Ulang</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="reregistrationEnd"
                          name="reregistrationEnd"
                          type="date"
                          value={settings.reregistrationEnd}
                          onChange={handleInputChange}
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-school-primary">Informasi Kontak</CardTitle>
                  <CardDescription>
                    Atur informasi kontak yang ditampilkan pada website
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Email Kontak</Label>
                      <Input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        value={settings.contactEmail}
                        onChange={handleInputChange}
                        placeholder="contoh: info@asysyafiiah.sch.id"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Nomor Telepon Kontak</Label>
                      <Input
                        id="contactPhone"
                        name="contactPhone"
                        value={settings.contactPhone}
                        onChange={handleInputChange}
                        placeholder="contoh: (021) 1234-5678"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Button 
                type="submit" 
                className="bg-school-primary hover:bg-school-secondary text-white"
              >
                Simpan Pengaturan
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
