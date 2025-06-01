
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogContent } from '@/data/blogContent';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "ইখলাস: আমলের প্রাণশক্তি",
      titleEn: "Sincerity: The Soul of Deeds",
      excerpt: "ইখলাস ছাড়া কোনো আমল আল্লাহর কাছে গ্রহণযোগ্য হয় না। জানুন ইখলাস অর্জনের সহজ উপায়সমূহ।",
      category: "আধ্যাত্মিকতা",
      author: "শাইখ আবদুর রহমান",
      date: "১৫ ডিসেম্বর, ২০২৪",
      readTime: "৮ মিনিট",
      image: "🤲",
      tags: ["ইখলাস", "আমল", "তাকওয়া"],
      content: `
        <h2>ইখলাস কী?</h2>
        <p>ইখলাস শব্দের অর্থ হলো পবিত্রতা, নিষ্কলুষতা এবং একনিষ্ঠতা। ইসলামী পরিভাষায় ইখলাস হলো একমাত্র আল্লাহর সন্তুষ্টি অর্জনের উদ্দেশ্যে কোনো কাজ করা, অন্য কোনো উদ্দেশ্য না রাখা।</p>
        
        <h3>কুরআনে ইখলাসের গুরুত্ব</h3>
        <p>আল্লাহ তাআলা বলেন: "আর তাদেরকে কেবল এই নির্দেশ দেওয়া হয়েছিল যে, তারা যেন একনিষ্ঠভাবে আল্লাহর ইবাদত করে, তাঁর জন্য দীনকে খালেস করে।" (সূরা বাইয়্যিনাহ: ৫)</p>
        
        <h3>হাদিসে ইখলাসের গুরুত্ব</h3>
        <p>রাসূলুল্লাহ (সা.) বলেছেন: "নিশ্চয়ই আমলসমূহ নিয়তের উপর নির্ভরশীল।" (বুখারী ও মুসলিম)</p>
        
        <h3>ইখলাস অর্জনের উপায়সমূহ</h3>
        <ul>
          <li><strong>আল্লাহর নিকটতা অন্বেষণ:</strong> প্রতিটি কাজের শুরুতে আল্লাহর সন্তুষ্টির কথা মনে রাখা।</li>
          <li><strong>রিয়া থেকে বাঁচা:</strong> লোক দেখানো আমল থেকে বিরত থাকা।</li>
          <li><strong>নিয়মিত আত্মসমালোচনা:</strong> নিজের নিয়ত যাচাই করা।</li>
          <li><strong>গোপন আমল করা:</strong> কিছু আমল গোপনে করার অভ্যাস গড়া।</li>
          <li><strong>আল্লাহর স্মরণ:</strong> নিয়মিত যিকর ও দুআর মাধ্যমে হৃদয় পরিশুদ্ধ রাখা।</li>
        </ul>
        
        <h3>ইখলাসের ফলাফল</h3>
        <p>ইখলাসপূর্ণ আমলের মাধ্যমে মুমিন আল্লাহর নৈকট্য লাভ করে এবং আখিরাতে মহা পুরস্কার পায়। ইখলাস হৃদয়ে প্রশান্তি আনে এবং জীবনে বরকত নিয়ে আসে।</p>
        
        <h3>ইখলাসের প্রতিবন্ধকতা</h3>
        <p>রিয়া (লোক দেখানো), অহংকার, এবং দুনিয়ার মোহ ইখলাসের প্রধান শত্রু। এগুলো থেকে বাঁচার জন্য নিয়মিত তাওবা ও ইস্তিগফার করা প্রয়োজন।</p>
        
        <blockquote>
          <p>"যে ব্যক্তি আল্লাহর জন্য কিছু ছেড়ে দেয়, আল্লাহ তার জন্য তার চেয়ে উত্তম কিছু দান করেন।" - রাসূলুল্লাহ (সা.)</p>
        </blockquote>
      `
    },
    {
      id: 2,
      title: "কুরআন অধ্যয়নের আধুনিক পদ্ধতি",
      titleEn: "Modern Methods of Quran Study",
      excerpt: "ব্যস্ত জীবনে কীভাবে কুরআন অধ্যয়নকে অভ্যাসে পরিণত করবেন? জানুন কার্যকর টিপস।",
      category: "শিক্ষা",
      author: "ড. ফাতিমা আহমেদ",
      date: "১০ ডিসেম্বর, ২০২৪",
      readTime: "৬ মিনিট",
      image: "📖",
      tags: ["কুরআন", "অধ্যয়ন", "পদ্ধতি"],
      content: `
        <h2>আধুনিক যুগে কুরআন অধ্যয়নের চ্যালেঞ্জ</h2>
        <p>আজকের ব্যস্ত জীবনে কুরআন অধ্যয়ন একটি বড় চ্যালেঞ্জ। প্রযুক্তির যুগে আমাদের মনোযোগ বিক্ষিপ্ত হয়ে যায়। তবে সঠিক পদ্ধতি অনুসরণ করলে নিয়মিত কুরআন অধ্যয়ন সম্ভব।</p>
        
        <h3>১. সময় নির্ধারণ</h3>
        <ul>
          <li>ফজরের পর ১৫-৩০ মিনিট</li>
          <li>মাগরিবের পর ১০-২০ মিনিট</li>
          <li>ঘুমানোর আগে ১০ মিনিট</li>
        </ul>
        
        <h3>২. প্রযুক্তির সদ্ব্যবহার</h3>
        <ul>
          <li><strong>অ্যাপ ব্যবহার:</strong> কুরআন মাজীদ অ্যাপ, তাফসির অ্যাপ</li>
          <li><strong>অডিও তিলাওয়াত:</strong> গাড়িতে বা হাঁটার সময় শোনা</li>
          <li><strong>অনলাইন তাফসির:</strong> বিশ্বস্ত ওয়েবসাইট থেকে তাফসির পড়া</li>
        </ul>
        
        <h3>৩. পর্যায়ক্রমিক অধ্যয়ন</h3>
        <p><strong>সপ্তাহ ১-২:</strong> প্রতিদিন ৫ আয়াত অনুবাদসহ পড়া</p>
        <p><strong>সপ্তাহ ৩-৪:</strong> তাফসির সহ পড়া শুরু</p>
        <p><strong>মাস ২:</strong> ছোট সূরাগুলো গভীরভাবে অধ্যয়ন</p>
        
        <h3>৪. নোট নেওয়ার পদ্ধতি</h3>
        <ul>
          <li>গুরুত্বপূর্ণ আয়াত আলাদা খাতায় লিখা</li>
          <li>নতুন শব্দের অর্থ টুকে রাখা</li>
          <li>প্রতিদিন একটি শিক্ষা লিখে রাখা</li>
        </ul>
        
        <h3>৫. পারিবারিক অধ্যয়ন</h3>
        <p>পরিবারের সকলে মিলে সাপ্তাহিক একদিন কুরআন অধ্যয়নের বৈঠক করা। এতে শিশুরাও কুরআনের সাথে পরিচিত হবে।</p>
        
        <h3>৬. বাস্তব প্রয়োগ</h3>
        <p>কুরআনের শিক্ষাকে দৈনন্দিন জীবনে প্রয়োগ করার চেষ্টা করা। প্রতিদিন একটি আয়াতের শিক্ষা অনুযায়ী আমল করা।</p>
        
        <blockquote>
          <p>"যে ব্যক্তি কুরআনের একটি হরফ পাঠ করে, তার জন্য একটি নেকী রয়েছে। আর একটি নেকী দশটি নেকীর সমান।" - তিরমিযী</p>
        </blockquote>
      `
    },
    {
      id: 3,
      title: "ইসলামী নেতৃত্বের গুণাবলী",
      titleEn: "Qualities of Islamic Leadership",
      excerpt: "রাসূল (সা.) এর আদর্শে কীভাবে একজন সফল নেতা হওয়া যায়? জানুন নেতৃত্বের ইসলামী নীতিমালা।",
      category: "নেতৃত্ব",
      author: "ইমাম সাইফুল ইসলাম",
      date: "৫ ডিসেম্বর, ২০২৪",
      readTime: "১০ মিনিট",
      image: "👥",
      tags: ["নেতৃত্ব", "সীরাত", "আদর্শ"],
      content: blogContent[3]
    },
    {
      id: 4,
      title: "সময় ব্যবস্থাপনায় ইসলামী দিকনির্দেশনা",
      titleEn: "Islamic Guidelines for Time Management",
      excerpt: "ইসলামের দৃষ্টিতে সময়ের গুরুত্ব এবং কীভাবে কার্যকরভাবে সময় ব্যবহার করবেন।",
      category: "জীবনযাত্রা",
      author: "মুফতি আবুল কাসেম",
      date: "২৮ নভেম্বর, ২০২৪",
      readTime: "৭ মিনিট",
      image: "⏰",
      tags: ["সময়", "ব্যবস্থাপনা", "জীবনযাত্রা"],
      content: blogContent[4]
    },
    {
      id: 5,
      title: "পারিবারিক বন্ধনে ইসলামী মূল্যবোধ",
      titleEn: "Islamic Values in Family Bonds",
      excerpt: "ইসলামী নীতিমালার আলোকে কীভাবে একটি সুখী ও সমৃদ্ধ পরিবার গড়বেন।",
      category: "পারিবারিক",
      author: "শায়খা আয়েশা বেগম",
      date: "২০ নভেম্বর, ২০২৪",
      readTime: "৯ মিনিট",
      image: "👨‍👩‍👧‍👦",
      tags: ["পরিবার", "সম্পর্ক", "মূল্যবোধ"],
      content: blogContent[5]
    },
    {
      id: 6,
      title: "দুআর শিষ্টাচার ও কার্যকর পদ্ধতি",
      titleEn: "Etiquette and Effective Methods of Dua",
      excerpt: "দুআ কবুল হওয়ার শর্তসমূহ এবং দুআর সঠিক নিয়ম ও আদব।",
      category: "ইবাদত",
      author: "হাফেজ মুহাম্মদ ইউসুফ",
      date: "১৫ নভেম্বর, ২০২৪",
      readTime: "৫ মিনিট",
      image: "🤲",
      tags: ["দুআ", "ইবাদত", "আদব"],
      content: blogContent[6]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '0'));

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">পোস্ট পাওয়া যায়নি</h1>
          <Button onClick={() => navigate('/')} className="bg-green-600 hover:bg-green-700">
            <ArrowLeft className="mr-2" size={16} />
            হোমে ফিরে যান
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('লিঙ্ক কপি করা হয়েছে!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-8 border-green-600 text-green-600 hover:bg-green-50"
          >
            <ArrowLeft className="mr-2" size={16} />
            ব্লগে ফিরে যান
          </Button>

          {/* Article Header */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 relative flex items-center justify-center">
              <span className="text-8xl">{post.image}</span>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">{post.titleEn}</p>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>পড়তে সময়: {post.readTime}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <Share2 className="mr-2" size={16} />
                  শেয়ার করুন
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span key={index} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <Tag size={12} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                  fontSize: '18px'
                }}
              />
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="mr-3 text-green-600" size={24} />
              আরও পড়ুন
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(`/blog/${relatedPost.id}`)}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-3xl">{relatedPost.image}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 line-clamp-2">{relatedPost.title}</h4>
                        <p className="text-sm text-gray-600">{relatedPost.category}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
