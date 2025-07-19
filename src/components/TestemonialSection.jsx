import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Sujan B.",
    role: "Wedding Client",
    quote:
      "Amazing service and beautiful photos! They captured our special day perfectly.",
    rating: 5,
  },
  {
    name: "Pratima K.",
    role: "Portrait Client",
    quote:
      "The studio was super comfortable and welcoming. The photographer made me feel at ease.",
    rating: 4,
  },
  {
    name: "Rohit M.",
    role: "Business Owner",
    quote:
      "Their product photography boosted my brand recognition by 40% in just two months!",
    rating: 5,
  },
  {
    name: "Rina S.",
    role: "Event Client",
    quote:
      "They captured every moment perfectly. The team was professional yet fun to work with.",
    rating: 5,
  },
  {
    name: "Bikash T.",
    role: "Passport Client",
    quote:
      "Quick service and great quality passport photos. Done in under 15 minutes!",
    rating: 4,
  },
  {
    name: "Kritika D.",
    role: "Studio Client",
    quote:
      "Loved the lighting and the relaxed environment. The photos turned out stunning!",
    rating: 5,
  },
];

const TestimonialCard = ({ t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden rounded-2xl w-full h-[200px] mx-auto"
  >
    {/* Animated border */}
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
    <div className="absolute left-[1.5px] top-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] rounded-2xl bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-black z-10 p-6 text-white flex flex-col">
      <div className="cursor-default">
        <div className="flex flex-col h-full justify-between">
          <div className="mt-auto flex flex-row items-center gap-3 mb-1">
            <div className="h-10 w-10 border rounded-full">
              <img src="" alt={t.name} className="" />
            </div>
            <div>
              <h4 className="text-md font-semibold font-raleway text-indigo-600 dark:text-indigo-400">
                {t.name}
              </h4>
              <p className="text-sm font-poppins text-gray-500 dark:text-gray-400">
                {t.role}
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-[15px] font-montserrat leading-relaxed mb-4">
              “{t.quote}”
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const VerticalLoop = ({ reverse = false }) => {
  const duration = 30; // seconds

  return (
    <div className="overflow-hidden h-[450px]">
      <div
        className="flex flex-col gap-6 animate-vertical-loop"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: `${duration}s`,
        }}
      >
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i}>
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white font-urbanist tracking-wide leading-tight">
            What our clients say
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 md:mt-6 rounded-full opacity-90" />
        </motion.div>

        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          class="elfsight-app-49a48335-7a4e-4940-8b79-1b4e3d7c32ba"
          data-elfsight-app-lazy
        ></div>

        {/* <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="hidden xl:block">
            <VerticalLoop />
          </div>
          <VerticalLoop reverse />
          <div className="hidden sm:block">
            <VerticalLoop />
          </div>
          <div className="absolute bottom-0 h-36 w-full bg-gradient-to-b from-transparent via-white/10 to-white/90 dark:from-transparent dark:via-black/10 dark:to-black/90" />
          <div className="absolute top-0 h-36 w-full bg-gradient-to-b to-transparent via-white/10 from-white/90 dark:to-transparent dark:via-black/10 dark:from-black/90" />
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
