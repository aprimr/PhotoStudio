import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StudioImage from "../assets/hero-1.jpeg";
import PortraitImage from "../assets/hero-1.jpeg";
import TeamImage from "../assets/hero-1.jpeg";

function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full pt-26 pb-8 md:pt-28 md:pb-10 lg:pt-32 lg:pb-12 bg-white dark:bg-black relative overflow-hidden px-5 sm:px-8 lg:px-10 select-none"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-48 h-48 rounded-full bg-blue-100/15 dark:bg-blue-900/10 blur-xl opacity-80" />
        <div className="absolute top-[20%] right-[5%] w-56 h-56 rounded-full bg-blue-100/10 dark:bg-purple-900/10 blur-xl opacity-80" />
        <div className="absolute bottom-[15%] left-[15%] w-40 h-40 rounded-full bg-blue-100/10 dark:bg-gray-800/10 blur-xl opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-urbanist tracking-wide leading-tight">
            About US
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 md:mt-6 rounded-full opacity-90" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-gray-100 font-raleway leading-snug">
              Introduction
            </h3>
            <div className="space-y-3 md:space-y-4 lg:space-y-5 text-gray-600 dark:text-gray-400 text-base md:text-lg font-poppins leading-relaxed">
              <p className="opacity-90">
                Shubharambha Studios is a creative photography and videography
                studio based in Ghorahi, near Lakkhan Park. We focus on
                capturing real emotions and timeless moments through our lens.
              </p>
              <p className="opacity-90">
                Our photography services include bridal, engagement, commercial,
                corporate, event and party coverage, graduation, and newborn
                sessions. We also provide professional videography and studio
                rentals.
              </p>
              <p className="opacity-90">
                Whether you're celebrating a personal milestone or growing a
                brand, we bring creativity, care, and quality to every project
                we work on.
              </p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 order-1 lg:order-2"
          >
            {/* Main Studio Image */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="col-span-1 sm:col-span-2 h-64 sm:h-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-900/50"
            >
              <img
                src={StudioImage}
                alt="Our Studio"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right-side stacked images */}
            <div className="col-span-1 flex flex-row sm:flex-col gap-3">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800"
              >
                <img
                  src={PortraitImage}
                  alt="Portrait Work"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="aspect-square rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-800"
              >
                <img
                  src={TeamImage}
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
