import React, { useState, useEffect } from 'react';
import { MessageSquarePlus, X, Send, Loader2, CheckCircle2, Lightbulb, FileText, MessageSquare } from 'lucide-react';

type FeedbackType = 'usecase' | 'feature' | 'general';

const FeedbackWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>('usecase');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') resetForm();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setMessage('');
      setEmail('');
      setType('usecase');
    }, 300);
  };

  const getPlaceholder = () => {
    switch(type) {
      case 'feature': return "I wish ThreadChat could...";
      case 'usecase': return "As a [role], I want to [action] so that [benefit]...";
      case 'general': return "What's on your mind?";
      default: return "";
    }
  };

  const TabButton = ({ id, label, icon: Icon }: { id: FeedbackType, label: string, icon: any }) => (
    <button
      type="button"
      onClick={() => setType(id)}
      className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 text-[13px] font-bold rounded-md transition-all duration-200 select-none ${
        type === id 
          ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5' 
          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
      }`}
    >
      <Icon className={`w-3.5 h-3.5 ${type === id ? 'text-brand' : 'opacity-50'}`} />
      {label}
    </button>
  );

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 group flex items-center justify-center w-14 h-14 bg-[#1a1d21] text-white rounded-full shadow-2xl hover:scale-105 hover:bg-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand/20 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Send Feedback"
      >
        <MessageSquarePlus className="w-6 h-6 group-hover:-translate-y-0.5 transition-transform" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-gray-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
          Share feedback
        </div>
      </button>

      {/* Backdrop & Modal */}
      <div 
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}
      >
        {/* Dark Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={resetForm}
        ></div>

        {/* Card */}
        <div 
          className={`relative w-full max-w-[440px] bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden transition-all duration-300 ease-out transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white z-10 relative">
            <div>
              <h3 className="text-[15px] font-bold text-gray-900">Send Feedback</h3>
              <p className="text-xs text-gray-500 mt-0.5 font-medium">Help us shape the roadmap.</p>
            </div>
            <button 
              onClick={resetForm} 
              className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 p-1.5 rounded-md transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 relative">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                
                {/* Segmented Control */}
                <div className="flex bg-gray-100/80 p-1 rounded-lg mb-6 ring-1 ring-black/5">
                  <TabButton id="usecase" label="Use Case" icon={FileText} />
                  <TabButton id="feature" label="Feature" icon={Lightbulb} />
                  <TabButton id="general" label="Other" icon={MessageSquare} />
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-gray-700">
                      Details
                    </label>
                    <textarea
                      required
                      autoFocus
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={getPlaceholder()}
                      className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand min-h-[100px] resize-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                     <label className="block text-xs font-bold text-gray-700">
                      Email <span className="text-gray-400 font-normal ml-0.5">(optional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@work.com"
                      className="w-full px-3 py-2.5 text-sm bg-white border border-gray-200 rounded-lg placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    />
                  </div>
                </div>

                <div className="pt-6 mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="w-full flex items-center justify-center gap-2 bg-[#1a1d21] hover:bg-black text-white py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        Send Feedback
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center p-8 animate-in zoom-in-95 duration-300 text-center">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 ring-1 ring-green-100">
                   <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Thank you!</h4>
                <p className="text-sm text-gray-500 max-w-[200px] mx-auto leading-relaxed">
                  We've received your feedback and will review it shortly.
                </p>
                <button
                  onClick={resetForm}
                  className="mt-6 text-xs font-bold text-gray-400 hover:text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackWidget;