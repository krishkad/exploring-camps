"use client";

import { motion } from "framer-motion";
import hikingImg from "@/assets/hiking.jpg";
import campfireImg from "@/assets/campfire.jpg";
import kayakingImg from "@/assets/kayaking.jpg";
import stargazingImg from "@/assets/stargazing.jpg";
import forestImg from "@/assets/forest-trek.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";

const activities = [
  { title: "Mountain Hiking", desc: "Conquer breathtaking peaks and scenic trails.", image: hikingImg.src },
  { title: "Campfire Nights", desc: "Share stories around the warm glow of the fire.", image: campfireImg.src },
  { title: "Kayaking", desc: "Paddle through serene lakes and rushing rivers.", image: kayakingImg.src },
  { title: "Stargazing", desc: "Witness the cosmos far from city lights.", image: stargazingImg.src },
  { title: "Forest Trekking", desc: "Explore lush woodland paths and hidden trails.", image: forestImg.src },
  { title: "Wildlife Exploration", desc: "Discover nature's most majestic creatures.", image: wildlifeImg.src },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="section-dark py-20 md:py-28">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-camping-orange font-heading text-lg font-medium">Discover</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            Outdoor Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-dark group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-primary-foreground">{act.title}</h3>
                <p className="text-sm text-camping-text-light mt-1">{act.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
