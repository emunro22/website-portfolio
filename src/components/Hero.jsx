import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] to-[#2A0F4D]" />
      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Euan Munro
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
          I started a web design business while working full-time and studying at university.{" "}
          I’ve delivered <span className="font-semibold text-white">25+ projects</span> for public and private clients.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/euan-munro/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <SiLinkedin className="text-white" size={22} />
          </a>
          <a
            href="https://github.com/emunro22"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <SiGithub className="text-white" size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
