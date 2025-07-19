import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
    >
      <div className="bg-white/80 dark:bg-black/70 backdrop-blur-md rounded-full shadow-md border border-gray-200/50 dark:border-gray-700/50 px-5 py-2.5 flex gap-5 sm:gap-6 items-center select-none">
        <DockItem label="Home" to="/" />
        <DockItem label="Gallery" to="/gallery" />
        <DockItem label="Blog" to="/blog" />
        <DockItem label="Contact" to="/contact" />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}

function DockItem({ label, to }) {
  return (
    <NavLink
      tabIndex={-1}
      to={to}
      className={({ isActive }) =>
        `flex group ${
          isActive
            ? "text-blue-500 dark:text-blue-400"
            : "text-black dark:text-white"
        }`
      }
    >
      <motion.span
        className="text-[14px] md:text-sm duration-200 font-poppins"
        tabIndex={-1}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {label}
      </motion.span>
    </NavLink>
  );
}

export default Navbar;
