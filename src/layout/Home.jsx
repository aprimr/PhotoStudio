import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestemonialSection";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function Home() {
  return (
    <div className="relative">
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <motion.a
        href="https://whatsapp.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, y: -4 }}
        className="fixed bottom-[5%] right-5 z-50 flex items-center justify-center h-12 w-12 rounded-full bg-[#25D366] shadow-lg cursor-pointer"
      >
        <FaWhatsapp className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}

export default Home;
