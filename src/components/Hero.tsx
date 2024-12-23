"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
// import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/ui/SocialMedia";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});
const Hero = () => {
  const socialMediaLinks = {
    twitter: "https://twitter.com/AnkitMishraexe",
    linkedin: "https://www.linkedin.com/in/ankitmishra1106",
    github: "https://github.com/ankitmrmishra",
  };
  return (
    <div>
      <main className="min-w-6xl mx-auto px-4">
        <section className="md:p-20 p-5 mb-32 text-center">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`max-w-7xl font-semibold ${poppins.className} text-center`}
            >
              <h1 className="text-[#1A2B3B] text-5xl md:text-8xl leading-tight tracking-tight mb-6 ">
                Ankit,
                <span className="text-mainColour"> Developer</span>
              </h1>
              <h1 className="text-[#1A2B3B] text-5xl md:text-8xl  leading-tight">
                Based in India
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 "
            >
              <p className="text-[#1A2B3B]/60 text-lg leading-relaxed">
                Confidently coding my way into a world of bugs and broken
                layouts, but hey, at least it looks good(ish).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 space-y-6"
            >
              <SocialMedia links={socialMediaLinks} />

              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-6 py-1 text-lg font-medium text-[#1A2B3B] backdrop-blur-3xl gap-3">
                  <Link href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you">
                    Hire Me
                  </Link>
                  <IoArrowForward className="animate-moveBackwardForward" />
                </span>
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
