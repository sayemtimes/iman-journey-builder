
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MonthlyPlan from '@/components/MonthlyPlan';
import AIAssistant from '@/components/AIAssistant';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MonthlyPlan />
      <AIAssistant />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
