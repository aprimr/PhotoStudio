import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import StudioImage from "../assets/hero-1.jpeg";
import PortraitImage from "../assets/hero-1.jpeg";
import TeamImage from "../assets/hero-1.jpeg";
import { Sparkles } from "lucide-react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <section className="w-full py-20 md:py-28 lg:py-32 bg-white dark:bg-black relative overflow-hidden px-5 sm:px-8 lg:px-10 select-none">
      {/* Background glow effects - subtle and spacious */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full bg-blue-100/15 dark:bg-blue-900/10 blur-xl opacity-80" />
        <div className="absolute top-[20%] right-[5%] w-56 h-56 rounded-full bg-blue-100/10 dark:bg-purple-900/10 blur-xl opacity-80" />
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 rounded-full bg-blue-100/10 dark:bg-gray-800/10 blur-xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header with generous spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-urbanist tracking-wide leading-tight">
            Our Creative Journey
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-6 rounded-full opacity-90" />
        </motion.div>

        {/* Content Grid with balanced spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20  items-center">
          {/* Text Content with comfortable reading space */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 font-raleway leading-snug">
              Capturing Moments Since 2012
            </h3>

            <div className="space-y-5 text-gray-600 dark:text-gray-300 text-lg font-poppins leading-relaxed">
              <p className="opacity-90">
                At Delight Studio, we believe every photograph tells a story.
                Founded by award-winning photographer Jane Doe, our studio has
                become a creative hub for those who value authentic, timeless
                imagery.
              </p>
              <p className="opacity-90">
                Specializing in wedding photography, portrait sessions, and
                commercial work, we blend technical precision with artistic
                vision to create images that resonate.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-200/90 dark:border-gray-700/80 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-white font-raleway mb-1">
                  10+
                </div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-roboto">
                  Years
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-200/90 dark:border-gray-700/80 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-white font-raleway mb-1">
                  500+
                </div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-roboto">
                  Clients
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-200/90 dark:border-gray-700/80 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-white font-raleway mb-1">
                  Infinite
                </div>
                <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-roboto">
                  Memories
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-72 sm:h-96 md:h-[28rem] md:w-full"
          >
            {/* Main Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={isVisible ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl z-10 border-8 border-white dark:border-gray-900/50"
            >
              <img
                src={StudioImage}
                alt="Our Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Sparkles icon */}
            <motion.div
              initial={{ x: 40, y: 40, opacity: 0 }}
              animate={
                isVisible ? { x: -24, y: -24, opacity: 1, rotate: -10 } : {}
              }
              transition={{ delay: 0.5 }}
              className="absolute text-amber-400 flex gap-2 z-50 top-1 -left-1"
            >
              <Sparkles className="h-8 w-8 -rotate-12" />
              <Sparkles className="h-7 w-7 rotate-45" />
            </motion.div>

            {/* Floating Image 1 */}
            <motion.div
              initial={{ x: 40, y: 40, opacity: 0 }}
              animate={isVisible ? { x: -24, y: -24, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 z-50 bottom-0 left-0"
            >
              <img
                src={PortraitImage}
                alt="Portrait Work"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Image 2 */}
            <motion.div
              initial={{ x: -40, y: 40, opacity: 0 }}
              animate={isVisible ? { x: 24, y: -24, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800 z-50 top-4 right-4"
            >
              <img
                src={TeamImage}
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
