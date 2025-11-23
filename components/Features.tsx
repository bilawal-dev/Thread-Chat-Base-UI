import React from 'react';
import { Layers, Users, Zap, Palette, BarChart3 } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#FBF8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-xs bg-white border border-brand/10 px-3 py-1.5 rounded-full shadow-sm">Why ThreadChat</span>
          <h2 className="mt-6 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Everything you need. <br />
            Nothing you don't.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(240px,auto)]">
          
          {/* Feature 1: Thread First (Large) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 shadow-slack border border-gray-200 overflow-hidden relative group hover:border-brand/30 hover:shadow-glow transition-all duration-300">
            <div className="relative z-10 max-w-sm">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-slack-blue group-hover:scale-110 transition-transform duration-300">
                <Layers className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thread-First Architecture</h3>
              <p className="text-gray-600 text-lg font-medium leading-relaxed">
                We don't spam your channels. Every visitor gets a dedicated thread inside a single channel, keeping your workspace clean and your sanity intact.
              </p>
            </div>
            
            {/* Visual Mock: Abstract Slack Thread */}
            <div className="absolute right-0 bottom-0 w-[45%] h-[80%] bg-gray-50 border-t border-l border-gray-200 rounded-tl-2xl p-6 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2">
              <div className="space-y-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                {/* Parent Message */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded bg-gray-200 shrink-0"></div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm w-full">
                    <div className="w-2/3 h-2 bg-gray-200 rounded mb-2"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="relative pl-4 ml-4 border-l-2 border-gray-200 h-16">
                    {/* Reply 1 */}
                   <div className="absolute top-2 left-0 w-4 border-t-2 border-gray-200"></div>
                   <div className="absolute top-0 left-6 flex gap-2 w-[120%]">
                      <div className="w-6 h-6 rounded bg-brand shrink-0"></div>
                      <div className="bg-brand-light p-2 rounded-lg w-full">
                          <div className="w-3/4 h-1.5 bg-brand/20 rounded"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Bot + Human (Standard) */}
          <div className="bg-white rounded-3xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-slack-yellow group-hover:rotate-12 transition-transform duration-300">
              <Zap className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bot + Human Hybrid</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Automated responses handle the basics. One click escalates to a human agent in Slack.
            </p>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-yellow-100 to-transparent opacity-0 group-hover:opacity-50 rounded-bl-full transition-opacity"></div>
          </div>

          {/* Feature 3: Analytics (Standard) */}
          <div className="bg-white rounded-3xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-green-400/50 transition-all duration-300">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-slack-green group-hover:scale-110 transition-transform duration-300">
              <BarChart3 className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Analytics</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Track response times, conversation volume, and sentiment directly from your dashboard.
            </p>
             <div className="absolute bottom-4 right-4 flex gap-1 items-end opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-2 h-4 bg-slack-green rounded-t-sm"></div>
                <div className="w-2 h-8 bg-slack-green rounded-t-sm"></div>
                <div className="w-2 h-6 bg-slack-green rounded-t-sm"></div>
                <div className="w-2 h-10 bg-slack-green rounded-t-sm"></div>
             </div>
          </div>

          {/* Feature 4: Customization (Wide) */}
          <div className="md:col-span-2 bg-[#4A154B] rounded-3xl p-8 shadow-xl shadow-brand/20 border border-brand overflow-hidden relative flex flex-col sm:flex-row items-start sm:items-center justify-between group">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white backdrop-blur-sm border border-white/10">
                <Palette className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">On-Brand Design</h3>
              <p className="text-brand-light/80 text-base font-medium leading-relaxed">
                Customize colors, avatars, and placement. Make the widget feel like a native part of your product, not an iframe.
              </p>
            </div>
            {/* Color Circles Visual */}
            <div className="flex -space-x-4 mt-8 sm:mt-0 sm:mr-8 opacity-80 group-hover:space-x-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-full border-4 border-[#4A154B] bg-[#36C5F0] shadow-lg"></div>
                <div className="w-14 h-14 rounded-full border-4 border-[#4A154B] bg-[#E01E5A] shadow-lg"></div>
                <div className="w-14 h-14 rounded-full border-4 border-[#4A154B] bg-[#2EB67D] shadow-lg"></div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          </div>

          {/* Feature 5: Routing (Standard) */}
          <div className="bg-white rounded-3xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-red-400/50 transition-all duration-300">
             <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-slack-red group-hover:-translate-y-1 transition-transform duration-300">
              <Users className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Team Routing</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed">
              Route sales questions to #sales and support tickets to #support automatically.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;