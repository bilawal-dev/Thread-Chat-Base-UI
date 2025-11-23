import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  const companies = [
    { name: "Acme Corp", opacity: "opacity-50" },
    { name: "TechFlow", opacity: "opacity-40" },
    { name: "SaaSify", opacity: "opacity-60" },
    { name: "CloudScale", opacity: "opacity-45" },
    { name: "DevTeam", opacity: "opacity-50" },
  ];

  return (
    <section className="py-12 border-b border-gray-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
            Join early adopters from fast-moving teams
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16 grayscale">
          {/* Simplified text-based logos for demo purposes */}
          {companies.map((company, idx) => (
            <div key={idx} className={`text-xl md:text-2xl font-black text-gray-300 ${company.opacity} select-none`}>
              {company.name}
            </div>
          ))}
        </div>

        {/* Highlight Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 relative">
            <Quote className="absolute top-6 left-6 text-brand/20 h-12 w-12 -scale-x-100" />
            <div className="relative z-10 text-center">
              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-6">
                "Finally, a tool that doesn't clutter my sidebar. ThreadChat feels like a native Slack feature, not a third-party annoyance. It's exactly what our support team needed."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                  JD
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-gray-900">Jason Doe</div>
                  <div className="text-xs text-gray-500">CTO @ StartupX (Beta User)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;