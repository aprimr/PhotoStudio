import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const DragCards = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const navigate = useNavigate();
  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-20 lg:py-24 bg-white dark:bg-black  overflow-hidden select-none"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-center mb-4 md:mb-6 lg:mb-8"
      >
        <div className="flex items-center justify-center gap-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 font-urbanist tracking-wide leading-tight">
            Gallery
          </h2>

          {/* Animated icon */}
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 30,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
              backgroundColor: {
                duration: 0.15,
              },
            }}
            onClick={() => navigate("/gallery")}
            className="p-2 rounded-full text-black dark:text-white hover:bg-black hover:dark:bg-white cursor-pointer
           hover:text-white dark:hover:text-black"
          >
            <motion.div className="dark:group-hover:text-gray-900">
              <ArrowUpRight className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mt-4 md:mt-6 rounded-full opacity-90 origin-left"
        />
      </motion.div>

      <div className="relative grid min-h-[50vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 place-content-center overflow-hidden">
        <h2 className="relative z-0 text-[11vw] font-black text-neutral-300/60 dark:text-neutral-700/50 md:text-[100px] font-calsans tracking-wide">
          DELIGHT STUDIO
        </h2>
        <Cards />
      </div>
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1504093376055-b3094b674dcb"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="35%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b"
        alt="Example image"
        rotate="12deg"
        top="45%"
        left="60%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1675102850391-d8f88332d192"
        alt="Example image"
        rotate="-6deg"
        top="20%"
        left="10%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1638401745143-8a4c44a50e91"
        alt="Example image"
        rotate="8deg"
        top="30%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="https://plus.unsplash.com/premium_photo-1694475032847-e6a228961e98"
        alt="Example image"
        rotate="18deg"
        top="20%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Example image"
        rotate="-3deg"
        top="35%"
        left="10%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

export default DragCards;
