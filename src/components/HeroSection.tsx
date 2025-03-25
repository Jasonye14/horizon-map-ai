
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, Code } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-horizon-50/50 to-transparent opacity-80"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-horizon-100/30 blur-3xl"></div>
        <div className="absolute top-[50%] -left-[20%] w-[50%] h-[50%] rounded-full bg-horizon-50/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col max-w-xl"
          >
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-horizon-100 text-horizon-800 w-fit">
              <span className="mr-2">✨</span>
              <span>Visualize code like never before</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Understand Your Code with
              <span className="text-gradient"> AI-Powered Clarity</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Horizon AI transforms complex codebases into intuitive visualizations and provides intelligent analysis, helping you navigate and understand any repository with ease.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full px-6 py-6 bg-horizon-600 hover:bg-horizon-700 text-white shadow-lg shadow-horizon-400/20">
                <span>Try Free</span>
                <ChevronRight size={18} className="ml-2" />
              </Button>
              
              <Button variant="outline" className="rounded-full px-6 py-6 border-horizon-200">
                <Github size={18} className="mr-2" />
                <span>Connect Repository</span>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              <p>No credit card required • Free plan available</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl overflow-hidden p-4 shadow-xl">
              <div className="absolute top-3 left-3 flex space-x-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              <div className="rounded-xl overflow-hidden bg-gray-900 mt-4">
                <img 
                  src="https://cdn.pixabay.com/photo/2023/04/29/04/54/ai-generated-7957088_1280.jpg" 
                  alt="Code visualization" 
                  className="w-full h-auto object-cover opacity-90"
                />
              </div>
              
              <div className="mt-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 bg-horizon-600 rounded-full flex items-center justify-center">
                    <Code size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-horizon-800">AI Code Analysis</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your codebase has 24 components with 87% test coverage and 3 potential performance issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -bottom-8 -left-8 glass-card rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-horizon-100 rounded-full flex items-center justify-center">
                  <Github size={16} className="text-horizon-700" />
                </div>
                <div className="text-xs">
                  <p className="font-medium">Repository Analysis</p>
                  <p className="text-muted-foreground">23 contributors</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              className="absolute top-10 -right-5 glass-card rounded-lg p-3 shadow-lg"
            >
              <div className="text-xs">
                <p className="font-medium">AI Assistant</p>
                <p className="text-muted-foreground">How does this function work?</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
