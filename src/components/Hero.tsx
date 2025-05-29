
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Star } from 'lucide-react';

const Hero = () => {
  const handleStartNow = () => {
    const planSection = document.querySelector('#plan');
    if (planSection) {
      planSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadPDF = () => {
    const downloadSection = document.querySelector('#download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const planSection = document.querySelector('#plan');
    if (planSection) {
      planSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60C43.431 60 30 46.569 30 30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Bismillah */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-green-800 font-arabic mb-2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
            <p className="text-sm text-gray-600 italic">In the name of Allah, the Most Gracious, the Most Merciful</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-green-600">ইলম থেকে ইখলাস</span>
            <br />
            <span className="text-2xl md:text-3xl text-gray-700 font-normal">
              From Knowledge to Sincerity
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            একটি ৪ মাসের ইসলামী জীবনযাত্রার পরিকল্পনা যা আপনাকে জ্ঞান থেকে আন্তরিকতার দিকে পরিচালিত করবে।
            <br />
            <span className="text-base text-gray-600 mt-2 block">
              A 4-month Islamic lifestyle plan guiding you from knowledge to sincerity.
            </span>
          </p>

          {/* Quranic Verse */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-green-100 shadow-lg">
            <p className="text-xl md:text-2xl text-green-800 font-arabic mb-3">
              وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
            </p>
            <p className="text-gray-700 italic">
              "And I did not create the jinn and mankind except to worship Me." - Quran 51:56
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={handleStartNow}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Star className="mr-2" size={20} />
              এখনই শুরু করুন
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleDownloadPDF}
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              PDF ডাউনলোড
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: '4', label: 'মাস', subLabel: 'Months' },
              { number: '120', label: 'দিন', subLabel: 'Days' },
              { number: '∞', label: 'সওয়াব', subLabel: 'Rewards' },
              { number: '1', label: 'লক্ষ্য', subLabel: 'Goal' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.subLabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNext}
        >
          <ArrowDown className="text-green-600" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
