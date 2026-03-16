"use client";

import { Mountain, ArrowRight, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="footer" className="section-dark pt-16 pb-8">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-7 w-7 text-camping-orange" />
              <span className="font-heading text-xl font-bold text-primary-foreground">
                RO <span className="text-camping-orange">Camper</span>
              </span>
            </div>
            <p className="text-camping-text-light text-sm leading-relaxed max-w-sm">
              Your gateway to unforgettable outdoor adventures. Premium camping experiences
              crafted for those who seek the extraordinary in nature.
            </p>
            {/* Newsletter */}
            <div className="flex mt-6 max-w-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-camping-charcoal border border-camping-charcoal rounded-l-full px-5 py-2.5 text-sm text-primary-foreground placeholder:text-camping-text-light outline-none focus:border-camping-orange transition-colors"
              />
              <button className="btn-camping rounded-l-none rounded-r-full px-5 py-2.5 text-sm">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-camping-text-light">
              <li><a href="#" className="hover:text-camping-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-camping-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-camping-orange transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-camping-text-light">
              <li><a href="#gear" className="hover:text-camping-orange transition-colors">Packages</a></li>
              <li><a href="#activities" className="hover:text-camping-orange transition-colors">Activities</a></li>
              <li><a href="#gallery" className="hover:text-camping-orange transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-semibold text-primary-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-camping-text-light">
              <li><a href="#faq" className="hover:text-camping-orange transition-colors">FAQ</a></li>
              <li><a href="#footer" className="hover:text-camping-orange transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-camping-orange transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-camping-charcoal pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-camping-text-light">
            © 2026 RoCamper. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="text-camping-text-light hover:text-camping-orange transition-colors">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
