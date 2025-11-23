import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Waitlist from './components/Waitlist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <Waitlist />
      </main>
    </div>
  );
};

export default App;