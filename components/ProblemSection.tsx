import React from 'react';
import { X, Check, Hash, AlertCircle, MessageSquare, ArrowDown, BellOff } from 'lucide-react';

const ProblemSection: React.FC = () => {
  // Generate a long list of dummy channels for the "Chaos" visual
  const chaoticChannels = Array(20).fill(null).map((_, i) => ({
    name: `visitor-${3800 + i}-${['pricing', 'help', 'sales', 'bug', 'demo'][i % 5]}`,
    unread: i % 2 === 0,
    mentions: i % 3 === 0 ? Math.floor(Math.random() * 5) + 1 : 0
  }));

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-96 bg-gray-50 skew-y-3 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Support teams love Slack. <br />
            <span className="text-brand">Website chat tools don't.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            ThreadChat routes website visitors directly to organized Slack threads. No new dashboards, no context switching. Just your team, working where they live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT: The Chaos (Visual Hook) */}
          <div className="relative group perspective-1000">
             {/* The Card */}
            <div className="relative bg-[#1a1d21] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden h-[500px] flex flex-col transform transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* Header */}
              <div className="h-12 border-b border-gray-800 flex items-center px-4 bg-[#1a1d21] shrink-0 z-20">
                 <div className="w-3 h-3 rounded-full bg-red-500 mr-2 opacity-50"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2 opacity-50"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500 opacity-50"></div>
                 <div className="ml-auto text-gray-500 text-xs font-mono">Workspace: Chaos</div>
              </div>

              {/* Sidebar Title */}
              <div className="px-4 py-3 border-b border-gray-800/50 bg-[#1a1d21] z-20 flex justify-between items-center">
                 <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Channels</span>
                 <span className="text-red-500 text-xs font-bold animate-pulse">99+ Unread</span>
              </div>

              {/* Infinite Scroll Container */}
              <div className="relative flex-1 overflow-hidden bg-[#1a1d21]">
                 {/* Gradient Overlay Top/Bottom to fade edges */}
                 <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#1a1d21] to-transparent z-10 pointer-events-none"></div>
                 <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#1a1d21] to-transparent z-10 pointer-events-none"></div>

                 {/* The Moving List */}
                 <div className="animate-scroll-y">
                    {[...chaoticChannels, ...chaoticChannels, ...chaoticChannels].map((channel, i) => (
                      <div key={i} className="px-4 py-2 flex items-center justify-between hover:bg-white/5 transition-colors group/item cursor-not-allowed opacity-80">
                         <div className={`flex items-center gap-3 truncate ${channel.unread ? 'text-white font-medium' : 'text-gray-500'}`}>
                            <Hash className="w-4 h-4 opacity-40" />
                            <span className="truncate max-w-[200px] text-sm">{channel.name}</span>
                         </div>
                         {channel.unread && (
                           <div className={`text-[10px] font-bold px-1.5 rounded-full min-w-[18px] text-center shadow-sm ${channel.mentions > 0 ? 'bg-red-600 text-white' : 'bg-white/10 text-white border border-white/20'}`}>
                             {channel.mentions > 0 ? channel.mentions : ''}
                           </div>
                         )}
                      </div>
                    ))}
                 </div>
              </div>

              {/* Overlay Alert */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-red-600/90 backdrop-blur-sm text-white p-4 rounded-xl shadow-2xl border border-red-500 text-center transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 z-30">
                 <AlertCircle className="w-8 h-8 mx-auto mb-2 text-white" />
                 <div className="font-bold text-lg">Sidebar Overload</div>
                 <div className="text-sm text-red-100">Stop creating a new channel for every visitor.</div>
              </div>

            </div>
            
            {/* Context Text */}
            <div className="text-center mt-6">
               <h3 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                 <X className="text-red-600" strokeWidth={3} /> 
                 The "Channel Explosion"
               </h3>
               <p className="text-gray-500 mt-2 text-sm max-w-sm mx-auto">
                 Dozens of dead channels clutter your workspace, making it impossible to see what actually matters.
               </p>
            </div>
          </div>


          {/* RIGHT: The Solution (Visual Relief) */}
          <div className="relative group perspective-1000 mt-12 lg:mt-0">
             
             {/* The Card */}
            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-brand/10 overflow-hidden h-[500px] flex flex-col transform transition-transform duration-500 group-hover:scale-[1.02]">
               
               {/* Green Status Bar Top */}
               <div className="h-1.5 w-full bg-gradient-to-r from-brand to-slack-green"></div>

               {/* Header */}
               <div className="h-14 border-b border-gray-100 flex items-center justify-between px-6 bg-white shrink-0 z-20">
                 <div className="flex items-center gap-3">
                    <Hash className="w-5 h-5 text-gray-400" />
                    <span className="font-bold text-gray-900 text-lg">website-support</span>
                 </div>
                 <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full font-medium border border-green-100">
                    <Check className="w-4 h-4" />
                    <span>All Systems Operational</span>
                 </div>
               </div>

               {/* Threaded Content */}
               <div className="p-6 bg-[#F8F8F8] flex-1 relative">
                  
                  {/* The "One" Thread */}
                  <div className="relative pl-4">
                     {/* The Thread Spine Line - Crucial visual for "Threaded" */}
                     <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-gray-200 group-hover:bg-brand/30 transition-colors duration-500"></div>

                     {/* Main Parent Message */}
                     <div className="relative mb-6">
                        <div className="absolute -left-[21px] top-3 w-3 h-3 rounded-full border-2 border-white bg-gray-300 z-10"></div>
                        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow">
                           <div className="w-10 h-10 rounded bg-brand flex items-center justify-center text-white font-bold shrink-0">TC</div>
                           <div className="flex-1">
                              <div className="flex justify-between items-start">
                                 <div>
                                    <span className="font-bold text-gray-900 mr-2">ThreadChat Bot</span>
                                    <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">APP</span>
                                 </div>
                                 <span className="text-xs text-gray-400">10:42 AM</span>
                              </div>
                              <p className="text-gray-800 mt-1">
                                 New conversation started on <span className="text-brand font-medium">/pricing</span>
                              </p>
                              <div className="mt-3 p-3 bg-gray-50 rounded text-gray-600 italic text-sm border-l-2 border-brand/20">
                                 "Hi there! Is the Enterprise plan billed annually?"
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Reply 1 */}
                     <div className="relative mb-4 ml-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-backwards">
                        {/* Curve Connector */}
                        <div className="absolute -left-6 top-5 w-4 h-6 border-b-2 border-l-2 border-gray-200 rounded-bl-xl"></div>
                        
                        <div className="flex gap-3">
                           <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded bg-gray-200" alt="Sarah" />
                           <div className="bg-white p-3 rounded-tr-xl rounded-b-xl shadow-sm border border-gray-100 text-sm text-gray-800">
                              <span className="font-bold block text-gray-900 mb-1">Sarah (Support)</span>
                              Checking this for you now! One moment.
                           </div>
                        </div>
                     </div>

                     {/* Reply 2 */}
                     <div className="relative mb-4 ml-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000 fill-mode-backwards">
                        <div className="absolute -left-6 top-5 w-4 h-6 border-b-2 border-l-2 border-gray-200 rounded-bl-xl"></div>
                        <div className="flex gap-3">
                           <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded bg-gray-200" alt="Sarah" />
                           <div className="bg-white p-3 rounded-tr-xl rounded-b-xl shadow-sm border border-gray-100 text-sm text-gray-800">
                              Yes, it is billed annually, but we offer a 20% discount for early startups. Sending you a link!
                           </div>
                        </div>
                     </div>

                     {/* "Reply" Input Area */}
                     <div className="relative ml-8 mt-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="absolute -left-6 top-5 w-4 h-6 border-b-2 border-l-2 border-gray-200 rounded-bl-xl"></div>
                        <div className="border border-gray-300 bg-white rounded-lg p-3 flex justify-between items-center shadow-sm">
                           <span className="text-gray-400 text-sm">Reply in thread...</span>
                           <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                              <ArrowDown className="w-3 h-3" />
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>

            {/* Context Text */}
            <div className="text-center mt-6">
               <h3 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-2">
                 <Check className="text-brand" strokeWidth={3} /> 
                 The "ThreadChat Way"
               </h3>
               <p className="text-gray-500 mt-2 text-sm max-w-sm mx-auto">
                 One single channel. Every visitor gets their own neat thread. Your sidebar stays clean, and you stay sane.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;