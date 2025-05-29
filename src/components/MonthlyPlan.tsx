
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Book, User, Share, ChevronDown, ChevronUp } from 'lucide-react';

const MonthlyPlan = () => {
  const [expandedMonth, setExpandedMonth] = useState<number | null>(null);

  const months = [
    {
      month: 1,
      title: "নিয়ত ও সংশোধন + জ্ঞান অর্জনের ধারাবাহিকতা",
      titleEn: "Intention & Correction + Knowledge Foundation",
      description: "আল্লাহর সন্তুষ্টির উদ্দেশ্যে জীবন গঠন ও বেসিক ইসলামী জ্ঞান অর্জন",
      descriptionEn: "Building life for Allah's pleasure & acquiring basic Islamic knowledge",
      color: "from-green-400 to-green-600",
      icon: Book,
      phase: "Beginner Level",
      weeklyGoals: [
        {
          week: 1,
          title: "নিয়ত ও সংশোধন",
          goals: [
            "আল্লাহর সন্তুষ্টির উদ্দেশ্যে জীবন গঠনের নিয়ত",
            "আত্মসমালোচনা ও আত্মশুদ্ধি শুরু",
            "নিজের ভুল ও গুনাহ চিনে নেওয়া",
            "তাওবা ও ইস্তিগফারের অভ্যাস"
          ]
        },
        {
          week: 2,
          title: "বিশুদ্ধ উৎস নির্ধারণ",
          goals: [
            "নির্ভরযোগ্য আলেম/শাইখের তত্ত্বাবধানে শিক্ষা",
            "কুরআনের বাংলা অনুবাদ ও তাফসির পাঠ",
            "সহিহ হাদিস সংকলন অধ্যয়ন",
            "নির্ভরযোগ্য ইসলামিক লেকচার শ্রবণ"
          ]
        },
        {
          week: 3,
          title: "ঈমান ও আকিদা",
          goals: [
            "আল্লাহ, রাসুল, পরকাল সম্পর্কে জ্ঞান",
            "তাকদির, ফেরেশতা, কিতাব সম্পর্কে ধারণা",
            "সালাত ও তাহারার বিস্তারিত নিয়ম",
            "হালাল-হারামের মূল ধারণা"
          ]
        },
        {
          week: 4,
          title: "ফরজ ইবাদত ও আখলাক",
          goals: [
            "রোজা, যাকাত, হজের প্রাথমিক জ্ঞান",
            "আখলাক ও সামাজিক ব্যবহারের আদব",
            "পারিবারিক ও সামাজিক দায়িত্ব",
            "দৈনন্দিন জীবনে ইসলামী নীতি প্রয়োগ"
          ]
        }
      ]
    },
    {
      month: 2,
      title: "আমল শুরু + পরিবেশ ও সঙ্গ বাছাই",
      titleEn: "Beginning Practices + Environment Selection",
      description: "ধীরে ধীরে নিয়মিত আমল শুরু ও দ্বীনদার পরিবেশ তৈরি",
      descriptionEn: "Gradually starting regular practices & creating righteous environment",
      color: "from-blue-400 to-blue-600",
      icon: Calendar,
      phase: "Intermediate Level",
      weeklyGoals: [
        {
          week: 1,
          title: "নামাজের নিয়মিততা",
          goals: [
            "পাঁচ ওয়াক্ত নামাজ সময়মতো আদায়",
            "নামাজে খুশু ও একাগ্রতা আনয়ন",
            "সুন্নত ও নফল নামাজের অনুশীলন",
            "জামায়াতে নামাজ আদায়ের চেষ্টা"
          ]
        },
        {
          week: 2,
          title: "কুরআন তিলাওয়াত ও যিকর",
          goals: [
            "প্রতিদিন কমপক্ষে ১০ আয়াত বা ১ পৃষ্ঠা তিলাওয়াত",
            "অনুবাদসহ কুরআন পাঠের অভ্যাস",
            "সকাল-সন্ধ্যার যিকর ও দোয়া",
            "তাহাজ্জুদ নামাজের প্রচেষ্টা"
          ]
        },
        {
          week: 3,
          title: "হারাম পরিত্যাগ",
          goals: [
            "সুদ, মিথ্যা, গীবত থেকে দূরে থাকা",
            "অশ্লীলতা ও অনৈতিকতা পরিহার",
            "হালাল উপার্জনের প্রতি মনোযোগ",
            "নিজের কর্মকাণ্ডের হিসাব রাখা"
          ]
        },
        {
          week: 4,
          title: "দ্বীনদার সঙ্গ নির্বাচন",
          goals: [
            "দ্বীনদার বন্ধু-বান্ধব নির্বাচন",
            "গুনাহের পরিবেশ থেকে দূরত্ব",
            "ইসলামিক মাহফিল ও ক্লাসে অংশগ্রহণ",
            "পরিবারে ইসলামী পরিবেশ সৃষ্টি"
          ]
        }
      ]
    },
    {
      month: 3,
      title: "জীবনের সকল ক্ষেত্রে ইসলাম + আত্মশুদ্ধি",
      titleEn: "Complete Islamic Lifestyle + Spiritual Purification",
      description: "ব্যক্তিগত থেকে সামাজিক - জীবনের প্রতিটি ক্ষেত্রে ইসলামের প্রয়োগ",
      descriptionEn: "Applying Islam in every aspect of life from personal to social",
      color: "from-purple-400 to-purple-600",
      icon: User,
      phase: "Advanced Level",
      weeklyGoals: [
        {
          week: 1,
          title: "ব্যক্তিগত জীবনে ইসলাম",
          goals: [
            "খাদ্য ও পানীয়ে ইসলামী নীতি অনুসরণ",
            "পোশাক-পরিচ্ছদে শরিয়াহ মেনে চলা",
            "সময় ব্যবস্থাপনায় ইসলামী পদ্ধতি",
            "ব্যক্তিগত স্বাস্থ্য ও পরিচ্ছন্নতায় সুন্নাহ"
          ]
        },
        {
          week: 2,
          title: "পারিবারিক জীবনে ইসলাম",
          goals: [
            "বিয়ে ও পারিবারিক সম্পর্কে ইসলামী নীতি",
            "সন্তান লালন-পালনে ইসলামী পদ্ধতি",
            "পিতা-মাতার সেবা ও আত্মীয়তার হক",
            "পারিবারিক বিবাদ নিষ্পত্তিতে ইসলামী উপায়"
          ]
        },
        {
          week: 3,
          title: "পেশাগত জীবনে ইসলাম",
          goals: [
            "হালাল উপার্জন ও সৎ ব্যবসা",
            "কর্মক্ষেত্রে ইনসাফ ও সততা",
            "আমানাতদারি ও বিশ্বস্ততা",
            "কর্মচারী ও নিয়োগকর্তার পারস্পরিক হক"
          ]
        },
        {
          week: 4,
          title: "সামাজিক জীবনে ইসলাম",
          goals: [
            "সদাচরণ ও উত্তম ব্যবহার",
            "ইনসাফ ও ন্যায়বিচার প্রতিষ্ঠা",
            "সামাজিক দায়িত্ব ও জনকল্যাণ",
            "অসহায় ও দুর্বলদের পাশে দাঁড়ানো"
          ]
        }
      ]
    },
    {
      month: 4,
      title: "নেতৃত্ব, উম্মাহ ও সর্বোচ্চ ইলম",
      titleEn: "Leadership, Ummah & Highest Knowledge",
      description: "দাওয়াহ, নেতৃত্ব ও উম্মাহর কল্যাণে আত্মনিবেদনের চূড়ান্ত পর্যায়",
      descriptionEn: "Final phase of dawah, leadership & devotion for Ummah's welfare",
      color: "from-yellow-400 to-yellow-600",
      icon: Share,
      phase: "Scholarship + Dawah Level",
      weeklyGoals: [
        {
          week: 1,
          title: "গভীর ইলম অর্জন",
          goals: [
            "তাফসির, হাদিস ও ফিকহের গভীর অধ্যয়ন",
            "উসুলুত তাফসির ও উসুলুল হাদিসের পরিচয়",
            "মাজহাব ও ফিকহি মতপার্থক্যের বিশ্লেষণ",
            "ইসলামী আকিদাহর স্তম্ভসমূহের গভীর জ্ঞান"
          ]
        },
        {
          week: 2,
          title: "গবেষণা ও ইজতিহাদ",
          goals: [
            "উসুলুল ফিকহের মূলনীতি অধ্যয়ন",
            "সমসাময়িক ইস্যুতে ইসলামী দৃষ্টিভঙ্গি",
            "আধুনিক ফিতনা বিশ্লেষণ ও প্রতিরোধ",
            "ইসলামী রাজনীতি ও অর্থনীতির অধ্যয়ন"
          ]
        },
        {
          week: 3,
          title: "আত্মশুদ্ধির চূড়ান্ত স্তর",
          goals: [
            "ইহসানের স্তরে পৌঁছার প্রচেষ্টা",
            "তাওয়াক্কুল ও পূর্ণ আল্লাহনির্ভরতা",
            "জুহদ ও দুনিয়ার প্রতি উদাসীনতা",
            "ইখলাসের চূড়া ও ফানা ফিল্লাহর অনুশীলন"
          ]
        },
        {
          week: 4,
          title: "নেতৃত্ব ও দাওয়াহ",
          goals: [
            "ইসলামী নেতৃত্বের বৈশিষ্ট্য অর্জন",
            "উম্মাহর সমস্যা ও সমাধানে ভূমিকা",
            "দাওয়াহর কৌশল ও পদ্ধতি রপ্ত করা",
            "ভবিষ্যৎ প্রজন্মের জন্য ইসলামী পরিকল্পনা"
          ]
        }
      ]
    }
  ];

  const toggleExpanded = (monthIndex: number) => {
    setExpandedMonth(expandedMonth === monthIndex ? null : monthIndex);
  };

  return (
    <section id="plan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ৪ মাসের পূর্ণাঙ্গ ইসলামী জীবন গঠনের পরিকল্পনা
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            কুরআন ও সহিহ হাদিসের আলোকে ধাপে ধাপে একজন পরিপূর্ণ মুসলিম হওয়ার বিস্তারিত রোডম্যাপ
          </p>
          <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-3xl mx-auto">
            <p className="text-green-800 text-sm">
              <strong>মনে রাখুন:</strong> ধাপে ধাপে পরিবর্তন আনতে হবে। হঠাৎ সবকিছু বদলানো সম্ভব নয়। 
              ভুল হলে হতাশ না হয়ে তাওবা করে আবার শুরু করতে হবে।
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {months.map((month, index) => {
            const IconComponent = month.icon;
            const isExpanded = expandedMonth === index;
            
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
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
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {month.phase}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {month.title}
                  </CardTitle>
                  <p className="text-sm text-gray-500 font-medium">
                    {month.titleEn}
                  </p>
                  <p className="text-gray-600 mt-2 text-sm">
                    {month.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  {isExpanded && (
                    <div className="space-y-4 mb-6">
                      {month.weeklyGoals.map((week, weekIndex) => (
                        <div key={weekIndex} className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            সপ্তাহ {week.week}: {week.title}
                          </h4>
                          <ul className="space-y-1">
                            {week.goals.map((goal, goalIndex) => (
                              <li key={goalIndex} className="text-sm text-gray-700 flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {goal}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button 
                    onClick={() => toggleExpanded(index)}
                    className="w-full mb-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full transition-all duration-300"
                    variant="default"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="mr-2" size={16} />
                        সংক্ষিপ্ত করুন
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2" size={16} />
                        বিস্তারিত দেখুন
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    className={`w-full bg-gradient-to-r ${month.color} hover:opacity-90 text-white rounded-full transition-all duration-300`}
                    variant="default"
                  >
                    {month.month} মাসের প্ল্যান ডাউনলোড
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              সম্পূর্ণ ৪ মাসের গাইডবুক ডাউনলোড করুন
            </h3>
            <p className="text-gray-600 mb-6">
              "ইলম থেকে ইখলাস" - সম্পূর্ণ ইসলামী জীবন গঠনের ধাপে ধাপে পরিকল্পনা
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📘 PDF গাইডবুক ডাউনলোড
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                📱 মোবাইল অ্যাপ ডাউনলোড
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              সম্পূর্ণ ফ্রি • চেকলিস্ট সহ • মোবাইল ফ্রেন্ডলি • বাংলা ও ইংরেজি
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonthlyPlan;
