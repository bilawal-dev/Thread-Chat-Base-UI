import React from 'react';

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
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headline Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
            You're <span className="text-brand">three easy steps</span> away from your own seamless Slack support system
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start text-left group">
              {/* Number Box */}
              <div className="w-12 h-12 rounded-lg bg-brand text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-brand/20 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {step.number}
              </div>
              
              {/* Title with Dotted Underline */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-dotted border-gray-300 pb-1 w-full max-w-[80%]">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;