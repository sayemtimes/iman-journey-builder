
import React from 'react';
import { Heart, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ই</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ইলম থেকে ইখলাস</h3>
                <p className="text-sm text-gray-400">From Knowledge to Sincerity</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              একটি ইসলামী প্ল্যাটফর্ম যা আপনাকে জ্ঞান থেকে আন্তরিকতার পথে পরিচালিত করে। 
              আল্লাহর সন্তুষ্টি অর্জনের জন্য একটি পূর্ণাঙ্গ জীবনযাত্রার গাইড।
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-arabic text-lg mb-2">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
              <p className="italic">"And whoever relies upon Allah - then He is sufficient for him."</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">দ্রুত লিংক</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">হোম</a></li>
              <li><a href="#plan" className="text-gray-300 hover:text-green-400 transition-colors">মাসিক পরিকল্পনা</a></li>
              <li><a href="#ai-assistant" className="text-gray-300 hover:text-green-400 transition-colors">AI সহায়ক</a></li>
              <li><a href="#download" className="text-gray-300 hover:text-green-400 transition-colors">ডাউনলোড</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-green-400 transition-colors">ব্লগ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">যোগাযোগ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-300">contact@ilmtoiklas.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare size={16} className="text-green-400" />
                <span className="text-gray-300">সাপোর্ট চ্যাট</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">আমাদের মিশন</h5>
              <p className="text-xs text-gray-400">
                প্রত্যেক মুসলিমের জীবনে ইসলামী মূল্যবোধ প্রতিষ্ঠা করা এবং 
                আল্লাহর নৈকট্য অর্জনে সহায়তা করা।
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ইলম থেকে ইখলাস। সকল অধিকার সংরক্ষিত।
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>for the Ummah</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
