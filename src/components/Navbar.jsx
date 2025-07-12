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
      <div className="bg-white/90 dark:bg-black/70 backdrop-blur-md rounded-full shadow-md border border-gray-200/50 dark:border-gray-700/50 px-5 py-2.5 flex gap-5 sm:gap-6 items-center select-none">
        {/* Dock Icons */}
        <DockIcon label="Home" to="/" />
        <DockIcon label="Gallery" to="/gallery" />
        <DockIcon label="About" to="/about" />
        <DockIcon label="Contact" to="/contact" />
        <ThemeToggle />
      </div>
    </motion.div>
  );
}

function DockIcon({ label, to }) {
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
        className="text-sm md:text-base duration-200 font-poppins group-hover:opacity-95"
        tabIndex={-1}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {label}
      </motion.span>
    </NavLink>
  );
}

export default Navbar;
