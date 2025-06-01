import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BookOpen, Calendar, User, Search, Tag, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      tags: ["ইখলাস", "আমল", "তাকওয়া"]
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
      tags: ["কুরআন", "অধ্যয়ন", "পদ্ধতি"]
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
      tags: ["নেতৃত্ব", "সীরাত", "আদর্শ"]
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
      tags: ["সময়", "ব্যবস্থাপনা", "জীবনযাত্রা"]
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
      tags: ["পরিবার", "সম্পর্ক", "মূল্যবোধ"]
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
      tags: ["দুআ", "ইবাদত", "আদব"]
    }
  ];

  const categories = [
    { value: 'all', label: 'সব ক্যাটাগরি' },
    { value: 'আধ্যাত্মিকতা', label: 'আধ্যাত্মিকতা' },
    { value: 'শিক্ষা', label: 'শিক্ষা' },
    { value: 'নেতৃত্ব', label: 'নেতৃত্ব' },
    { value: 'জীবনযাত্রা', label: 'জীবনযাত্রা' },
    { value: 'পারিবারিক', label: 'পারিবারিক' },
    { value: 'ইবাদত', label: 'ইবাদত' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleReadMore = (postId: number) => {
    console.log(`Reading post ${postId}`);
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <BookOpen className="text-blue-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ইসলামী ব্লগ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Islamic knowledge, guidance, and inspiration for modern Muslim life
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="ব্লগ পোস্ট খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <p className="text-gray-600 mb-8">
            {filteredPosts.length} টি ব্লগ পোস্ট পাওয়া গেছে
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-gray-500 font-medium">
                  {post.titleEn}
                </p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>পড়তে সময়: {post.readTime}</span>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                        <Tag size={10} className="inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => handleReadMore(post.id)}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-full transition-all duration-300 group-hover:shadow-lg"
                  variant="default"
                >
                  আরও পড়ুন
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">কোনো ব্লগ পোস্ট পাওয়া যায়নি। অন্য কিছু খোঁজ করুন।</p>
          </div>
        ) : (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              আরও ব্লগ পোস্ট লোড করুন
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
