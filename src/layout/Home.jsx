import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import GallerySection from "../components/GallerySection";

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <GallerySection />
    </>
  );
}

export default Home;
