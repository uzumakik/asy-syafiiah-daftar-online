
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import AdminSidebar from '@/components/AdminSidebar';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { XCircle, Search, Eye, Check } from 'lucide-react';
import { toast } from 'sonner';

type RegistrationType = {
  id: number;
  studentName: string;
  fatherName: string;
  motherName: string;
  email: string;
  status: string;
  registrationDate: string;
  [key: string]: any;
};

const RejectedRegistrations = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [registrations, setRegistrations] = useState<RegistrationType[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<RegistrationType[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegistration, setSelectedRegistration] = useState<RegistrationType | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsAdmin(adminLoggedIn);
    
    if (adminLoggedIn) {
      // Get rejected registrations from localStorage
      const storedRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      const rejectedRegs = storedRegistrations.filter((reg: RegistrationType) => reg.status === 'Ditolak');
      setRegistrations(rejectedRegs);
      setFilteredRegistrations(rejectedRegs);
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = registrations.filter(
        reg => 
          reg.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          reg.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          reg.motherName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRegistrations(filtered);
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [searchTerm, registrations]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const viewDetail = (registration: RegistrationType) => {
    setSelectedRegistration(registration);
    setShowDetail(true);
  };

  const approveRegistration = (id: number) => {
    const allRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const updatedRegistrations = allRegistrations.map((reg: RegistrationType) => 
      reg.id === id ? { ...reg, status: 'Diterima' } : reg
    );
    
    localStorage.setItem('registrations', JSON.stringify(updatedRegistrations));
    
    // Update local state by removing the approved registration
    const newFilteredList = filteredRegistrations.filter(reg => reg.id !== id);
    setFilteredRegistrations(newFilteredList);
    
    const newRegistrations = registrations.filter(reg => reg.id !== id);
    setRegistrations(newRegistrations);
    
    toast.success('Status pendaftaran berhasil diubah menjadi Diterima');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
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
          <h1 className="text-3xl font-bold text-school-primary mb-8">Pendaftar yang Ditolak</h1>
          
          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-school-primary mb-4 md:mb-0">Daftar Pendaftar yang Ditolak</h2>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Cari pendaftar..."
                  className="pl-10 w-full md:w-80"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
            
            {filteredRegistrations.length > 0 ? (
              <Table>
                <TableCaption>Daftar pendaftar yang telah ditolak</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Nama Calon Siswa</TableHead>
                    <TableHead>Nama Orang Tua</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Tanggal Daftar</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredRegistrations.map((registration, index) => (
                    <TableRow key={registration.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">{registration.studentName}</TableCell>
                      <TableCell>{`${registration.fatherName} & ${registration.motherName}`}</TableCell>
                      <TableCell>{registration.email}</TableCell>
                      <TableCell>{formatDate(registration.registrationDate)}</TableCell>
                      <TableCell>
                        <Badge variant="destructive">
                          <XCircle className="h-3 w-3 mr-1" />
                          Ditolak
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => viewDetail(registration)}
                            className="h-8 w-8 p-0"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => approveRegistration(registration.id)}
                            className="h-8 w-8 p-0 text-green-500 hover:text-green-600"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-8 text-gray-500">
                {searchTerm ? 'Tidak ada hasil yang sesuai dengan pencarian' : 'Belum ada pendaftar yang ditolak'}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Detail Dialog */}
      <Dialog open={showDetail} onOpenChange={setShowDetail}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Detail Pendaftaran</DialogTitle>
            <DialogDescription>
              Informasi lengkap pendaftaran siswa
            </DialogDescription>
          </DialogHeader>
          
          {selectedRegistration && (
            <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
              <div>
                <h3 className="text-lg font-semibold text-school-primary mb-2">Data Siswa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Nama Lengkap</p>
                    <p className="font-medium">{selectedRegistration.studentName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Jenis Kelamin</p>
                    <p className="font-medium">{selectedRegistration.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tempat Lahir</p>
                    <p className="font-medium">{selectedRegistration.birthPlace}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tanggal Lahir</p>
                    <p className="font-medium">{selectedRegistration.birthDate}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-500">Alamat</p>
                    <p className="font-medium">{selectedRegistration.address || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Asal Sekolah</p>
                    <p className="font-medium">{selectedRegistration.previousSchool || '-'}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-school-primary mb-2">Data Orang Tua</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Nama Ayah</p>
                    <p className="font-medium">{selectedRegistration.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pekerjaan Ayah</p>
                    <p className="font-medium">{selectedRegistration.fatherOccupation || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nomor HP Ayah</p>
                    <p className="font-medium">{selectedRegistration.fatherPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nama Ibu</p>
                    <p className="font-medium">{selectedRegistration.motherName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Pekerjaan Ibu</p>
                    <p className="font-medium">{selectedRegistration.motherOccupation || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nomor HP Ibu</p>
                    <p className="font-medium">{selectedRegistration.motherPhone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedRegistration.email}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-school-primary mb-2">Informasi Tambahan</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Informasi Kesehatan</p>
                    <p className="font-medium">{selectedRegistration.healthInfo || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kebutuhan Khusus</p>
                    <p className="font-medium">{selectedRegistration.specialNeeds || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Hobi</p>
                    <p className="font-medium">{selectedRegistration.hobbies || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Prestasi</p>
                    <p className="font-medium">{selectedRegistration.achievements || '-'}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-school-primary mb-2">Status Pendaftaran</h3>
                <div className="flex items-center space-x-4">
                  <Badge variant="destructive">
                    <XCircle className="h-3 w-3 mr-1" />
                    Ditolak
                  </Badge>
                  <Button 
                    onClick={() => {
                      approveRegistration(selectedRegistration.id);
                      setShowDetail(false);
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white"
                    size="sm"
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Ubah menjadi Diterima
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RejectedRegistrations;
