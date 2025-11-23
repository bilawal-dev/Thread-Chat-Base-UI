import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2, MessageSquare, Sparkles } from 'lucide-react';

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-24">
        
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold backdrop-blur-sm border border-white/10 mb-8 shadow-lg">
          <Sparkles className="w-3 h-3 text-yellow-400 mr-2" />
          Limited Early Access
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
          Ready to work where <br className="hidden sm:block" />
          your team lives?
        </h2>
        
        <p className="text-xl text-brand-light/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Keep customer conversations inside Slack — fast, organized, and effortless. Join the early-access list to get notified when new features roll out and help shape ThreadChat with direct feedback.
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
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-slack-blue via-purple-500 to-slack-red rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                
                <div className="relative flex flex-col sm:flex-row items-center gap-2 bg-white rounded-xl p-2 shadow-2xl">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="work@company.com"
                    className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-400 bg-transparent border-none focus:ring-0 outline-none font-medium text-center sm:text-left"
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-lg font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0 shadow-md whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Get Early Access
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
            </div>
            <p className="mt-6 text-sm text-brand-light/40 font-medium">
              Join 20+ support teams on the waitlist.
            </p>
          </form>
        )}
      </div>

      {/* Integrated Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            <div className="bg-white p-1.5 rounded-lg">
              <MessageSquare className="h-4 w-4 text-brand" strokeWidth={3} />
            </div>
            <span className="text-base font-bold text-white tracking-tight">ThreadChat</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-brand-light/30 font-bold tracking-wide uppercase">
            © {new Date().getFullYear()} ThreadChat Inc. All rights reserved.
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;