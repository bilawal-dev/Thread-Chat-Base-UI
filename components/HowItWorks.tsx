import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Install the widget",
      description: "Copy our lightweight code snippet to your website header. It works with React, Webflow, WordPress, and more."
    },
    {
      number: "2",
      title: "Connect Slack",
      description: "Authorize the ThreadChat app in your workspace. Select the specific channel where you want visitor conversations to appear."
    },
    {
      number: "3",
      title: "Start chatting",
      description: "Visitors message you, and you reply directly from a Slack thread. No new dashboards to learn—just the tool you already use."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
            You're <span className="text-brand relative inline-block">
              three easy steps
              <svg className="absolute w-full h-2 -bottom-1 left-0 text-brand/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span> away from your own personalized AI support chatbot
          </h2>
          <p className="text-xl text-gray-500 font-medium">
             Go from sign-up to your first conversation in under 2 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-gray-200 -z-10" />
          
          {/* Connector Line (Mobile) */}
          <div className="md:hidden absolute top-[10%] bottom-[10%] left-10 w-0.5 border-l-2 border-dashed border-gray-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center group">
              
              {/* Number Box */}
              <div className="relative shrink-0 mr-6 md:mr-0 md:mb-8">
                 <div className="w-20 h-20 rounded-2xl bg-brand border border-gray-100 shadow-xl shadow-brand/5 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300 ease-out z-10 relative">
                    <span className="text-3xl font-black text-white bg-brand w-12 h-12 rounded-lg flex items-center justify-center">
                      {step.number}
                    </span>
                 </div>
                 {/* Decorative blob behind number */}
                 <div className="absolute -inset-2 bg-gradient-to-tr from-brand/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div>
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors flex items-center md:justify-center gap-2">
                  {step.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                </h3>
                
                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;