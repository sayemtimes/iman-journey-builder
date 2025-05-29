
import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('bn');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'bn' ? 'en' : 'bn');

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = {
    bn: [
      { label: 'হোম', href: '#home' },
      { label: 'মাসিক পরিকল্পনা', href: '#plan' },
      { label: 'AI সহায়ক', href: '#ai-assistant' },
      { label: 'ডাউনলোড', href: '#download' },
      { label: 'ব্লগ', href: '#blog' },
      { label: 'যোগাযোগ', href: '#contact' }
    ],
    en: [
      { label: 'Home', href: '#home' },
      { label: 'Monthly Plan', href: '#plan' },
      { label: 'AI Assistant', href: '#ai-assistant' },
      { label: 'Download', href: '#download' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' }
    ]
  };

  return (
    <header className="bg-white shadow-lg border-b-4 border-green-500 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('#home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">ই</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">
                {language === 'bn' ? 'ইলম থেকে ইখলাস' : 'From Knowledge to Sincerity'}
              </h1>
              <p className="text-xs text-gray-600">
                {language === 'bn' ? 'জ্ঞান থেকে আন্তরিকতার পথে' : 'Journey from Knowledge to Sincerity'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems[language].map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="border-green-500 text-green-600 hover:bg-green-50"
            >
              {language === 'bn' ? 'EN' : 'বাং'}
            </Button>
            
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navItems[language].map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
