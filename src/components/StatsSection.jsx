import { animate, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full pb-20 bg-white dark:bg-black overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center font-urbanist text-black dark:text-white">
          SNAPSHOTS OF OUR{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            JOURNEY
          </span>
        </p>

        {/* Stats with vertical spacer lines */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-0 mt-8">
          <Stats
            number={500}
            sign="+"
            label="Happy Clients"
            isInView={isInView}
          />
          <Spacer />
          <Stats
            number={2000}
            sign="+"
            label="Projects Delivered"
            isInView={isInView}
          />
          <Spacer />
          <Stats
            number={10}
            sign="+"
            label="Years Experience"
            isInView={isInView}
          />
          <Spacer />
          <Stats
            number="Infinite"
            label="Memories Captured"
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

const Stats = ({ number, sign, label, isInView }) => {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 py-4">
      <p className="text-4xl sm:text-5xl font-bold text-black dark:text-white font-urbanist">
        <NumberCounter number={number} isInView={isInView} />
        {sign}
      </p>
      <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-poppins mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

const NumberCounter = ({ number, isInView }) => {
  const [display, setDisplay] = useState(
    typeof number === "number" ? 0 : number
  );

  useEffect(() => {
    if (!isInView) return;

    if (typeof number !== "number") {
      setDisplay(number);
      return;
    }

    const controls = animate(0, number, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplay(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [number, isInView]);

  return <span>{display}</span>;
};

const Spacer = () => (
  <div className="hidden sm:block w-px h-12 bg-gray-300 dark:bg-gray-700 mx-4" />
);
