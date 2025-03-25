
import React from 'react';
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="mb-5">
              <Link to="/" className="text-xl font-bold text-horizon-700">Horizon AI</Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Helping developers understand code faster through AI-powered visualization and analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-horizon-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-horizon-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-horizon-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-horizon-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-horizon-600 transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-horizon-600 transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="text-muted-foreground hover:text-horizon-600 transition-colors">Integrations</Link></li>
              <li><Link to="/changelog" className="text-muted-foreground hover:text-horizon-600 transition-colors">Changelog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-muted-foreground hover:text-horizon-600 transition-colors">Documentation</Link></li>
              <li><Link to="/api" className="text-muted-foreground hover:text-horizon-600 transition-colors">API</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-horizon-600 transition-colors">Guides</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-horizon-600 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-horizon-600 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-horizon-600 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-horizon-600 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-horizon-600 transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Horizon AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-horizon-600 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-horizon-600 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-horizon-600 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
