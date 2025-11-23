import React from 'react';
import { X, Check, Hash, MessageCircle, AlertCircle } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Support teams love Slack. <br />
            <span className="text-brand">Website chat tools don't.</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            ThreadChat routes website visitors directly to organized Slack threads. No new dashboards, no context switching. Just your team, working where they live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* The Messy Way */}
          <div className="bg-[#FFF5F5] rounded-xl p-8 sm:p-12 border border-red-100 relative overflow-hidden group hover:border-red-200 transition-colors">
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">The Old Way</h3>
                <span className="px-3 py-1 bg-red-100 text-red-700 rounded text-xs font-bold uppercase tracking-wide">Chaos</span>
              </div>
              <p className="text-gray-600 font-medium">Fragments your focus across dozens of channels.</p>
            </div>

            {/* Visual Chaos */}
            <div className="relative h-64 w-full mb-8">
              <div className="absolute top-4 left-4 bg-white p-3 rounded-md shadow-slack border border-gray-200 w-48 transform -rotate-2 z-10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Hash className="w-3 h-3" /> <span className="text-xs font-bold text-gray-700">#visitor-992</span>
                </div>
                <div className="h-2 bg-gray-100 rounded w-3/4"></div>
              </div>
              <div className="absolute top-12 right-8 bg-white p-3 rounded-md shadow-slack border border-gray-200 w-48 transform rotate-3 z-20">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                  <Hash className="w-3 h-3" /> <span className="text-xs font-bold text-gray-700">#support-urgent</span>
                </div>
                 <div className="flex gap-1">
                    <AlertCircle className="w-3 h-3 text-red-500" />
                    <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                 </div>
              </div>
              <div className="absolute bottom-10 left-12 bg-white p-3 rounded-md shadow-slack border border-gray-200 w-48 transform -rotate-3 z-10">
                <div className="flex items-center gap-2 text-gray-400 mb-1">
                   <Hash className="w-3 h-3" /> <span className="text-xs font-bold text-gray-700">#sales-lead-2</span>
                </div>
                <div className="h-2 bg-gray-100 rounded w-full"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl border border-red-100 z-30">
                 <X className="w-8 h-8 text-slack-red" />
              </div>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center font-medium">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center mr-3 shrink-0">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span>New channel created for every visitor</span>
              </li>
              <li className="flex items-center font-medium">
                <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center mr-3 shrink-0">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span>Constant context switching</span>
              </li>
              <li className="flex items-center font-medium">
                 <div className="w-6 h-6 rounded bg-red-100 flex items-center justify-center mr-3 shrink-0">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <span>Missed messages & lost leads</span>
              </li>
            </ul>
          </div>

          {/* The ThreadChat Way */}
          <div className="bg-brand-light/30 rounded-xl p-8 sm:p-12 shadow-xl shadow-brand/5 border border-brand/10 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-brand"></div>
            
            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">The ThreadChat Way</h3>
                <span className="px-3 py-1 bg-brand text-white rounded text-xs font-bold uppercase tracking-wide">Organized</span>
              </div>
              <p className="text-gray-600 font-medium">One channel per team. Tidy threads.</p>
            </div>

            {/* Visual Order */}
            <div className="relative h-64 w-full mb-8 bg-white rounded-lg border border-gray-200 shadow-sm p-0 flex flex-col overflow-hidden">
               {/* Header */}
               <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                  <Hash className="w-4 h-4 text-gray-500" />
                  <span className="font-bold text-gray-900 text-sm">website-support</span>
               </div>
               
               {/* Thread Item 1 */}
               <div className="flex gap-3 p-3 hover:bg-gray-50 transition-colors cursor-default border-l-4 border-transparent hover:border-gray-200">
                  <div className="w-9 h-9 rounded bg-slack-blue flex items-center justify-center text-white font-bold text-xs shadow-sm">V1</div>
                  <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                         <span className="text-sm font-bold text-gray-900">Visitor #842</span>
                         <span className="text-[10px] text-gray-400">10:42 AM</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-0.5">Asking about enterprise pricing...</p>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="flex -space-x-1">
                            <div className="w-4 h-4 rounded bg-gray-200 border border-white"></div>
                            <div className="w-4 h-4 rounded bg-brand border border-white"></div>
                         </div>
                         <span className="text-xs text-slack-blue font-bold">2 replies</span>
                         <span className="text-[10px] text-gray-400">Last reply today at 10:45 AM</span>
                      </div>
                  </div>
               </div>

                {/* Thread Item 2 */}
               <div className="flex gap-3 p-3 bg-[#F2FAFF] border-l-4 border-slack-blue">
                  <div className="w-9 h-9 rounded bg-slack-yellow flex items-center justify-center text-white font-bold text-xs shadow-sm">V2</div>
                  <div className="flex-1">
                      <div className="flex justify-between items-baseline">
                         <span className="text-sm font-bold text-gray-900">Visitor #843</span>
                         <span className="text-[10px] text-gray-400">Just now</span>
                      </div>
                      <p className="text-sm text-gray-800 mt-0.5 font-medium">Integration help required.</p>
                      <div className="mt-2 flex items-center gap-2">
                         <div className="px-2 py-0.5 rounded border border-gray-300 bg-white text-xs font-bold text-gray-600 hover:bg-gray-50 cursor-pointer shadow-sm">
                            Reply in thread
                         </div>
                      </div>
                  </div>
               </div>
            </div>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center font-medium">
                <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-4 h-4 text-slack-green" />
                </div>
                <span>Single channel per department</span>
              </li>
              <li className="flex items-center font-medium">
                <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-4 h-4 text-slack-green" />
                </div>
                <span>Threads keep topics isolated</span>
              </li>
              <li className="flex items-center font-medium">
                <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3 shrink-0">
                  <Check className="w-4 h-4 text-slack-green" />
                </div>
                <span>Zero context switching</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;