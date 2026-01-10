"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ankit from "../app/assets/MyImage.jpg";
import Yash from "../public/Yash.jpeg";
import Harsh from "../public/tiwari.jpeg";
import Image, { StaticImageData } from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Icons ---
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

// --- Types ---
interface TeamMember {
  name: string;
  role: string;
  focus: string;
  image: StaticImageData;
  linkedin: string;
  stack: string[];
  bio: string;
}

// --- Data ---
const teamMembers: TeamMember[] = [
  {
    name: "Ankit Mishra",
    role: "Full Stack Developer",
    focus: "System Architecture",
    image: Ankit, // Placeholder
    linkedin: "https://www.linkedin.com/in/ankitmrmishra/",
    stack: ["Next.js", "System Design", "Cloud"],
    bio: "Obsessed with scalable architecture and clean code patterns. Turns complex problems into elegant solutions.",
  },
  {
    name: "Harsh Tiwari",
    role: "Full Stack Developer",
    focus: "Backend & Security",
    image: Harsh, // Placeholder
    linkedin: "#", // Add link
    stack: ["Node.js", "PostgreSQL", "Auth"],
    bio: "The engine room. Ensures data integrity, API performance, and that the server never misses a beat.",
  },
  {
    name: "Yash Singh",
    role: "Full Stack Developer",
    focus: "Creative Frontend",
    image: Yash, // Placeholder
    linkedin: "#", // Add link
    stack: ["React", "GSAP", "WebGL"],
    bio: "Bridges the gap between design and code. Crafts pixel-perfect interfaces with smooth, physics-based interactions.",
  },
];

// --- Sub-Component: Magnetic Button ---
const MagneticButton = ({ href }: { href: string }) => {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-colors duration-300 z-20"
    >
      <LinkedinIcon />
    </a>
  );
};

const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Animation (Center Up)
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 2. Cards Stagger
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative bg-[#0a0a0a] text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* --- Background Assets --- */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#D4654C]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 xl:px-32 max-w-[1600px]">
        {/* --- Heading --- */}
        <div ref={headingRef} className="text-start mb-20 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2  mb-6">
            <span className="h-px w-8 sm:w-12 bg-[#D4654C]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4654C]">
              The Engineers
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Meet the <span className="text-[#D4654C]">Builders.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            Small team. High output. We don&apos;t hire project managers; we
            hire problem solvers who write production-grade code.
          </p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#050505] border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4654C]/40 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />

                {/* Image grayscale to color on hover */}
                <Image
                  width={500}
                  height={500}
                  src={member.image!}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Tech Stack Floating Tags */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {member.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider bg-black/60 backdrop-blur-md border border-white/10 rounded-md text-white/80 flex items-center gap-1"
                    >
                      <CodeIcon />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 relative">
                {/* Name & LinkedIn Row */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#D4654C] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-sm font-mono text-white/40 uppercase tracking-wide mt-1">
                      {member.role}
                    </p>
                  </div>
                  <MagneticButton href={member.linkedin} />
                </div>

                {/* Divider */}
                <div className="w-12 h-[1px] bg-[#D4654C] my-4 opacity-50" />

                {/* Focus Area */}
                <p className="text-xs font-bold text-[#D4654C] uppercase tracking-widest mb-2">
                  Focus: {member.focus}
                </p>

                {/* Bio */}
                <p className="text-sm text-white/60 leading-relaxed">
                  {member.bio}
                </p>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 bg-[#D4654C] rounded-full" />
                </div>
              </div>

              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#D4654C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
