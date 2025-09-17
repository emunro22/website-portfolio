import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiPrisma, SiMongodb, SiSqlite, SiPython,
  SiLinux, SiFramer
} from "react-icons/si";

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
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">What I Do</h2>

      <div className="bg-white dark:bg-gray-800 shadow rounded-2xl p-8 mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I ran a successful web design business, delivering <span className="font-semibold">25+ projects</span> 
          for private and public clients across diverse industries. I provide full-stack digital solutions — 
          from planning and design to development, deployment, and support — with a focus on 
          clear communication and client value.
        </p>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I prioritise clean code, secure architecture, and great user experiences, staying up to date with modern tools and practices.  
          Whether working independently or in teams, I bring a detail-focused, adaptable approach to every project.
        </p>
      </div>

      <h3 className="text-2xl font-semibold mb-6 text-center">Tools & Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-xl py-4 px-2 shadow hover:shadow-md transition flex flex-col items-center gap-3"
          >
            <Icon size={28} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
