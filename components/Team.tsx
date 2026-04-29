"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ankit from "../app/assets/MyImage.jpg";
import Image from "next/image";

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
    className="w-3 h-3 text-primary"
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

// --- Data ---
const founder = {
  name: "Ankit Mishra",
  role: "Founder, Designer & Developer",
  focus: "Design, Development & Architecture",
  image: Ankit,
  linkedin: "https://www.linkedin.com/in/ankitmishra1106/",
  stack: ["UI/UX Design", "Next.js", "React", "Node.js", "PostgreSQL", "Full Stack Development"],
  bio: "Clean design. Scalable architecture. High-performance applications. Frontend to backend.",
};

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
      className="relative w-10 h-10 rounded-full border border-border bg-card shadow-sm flex items-center justify-center text-muted-foreground hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-colors duration-300 z-20"
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
      className="relative bg-background text-foreground py-24 sm:py-32 overflow-hidden"
    >
      {/* --- Background Assets --- */}
      {/* <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 max-w-5xl mx-auto">
        {/* --- Heading --- */}
        <div ref={headingRef} className="text-start mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6">
            <span className="h-px w-8 sm:w-12 bg-primary"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              The Founder
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight mb-6 text-foreground">
            Meet the <span className="text-primary">Builder.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl">
            Solo engineer. High output. Solutions that scale.
          </p>
        </div>

        {/* --- Founder Layout --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image Section - Left */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[0] = el;
            }}
            className="w-full lg:w-5/12 group relative overflow-hidden border border-border bg-card hover:border-primary/40 shadow-sm hover:shadow-md transition-all duration-500"
            style={{ borderRadius: '8px' }}
          >
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden bg-muted">
              <Image
                src={Ankit}
                alt={founder.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                priority
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          </div>

          {/* Content Section - Right */}
          <div
            ref={(el) => {
              if (el) cardsRef.current[1] = el;
            }}
            className="w-full lg:w-7/12 flex flex-col"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-8 mb-8 gap-4">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                  {founder.name}
                </h3>
                <p className="text-lg font-mono text-primary font-bold uppercase tracking-wide">
                  {founder.role}
                </p>
              </div>
              <div className="self-start sm:self-center">
                <MagneticButton href={founder.linkedin} />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  Core Focus
                </h4>
                <p className="text-xl text-foreground/90 font-medium">
                  {founder.focus}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  Philosophy
                </h4>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {founder.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 text-sm uppercase font-bold tracking-wider bg-muted border border-border shadow-sm rounded-lg text-foreground/80 flex items-center gap-2 hover:border-primary/50 hover:bg-primary/10 transition-colors duration-300"
                    >
                      <CodeIcon />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
