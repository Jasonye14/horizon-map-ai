
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    description: "For individuals exploring code visualization",
    features: [
      "Up to 3 repository visualizations",
      "Basic code analysis",
      "Public repositories only",
      "Community support",
      "Limited AI chatbot queries",
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "19",
    description: "For professional developers and small teams",
    features: [
      "Unlimited repository visualizations",
      "Advanced code analysis & insights",
      "Private repositories",
      "Priority support",
      "Unlimited AI chatbot access",
      "Dependency mapping",
      "Custom documentation generation"
    ],
    cta: "Upgrade to Pro",
    highlighted: true
  },
  {
    name: "Team",
    price: "49",
    description: "For development teams and organizations",
    features: [
      "Everything in Pro",
      "Team collaboration features",
      "Role-based access control",
      "API access",
      "Integration with CI/CD pipelines",
      "Custom branding",
      "Dedicated account manager"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-horizon-50/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-horizon-50/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for you, from free exploration to team collaboration.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted 
                  ? 'border-2 border-horizon-500 shadow-xl shadow-horizon-100/30' 
                  : 'border border-border shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-horizon-500 text-white text-xs py-1 text-center font-medium">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-8 ${plan.highlighted ? 'pt-7' : ''}`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-5">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">/month</span>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <Button 
                  className={`w-full mb-8 ${
                    plan.highlighted 
                      ? 'bg-horizon-600 hover:bg-horizon-700 text-white' 
                      : 'bg-white hover:bg-gray-50 text-horizon-700 border border-horizon-200'
                  }`}
                >
                  {plan.cta}
                </Button>
                
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check size={18} className="text-horizon-600 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
