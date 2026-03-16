"use client";

import { CalendarDays, Users, Tent, TreePine } from "lucide-react";
import { motion } from "framer-motion";

const BookingSection = () => {
  return (
    <section id="booking" className="section-dark py-20 md:py-28 relative">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-camping-orange font-heading text-lg font-medium">Reserve Your Spot</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Book Your Adventure
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glass-card orange-glow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Check-in */}
            <div>
              <label className="text-sm text-camping-text-light mb-2 flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-camping-orange" />
                Check-in Date
              </label>
              <input
                type="date"
                className="w-full bg-camping-charcoal/50 border border-camping-charcoal rounded-lg px-4 py-3 text-primary-foreground text-sm outline-none focus:border-camping-orange transition-colors"
              />
            </div>
            {/* Check-out */}
            <div>
              <label className="text-sm text-camping-text-light mb-2 flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-camping-orange" />
                Check-out Date
              </label>
              <input
                type="date"
                className="w-full bg-camping-charcoal/50 border border-camping-charcoal rounded-lg px-4 py-3 text-primary-foreground text-sm outline-none focus:border-camping-orange transition-colors"
              />
            </div>
            {/* Guests */}
            <div>
              <label className="text-sm text-camping-text-light mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-camping-orange" />
                Number of Guests
              </label>
              <select className="w-full bg-camping-charcoal/50 border border-camping-charcoal rounded-lg px-4 py-3 text-primary-foreground text-sm outline-none focus:border-camping-orange transition-colors">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            {/* Tent type */}
            <div>
              <label className="text-sm text-camping-text-light mb-2 flex items-center gap-2">
                <Tent className="h-4 w-4 text-camping-orange" />
                Tent Type
              </label>
              <select className="w-full bg-camping-charcoal/50 border border-camping-charcoal rounded-lg px-4 py-3 text-primary-foreground text-sm outline-none focus:border-camping-orange transition-colors">
                <option>Couple Tent</option>
                <option>Small Tent</option>
                <option>Large Tent</option>
                <option>Glamping Suite</option>
              </select>
            </div>
            {/* Activities */}
            <div className="md:col-span-2">
              <label className="text-sm text-camping-text-light mb-2 flex items-center gap-2">
                <TreePine className="h-4 w-4 text-camping-orange" />
                Activities
              </label>
              <div className="flex flex-wrap gap-2">
                {["Hiking", "Kayaking", "Stargazing", "Campfire", "Wildlife Tour", "Photography"].map((a) => (
                  <label key={a} className="inline-flex items-center gap-2 text-sm bg-camping-charcoal/50 border border-camping-charcoal rounded-full px-4 py-2 cursor-pointer hover:border-camping-orange transition-colors text-primary-foreground">
                    <input type="checkbox" className="accent-camping-orange" />
                    {a}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <button className="btn-camping w-full mt-8 py-4 text-lg">
            Book Your Adventure
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
