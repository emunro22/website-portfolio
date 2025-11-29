import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-[#0B1220]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-300">
          Please contact me directly at{" "}
          <a
            href="mailto:euanmunroo@gmail.com"
            className="underline hover:text-blue-400"
          >
            euanmunroo@gmail.com
          </a>
        </p>
      </div>
    </motion.section>
  );
}
