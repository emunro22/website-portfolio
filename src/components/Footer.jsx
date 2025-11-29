import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0B1220] mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Euan Munro. All rights reserved.
        </p>
        <div className="flex gap-6 items-center text-white">
          <motion.a
            href="mailto:euanmunroo@gmail.com"
            className="hover:text-purple-300 transition"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <Mail />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/euan-munro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <SiLinkedin size={22} />
          </motion.a>
          <motion.a
            href="https://github.com/emunro22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <SiGithub size={22} />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
