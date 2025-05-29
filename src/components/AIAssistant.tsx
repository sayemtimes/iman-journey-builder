
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Bot, User, RefreshCw, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  type: 'bot' | 'user';
  text: string;
  textEn?: string;
  timestamp: Date;
  isLoading?: boolean;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'আসসালামু আলাইকুম! আমি আপনার ইসলামী সহায়ক। আপনার কোন প্রশ্ন আছে?',
      textEn: 'Assalamu Alaikum! I am your Islamic assistant. Do you have any questions?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (question: string): string => {
    const responses = [
      {
        keywords: ['নামাজ', 'সালাত', 'prayer'],
        bn: 'নামাজ ইসলামের দ্বিতীয় স্তম্ভ। প্রতিদিন পাঁচ ওয়াক্ত নামাজ ফরজ। নামাজে খুশু ও একাগ্রতা রাখা জরুরি। "নামাজ মুমিনের মিরাজ" - এই হাদীসের আলোকে নামাজকে আল্লাহর সাথে সরাসরি কথোপকথনের মাধ্যম মনে করুন।',
        en: 'Prayer (Salah) is the second pillar of Islam. Five daily prayers are obligatory. Maintaining focus and humility in prayer is essential. According to the hadith "Prayer is the believer\'s ascension," consider prayer as direct communication with Allah.'
      },
      {
        keywords: ['কুরআন', 'quran', 'তিলাওয়াত'],
        bn: 'কুরআন আল্লাহর বাণী। প্রতিদিন কুরআন তিলাওয়াত করা সুন্নত। অর্থসহ পড়লে আরও বেশি ফায়দা হয়। "যে ব্যক্তি কুরআনের একটি হরফ পড়বে, তার জন্য একটি নেকি, আর প্রতিটি নেকি ১০ গুণ।" - তিরমিযী',
        en: 'The Quran is the word of Allah. Daily recitation of the Quran is Sunnah. Reading with meaning brings greater benefit. "Whoever reads a letter from the Quran, he will have a reward, and each reward is multiplied by ten." - Tirmidhi'
      },
      {
        keywords: ['দোয়া', 'dua', 'প্রার্থনা'],
        bn: 'দোয়া হলো ইবাদতের মূল। যেকোনো সময় আল্লাহর কাছে দোয়া করা যায়। বিশেষত ফজর ও মাগরিবের পর, বৃষ্টির সময়, সেজদায় থাকাকালীন দোয়া কবুল হয়। "দোয়াই ইবাদত" - তিরমিযী',
        en: 'Dua is the essence of worship. You can make dua to Allah at any time. Especially after Fajr and Maghrib, during rain, and while in prostration, duas are more likely to be accepted. "Dua is worship" - Tirmidhi'
      },
      {
        keywords: ['রোজা', 'সিয়াম', 'fasting'],
        bn: 'রোজা আত্মশুদ্ধির মাধ্যম। রমজানে রোজা ফরজ, অন্য সময় নফল রোজা রাখা সুন্নত। "রোজা ঢালস্বরূপ" - বুখারী। রোজার মূল উদ্দেশ্য তাকওয়া অর্জন।',
        en: 'Fasting is a means of self-purification. Fasting in Ramadan is obligatory, voluntary fasting at other times is Sunnah. "Fasting is a shield" - Bukhari. The main purpose of fasting is to attain Taqwa.'
      }
    ];

    const foundResponse = responses.find(response => 
      response.keywords.some(keyword => 
        question.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    if (foundResponse) {
      return language === 'bn' ? foundResponse.bn : foundResponse.en;
    }

    return language === 'bn' 
      ? 'আপনার প্রশ্নের জন্য ধন্যবাদ। আমি এই বিষয়ে কুরআন ও হাদীসের আলোকে উত্তর দেওয়ার চেষ্টা করছি। অনুগ্রহ করে আরও নির্দিষ্ট প্রশ্ন করুন।'
      : 'Thank you for your question. I am trying to answer this in light of the Quran and Hadith. Please ask more specific questions.';
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage: Message = { 
        id: Date.now().toString(),
        type: 'user', 
        text: inputValue,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);
      
      // Simulate AI processing time
      setTimeout(() => {
        const response = generateResponse(inputValue);
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: response,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const handleClearChat = () => {
    setMessages([{
      id: '1',
      type: 'bot',
      text: 'আসসালামু আলাইকুম! আমি আপনার ইসলামী সহায়ক। আপনার কোন প্রশ্ন আছে?',
      textEn: 'Assalamu Alaikum! I am your Islamic assistant. Do you have any questions?',
      timestamp: new Date()
    }]);
    toast({
      title: "চ্যাট ক্লিয়ার হয়েছে",
      description: "নতুন কথোপকথন শুরু করুন।",
    });
  };

  const handleCopyMessage = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "কপি হয়েছে",
      description: "বার্তা ক্লিপবোর্ডে কপি হয়েছে।",
    });
  };

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    toast({
      title: isPositive ? "ধন্যবাদ!" : "ফিডব্যাক পেয়েছি",
      description: isPositive ? "আপনার পজিটিভ ফিডব্যাকের জন্য ধন্যবাদ।" : "আমরা আরও ভালো করার চেষ্টা করব।",
    });
  };

  const quickQuestions = [
    "দৈনিক কতটুকু কুরআন পড়া উচিত?",
    "সালাতে খুশু কীভাবে আনবো?",
    "ইখলাস কী এবং কীভাবে অর্জন করবো?",
    "দুআ কবুল হওয়ার শর্ত কী?",
    "তাওবা কীভাবে করবো?",
    "হালাল রিজিক কীভাবে অর্জন করবো?"
  ];

  return (
    <section id="ai-assistant" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Bot className="text-green-600" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI ইসলামী সহায়ক
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ask questions about Islam and get answers based on Quran and Hadith
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-3" size={24} />
                  ইসলামী প্রশ্ন ও উত্তর
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                    className="text-white hover:bg-white/20"
                  >
                    {language === 'bn' ? 'EN' : 'বাং'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearChat}
                    className="text-white hover:bg-white/20"
                  >
                    <RefreshCw size={16} />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-3 max-w-xs md:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}>
                        {message.type === 'user' ? 
                          <User className="text-white" size={16} /> : 
                          <Bot className="text-white" size={16} />
                        }
                      </div>
                      <div className={`rounded-lg p-3 relative group ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                        <p className="text-sm">{message.text}</p>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString('bn-BD', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                        {message.type === 'bot' && (
                          <div className="absolute -bottom-8 left-0 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopyMessage(message.text)}
                              className="h-6 w-6 p-0"
                            >
                              <Copy size={12} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleFeedback(message.id, true)}
                              className="h-6 w-6 p-0"
                            >
                              <ThumbsUp size={12} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleFeedback(message.id, false)}
                              className="h-6 w-6 p-0"
                            >
                              <ThumbsDown size={12} />
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3 max-w-xs md:max-w-md">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500">
                        <Bot className="text-white" size={16} />
                      </div>
                      <div className="rounded-lg p-3 bg-gray-100 text-gray-900">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="border-t bg-gray-50 p-4">
                <p className="text-sm text-gray-600 mb-3 font-medium">দ্রুত প্রশ্ন:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-left justify-start h-auto py-2 px-3 text-xs hover:bg-green-50 hover:border-green-300"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex space-x-3">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="আপনার ইসলামী প্রশ্ন লিখুন..."
                    className="flex-1"
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    disabled={isTyping}
                  />
                  <Button 
                    onClick={handleSend}
                    className="bg-green-600 hover:bg-green-700 text-white px-6"
                    disabled={isTyping || !inputValue.trim()}
                  >
                    <Send size={16} />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * AI responses are based on Islamic sources but please verify with scholars for important matters
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
