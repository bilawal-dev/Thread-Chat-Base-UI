import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for early-stage startups.",
      features: ["1 Website Widget", "2,000 Messages/mo", "Slack Integration", "Standard Support"],
      cta: "Join Waitlist",
      highlight: false
    },
    {
      name: "Pro",
      price: "$39",
      period: "/month",
      description: "For growing teams with traffic.",
      features: ["3 Website Widgets", "10,000 Messages/mo", "Basic Analytics", "Custom Branding", "Priority Support"],
      cta: "Join Waitlist",
      highlight: true
    },
    {
      name: "Business",
      price: "$79",
      period: "/month",
      description: "Scale without limits.",
      features: ["Unlimited Widgets", "Unlimited Messages", "Advanced Analytics", "Department Routing", "Dedicated Account Manager"],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple plans for growing teams
          </h2>
          <p className="text-lg text-gray-600">
            Transparent pricing. No per-seat charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight 
                  ? 'bg-white border-2 border-brand shadow-xl scale-105 z-10' 
                  : 'bg-gray-50 border border-gray-100 text-gray-600'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-gray-900' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-6 h-10">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className={`text-4xl font-extrabold ${plan.highlight ? 'text-gray-900' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${plan.highlight ? 'text-brand' : 'text-gray-400'}`} />
                    <span className={plan.highlight ? 'text-gray-700' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#waitlist"
                className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors ${
                  plan.highlight 
                    ? 'bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/25' 
                    : 'bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;