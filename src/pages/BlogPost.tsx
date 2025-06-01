
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Share2, Calendar, User, Clock, Tag } from 'lucide-react';
import { blogContent } from '@/data/blogContent';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Convert id to number and validate
  const postId = id ? parseInt(id, 10) : null;
  const content = postId && blogContent[postId as keyof typeof blogContent];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `ইসলামী ব্লগ পোস্ট - ${id}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "লিংক কপি হয়েছে",
        description: "আপনি এখন লিংকটি শেয়ার করতে পারেন।",
      });
    }
  };

  // Error state for invalid post ID
  if (!postId || !content) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="text-center py-12">
            <CardContent>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                ব্লগ পোস্ট পাওয়া যায়নি
              </h1>
              <p className="text-gray-600 mb-6">
                দুঃখিত! আপনি যে ব্লগ পোস্টটি খুঁজছেন তা বিদ্যমান নেই।
              </p>
              <Link to="/#blog">
                <Button className="bg-green-600 hover:bg-green-700">
                  <ArrowLeft className="mr-2" size={16} />
                  ব্লগ সেকশনে ফিরে যান
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/#blog">
              <Button variant="ghost" className="flex items-center">
                <ArrowLeft className="mr-2" size={20} />
                ব্লগে ফিরে যান
              </Button>
            </Link>
            <Button onClick={handleShare} variant="outline">
              <Share2 className="mr-2" size={16} />
              শেয়ার করুন
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center py-8">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <Calendar className="mr-1" size={16} />
                ডিসেম্বর ২০২ৄ
              </div>
              <div className="flex items-center">
                <User className="mr-1" size={16} />
                ইসলামী গাইড
              </div>
              <div className="flex items-center">
                <Clock className="mr-1" size={16} />
                ৮ মিনিট পড়া
              </div>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              ইসলামী জীবনের গুরুত্বপূর্ণ বিষয়
            </CardTitle>
          </CardHeader>
          
          <CardContent className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </CardContent>
        </Card>

        {/* Tags and Social Share */}
        <div className="mt-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="py-6">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex flex-wrap items-center space-x-2 mb-4 sm:mb-0">
                  <Tag className="text-gray-500" size={16} />
                  <span className="text-sm text-gray-500">ট্যাগসমূহ:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">ইসলাম</span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">জীবনযাত্রা</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">আত্মশুদ্ধি</span>
                </div>
                <Button onClick={handleShare} className="bg-green-600 hover:bg-green-700">
                  <Share2 className="mr-2" size={16} />
                  শেয়ার করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-8">
          <Link to="/#blog">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <ArrowLeft className="mr-2" size={20} />
              আরও ব্লগ পোস্ট দেখুন
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
