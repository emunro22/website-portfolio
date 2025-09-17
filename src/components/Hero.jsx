import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I’m <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Euan Munro</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I started a web design business while working full-time and studying at university.  
          I’ve delivered <span className="font-semibold text-gray-900 dark:text-white">25+ projects</span> for public and private clients.
        </p>

        {/* Socials under the headline */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/euanmunro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 shadow hover:shadow-md transition"
            title="LinkedIn"
          >
            <SiLinkedin className="text-[#0A66C2]" size={22} />
          </a>
          <a
            href="https://github.com/euanmunro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full bg-white/70 dark:bg-gray-800/70 shadow hover:shadow-md transition"
            title="GitHub"
          >
            <SiGithub size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
