import React from 'react';
import { X, Check, Hash, Bell, MessageSquare } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Problem: The Channel Explosion */}
          <div className="group relative bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-400 opacity-80 rounded-t-2xl"></div>
            
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <X className="w-5 h-5 text-red-600" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The "Channel Explosion"</h3>
              </div>
              <p className="text-gray-600">
                Most tools create a new channel for every single visitor. Your sidebar becomes a graveyard of dead chats, and your team gets notification fatigue.
              </p>
            </div>

            {/* Visual: Cluttered Sidebar */}
            <div className="relative bg-slate-800 rounded-lg shadow-inner overflow-hidden h-64 border border-slate-700 select-none">
              {/* Fake Sidebar Header */}
              <div className="h-10 border-b border-slate-700 flex items-center px-4 bg-slate-900/50">
                 <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Channel List */}
              <div className="p-3 space-y-1 opacity-90">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">Channels</div>
                
                {/* The Mess */}
                {[
                  { name: 'general', active: false },
                  { name: 'visitor-3829-nyc', active: true, count: 2 },
                  { name: 'visitor-3830-pricing', active: true, count: 1 },
                  { name: 'visitor-3831-help', active: false },
                  { name: 'visitor-3832-eu', active: true, count: 5 },
                  { name: 'visitor-3833-sales', active: false },
                  { name: 'visitor-3834-login', active: true, count: 1 },
                  { name: 'visitor-3835', active: false },
                ].map((channel, i) => (
                  <div key={i} className={`flex items-center justify-between px-2 py-1.5 rounded text-sm ${channel.active ? 'bg-slate-700 text-white font-medium' : 'text-slate-400'}`}>
                    <div className="flex items-center gap-2 truncate">
                      <Hash className="w-3 h-3 opacity-50" />
                      <span className="truncate max-w-[140px]">{channel.name}</span>
                    </div>
                    {channel.count && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full min-w-[18px] text-center">
                        {channel.count}
                      </span>
                    )}
                  </div>
                ))}
                
                {/* Fade out effect */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Alert */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-50 text-red-600 px-4 py-2 rounded-full shadow-lg border border-red-100 text-xs font-bold flex items-center gap-2 animate-bounce">
                <Bell className="w-3 h-3" />
                <span>50+ unread channels</span>
              </div>
            </div>
          </div>

          {/* Solution: ThreadChat Way */}
          <div className="group relative bg-white rounded-2xl border border-brand/20 p-8 lg:p-10 shadow-xl shadow-brand/5 ring-1 ring-brand/5">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand to-pink-600 rounded-t-2xl"></div>

            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand/10 rounded-lg">
                  <Check className="w-5 h-5 text-brand" strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">One Channel. Organized Threads.</h3>
              </div>
              <p className="text-gray-600">
                Route all chats to a single <strong>#website-support</strong> channel. Each visitor gets one clean thread. Your sidebar stays tidy, and nothing slips through the cracks.
              </p>
            </div>

            {/* Visual: Clean Slack Thread */}
            <div className="relative bg-white rounded-lg shadow-slack border border-gray-200 overflow-hidden h-64 flex flex-col">
              {/* Channel Header */}
              <div className="h-12 border-b border-gray-100 flex items-center px-4 bg-white shrink-0">
                <Hash className="w-4 h-4 text-gray-400 mr-2" />
                <span className="font-bold text-gray-900">website-support</span>
                <span className="mx-2 text-gray-300">|</span>
                <span className="text-xs text-gray-500 truncate">All visitor conversations live here</span>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-4 bg-gray-50 relative overflow-hidden">
                
                {/* Parent Message */}
                <div className="flex gap-3 mb-4 group/msg">
                  <div className="w-9 h-9 rounded bg-brand flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-sm">
                    TC
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-tr-xl rounded-b-xl shadow-sm border border-gray-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">ThreadChat Bot</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded">APP</span>
                      <span className="text-xs text-gray-400">10:42 AM</span>
                    </div>
                    <div className="text-sm text-gray-800">
                      New visitor starting a chat on <span className="font-mono text-xs bg-gray-100 px-1 py-0.5 rounded text-pink-600">/pricing</span>
                      <br/>
                      <span className="text-gray-500 italic mt-1 block">"Hi, do you offer startup discounts?"</span>
                    </div>
                    
                    {/* Thread Bar */}
                    <div className="mt-3 flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 -ml-1 rounded transition-colors">
                      <div className="flex -space-x-1 pl-1">
                         <div className="w-5 h-5 rounded bg-blue-500 border-2 border-white"></div>
                         <div className="w-5 h-5 rounded bg-green-500 border-2 border-white"></div>
                      </div>
                      <span className="text-xs font-bold text-blue-600">2 replies</span>
                      <span className="text-xs text-gray-400">Last reply today at 10:45 AM</span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover/msg:opacity-100 transition-opacity ml-auto">View thread</span>
                    </div>
                  </div>
                </div>

                {/* Second Message (Snippet) */}
                <div className="flex gap-3 opacity-60">
                  <div className="w-9 h-9 rounded bg-brand flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-sm">
                    TC
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-tr-xl rounded-b-xl shadow-sm border border-gray-100">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">ThreadChat Bot</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-1 rounded">APP</span>
                    </div>
                    <div className="text-sm text-gray-800 h-2 w-3/4 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </div>

                {/* Hand cursor overlay to imply ease */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur border border-gray-200 shadow-lg px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-bold text-brand animate-pulse">
                   <MessageSquare className="w-3 h-3" />
                   Reply in thread
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;