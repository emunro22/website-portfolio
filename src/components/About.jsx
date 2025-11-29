import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiMongodb, SiPython,
  SiLinux, SiFramer
} from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Python", icon: SiPython },
    { name: "Linux", icon: SiLinux },
    { name: "Framer Motion", icon: SiFramer },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-center mb-10">What I Do</h2>

      <motion.div
        className="bg-white dark:bg-gray-800 shadow rounded-2xl p-8 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I ran a successful web design business, delivering 25+ projects
          for private and public clients across diverse industries. I provide full-stack digital solutions,
          from planning and design to development, deployment, and support, with a focus on clear communication
          and client value.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I prioritise clean code, secure architecture, and great user experiences, staying up to date with modern
          tools and practices. Whether working independently or in teams, I bring a detail-focused, adaptable
          approach to every project.
        </p>
      </motion.div>

      <h3 className="text-2xl font-semibold mb-6 text-center">Tools &amp; Skills</h3>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl py-4 px-2 shadow flex flex-col items-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Icon size={28} />
            <span className="text-sm">{name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
