
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from 'sonner';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Student data
    studentName: '',
    gender: '',
    birthPlace: '',
    birthDate: '',
    address: '',
    previousSchool: '',
    
    // Parent data
    fatherName: '',
    fatherOccupation: '',
    fatherPhone: '',
    motherName: '',
    motherOccupation: '',
    motherPhone: '',
    email: '',
    
    // Additional info
    healthInfo: '',
    specialNeeds: '',
    hobbies: '',
    achievements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1) {
      // Validate first step
      if (!formData.studentName || !formData.gender || !formData.birthPlace || !formData.birthDate) {
        toast.error('Mohon lengkapi data siswa yang diperlukan');
        return;
      }
    } else if (step === 2) {
      // Validate second step
      if (!formData.fatherName || !formData.fatherPhone || !formData.motherName || !formData.motherPhone || !formData.email) {
        toast.error('Mohon lengkapi data orang tua yang diperlukan');
        return;
      }
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form data submitted:', formData);
    
    // Show success message
    toast.success('Pendaftaran berhasil dikirim!');
    
    // Store the data (in real app, this would be sent to a backend)
    // For demo, we'll just use localStorage
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push({
      id: Date.now(),
      ...formData,
      status: 'Menunggu Verifikasi',
      registrationDate: new Date().toISOString()
    });
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    // Navigate to success page after successful submission
    navigate('/register/success');
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-school-primary">Formulir Pendaftaran Siswa Baru</CardTitle>
        <CardDescription>
          Silakan isi formulir dengan data yang benar dan lengkap
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-school-primary">Data Calon Siswa</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Nama Lengkap <span className="text-red-500">*</span></Label>
                    <Input
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap calon siswa"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Jenis Kelamin <span className="text-red-500">*</span></Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) => handleSelectChange('gender', value)}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Laki-laki" id="male" />
                      <Label htmlFor="male">Laki-laki</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Perempuan" id="female" />
                      <Label htmlFor="female">Perempuan</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">Tempat Lahir <span className="text-red-500">*</span></Label>
                    <Input
                      id="birthPlace"
                      name="birthPlace"
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                      placeholder="Masukkan tempat lahir"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Tanggal Lahir <span className="text-red-500">*</span></Label>
                    <Input
                      id="birthDate"
                      name="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Alamat Tempat Tinggal</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Masukkan alamat lengkap"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="previousSchool">Asal TK/RA (jika ada)</Label>
                  <Input
                    id="previousSchool"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama TK/RA asal"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-school-primary">Data Orang Tua/Wali</h3>
              
              <div className="space-y-4">
                <h4 className="font-medium text-gray-700">Data Ayah</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Nama Ayah <span className="text-red-500">*</span></Label>
                    <Input
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama ayah"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherOccupation">Pekerjaan Ayah</Label>
                    <Input
                      id="fatherOccupation"
                      name="fatherOccupation"
                      value={formData.fatherOccupation}
                      onChange={handleInputChange}
                      placeholder="Masukkan pekerjaan ayah"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fatherPhone">Nomor HP Ayah <span className="text-red-500">*</span></Label>
                  <Input
                    id="fatherPhone"
                    name="fatherPhone"
                    value={formData.fatherPhone}
                    onChange={handleInputChange}
                    placeholder="Masukkan nomor HP ayah"
                    required
                  />
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="font-medium text-gray-700">Data Ibu</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Nama Ibu <span className="text-red-500">*</span></Label>
                    <Input
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama ibu"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherOccupation">Pekerjaan Ibu</Label>
                    <Input
                      id="motherOccupation"
                      name="motherOccupation"
                      value={formData.motherOccupation}
                      onChange={handleInputChange}
                      placeholder="Masukkan pekerjaan ibu"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motherPhone">Nomor HP Ibu <span className="text-red-500">*</span></Label>
                  <Input
                    id="motherPhone"
                    name="motherPhone"
                    value={formData.motherPhone}
                    onChange={handleInputChange}
                    placeholder="Masukkan nomor HP ibu"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Masukkan alamat email aktif"
                    required
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-school-primary">Informasi Tambahan</h3>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="healthInfo">Informasi Kesehatan</Label>
                  <Input
                    id="healthInfo"
                    name="healthInfo"
                    value={formData.healthInfo}
                    onChange={handleInputChange}
                    placeholder="Riwayat kesehatan/alergi (jika ada)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="specialNeeds">Kebutuhan Khusus</Label>
                  <Input
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleInputChange}
                    placeholder="Kebutuhan khusus (jika ada)"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hobbies">Hobi</Label>
                  <Input
                    id="hobbies"
                    name="hobbies"
                    value={formData.hobbies}
                    onChange={handleInputChange}
                    placeholder="Hobi anak"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="achievements">Prestasi</Label>
                  <Input
                    id="achievements"
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleInputChange}
                    placeholder="Prestasi yang pernah diraih"
                  />
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                className="border-school-primary text-school-primary hover:bg-school-primary hover:text-white"
              >
                Sebelumnya
              </Button>
            )}
            
            {step < 3 ? (
              <Button 
                type="button" 
                onClick={nextStep}
                className="bg-school-primary hover:bg-school-secondary text-white ml-auto"
              >
                Selanjutnya
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="bg-school-primary hover:bg-school-secondary text-white ml-auto"
              >
                Kirim Pendaftaran
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
