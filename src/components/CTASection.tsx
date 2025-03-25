
import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-600/90 to-zinc-800/90 opacity-90"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Transform How You Understand Code?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of developers who have already improved their coding experience with Horizon AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-white text-zinc-700 hover:bg-white/90">
              <span>Try Free for 14 Days</span>
              <ChevronRight size={18} className="ml-2" />
            </Button>
            
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10">
              <span>Schedule a Demo</span>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/70">
            No credit card required • Free plan available • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
