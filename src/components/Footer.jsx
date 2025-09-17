import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Euan Munro. All rights reserved.
        </p>
        <div className="flex gap-6 items-center text-white">
          <a
            href="mailto:euanmunroo@gmail.com"
            className="hover:text-purple-300 transition"
          >
            <Mail />
          </a>
          <a
            href="https://www.linkedin.com/in/euan-munro/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <SiLinkedin size={22} />
          </a>
          <a
            href="https://github.com/emunro22"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition"
          >
            <SiGithub size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
