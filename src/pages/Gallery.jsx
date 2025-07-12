import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

function Gallery() {
  const [viewImage, setViewImage] = useState("");

  const imageUrls = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
    "https://images.unsplash.com/photo-1751906380892-8b95090cc797",
    "https://images.unsplash.com/photo-1593642532744-d377ab507dc8",
    "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    "https://images.unsplash.com/photo-1444065381814-865dc9da92c0",
    "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2",
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
    "https://images.unsplash.com/photo-1550439062-609e1531270e",
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    "https://images.unsplash.com/photo-1487014679447-9f8336841d58",
    "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1534080564583-6be75777b70a",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
    "https://images.unsplash.com/photo-1542751110-97427bbecf20",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5",
    "https://images.unsplash.com/photo-1750930341486-c573d31b9b0a",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    "https://images.unsplash.com/photo-1550642249-6e5605421172",
    "https://images.unsplash.com/photo-1554710869-95f3df6a3197",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
    "https://images.unsplash.com/photo-1512036594830-51cea3a8df78",
    "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d",
    "https://images.unsplash.com/photo-1549880338-65ddcdfd017b",
    "https://images.unsplash.com/photo-1751583278667-9b27c32d01ea",
    "https://images.unsplash.com/photo-1750688650545-d9e2a060dfe8",
    "https://images.unsplash.com/photo-1752091948423-f75b57fdae4a",
  ];

  const videoUrls = [
    "https://www.youtube.com/embed/bY_gRApfoJk?si=T4z38TNq9eaP_hQX",
    "https://www.youtube.com/embed/GhdVvDIaGVo?si=U7n10vA4TgVmJrea",
  ];

  // Disable scroll on image view
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setViewImage(null);
      }
    };
    if (viewImage) {
      window.addEventListener("keydown", handleEsc);
    }

    if (viewImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [viewImage]);

  useEffect(() => {}, [viewImage]);

  return (
    <div
      className={`w-full min-h-screen bg-white dark:bg-black flex flex-col items-center overflow-hidden select-none relative`}
    >
      <div className="max-w-7xl w-full min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8 pt-28 pb-16">
        {/* Title */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[3rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-black dark:text-white font-montserrat tracking-tight"
          >
            GALLERY
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "66%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mt-0 sm:mt-2 rounded-full relative"
          >
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-black/20"
            />
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-3 text-xs sm:text-sm uppercase text-gray-600 dark:text-gray-400 tracking-[0.3em]"
        >
          EXPLORE OUR PHOTOGRAPHY
        </motion.p>

        {/* Image Grid */}
        <div className="w-full max-w-6xl mt-10 columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {imageUrls.map((url, index) => (
            <motion.img
              whileHover={{ scale: 1.02 }}
              key={index}
              loading="lazy"
              src={`${url}?auto=format&fit=crop&w=800&q=80`}
              alt={`Gallery image ${index + 1}`}
              onClick={() => setViewImage(url)}
              className="w-full rounded-lg break-inside-avoid shadow-md transition-transform duration-300 ease-in-out cursor-pointer"
            />
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 text-xs sm:text-sm uppercase text-gray-600 dark:text-gray-400 tracking-[0.3em]"
        >
          EXPLORE OUR VIDEOGRAPHY
        </motion.p>

        {/* Video Grid */}
        <div className="w-full max-w-6xl mt-8 columns-1 md:columns-2 gap-6 space-y-6">
          {videoUrls.map((url, index) => (
            <iframe
              key={index}
              src={`${url}?modestbranding=1&rel=0&showinfo=0`}
              title={`Video ${index + 1}`}
              width="100%"
              height="200"
              className="rounded-lg shadow-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>

      {/* Image Viewer Modal */}
      {viewImage && (
        <div
          tabIndex={1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-black/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setViewImage(null)}
        >
          <div
            className="relative flex flex-col items-center justify-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`${viewImage}?auto=format&fit=contain&w=1200&q=90`}
              alt="Preview"
              className="max-w-[90%] max-h-[80vh] rounded-lg shadow-2xl"
            />
            <p className="text-xs md:text-sm text-black dark:text-white mt-4 font-poppins">
              Tap outside{" "}
              <span className="inline-block md:hidden">the image</span>
              <span className="hidden md:inline-block">or press Esc</span> to
              close image
            </p>
          </div>
        </div>)}
    </div>
  );
}

export default Gallery;
