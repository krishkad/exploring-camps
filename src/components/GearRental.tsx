"use client";

import { ChevronLeft, ChevronRight, ArrowRight, Tent, Fan, Moon, Flame, Flashlight } from "lucide-react";
import { motion } from "framer-motion";
import coupleTent from "@/assets/couple-tent.jpg";
import smallTent from "@/assets/small-tent.jpg";
import largeTent from "@/assets/large-tent.jpg";

const gear = [
  {
    title: "Couple Tent",
    image: coupleTent.src,
    price: 150,
    desc: "Your ultimate companion for romantic getaways under the stars.",
    features: [
      { icon: Tent, label: "Single Tent" },
      { icon: Fan, label: "Tent Fan" },
      { icon: Moon, label: "Sleeping Bag" },
      { icon: Flame, label: "BBQ Stove" },
      { icon: Flashlight, label: "Headlamp" },
    ],
  },
  {
    title: "Small Tent",
    image: smallTent.src,
    price: 150,
    desc: "Perfect solo adventure tent built for mountain ridges and trails.",
    features: [
      { icon: Tent, label: "Single Tent" },
      { icon: Fan, label: "Tent Fan" },
      { icon: Moon, label: "Sleeping Bag" },
      { icon: Flame, label: "BBQ Stove" },
      { icon: Flashlight, label: "Headlamp" },
    ],
  },
  {
    title: "Large Tent",
    image: largeTent.src,
    price: 150,
    desc: "Spacious glamping tent with luxury interior for family adventures.",
    features: [
      { icon: Tent, label: "Single Tent" },
      { icon: Fan, label: "Tent Fan" },
      { icon: Moon, label: "Sleeping Bag" },
      { icon: Flame, label: "BBQ Stove" },
      { icon: Flashlight, label: "Headlamp" },
    ],
  },
];

const GearRental = () => {
  return (
    <section id="gear" className="section-light py-20 md:py-28">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-camping-orange font-heading text-lg font-medium italic">Explore Our</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Camping Gear<br />Rental Service
            </h2>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gear.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="card-camping"
            >
              <div className="image-hover rounded-none">
                <img src={item.image} alt={item.title} className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">
                  From <span className="text-foreground font-bold text-lg">${item.price}</span>
                  <span className="text-muted-foreground">/day</span>
                </p>
                <h3 className="font-heading text-xl font-bold mt-1 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.features.map((f) => (
                    <span key={f.label} className="inline-flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1 text-muted-foreground">
                      <f.icon className="h-3 w-3" />
                      {f.label}
                    </span>
                  ))}
                </div>
                <a href="#booking" className="inline-flex items-center gap-1 text-sm font-semibold text-camping-orange mt-4 hover:gap-2 transition-all">
                  See More Details <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="#gear" className="btn-camping-outline border-foreground/20 text-foreground hover:bg-foreground/5">
            Browse to All <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GearRental;
