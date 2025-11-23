import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import FeedbackWidget from './components/FeedbackWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Waitlist />
      </main>
      <FeedbackWidget />
    </div>
  );
};

export default App;