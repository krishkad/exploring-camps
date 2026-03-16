import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import GearRental from "@/components/GearRental";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <TopPicks /> */}
      <AboutSection />
      <GearRental />
      <ActivitiesSection />
      <TimelineSection />
      <BookingSection />
      <GallerySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
