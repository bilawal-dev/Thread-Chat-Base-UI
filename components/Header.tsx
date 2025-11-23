import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-brand p-1.5 rounded-lg">
            <MessageSquare className="h-6 w-6 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">ThreadChat</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="#waitlist"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-brand hover:bg-brand-hover transition-colors shadow-lg shadow-brand/25"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;