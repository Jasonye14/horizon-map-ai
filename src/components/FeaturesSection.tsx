
import React from 'react';
import { motion } from "framer-motion";
import { GitBranch, MessageSquare, GitFork, Search, FileCode, LineChart } from "lucide-react";

const features = [
  {
    icon: <GitBranch className="h-6 w-6 text-horizon-600" />,
    title: "Repository Visualization",
    description: "Transform complex repository structures into intuitive, interactive diagrams that make navigation effortless."
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-horizon-600" />,
    title: "AI Code Assistant",
    description: "Chat with our AI to ask questions about any part of your codebase and receive detailed explanations."
  },
  {
    icon: <GitFork className="h-6 w-6 text-horizon-600" />,
    title: "Dependency Mapping",
    description: "Visualize relationships between components, functions, and modules to understand code architecture."
  },
  {
    icon: <Search className="h-6 w-6 text-horizon-600" />,
    title: "Semantic Search",
    description: "Find relevant code snippets instantly with our AI-powered semantic code search engine."
  },
  {
    icon: <FileCode className="h-6 w-6 text-horizon-600" />,
    title: "Documentation Generation",
    description: "Automatically generate comprehensive documentation for your entire codebase or selected components."
  },
  {
    icon: <LineChart className="h-6 w-6 text-horizon-600" />,
    title: "Performance Analysis",
    description: "Identify bottlenecks and optimization opportunities in your code with actionable recommendations."
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="h-12 w-12 bg-horizon-50 rounded-lg flex items-center justify-center mb-4">
        {feature.icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-horizon-50/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-horizon-100/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Code Understanding
          </h2>
          <p className="text-lg text-muted-foreground">
            Horizon AI combines visualization, AI analysis, and intelligent tools to help you understand any codebase in minutes instead of days.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
