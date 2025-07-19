import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Camera from "../assets/camera.png";
import Hero1 from "../assets/hero-1.jpeg";
import HeroVideo from "../assets/herovideo.mp4";
import { Clapperboard, Sparkles, Video, Airplay } from "lucide-react";

function Hero() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black flex flex-col justify-center items-center relative overflow-hidden select-none">
      {/* Background glow effects*/}
      <div>
        <div className="absolute top-[28%] left-[30%] w-96 h-64 rounded-full bg-blue-100/40 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
        <div className="absolute top-[33%] right-[30%] w-96 h-64 rounded-full bg-blue-100/40 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
        <div className="absolute bottom-[11%] left-[27%] w-64 h-64 rounded-full bg-blue-100/80 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
      </div>

      {/* Background Icons */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Video className="absolute top-[13%] left-[10%] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-neutral-500 dark:text-neutral-200 -rotate-12 opacity-20" />
        <Clapperboard className="absolute bottom-[40%] right-[11%] w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-neutral-500 dark:text-neutral-200 rotate-12 opacity-20" />
        <Airplay className="absolute bottom-[10%] left-[10%] w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 text-pink-400 dark:text-pink-500 rotate-6 opacity-20" />
      </motion.div>

      <div className="max-w-7xl w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
        {/* Floating Service Cards - Desktop */}
        <div className="hidden lg:flex flex-col w-full h-full items-center justify-center px-4 py-8 relative z-20 gap-6">
          {/* Photography Card */}
          <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-gray-700 w-full max-w-xs sm:w-72 z-20 overflow-hidden relative sm:absolute sm:bottom-[8%] sm:left-[0%] mx-auto mb-6 sm:mb-0">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <img
                src={Hero1}
                alt="Portrait Photography"
                className="w-full h-28 object-cover rounded-lg"
              />
              <img
                src="https://images.pexels.com/photos/32890860/pexels-photo-32890860.jpeg"
                alt="Product Photography"
                className="w-full h-28 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-raleway mb-1">
              Photography
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins">
              Personal, wedding, product, event photography
            </p>
          </div>

          {/* Videography Card */}
          <div className="bg-white/60 dark:bg-gray-900/40 backdrop-blur-lg rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-gray-700 w-full max-w-xs sm:w-72 z-20 overflow-hidden relative sm:absolute sm:bottom-[20%] sm:right-[0%] mx-auto">
            <div
              className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 mb-1"
              style={{ paddingTop: "56.25%" }}
            >
              <ReactPlayer
                src={HeroVideo}
                controls={false}
                muted
                playing={true}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-raleway mb-1">
              Videography
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-poppins">
              Videos for weddings, commercials, events, and promotional
              purposes.
            </p>
          </div>
        </div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-[9rem] w-full flex justify-center items-center text-black dark:text-white font-poppins z-10"
        >
          <div className="relative w-auto">
            {/* Shadow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[calc(100%-20px)] h-2 rounded-full bg-gray-400/30 dark:bg-gray-500/20 blur-[4px] z-[-1]" />
            <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[calc(100%-10px)] h-1.5 rounded-full bg-gray-400/20 dark:bg-gray-500/15 blur-[3px] z-[-1]" />

            <div className="w-full px-5 py-1.5 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-950 dark:via-neutral-800 dark:to-neutral-950  border border-neutral-700/20 dark:border-neutral-600/50 rounded-full backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-sm font-medium tracking-wide bg-gradient-to-r from-neutral-700 to-neutral-600 dark:from-neutral-300 dark:to-neutral-200 bg-clip-text text-transparent">
                Every Moment,{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500">
                  Beautifully
                </span>{" "}
                Captured{" "}
                <Sparkles className="inline-block align-middle h-4 w-4 text-yellow-500" />
              </p>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div
          className="absolute top-[12rem] w-full text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.4 },
            },
          }}
        >
          <motion.div
            className="text-[2rem] sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[8rem] font-semibold text-black dark:text-white font-calsans tracking-tight leading-none whitespace-nowrap"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  damping: 15,
                  stiffness: 100,
                  mass: 0.5,
                },
              },
            }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: 0.6,
                  },
                },
              }}
            >
              SHUBHARAMBHA
            </motion.span>
            <span className="inline-block opacity-0">.</span>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: 0.6,
                  },
                },
              }}
            >
              STUDIOS
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Camera image */}
        <div className="absolute top-[10rem] w-full flex items-center justify-center">
          <img
            src={Camera}
            className="h-auto max-h-[50vh] sm:max-h-[70vh] md:max-h-[80vh] w-auto max-w-full object-contain z-10"
            alt="Professional Camera"
          />
        </div>
      </div>

      {/* Floating Service Cards - Mobile */}
      <div className="sm:hidden w-full h-[55%] absolute bottom-0 left-0 px-4 py-4">
        {/* Photography Card */}
        <div className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-md w-60 rounded-xl p-3 shadow-lg border border-gray-100 dark:border-gray-700 absolute top-0 z-20 left-4">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <img
              src={Hero1}
              alt="Portrait Photography"
              className="w-full h-22 object-cover rounded-sm"
            />
            <img
              src="https://images.pexels.com/photos/32890860/pexels-photo-32890860.jpeg"
              alt="Product Photography"
              className="w-full h-22 object-cover rounded-sm"
            />
          </div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1">
            Photography
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Personal, wedding, product, event photography
          </p>
        </div>

        {/* Videography Card */}
        <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md w-60 rounded-xl p-3 shadow-lg border border-gray-100 dark:border-gray-700 absolute bottom-20 z-0 right-4">
          <div
            className="relative w-full rounded-md overflow-hidden mb-2"
            style={{ paddingTop: "56.25%" }}
          >
            <ReactPlayer
              src={HeroVideo}
              controls={false}
              muted
              loop={true}
              playing={true}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1">
            Videography
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Videos for weddings, commercials, events, and promotional purposes.
          </p>
        </div>
      </div>

      {/* Floating Service Cards - tablet */}
      <div className="hidden sm:flex lg:hidden w-full h-2/3 absolute bottom-0 left-0 px-4 py-4">
        {/* Photography Card */}
        <div className="bg-white/80 dark:bg-gray-900/40 backdrop-blur-md w-60 rounded-xl p-3 shadow-lg border border-gray-100 dark:border-gray-700 absolute bottom-44 z-20 left-4">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <img
              src={Hero1}
              alt="Portrait Photography"
              className="w-full h-22 object-cover rounded-sm"
            />
            <img
              src="https://images.pexels.com/photos/32890860/pexels-photo-32890860.jpeg"
              alt="Product Photography"
              className="w-full h-22 object-cover rounded-sm"
            />
          </div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1">
            Photography
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Personal, wedding, product, event photography
          </p>
        </div>

        {/* Videography Card */}
        <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md w-60 rounded-xl p-3 shadow-lg border border-gray-100 dark:border-gray-700 absolute bottom-1 z-0 right-4">
          <div
            className="relative w-full rounded-md overflow-hidden mb-2"
            style={{ paddingTop: "56.25%" }}
          >
            <ReactPlayer
              src={HeroVideo}
              controls={false}
              muted
              loop={true}
              playing={true}
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </div>
          <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-1">
            Videography
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-300">
            Videos for weddings, commercials, events, and promotional purposes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
