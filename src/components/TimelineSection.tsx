"use client";

import { Sun, Coffee, TreePine, Utensils, Flame, Camera, Star, Music } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    period: "Morning",
    items: [
      { icon: Coffee, label: "Arrival & Welcome Drink" },
      { icon: TreePine, label: "Tent Setup" },
    ],
  },
  {
    period: "Afternoon",
    items: [
      { icon: TreePine, label: "Guided Nature Walk" },
      { icon: Utensils, label: "Outdoor Lunch" },
    ],
  },
  {
    period: "Evening",
    items: [
      { icon: Flame, label: "Campfire Stories" },
      { icon: Camera, label: "Sunset Photography" },
    ],
  },
  {
    period: "Night",
    items: [
      { icon: Star, label: "Stargazing" },
      { icon: Music, label: "Bonfire Music" },
    ],
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-charcoal py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-camping-orange font-heading text-lg font-medium">Plan Your Day</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Your Adventure Timeline
          </h2>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-camping-charcoal" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-[60px] left-0 right-0 h-0.5 bg-camping-orange origin-left"
          />

          <div className="grid grid-cols-4 gap-6 relative">
            {timeline.map((block, i) => (
              <motion.div
                key={block.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <Sun className="h-6 w-6 text-camping-orange" />
                </div>
                {/* Dot */}
                <div className="flex justify-center mb-6">
                  <div className="w-4 h-4 rounded-full bg-camping-orange border-4 border-camping-charcoal relative z-10" />
                </div>
                <h3 className="font-heading text-xl font-bold text-camping-orange mb-4">{block.period}</h3>
                <div className="space-y-3">
                  {block.items.map((item) => (
                    <div key={item.label} className="glass-card py-3 px-4 flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-camping-orange flex-shrink-0" />
                      <span className="text-sm text-primary-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-8">
          {timeline.map((block, i) => (
            <motion.div
              key={block.period}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-camping-orange" />
                {i < timeline.length - 1 && <div className="flex-1 w-0.5 bg-camping-orange/30 mt-1" />}
              </div>
              <div className="pb-6">
                <h3 className="font-heading text-lg font-bold text-camping-orange mb-3">{block.period}</h3>
                <div className="space-y-2">
                  {block.items.map((item) => (
                    <div key={item.label} className="glass-card py-2 px-3 flex items-center gap-2">
                      <item.icon className="h-4 w-4 text-camping-orange flex-shrink-0" />
                      <span className="text-sm text-primary-foreground">{item.label}</span>
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

export default TimelineSection;
