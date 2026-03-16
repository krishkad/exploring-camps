"use client";

import { Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-camping.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end pb-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg.src}
          alt="Camping under the stars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-camping-dark via-camping-dark/60 to-camping-dark/30" />
        {/* Orange gradient accent on right */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-camping-orange/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-camping-orange font-heading text-lg md:text-xl font-medium mb-2 tracking-wide">
            Never Stop
          </p>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8">
            <span className="text-primary-foreground">EXPLO</span>
            <span className="text-gradient-orange">RING</span>
          </h1>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center max-w-lg"
        >
          <div className="flex-1 flex items-center gap-3 bg-camping-charcoal backdrop-blur-sm rounded-l-full px-6 py-3 border border-camping-charcoal">
            <Search className="h-4 w-4 text-camping-text-light" />
            <input
              type="text"
              placeholder="Search Your Product"
              className="bg-transparent text-sm text-primary-foreground placeholder:text-camping-text-light outline-none w-full font-body"
            />
          </div>
          <button className="btn-camping rounded-l-none rounded-r-full px-8 py-3 text-sm">
            <Search className="h-4 w-4" />
            SEARCH
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
