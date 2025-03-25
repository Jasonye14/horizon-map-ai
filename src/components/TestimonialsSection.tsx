
import React from 'react';
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Horizon AI transformed how our team understands code. What used to take days of reading documentation now takes minutes with visual diagrams and AI explanations.",
    author: "Sarah Chen",
    title: "CTO, TechFlow",
    avatar: "SC"
  },
  {
    quote: "The code visualization feature is a game-changer for onboarding new developers. It cuts down the learning curve by at least 50%.",
    author: "Michael Rodriguez",
    title: "Engineering Lead, DevFirst",
    avatar: "MR"
  },
  {
    quote: "I was skeptical about AI code analysis, but Horizon's accuracy and depth of understanding is impressive. It saved me countless hours debugging a complex legacy codebase.",
    author: "Alex Johnson",
    title: "Senior Developer, CodeCraft",
    avatar: "AJ"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-horizon-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-horizon-100/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-muted-foreground">
            See what developers and teams are saying about Horizon AI.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass-card border-none">
                <CardContent className="p-8">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src="" alt={testimonial.author} />
                      <AvatarFallback className="bg-horizon-200 text-horizon-700">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
