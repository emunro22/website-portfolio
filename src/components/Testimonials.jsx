import { useEffect, useState } from "react";
import logo from "../images/logo.jpg";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";

const testimonials = [
  {
    logo: logo,
    text: "Euan transformed our outdated website into a modern, responsive platform that perfectly reflects our brand. Communication was clear and consistent throughout the project. created a clean, modern site that boosted our customer engagement.",
    link: "https://phoenixarena.com"
  },
  {
    logo: logo1,
    text: "Working with Euan was effortless from start to finish. He quickly understood our goals and delivered a fast, scalable solution that exceeded our expectations.",
    link: "https://srlrecovery.com/"
  },
  {
    logo: logo2,
    text: "We saw a noticeable increase in customer engagement after launching the new site. Euan’s attention to detail and user experience really set him apart.",
    link: "https://dxc-website-xi.vercel.app/"
  },
  {
    logo: logo3,
    text: "We saw a noticeable increase in customer engagement after launching the new site. Euan’s attention to detail and user experience really set him apart.",
    link: "https://cardanogamingcommunity.com"
  },
    {
    logo: logo4,
    text: "Euan delivered a sleek, high-performing website that has elevated our online presence. His ability to combine strong visuals with solid technical foundations is outstanding.",
    link: "https://trainingadvantagegroup.co.uk/"
  },

];

export default function Testimonials() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Client Testimonials</h2>

        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-700"
            style={{
              transform: `translateX(-${offset * (100 / 3)}%)`,
            }}
          >
            {testimonials.map(({ logo, text, link }, i) => (
              <div
                key={i}
                className="flex-[0_0_33.333%] bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 flex flex-col items-center justify-between"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="h-24 w-24 object-cover rounded-xl mb-4"
                />
                <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-4">
                  “{text}”
                </p>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
