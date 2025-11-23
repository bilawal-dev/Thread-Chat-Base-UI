import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2, MessageSquare } from 'lucide-react';

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate network request
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="waitlist" className="pt-32 pb-12 bg-[#4A154B] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-slack-blue/10 rounded-full blur-[120px] mix-blend-screen animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-24">
        
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold backdrop-blur-sm border border-white/10 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-slack-green mr-2 animate-pulse"></span>
          Public Beta Opening Soon
        </div>

        <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
          Simple, transparent pricing is coming.
        </h2>
        <p className="text-lg text-brand-light/70 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
          We are currently focused on building the best experience for our early partners. Join the waitlist to lock in early-adopter perks.
        </p>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 max-w-lg mx-auto animate-fade-in">
            <div className="w-16 h-16 bg-slack-green/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/10 border border-green-500/20">
              <CheckCircle className="text-slack-green h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
            <p className="text-brand-light/70 text-base">
              Keep an eye on your inbox. We'll notify you as soon as your spot opens up.
            </p>
            <button 
              onClick={() => {setSubmitted(false); setEmail('')}}
              className="mt-8 text-sm text-white hover:text-slack-blue transition-colors underline font-medium"
            >
              Register another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slack-blue to-slack-red rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-200"></div>
                <div className="relative flex items-center bg-white rounded-lg p-1.5 shadow-2xl">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@company.com"
                    className="w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 bg-transparent border-none focus:ring-0 outline-none font-medium"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-md font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 shrink-0"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Join
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
            </div>
            <p className="mt-4 text-xs text-brand-light/50 font-medium">
              Join 20+ others waiting. No spam.
            </p>
          </form>
        )}
      </div>

      {/* Integrated Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity cursor-default">
            <div className="bg-white p-1.5 rounded-lg">
              <MessageSquare className="h-4 w-4 text-brand" strokeWidth={3} />
            </div>
            <span className="text-base font-bold text-white tracking-tight">ThreadChat</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-brand-light/40 font-bold">
            © {new Date().getFullYear()} ThreadChat Inc. 
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;