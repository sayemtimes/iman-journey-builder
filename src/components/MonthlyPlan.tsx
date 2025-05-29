
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Book, User, Share } from 'lucide-react';

const MonthlyPlan = () => {
  const months = [
    {
      month: 1,
      title: "ইলম (জ্ঞান)",
      titleEn: "Ilm (Knowledge)",
      description: "ইসলামী জ্ঞানের ভিত্তি স্থাপন",
      descriptionEn: "Building the foundation of Islamic knowledge",
      color: "from-green-400 to-green-600",
      icon: Book,
      topics: [
        "তাওহীদের বুনিয়াদী জ্ঞান",
        "সালাতের গুরুত্ব ও পদ্ধতি", 
        "কুরআন তিলাওয়াত শেখা",
        "হাদীসের পরিচিতি"
      ]
    },
    {
      month: 2,
      title: "আমল (কর্ম)",
      titleEn: "Amal (Actions)",
      description: "ইবাদতে নিয়মিততা আনয়ন",
      descriptionEn: "Establishing consistency in worship",
      color: "from-blue-400 to-blue-600",
      icon: Calendar,
      topics: [
        "পাঁচ ওয়াক্ত সালাত নিয়মিত",
        "দৈনিক কুরআন তিলাওয়াত",
        "যিকির ও দুআর অভ্যাস",
        "সুন্নতী আমলসমূহ"
      ]
    },
    {
      month: 3,
      title: "তাযকিয়াহ (আত্মশুদ্ধি)",
      titleEn: "Tazkiyah (Purification)",
      description: "আত্মিক পরিশুদ্ধতা অর্জন",
      descriptionEn: "Achieving spiritual purification",
      color: "from-purple-400 to-purple-600",
      icon: User,
      topics: [
        "নফসের সাথে জিহাদ",
        "তওবা ও ইস্তিগফার",
        "আখলাক উন্নয়ন",
        "ধৈর্য ও কৃতজ্ঞতা"
      ]
    },
    {
      month: 4,
      title: "দাওয়াহ (আহ্বান)",
      titleEn: "Dawah (Invitation)",
      description: "ইসলামের দিকে আহ্বান",
      descriptionEn: "Inviting others to Islam",
      color: "from-yellow-400 to-yellow-600",
      icon: Share,
      topics: [
        "দাওয়াতের পদ্ধতি শেখা",
        "পরিবার ও বন্ধুদের দাওয়াত",
        "ইসলামী মূল্যবোধ প্রচার",
        "উত্তম চরিত্রের মাধ্যমে দাওয়াত"
      ]
    }
  ];

  return (
    <section id="plan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ৪ মাসের পরিকল্পনা
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive 4-month journey designed to transform your Islamic lifestyle step by step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {months.map((month, index) => {
            const IconComponent = month.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <div className={`h-32 bg-gradient-to-br ${month.color} relative`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <IconComponent className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white font-bold text-3xl">
                      {month.month}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {month.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">
                    {month.titleEn}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {month.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {month.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300"
                    variant="default"
                  >
                    বিস্তারিত দেখুন
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            সম্পূর্ণ পরিকল্পনা ডাউনলোড করুন
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPlan;
