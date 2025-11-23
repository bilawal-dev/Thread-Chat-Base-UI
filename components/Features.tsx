import React from 'react';
import { Layers, Users, Zap, ShieldCheck, Palette, BarChart3, MessageSquare } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#FBF8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-brand font-bold tracking-wider uppercase text-xs bg-white border border-brand/10 px-2 py-1 rounded">Features</span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Everything you need. <br />Nothing you don't.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Feature 1: Thread First (Large) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-2xl p-8 shadow-slack border border-gray-200 overflow-hidden relative group hover:border-brand/30 transition-all">
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-slack-blue">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thread-First Architecture</h3>
              <p className="text-gray-600 max-w-md text-lg font-medium">
                We don't spam your channels. Every visitor gets a dedicated thread inside a single channel, keeping your workspace clean and your sanity intact.
              </p>
            </div>
            {/* Visual Mock */}
            <div className="absolute right-0 bottom-0 w-1/2 h-3/4 bg-gray-50 border-t border-l border-gray-200 rounded-tl-xl p-4 transition-transform group-hover:scale-105 origin-bottom-right">
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded bg-gray-200 shrink-0"></div>
                  <div className="bg-white p-2 rounded border border-gray-200 shadow-sm text-xs text-gray-400 w-full">
                    <div className="w-3/4 h-2 bg-gray-100 rounded mb-1"></div>
                    <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="flex gap-2 pl-8">
                   <div className="w-8 h-8 rounded bg-brand shrink-0"></div>
                   <div className="bg-brand-light p-2 rounded border border-brand/10 text-xs text-gray-400 w-full">
                    <div className="w-5/6 h-2 bg-white/50 rounded mb-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Bot + Human (Standard) */}
          <div className="bg-white rounded-2xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-yellow-300 transition-all">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 text-slack-yellow">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bot + Human Hybrid</h3>
            <p className="text-gray-500 text-sm font-medium">
              Automated responses handle the basics. One click escalates to a human agent in Slack.
            </p>
          </div>

          {/* Feature 3: Analytics (Standard) */}
          <div className="bg-white rounded-2xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-green-300 transition-all">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-slack-green">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Analytics</h3>
            <p className="text-gray-500 text-sm font-medium">
              Track response times, conversation volume, and sentiment directly from your dashboard.
            </p>
          </div>

          {/* Feature 4: Customization (Wide) */}
          <div className="md:col-span-2 bg-[#4A154B] rounded-2xl p-8 shadow-lg shadow-brand/20 border border-brand overflow-hidden relative flex items-center justify-between group">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">On-Brand Design</h3>
              <p className="text-brand-light/80 text-sm font-medium">
                Customize colors, avatars, and placement. Make the widget feel like a native part of your product.
              </p>
            </div>
            {/* Color Circles Visual */}
            <div className="hidden sm:flex gap-[-10px] opacity-80">
                <div className="w-16 h-16 rounded-full border-4 border-[#4A154B] bg-[#36C5F0] transform -translate-x-4"></div>
                <div className="w-16 h-16 rounded-full border-4 border-[#4A154B] bg-[#E01E5A] transform -translate-x-8"></div>
                <div className="w-16 h-16 rounded-full border-4 border-[#4A154B] bg-[#2EB67D] transform -translate-x-12"></div>
            </div>
          </div>

          {/* Feature 5: Routing (Standard) */}
          <div className="bg-white rounded-2xl p-8 shadow-slack border border-gray-200 relative overflow-hidden group hover:border-red-300 transition-all">
             <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 text-slack-red">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Team Routing</h3>
            <p className="text-gray-500 text-sm font-medium">
              Route sales questions to #sales and support tickets to #support automatically.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;