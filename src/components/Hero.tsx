"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const socialMediaLinks = [
  { name: "GitHub", url: "https://github.com/yourusername" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { name: "Twitter", url: "https://twitter.com/yourusername" },
];

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          The Noro-Coder
        </span>
      </motion.h1>
      <motion.div
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            "A Passionate Developer",
            1000,
            "A Creative Problem Solver",
            1000,
            "An Enthusiastic Learner",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </motion.div>
      <motion.p
        className="text-gray-400 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Confidently coding my way into a world of innovation and creativity.
        Always learning, always growing.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
        >
          Get in Touch
        </a>
      </motion.div>
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      ></motion.div>
    </section>
  );
}
