"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What should I bring for camping?",
    a: "We provide all essential camping gear including tents, sleeping bags, and cooking equipment. Just bring personal items, comfortable clothing, and a sense of adventure!",
  },
  {
    q: "Are meals included?",
    a: "Yes! All our packages include three meals a day prepared with fresh, locally sourced ingredients. We also accommodate dietary restrictions with advance notice.",
  },
  {
    q: "Is the campsite safe?",
    a: "Absolutely. Our campsites are professionally managed with 24/7 security, well-lit pathways, and trained staff on site. We also provide first-aid facilities.",
  },
  {
    q: "Can beginners join activities?",
    a: "Of course! All our activities are designed for various skill levels. Our experienced guides ensure everyone has a safe and enjoyable experience, regardless of experience.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We offer free cancellation up to 48 hours before your check-in date. Cancellations within 48 hours may incur a 50% charge. Full refunds for weather-related cancellations.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-light py-20 md:py-28">
      <div className="mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-camping-orange font-heading text-lg font-medium">
            Help Center
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 data-[state=open]:border-camping-orange/30 transition-colors"
              >
                <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:text-camping-orange hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
