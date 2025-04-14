
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-school-primary mb-4">Tentang SDIT Asy-Syafiiah</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Membangun generasi Islam yang berakhlak mulia, cerdas, dan berprestasi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
            <div>
              <h2 className="text-2xl font-bold text-school-primary mb-4">Sejarah Kami</h2>
              <p className="text-gray-700 mb-4">
                SDIT Asy-Syafiiah didirikan pada tahun 2010 dengan visi menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi Qurani, berakhlak mulia, dan berprestasi.
              </p>
              <p className="text-gray-700 mb-4">
                Berawal dari sebuah madrasah kecil dengan 3 ruang kelas dan 45 siswa, kini SDIT Asy-Syafiiah telah berkembang menjadi salah satu sekolah Islam terpadu terbaik di daerah dengan fasilitas lengkap dan modern.
              </p>
              <p className="text-gray-700">
                Dengan pengalaman lebih dari 10 tahun dalam dunia pendidikan Islam, SDIT Asy-Syafiiah terus berkomitmen untuk memberikan pendidikan terbaik yang memadukan kurikulum nasional dan nilai-nilai Islam.
              </p>
            </div>
            <div>
              <img 
                src="https://via.placeholder.com/600x400?text=SDIT+Asy-Syafiiah" 
                alt="SDIT Asy-Syafiiah" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-school-primary">Visi & Misi</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-school-primary">
                <h3 className="text-xl font-semibold text-school-primary mb-4">Visi</h3>
                <p className="text-gray-700">
                  Menjadi lembaga pendidikan Islam terdepan yang menghasilkan generasi Qurani, berakhlak mulia, cerdas, mandiri, dan berprestasi.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-school-primary">
                <h3 className="text-xl font-semibold text-school-primary mb-4">Misi</h3>
                <ul className="text-gray-700 space-y-2 list-disc pl-5">
                  <li>Menyelenggarakan pendidikan Islam yang berkualitas dengan kurikulum terpadu.</li>
                  <li>Membentuk karakter dan akhlak islami pada setiap siswa.</li>
                  <li>Membekali siswa dengan hafalan Al-Quran dan pemahaman Islam yang benar.</li>
                  <li>Mengembangkan potensi akademik dan non-akademik siswa secara optimal.</li>
                  <li>Menjalin kerjasama yang baik antara sekolah, keluarga, dan masyarakat.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-school-primary">Kurikulum</h2>
            </div>
            
            <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
              SDIT Asy-Syafiiah mengintegrasikan kurikulum nasional dengan kurikulum khas sekolah Islam terpadu yang memuat berbagai muatan pendidikan Islam.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Kurikulum Nasional</h3>
                <p className="text-gray-700">
                  Mengacu pada kurikulum nasional dari Kementerian Pendidikan, meliputi mata pelajaran wajib seperti Matematika, IPA, IPS, Bahasa Indonesia, dan lainnya.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Kurikulum Keagamaan</h3>
                <p className="text-gray-700">
                  Pembelajaran Islam yang komprehensif meliputi Tahsin, Tahfidz, Hadits, Fiqih, Akidah, dan Akhlak untuk membangun fondasi keislaman yang kuat.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Program Pengembangan Diri</h3>
                <p className="text-gray-700">
                  Kegiatan ekstrakurikuler dan pengembangan bakat minat siswa seperti olahraga, seni, pramuka, robotik, dan berbagai keterampilan lainnya.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-school-primary">Fasilitas</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Ruang Kelas</h3>
                <p className="text-gray-700">
                  Ruang kelas nyaman dan dilengkapi dengan AC, Smart TV, serta sarana penunjang pembelajaran lainnya.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Perpustakaan</h3>
                <p className="text-gray-700">
                  Koleksi buku yang lengkap dan ruang baca yang nyaman untuk mendukung minat baca siswa.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Laboratorium</h3>
                <p className="text-gray-700">
                  Laboratorium IPA, komputer, dan bahasa yang lengkap untuk mendukung pembelajaran praktik.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Masjid</h3>
                <p className="text-gray-700">
                  Masjid yang luas untuk kegiatan ibadah dan pembelajaran keagamaan.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">Lapangan Olahraga</h3>
                <p className="text-gray-700">
                  Lapangan untuk berbagai aktivitas olahraga seperti futsal, basket, dan badminton.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-school-primary mb-3">UKS</h3>
                <p className="text-gray-700">
                  Unit kesehatan sekolah yang dilengkapi dengan peralatan medis dan tenaga kesehatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
