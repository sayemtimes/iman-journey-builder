
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, Bot, User } from 'lucide-react';

interface Message {
  type: 'bot' | 'user';
  text: string;
  textEn?: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      text: 'আসসালামু আলাইকুম! আমি আপনার ইসলামী সহায়ক। আপনার কোন প্রশ্ন আছে?',
      textEn: 'Assalamu Alaikum! I am your Islamic assistant. Do you have any questions?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = { type: 'user', text: inputValue };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate AI response
      setTimeout(() => {
        const botResponse: Message = {
          type: 'bot',
          text: 'আপনার প্রশ্নের জন্য ধন্যবাদ। আমি এই বিষয়ে কুরআন ও হাদীসের আলোকে উত্তর দেওয়ার চেষ্টা করছি...',
          textEn: 'Thank you for your question. I am trying to answer this in light of the Quran and Hadith...'
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const quickQuestions = [
    "দৈনিক কতটুকু কুরআন পড়া উচিত?",
    "সালাতে খুশু কীভাবে আনবো?",
    "ইখলাস কী এবং কীভাবে অর্জন করবো?",
    "দুআ কবুল হওয়ার শর্ত কী?"
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
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-3" size={24} />
                ইসলামী প্রশ্ন ও উত্তর
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-start space-x-3 max-w-xs md:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-blue-500' : 'bg-green-500'}`}>
                        {message.type === 'user' ? 
                          <User className="text-white" size={16} /> : 
                          <Bot className="text-white" size={16} />
                        }
                      </div>
                      <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'}`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
                      onClick={() => setInputValue(question)}
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
                  />
                  <Button 
                    onClick={handleSend}
                    className="bg-green-600 hover:bg-green-700 text-white px-6"
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
