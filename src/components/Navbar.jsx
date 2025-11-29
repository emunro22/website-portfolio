import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-[#0B1220] shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight text-white">Euan Munro</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-white font-medium">
          <a href="#about" className="hover:text-purple-300 transition">
            About
          </a>
          <a href="#testimonials" className="hover:text-purple-300 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-purple-300 transition">
            Contact
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-6 flex flex-col justify-between md:hidden focus:outline-none z-50"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 bg-black dark:bg-white transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-black dark:bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-black dark:bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#0B1220] text-white z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium">
              <button
                onClick={() => setOpen(false)}
                className="hover:text-purple-300 transition"
              >
                <a href="#about">About</a>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="hover:text-purple-300 transition"
              >
                <a href="#testimonials">Testimonials</a>
              </button>
              <button
                onClick={() => setOpen(false)}
                className="hover:text-purple-300 transition"
              >
                <a href="#contact">Contact</a>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
