
import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const InfoSection = () => {
  return (
    <section className="py-16 bg-school-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-primary mb-4">Informasi Pendaftaran</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Berikut adalah informasi penting mengenai pendaftaran siswa baru di SDIT Asy-Syafiiah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-school-primary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-8 w-8 text-school-primary mr-3" />
                <h3 className="text-xl font-semibold">Jadwal Pendaftaran</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Pembukaan Pendaftaran:</span>
                  <span className="font-medium">1 Desember 2025</span>
                </li>
                <li className="flex justify-between">
                  <span>Penutupan Pendaftaran:</span>
                  <span className="font-medium">31 Maret 2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Pengumuman Hasil:</span>
                  <span className="font-medium">15 April 2026</span>
                </li>
                <li className="flex justify-between">
                  <span>Daftar Ulang:</span>
                  <span className="font-medium">16-30 April 2026</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-school-primary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-school-primary mr-3" />
                <h3 className="text-xl font-semibold">Persyaratan</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>Usia minimal 6 tahun pada 1 Juli 2026</li>
                <li>Fotokopi akte kelahiran</li>
                <li>Fotokopi Kartu Keluarga</li>
                <li>Fotokopi KTP orang tua</li>
                <li>Pas foto berwarna ukuran 3x4 (4 lembar)</li>
                <li>Mengisi formulir pendaftaran</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-school-primary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-school-primary mr-3" />
                <h3 className="text-xl font-semibold">Prosedur Pendaftaran</h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Mengisi formulir pendaftaran online</li>
                <li>Membayar biaya pendaftaran</li>
                <li>Mengunggah dokumen yang diperlukan</li>
                <li>Mengikuti tes observasi calon siswa</li>
                <li>Wawancara orang tua</li>
                <li>Menunggu pengumuman hasil</li>
                <li>Melakukan daftar ulang jika diterima</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
