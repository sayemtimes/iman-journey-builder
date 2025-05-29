
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Share, Image } from 'lucide-react';

const DownloadSection = () => {
  const resources = [
    {
      title: "সম্পূর্ণ গাইড PDF",
      titleEn: "Complete Guide PDF",
      description: "৪ মাসের বিস্তারিত পরিকল্পনা সহ",
      descriptionEn: "Detailed 4-month plan included",
      icon: FileText,
      color: "from-red-400 to-red-600",
      size: "2.5 MB",
      pages: "120+ পৃষ্ঠা"
    },
    {
      title: "দৈনিক চেকলিস্ট",
      titleEn: "Daily Checklist",
      description: "প্রিন্ট করার উপযোগী ফরম্যাট",
      descriptionEn: "Print-ready format",
      icon: Download,
      color: "from-blue-400 to-blue-600",
      size: "500 KB",
      pages: "30+ পৃষ্ঠা"
    },
    {
      title: "শেয়ারেবল কোট",
      titleEn: "Shareable Quotes",
      description: "সোশ্যাল মিডিয়ার জন্য",
      descriptionEn: "For social media",
      icon: Image,
      color: "from-green-400 to-green-600",
      size: "Various",
      pages: "50+ ইমেজ"
    },
    {
      title: "দুআ সংকলন",
      titleEn: "Dua Collection",
      description: "দৈনন্দিন দুআ ও যিকির",
      descriptionEn: "Daily duas and dhikr",
      icon: Share,
      color: "from-purple-400 to-purple-600",
      size: "1.2 MB",
      pages: "60+ পৃষ্ঠা"
    }
  ];

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ডাউনলোড ও শেয়ার
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free Islamic resources to support your spiritual journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${resource.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {resource.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">
                    {resource.titleEn}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    {resource.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                    <span>{resource.size}</span>
                    <span>{resource.pages}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300 group-hover:bg-green-600"
                    variant="default"
                  >
                    <Download className="mr-2" size={16} />
                    ডাউনলোড
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Download */}
        <Card className="max-w-4xl mx-auto border-0 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  সম্পূর্ণ ইলম থেকে ইখলাস গাইড
                </h3>
                <p className="text-green-100 mb-4">
                  Complete step-by-step Islamic lifestyle transformation guide
                </p>
                <div className="flex items-center space-x-6 text-sm">
                  <span>📄 120+ পৃষ্ঠা</span>
                  <span>📱 মোবাইল ফ্রেন্ডলি</span>
                  <span>🎨 বাংলা ও ইংরেজি</span>
                  <span>💰 সম্পূর্ণ ফ্রি</span>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <Button 
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg transition-all duration-300"
                >
                  <Download className="mr-2" size={20} />
                  এখনই ডাউনলোড
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  <Share className="mr-2" size={20} />
                  শেয়ার করুন
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DownloadSection;
