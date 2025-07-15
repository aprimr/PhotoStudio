import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import Camera from "../assets/camera.png";
import Hero1 from "../assets/hero-1.jpeg";
import HeroVideo from "../assets/herovideo.mp4";

function Hero() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black flex flex-col justify-center items-center relative overflow-hidden select-none">
      {/* Background glow effects - static */}
      <div>
        <div className="absolute top-[28%] left-[30%] w-96 h-64 rounded-full bg-blue-100/40 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
        <div className="absolute top-[33%] right-[30%] w-96 h-64 rounded-full bg-blue-100/40 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
        <div className="absolute bottom-[11%] left-[27%] w-64 h-64 rounded-full bg-blue-100/80 dark:bg-gray-600 blur-3xl rotate-12 z-0" />
      </div>

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

        {/* Animated Text */}
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
            className="text-[3rem] sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-semibold text-black dark:text-white font-calsans tracking-tight leading-none whitespace-nowrap"
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
              DELIGHT
            </motion.span>
            <span className="inline-block mx-2 sm:mx-4 opacity-0">..</span>
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
              STUDIO
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Camera image - static */}
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
        <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-md w-60 rounded-xl p-3 shadow-lg border border-gray-100 dark:border-gray-700 absolute bottom-10 z-0 right-4">
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
