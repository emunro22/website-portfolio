import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">Euan Munro</h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-800 px-6 pb-4 flex flex-col gap-3">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <button
            onClick={toggleTheme}
            className="self-start p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
