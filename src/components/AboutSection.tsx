"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import camperImg from "@/assets/camper-about.jpg";
import tentImg from "@/assets/tent-about2.jpg";

const stats = [
  { value: "20k", label: "Products" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "45k", label: "World Wide Customers" },
];

const AboutSection = () => {
  return (
    <section className="section-light py-20 md:py-28">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="image-hover rounded-2xl overflow-hidden aspect-[3/4] max-w-md">
              <img src={camperImg.src} alt="Camper in tent" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-camping-cream hidden md:block">
              <img src={tentImg.src} alt="Camping tent" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Empowering Outdoor Adventures{" "}
              <span className="text-gradient-orange">Where Quality Meets Nature</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At RoCamper, we understand the importance of reliable gear when exploring the great
              outdoors. Our carefully curated selection includes camping tents engineered for
              durability and weather resistance, cozy sleeping bags that guarantee a restful night
              under the stars, and innovative camping accessories designed to make every moment
              in the wilderness memorable.
            </p>
            <a href="#booking" className="btn-camping-outline mt-6 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40">
              About Us
              <ArrowRight className="h-4 w-4" />
            </a>

            {/* Stats */}
            <div className="flex gap-10 mt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
