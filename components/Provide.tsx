"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  ShoppingCart,
  Layers,
  Paintbrush,
  Zap,
  WrenchIcon,
  LightbulbIcon,
  Sparkles,
} from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import BgGrainy from "../../src/app/assets/Hypercolor.jpeg";

const poppins = Poppins({
  subsets: ["latin"],

  weight: ["600"],
});

const services = [
  {
    title: "Custom Web Development",
    icon: Code,
    description:
      "Crafting responsive, user-friendly websites tailored to your needs using modern technologies like Next.js, React, and Tailwind CSS.",
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    description:
      "Building robust e-commerce platforms with integrated payment gateways and intuitive product pages.",
  },
  {
    title: "API Integration & Backend",
    icon: Layers,
    description:
      "Developing and integrating APIs for seamless data exchange using Node.js and PostgreSQL.",
  },
  {
    title: "UI/UX Implementation",
    icon: Paintbrush,
    description:
      "Translating designs into pixel-perfect, interactive user interfaces with accessibility in mind.",
  },
  {
    title: "Web Optimization",
    icon: Zap,
    description:
      "Improving website performance through code optimization, caching, and image compression.",
  },
  {
    title: "Maintenance & Support",
    icon: WrenchIcon,
    description:
      "Offering regular updates, bug fixes, and feature enhancements to keep your website running smoothly.",
  },
  {
    title: "Consulting & Strategy",
    icon: LightbulbIcon,
    description:
      "Advising on the best tech stack and tools for your business to meet your digital strategy goals.",
  },
];

export default function Services() {
  return (
    <section className="py-20 flex w-full justify-center align-middle items-center">
      <div className="md:max-w-7xl flex justify-center align-middle items-center gap-3 flex-col">
        {/* heading */}
        <div
          className={` md:text-6xl text-4xl  font-semibold ${poppins.className}   flex gap-2 justify-center align-middle items-center`}
        >
          Services<span className="text-mainColour">Offered</span>
        </div>
        {/* services and CTA  */}
        <div className=" flex md:flex-row flex-col justify-center align-middle items-center gap-10 md:w-full md:h-96   ">
          <div className="services flex  flex-wrap gap-3 rounded-2xl md:max-w-xl md:p-1 p-11   ">
            {services.map((service, index) => (
              <div
                key={index}
                className="border   border-dashed rounded-md md:p-4 p-1 border-black flex justify-center align-middle items-center gap-2 group hover:cursor-pointer hover:rotate-3 ease-soft-spring duration-1000"
              >
                <Sparkles className="fill-black group-hover:scale-150  ease-in-out duration-250 size-4" />
                <div className="text-lg ">{service.title}</div>
              </div>
            ))}
          </div>
          <div className="CTA flex justify-end align-middle items-center  min-h-72 h-full p-2 hover:rotate-3 ease-in-out duration-400 ">
            <div className="md:w-[28rem] flex flex-col justify-center align-middle items-start gap-2  h-full py-10 rounded-lg shadow-lg px-8 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-black via-white to-gray-800">
              <span className="md:text-5xl text-3xl leading-snug text-white font-semibold">
                Your Next Big Idea, Just a Call Away
              </span>
              <p className="text-white">
                Connect with me to discuss how I can make your project stand
                out.
              </p>
              <button className="relative inline-flex  h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-6 py-1 text-lg font-medium text-[#1A2B3B] backdrop-blur-3xl gap-3">
                  <Link
                    className="text-mainColour font-semibold"
                    href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you"
                  >
                    Get in Touch
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
