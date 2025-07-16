import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { Image, Clapperboard, Package, Printer, Users } from "lucide-react";
const services = [
  {
    icon: <Users />,
    title: "Event Photography",
    description:
      "We capture your special events with beautiful photos you'll always remember.",
  },
  {
    icon: <FaCameraRetro className="text-2xl" />,
    title: "Studio Portraits",
    description:
      "Portraits of individuals, couples, and families in a comfortable studio.",
  },
  {
    icon: <Clapperboard />,
    title: "Videography",
    description:
      "Videos for weddings, events, and businesses with smooth lighting and beautiful visuals.",
  },
  {
    icon: <Package />,
    title: "Product Photography",
    description: "High quality photos that make your products shine.",
  },
  {
    icon: <Image />,
    title: "Passport Photos",
    description:
      "Passport size and ID photos that are official, clear, and print-ready within minutes.",
  },
  {
    icon: <Printer />,
    title: "Printing & Framing",
    description:
      "We print, frame, and laminate your photos using premium materials for lasting quality.",
  },
];

function ServicesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-black overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-urbanist tracking-wide leading-tight">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 md:mt-6 rounded-full opacity-90" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                opacity: { duration: 0.4, delay: index * 0.1 },
                y: { duration: 0.4, delay: index * 0.1 },
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="relative overflow-hidden rounded-2xl w-full h-[200px] mx-auto"
            >
              {/* Animated conic border */}
              <div
                className="absolute left-[-75%] top-[-75%] w-[250%] h-[250%] rounded-full pointer-events-none z-0 animate-spin"
                style={{
                  background: `conic-gradient(
                    rgba(192, 132, 252, 0.4) 0deg,
                    rgba(104, 230, 255, 0.4) 20deg,
                    transparent 100deg
                  )
                  `,
                }}
              ></div>

              {/* Card content */}
              <div className="absolute left-[1.5px] top-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] rounded-2xl bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black z-10 p-6 text-white flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-200/40 dark:bg-blue-500/20 text-black dark:text-white p-2 rounded-md flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-black dark:text-white text-2xl font-bold font-urbanist mt-1">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-[15px] sm:text-[13px] md:text-[18px] font-poppins leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
