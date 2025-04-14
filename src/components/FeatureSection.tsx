
import React from 'react';
import { GraduationCap, BookOpen, Users, Heart, Award, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="h-10 w-10 text-school-primary" />,
    title: 'Kurikulum Terintegrasi',
    description: 'Memadukan kurikulum nasional dengan nilai-nilai Islam untuk pendidikan yang komprehensif.'
  },
  {
    icon: <BookOpen className="h-10 w-10 text-school-primary" />,
    title: 'Program Tahfidz Quran',
    description: 'Program menghafal Al-Quran dengan metode yang menyenangkan dan mudah diikuti anak-anak.'
  },
  {
    icon: <Users className="h-10 w-10 text-school-primary" />,
    title: 'Tenaga Pengajar Berkualitas',
    description: 'Guru-guru yang kompeten, berpengalaman, dan memiliki dedikasi tinggi dalam mendidik.'
  },
  {
    icon: <Heart className="h-10 w-10 text-school-primary" />,
    title: 'Pendidikan Karakter',
    description: 'Pembentukan akhlak dan karakter islami melalui pembiasaan sehari-hari.'
  },
  {
    icon: <Award className="h-10 w-10 text-school-primary" />,
    title: 'Fasilitas Memadai',
    description: 'Dilengkapi dengan fasilitas belajar modern yang mendukung kegiatan belajar mengajar.'
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-school-primary" />,
    title: 'Pengembangan Bakat',
    description: 'Berbagai ekstrakurikuler untuk mengembangkan potensi dan bakat siswa.'
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-primary mb-4">Mengapa Memilih SDIT Asy-Syafiiah?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen untuk memberikan pendidikan terbaik yang memadukan ilmu pengetahuan dengan nilai-nilai Islam.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-school-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
