"use client";

import { useState } from "react";
import { Search, User, Menu, X, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#gear" },
  { label: "Activities", href: "#activities" },
  { label: "Adventure Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 section-dark border-b border-camping-charcoal/50">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Mountain className="h-7 w-7 text-camping-orange" />
          <span className="font-heading text-xl font-bold tracking-tight text-primary-foreground">
            RO <span className="text-camping-orange">Camper</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-camping-text-light hover:text-camping-orange transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-camping-text-light hover:text-camping-orange transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 text-camping-text-light hover:text-camping-orange transition-colors hidden md:block">
            <User className="h-5 w-5" />
          </button>
          <a href="#booking" className="btn-camping text-sm px-5 py-2 hidden md:inline-flex">
            Book Now
          </a>
          <button
            className="p-2 text-camping-text-light lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden section-dark border-t border-camping-charcoal/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-camping-text-light hover:text-camping-orange transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href="#booking" className="btn-camping text-sm mt-2 text-center">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
