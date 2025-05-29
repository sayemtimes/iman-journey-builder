
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "বার্তা পাঠানো হয়েছে!",
        description: "আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "ইমেইল",
      titleEn: "Email",
      value: "info@ilmthekeikhlas.com",
      description: "যেকোনো প্রশ্নের জন্য ইমেইল করুন"
    },
    {
      icon: Phone,
      title: "ফোন",
      titleEn: "Phone",
      value: "+৮৮০ ১৭১২-৩৪৫৬৭৮",
      description: "সরাসরি কথা বলার জন্য কল করুন"
    },
    {
      icon: MapPin,
      title: "ঠিকানা",
      titleEn: "Address",
      value: "ঢাকা, বাংলাদেশ",
      description: "আমাদের প্রধান কার্যালয়"
    },
    {
      icon: MessageCircle,
      title: "সামাজিক মাধ্যম",
      titleEn: "Social Media",
      value: "@ilmthekeikhlas",
      description: "ফেসবুক ও ইউটিউবে আমাদের ফলো করুন"
    }
  ];

  const faqItems = [
    {
      question: "এই প্রোগ্রামটি কি সম্পূর্ণ ফ্রি?",
      answer: "হ্যাঁ, এই ৪ মাসের ইসলামী জীবন গঠনের প্রোগ্রামটি সম্পূর্ণ ফ্রি। আমাদের উদ্দেশ্য দাওয়াহ ও সেবা।"
    },
    {
      question: "কোন বয়সের মানুষ এই প্রোগ্রাম অনুসরণ করতে পারবে?",
      answer: "১৫ বছর বা তার বেশি বয়সী যেকোনো মুসলিম এই প্রোগ্রাম অনুসরণ করতে পারবেন।"
    },
    {
      question: "প্রোগ্রামটি কি অনলাইনে পাওয়া যায়?",
      answer: "হ্যাঁ, সম্পূর্ণ প্রোগ্রাম অনলাইনে উপলব্ধ এবং PDF আকারে ডাউনলোড করা যায়।"
    },
    {
      question: "আমি কি নির্দেশনা ও সাহায্য পেতে পারি?",
      answer: "অবশ্যই! আমাদের AI সহায়ক এবং যোগাযোগ মাধ্যমে আপনি সাহায্য পেতে পারেন।"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            যোগাযোগ করুন
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions or guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="flex items-center">
                <Send className="mr-3" size={24} />
                আমাদের বার্তা পাঠান
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    আপনার নাম *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    ইমেইল ঠিকানা *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    বিষয়
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="আপনার বার্তার বিষয়"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    বার্তা *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg rounded-full transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      বার্তা পাঠান
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  যোগাযোগের তথ্য
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-green-600" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{info.title}</h4>
                        <p className="text-green-600 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-600">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  প্রায়শই জিজ্ঞাসিত প্রশ্ন
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={16} />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 text-sm ml-6">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              আমাদের কমিউনিটিতে যোগ দিন
            </h3>
            <p className="text-gray-600 mb-6">
              ইসলামী জীবনযাত্রার পথে একসাথে এগিয়ে চলুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full">
                📘 ফেসবুক গ্রুপ
              </Button>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full">
                📺 ইউটিউব চ্যানেল
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full">
                📱 টেলিগ্রাম চ্যানেল
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
