
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmad Fauzi",
    role: "Orang Tua Siswa",
    content: "Anak saya sangat senang bersekolah di SDIT Asy-Syafiiah. Selain mendapatkan ilmu pengetahuan umum, juga dibekali dengan ilmu agama dan akhlak yang baik.",
    avatar: "https://via.placeholder.com/60"
  },
  {
    name: "Siti Aminah",
    role: "Orang Tua Siswa",
    content: "Program tahfidz di SDIT Asy-Syafiiah sangat bagus. Putra kami yang tadinya sulit menghafal Al-Quran, sekarang sudah bisa menghafal banyak surat.",
    avatar: "https://via.placeholder.com/60"
  },
  {
    name: "Budi Santoso",
    role: "Orang Tua Siswa",
    content: "Guru-guru di SDIT Asy-Syafiiah sangat perhatian dan profesional. Mereka selalu memberikan laporan perkembangan anak secara berkala.",
    avatar: "https://via.placeholder.com/60"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-primary mb-4">Testimoni Orang Tua</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Apa kata mereka tentang pengalaman anak-anak mereka di SDIT Asy-Syafiiah.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-school-secondary opacity-40 mb-4" />
                <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-school-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
