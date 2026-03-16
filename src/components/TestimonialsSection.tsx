"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    review: "An absolutely magical experience! The stargazing night was unforgettable. The gear quality was top-notch and the staff were incredibly welcoming.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "James Rodriguez",
    review: "Best camping trip of my life. The couple tent was spacious and cozy. We'll definitely be coming back for another adventure next summer!",
    rating: 5,
    avatar: "JR",
  },
  {
    name: "Emily Chen",
    review: "The guided nature walk was breathtaking. RoCamper truly knows how to create premium outdoor experiences. Worth every penny.",
    rating: 5,
    avatar: "EC",
  },
  {
    name: "Marcus Thompson",
    review: "From kayaking to campfire stories, every moment was perfectly planned. The glamping tent exceeded all expectations. Five stars!",
    rating: 5,
    avatar: "MT",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-dark py-20 md:py-28">
      <div className="max-w-[1444px] mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-camping-orange font-heading text-lg font-medium">Reviews</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground">
            What Our Adventurers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card hover:border-camping-orange/30 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-camping-orange/20 flex items-center justify-center font-heading font-bold text-camping-orange">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-foreground">{t.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-camping-orange text-camping-orange" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-camping-text-light leading-relaxed">{t.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
