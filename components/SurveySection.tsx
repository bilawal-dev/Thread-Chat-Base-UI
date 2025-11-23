import React, { useState } from 'react';
import { CheckCircle2, Trophy, Smartphone, Sparkles, Box, ArrowRight } from 'lucide-react';

const SurveySection: React.FC = () => {
  const [votedId, setVotedId] = useState<string | null>(null);

  const features = [
    {
      id: 'ai-drafts',
      title: "AI Response Drafts",
      description: "Auto-suggested replies in Slack based on your documentation.",
      icon: <Sparkles className="w-5 h-5 text-purple-600" />,
      votes: 42, // Simulated existing percentage
    },
    {
      id: 'crm',
      title: "CRM Integration",
      description: "Sync visitor leads directly to HubSpot or Salesforce.",
      icon: <Box className="w-5 h-5 text-orange-600" />,
      votes: 28,
    },
    {
      id: 'mobile',
      title: "Mobile App SDK",
      description: "Embed ThreadChat into your React Native or Swift apps.",
      icon: <Smartphone className="w-5 h-5 text-blue-600" />,
      votes: 30,
    }
  ];

  const handleVote = (id: string) => {
    setVotedId(id);
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 -left-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-sm mb-6">
            <Trophy className="w-3 h-3 text-yellow-500" />
            <span>Community Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Help shape the future of ThreadChat
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are building this for you. Vote on the feature you want us to prioritize for the next release.
          </p>
        </div>

        {/* Voting Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-1">
          <div className="bg-slate-50/50 rounded-xl p-6 sm:p-8">
            <div className="grid gap-4">
              
              {features.map((feature) => {
                const isSelected = votedId === feature.id;
                const showResults = votedId !== null;
                
                return (
                  <button
                    key={feature.id}
                    onClick={() => handleVote(feature.id)}
                    disabled={showResults}
                    className={`relative w-full text-left group transition-all duration-300 ${
                      showResults ? 'cursor-default' : 'hover:transform hover:scale-[1.01]'
                    }`}
                  >
                    <div className={`
                      relative overflow-hidden rounded-xl border-2 p-5 sm:p-6 bg-white transition-all
                      ${isSelected 
                        ? 'border-brand shadow-md ring-1 ring-brand/20' 
                        : 'border-gray-100 hover:border-brand/30 shadow-sm'}
                    `}>
                      {/* Progress Bar Background (Only shown after voting) */}
                      {showResults && (
                        <div 
                          className={`absolute top-0 left-0 h-full bg-slate-50 transition-all duration-1000 ease-out`}
                          style={{ width: `${feature.votes + (isSelected ? 10 : 0)}%` }}
                        ></div>
                      )}

                      <div className="relative z-10 flex items-start sm:items-center gap-4">
                        <div className={`
                          w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors
                          ${isSelected ? 'bg-brand/10' : 'bg-gray-50'}
                        `}>
                          {feature.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                            {feature.title}
                            {isSelected && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-brand text-white animate-in fade-in zoom-in">
                                You Voted
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                        </div>

                        {/* Vote Button or Percentage */}
                        <div className="shrink-0 ml-2">
                           {showResults ? (
                              <span className="text-sm font-bold text-gray-700">
                                {feature.votes + (isSelected ? 1 : 0)}%
                              </span>
                           ) : (
                              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-white transition-colors">
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                              </div>
                           )}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Post-vote message */}
            <div className={`mt-8 text-center transition-all duration-500 ${votedId ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                <span>Vote recorded! We'll update you when this ships.</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveySection;