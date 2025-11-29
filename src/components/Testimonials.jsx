import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

import logo from "../images/logo.jpg";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import logo5 from "../images/logo5.jpg";
import logo6 from "../images/logo6.jpg";
import logo7 from "../images/logo7.jpg";

const testimonials = [
  {
    logo: logo,
    text: "Euan transformed our outdated website into a modern, responsive platform that perfectly reflects our brand. Communication was clear and consistent throughout the project.",
    link: "https://phoenixarena.com",
  },
  {
    logo: logo1,
    text: "Working with Euan was effortless from start to finish. He quickly understood our goals and delivered a fast, scalable solution that exceeded our expectations.",
    link: "https://srlrecovery.com/",
  },
  {
    logo: logo2,
    text: "We saw a noticeable increase in customer engagement after launching the new site. Euan’s attention to detail and user experience really set him apart.",
    link: "https://dxc-website-xi.vercel.app/",
  },
  {
    logo: logo5,
    text: "We saw a noticeable increase in customer engagement after launching the new site. Euan’s attention to detail and user experience really set him apart.",
    link: "https://gtownkettles.com/",
  },
  {
    logo: logo4,
    text: "Working with Euan felt effortless. He took care of everything from planning to deployment and exceeded every expectation.",
    link: "https://trainingadvantagegroup.co.uk/",
  },
  {
    logo: logo3,
    text: "Euan delivered a sleek, high-performing website that has elevated our online presence.",
    link: "https://cardanogamingcommunity.com",
  },
  {
    logo: logo6,
    text: "Euan transformed our outdated site into a modern, accessible platform. Our team and customers love it.",
    link: "https://clydevalleygroup.com",
  },
  {
    logo: logo7,
    text: "Euan delivered far more than a website, he gave us a digital presence we’re proud of. The new design is intuitive and incredibly user-friendly.",
    link: "https://renovatedesign.co.uk",
  },
];

const CARD_GAP = 24; // matches your Tailwind "gap-6"

export default function Testimonials() {
  const [offset, setOffset] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!cardWidth) return;
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [cardWidth]);

  return (
    <section id="testimonials" className="py-20 bg-[#0B1220]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${offset * (cardWidth + CARD_GAP)}px)`,
            }}
          >
            {testimonials.map(({ logo, text, link }, i) => (
              <motion.div
                key={i}
                ref={i === 0 ? cardRef : null}
                className="
                  flex-shrink-0
                  w-full sm:w-1/2 lg:w-1/3
                  bg-[#10172A]
                  rounded-2xl
                  p-6
                  flex flex-col items-center text-center
                "
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-24 w-24 object-cover rounded-xl mb-4"
                />
                <p className="text-sm italic text-gray-300 mb-4">
                  “{text}”
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
