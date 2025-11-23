import React, { useState, useEffect } from 'react';
import { Hash, Search, Info, MoreHorizontal, Bold, Italic, Link, List, Smile, Send, Paperclip, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
      // Logic to send email to backend would go here
    }
  };

  // Animation Sequence State Machine
  // 0: Initial State (Idle)
  // 1: Visitor Typing
  // 2: Visitor Sent Message
  // 3: Appears in Slack (Notification)
  // 4: Agent Typing in Thread
  // 5: Agent Sent Reply (Cycle End)

  useEffect(() => {
    const sequence = [
      { step: 1, delay: 1500 }, // Start typing
      { step: 2, delay: 2000 }, // Message sent
      { step: 3, delay: 800 },  // Slack receives
      { step: 4, delay: 2000 }, // Agent types
      { step: 5, delay: 2000 }, // Agent replies
      { step: 0, delay: 5000 }, // Reset
    ];

    let timeoutId: ReturnType<typeof setTimeout>;
    let currentIndex = 0;

    const runSequence = () => {
      const currentAction = sequence[currentIndex];
      timeoutId = setTimeout(() => {
        setStep(currentAction.step);
        currentIndex = (currentIndex + 1) % sequence.length;
        runSequence();
      }, currentAction.delay);
    };

    // Start the loop
    runSequence();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden bg-[#FBF8FB]">
      {/* Abstract Background Shapes using Slack Colors */}
      <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/3 -translate-y-1/4">
        <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#36C5F0" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.3,34.6C60.4,46.3,49.9,56,38.1,64.3C26.3,72.6,13.1,79.5,-0.8,80.9C-14.8,82.3,-29.6,78.2,-42.3,70.5C-55,62.8,-65.6,51.5,-74.1,38.5C-82.6,25.5,-89,10.8,-87.7,-3.4C-86.4,-17.6,-77.4,-31.3,-66.8,-42.3C-56.2,-53.3,-44,-61.6,-31.3,-69.5C-18.6,-77.4,-5.4,-84.9,5.7,-94.8L16.8,-104.7Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 opacity-10 transform -translate-x-1/3 translate-y-1/4">
         <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ECB22E" d="M41.3,-69.9C51.6,-61.7,56.8,-47.5,60.8,-34.4C64.8,-21.3,67.6,-9.3,64.7,1.4C61.8,12.1,53.2,21.5,45.3,30.5C37.4,39.5,30.2,48.1,20.8,54.8C11.4,61.5,-0.2,66.4,-12.3,67C-24.4,67.6,-37,63.9,-46.8,56.1C-56.6,48.3,-63.5,36.4,-68.8,23.6C-74.1,10.8,-77.7,-2.9,-73.4,-14.3C-69.1,-25.7,-56.9,-34.8,-45.7,-42.6C-34.5,-50.4,-24.3,-56.9,-13.2,-59.6C-2.1,-62.3,9.9,-61.2,21.9,-60.1" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: Copy & CTA */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-light text-brand text-xs font-bold tracking-wide uppercase border border-brand/10">
              Now in Early Access
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Website chat that lives in <span className="text-brand relative inline-block">
                Slack
                <svg className="absolute w-full h-3 -bottom-0 left-0 text-slack-yellow opacity-40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>.
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Embed a widget, and every visitor conversation appears in a dedicated Slack thread. No new dashboards. Just the tool you already use.
            </p>
            
            <div id="waitlist-form" className="max-w-md mx-auto lg:mx-0 w-full">
              {!joined ? (
                <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    required
                    placeholder="work@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-5 py-3.5 rounded-lg border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all shadow-sm font-medium"
                  />
                  <button 
                    type="submit" 
                    className="bg-brand hover:bg-brand-hover text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-2"
                  >
                    Request Access
                    <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </button>
                </form>
              ) : (
                <div className="bg-slack-green/10 text-slack-green border border-slack-green/20 px-6 py-4 rounded-lg font-bold flex items-center justify-center gap-3 animate-fade-in-up">
                  <CheckCircle className="w-6 h-6"/>
                  <span>You're on the list! We'll be in touch.</span>
                </div>
              )}
              
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-5">
                 <div className="flex -space-x-2">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Founder" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Founder" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Founder" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slack-blue text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                      17+
                    </div>
                 </div>
                 <p className="text-xs text-gray-500 font-medium opacity-90">Join 20+ founders in the closed beta.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mock */}
          <div className="lg:w-1/2 relative w-full perspective-1000">
            {/* The Slack Window */}
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex h-[520px] lg:h-[580px] w-full max-w-xl mx-auto lg:mx-0 transition-all duration-500">
              
              {/* Slack Sidebar (Aubergine) */}
              <div className="w-16 sm:w-64 bg-[#4A154B] flex flex-col flex-shrink-0 relative z-20">
                {/* Sidebar Header */}
                <div className="h-12 border-b border-[#5d2c5d] flex items-center px-4 hover:bg-[#350d36] transition-colors cursor-pointer">
                  <span className="text-white font-bold truncate hidden sm:block text-base">Acme Corp</span>
                  <div className="w-6 h-6 rounded bg-white/20 sm:hidden flex items-center justify-center text-white text-xs font-bold">A</div>
                </div>
                
                {/* Channels */}
                <div className="p-3 space-y-1 mt-2">
                   <div className="hidden sm:block text-gray-400 text-xs font-medium px-2 mb-2 uppercase tracking-wider opacity-80">Channels</div>
                   
                   {['general', 'random', 'website-chat'].map((channel, idx) => (
                     <div key={idx} className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer group transition-colors ${channel === 'website-chat' ? 'bg-[#1164A3] text-white' : 'text-[#CDC7CD] hover:bg-[#350d36] hover:text-white'}`}>
                        <Hash className={`w-3.5 h-3.5 ${channel === 'website-chat' ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                        <span className={`text-sm truncate hidden sm:block ${channel === 'website-chat' ? 'font-bold' : ''}`}>
                          {channel}
                        </span>
                        {/* Unread badge simulation */}
                        {channel === 'website-chat' && step >= 3 && (
                           <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        )}
                     </div>
                   ))}
                   
                   <div className="pt-4 hidden sm:block">
                      <div className="text-gray-400 text-xs font-medium px-2 mb-2 uppercase tracking-wider opacity-80">Direct Messages</div>
                      <div className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-[#CDC7CD] hover:bg-[#350d36] hover:text-white">
                        <div className="w-3.5 h-3.5 rounded bg-green-500 relative"><div className="absolute top-0 right-0 w-full h-full animate-ping opacity-20 bg-green-400 rounded-full"></div></div>
                        <span className="text-sm truncate">Slackbot</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Main Chat Area */}
              <div className="flex-1 flex flex-col bg-white relative">
                {/* Header */}
                <div className="h-12 border-b border-gray-200 flex items-center justify-between px-4 bg-white shrink-0">
                   <div className="flex items-center gap-2">
                      <Hash className="w-5 h-5 text-gray-500" />
                      <span className="font-bold text-gray-900 text-sm sm:text-base">website-chat</span>
                   </div>
                   <div className="flex gap-4 text-gray-400">
                      <Search className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
                      <Info className="w-5 h-5 hover:text-gray-600 cursor-pointer" />
                   </div>
                </div>

                {/* Messages Scroll Area */}
                <div className="flex-1 p-6 overflow-hidden relative flex flex-col">
                   {/* Previous Message (Static) */}
                   <div className="flex gap-3 mb-6 opacity-60 hover:opacity-100 transition-opacity group">
                      <div className="w-9 h-9 rounded bg-slack-blue flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">TC</div>
                      <div>
                         <div className="flex items-baseline gap-2">
                            <span className="font-bold text-gray-900 text-sm">ThreadChat App</span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded uppercase tracking-wider font-bold">APP</span>
                            <span className="text-xs text-gray-400">09:12 AM</span>
                         </div>
                         <p className="text-gray-800 text-sm mt-1">
                            New visitor on <span className="text-slack-blue bg-blue-50 px-1 rounded">/pricing</span>
                         </p>
                      </div>
                   </div>

                   {/* Date Separator */}
                   <div className="relative flex py-2 items-center mb-6">
                      <div className="flex-grow border-t border-gray-200"></div>
                      <span className="flex-shrink-0 mx-4 text-xs font-bold text-gray-400 border border-gray-200 rounded-full px-3 py-1 bg-white shadow-sm">Today</span>
                      <div className="flex-grow border-t border-gray-200"></div>
                   </div>

                   {/* The Active Message (Animated) */}
                   <div className={`flex gap-3 relative transition-all duration-500 transform ${step >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className="w-9 h-9 rounded bg-slack-green flex items-center justify-center flex-shrink-0 text-white font-bold text-xs shadow-sm">V</div>
                      <div className="flex-1 min-w-0">
                         <div className="flex items-baseline gap-2">
                            <span className="font-bold text-gray-900 text-sm">Visitor #402</span>
                            <span className="text-xs text-gray-400">Just now</span>
                         </div>
                         <p className="text-gray-800 text-sm mt-1 leading-relaxed">
                            Hi team! Do you offer enterprise SSO on the Business plan?
                         </p>

                         {/* The Thread Interface (Inline) */}
                         <div className={`mt-3 border border-gray-200 rounded-lg overflow-hidden bg-gray-50/50 transition-all duration-700 origin-top ${step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 h-0'}`}>
                            
                            {/* Existing replies count (Empty initially) */}
                            {step >= 5 && (
                              <div className="px-3 py-2 bg-white border-b border-gray-100 flex items-center gap-2">
                                <div className="flex -space-x-1">
                                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-4 h-4 rounded-full ring-2 ring-white" alt="" />
                                </div>
                                <span className="text-xs text-slack-blue font-bold">1 reply</span>
                                <span className="text-[10px] text-gray-400">Last reply just now</span>
                              </div>
                            )}

                            <div className="p-3 bg-white">
                               {/* Agent Reply Animation */}
                               {step >= 5 && (
                                 <div className="flex gap-2 mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded bg-gray-300" alt="Agent" />
                                    <div>
                                       <div className="flex items-baseline gap-2">
                                          <span className="font-bold text-xs text-gray-900">You</span>
                                          <span className="text-[10px] text-gray-400">Just now</span>
                                       </div>
                                       <p className="text-sm text-gray-800">Yes absolutely! It includes SAML and OIDC support.</p>
                                    </div>
                                 </div>
                               )}

                               {/* Typing Input Simulation */}
                               <div className={`relative border border-gray-300 rounded-md bg-white transition-all ${step === 4 ? 'ring-2 ring-slack-blue/20 border-slack-blue' : ''}`}>
                                  <div className="flex items-center gap-1 p-1.5 border-b border-gray-100 bg-gray-50">
                                     <Bold className="w-3 h-3 text-gray-400" />
                                     <Italic className="w-3 h-3 text-gray-400" />
                                     <Link className="w-3 h-3 text-gray-400" />
                                     <List className="w-3 h-3 text-gray-400" />
                                  </div>
                                  <div className="p-2 text-sm min-h-[40px] text-gray-600 flex items-center">
                                     {step === 4 ? (
                                       <span className="flex gap-1 items-center">
                                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                                          <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                                       </span>
                                     ) : (
                                       <span className="text-gray-300">Reply in thread...</span>
                                     )}
                                  </div>
                                  <div className="flex justify-between items-center p-1.5">
                                     <div className="flex gap-2 text-gray-400">
                                        <Paperclip className="w-4 h-4" />
                                        <Smile className="w-4 h-4" />
                                     </div>
                                     <div className={`p-1 rounded ${step === 4 ? 'bg-slack-green text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        <Send className="w-3 h-3" />
                                     </div>
                                  </div>
                               </div>
                            </div>
                         </div>
                         {/* End Thread Interface */}

                      </div>
                      
                      {/* Message Hover Actions (Visual Only) */}
                      <div className="absolute -top-3 right-0 bg-white shadow border border-gray-200 rounded p-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500">👍</div>
                         <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500"><MessageCircle className="w-3 h-3" /></div>
                         <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded text-gray-500"><MoreHorizontal className="w-3 h-3" /></div>
                      </div>
                   </div>

                </div>
              </div>
            </div>

            {/* Widget Overlay (Visitor Perspective) */}
            <div className={`absolute bottom-6 -right-4 sm:-right-8 lg:-right-12 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform transition-all duration-700 ${step > 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
               <div className="bg-gradient-to-r from-brand to-brand-hover p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <div className="relative">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white/20" alt="Agent" />
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-brand rounded-full"></div>
                     </div>
                     <div>
                        <div className="text-white font-bold text-sm">Support</div>
                        <div className="text-brand-light/80 text-xs">We typically reply in minutes</div>
                     </div>
                  </div>
               </div>
               
               <div className="h-64 bg-gray-50 p-4 flex flex-col gap-3 overflow-y-auto">
                  {/* Visitor Message */}
                  <div className={`self-end max-w-[85%] transition-all duration-300 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                     <div className="bg-brand text-white p-3 rounded-2xl rounded-tr-sm shadow-sm text-sm">
                        {step === 1 ? (
                           <div className="flex gap-1 h-5 items-center px-1">
                              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></span>
                              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-75"></span>
                              <span className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce delay-150"></span>
                           </div>
                        ) : (
                           "Hi team! Do you offer enterprise SSO on the Business plan?"
                        )}
                     </div>
                  </div>

                  {/* Agent Reply */}
                  <div className={`self-start max-w-[85%] transition-all duration-500 delay-300 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                     <div className="bg-white text-gray-800 p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-sm">
                        Yes absolutely! It includes SAML and OIDC support.
                     </div>
                     <div className="text-[10px] text-gray-400 mt-1 ml-1">Just now</div>
                  </div>
               </div>
               
               {/* Input Area Mock */}
               <div className="p-3 bg-white border-t border-gray-100">
                  <div className="h-10 bg-gray-50 rounded-full border border-gray-200 w-full"></div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;