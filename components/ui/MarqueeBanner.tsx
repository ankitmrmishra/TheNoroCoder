"use client";

import React from "react";
import { motion } from "framer-motion";
import Showcase from "../ShowCase";

const technologies = [
  "WEB DEV",
  "NEXT.JS",
  "HEADLESS CMS",
  "FRAMER MOTION",
  "GSAP",
  "MONGODB",
  "TYPESCRIPT",
  "SOLANA",
  "FRAMER MOTION",
  "GSAP",
  "MONGODB",
  "TYPESCRIPT",
  "SOLANA",
];

const MarqueeBand = ({
  items,
  direction = "left",
  className,
  rotate,
}: {
  items: string[];
  direction?: "left" | "right";
  className?: string;
  rotate: string;
}) => {
  return (
    <div
      className={`md:absolute hidden md:flex overflow-x-hidden drop-shadow-2xl  py-4 shadow-xl border-y border-black/30 bg-white text-black ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        width: "120%", // wider than screen to cover corners when rotated
        zIndex: 10,
      }}
    >
      <div className="flex select-none gap-8 font-black text-2xl uppercase tracking-widest italic opacity-90">
        {/* Repeat list to ensure seamless loop */}
        <motion.div
          className="flex flex-shrink-0 gap-8 min-w-full justify-around"
          initial={{ x: direction === "left" ? "0%" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0%" }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...items, ...items, ...items].map((tech, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="lg:text-xl text-sm">★</span>
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Second duplicate for seamless loop */}
        <motion.div
          className="flex flex-shrink-0 gap-8 min-w-full justify-around"
          initial={{ x: direction === "left" ? "0%" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0%" }}
          transition={{
            duration: 80,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...items, ...items, ...items].map((tech, i) => (
            <span key={`dup-${i}`} className="flex items-center gap-4">
              <span className="lg:text-xl text-sm">★</span> {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default function AgencyTechHero() {
  return (
    <section className="relative flex  w-full items-center justify-center overflow-x-clip bg-white">
      {/* Tape 1: Tilted Positive */}
      <MarqueeBand
        items={technologies}
        rotate="12deg"
        direction="left"
        className="top-20 -translate-y-1/2"
      />

      {/* Tape 2: Tilted Negative (Crossed) */}
      <MarqueeBand
        items={technologies}
        rotate="-15deg"
        direction="right"
        className="top-1 -translate-y-1/2 "
      />
      <div className="pt-[10%]">
        <Showcase />
      </div>
    </section>
  );
}
