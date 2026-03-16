"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import heroImg from "@/assets/hero-camping.jpg";
import campfireImg from "@/assets/campfire.jpg";

const images = [
  { src: gallery1.src, alt: "Tent by lake at sunset", tall: false },
  { src: gallery2.src, alt: "Campfire cooking", tall: true },
  { src: gallery3.src, alt: "Friends camping", tall: false },
  { src: gallery4.src, alt: "Mountain campsite", tall: true },
  { src: heroImg.src, alt: "Night camping", tall: false },
  { src: campfireImg.src, alt: "Campfire night", tall: false },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-light py-20 md:py-28">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-camping-orange font-heading text-lg font-medium">Visual Stories</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Adventure Gallery
          </h2>
        </div>

        {/* Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="break-inside-avoid image-hover cursor-pointer"
              onClick={() => setLightbox(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full rounded-2xl object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "hsla(0, 0%, 0%, 0.9)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground"
              onClick={() => setLightbox(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
