"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import tentImg from "@/assets/tent-product.jpg";
import lanternImg from "@/assets/lantern-product.jpg";
import bottleImg from "@/assets/bottle-product.jpg";

const picks = [
  { title: "The Horizon Tent", image: tentImg.src },
  { title: "The Solar Lantern Pro", image: lanternImg.src },
  { title: "Green Thermal Water Bottle", image: bottleImg.src },
];

const TopPicks = () => {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-camping-orange font-heading text-lg font-medium">Explore Our</p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">Top Picks</h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-camping-orange hover:border-camping-orange hover:text-primary-foreground transition-all">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-camping-orange hover:border-camping-orange hover:text-primary-foreground transition-all">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {picks.map((pick, i) => (
            <motion.div
              key={pick.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="image-hover cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src={pick.image} alt={pick.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-lg font-semibold mt-4 text-foreground">{pick.title}</h3>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#gear" className="btn-camping">
            Shop Now
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
