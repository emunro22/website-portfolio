import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Euan Munro. All rights reserved.
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="mailto:euanmunroo@gmail.com"
            className="hover:text-blue-600 transition"
            aria-label="Email"
            title="Email"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/euanmunro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <SiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/euanmunro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="GitHub"
            title="GitHub"
          >
            <SiGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
