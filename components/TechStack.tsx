"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- SVG Icons ---

const Code2Icon = () => (
  <svg
    className="w-6 h-6"
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

const BoxIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const ServerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
    />
  </svg>
);

const DatabaseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <ellipse
      cx="12"
      cy="5"
      rx="9"
      ry="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3m18-7v14c0 1.66-4 3-9 3s-9-1.34-9-3V5"
    />
  </svg>
);

const CloudIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const TerminalIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polyline
      points="4 17 10 11 4 5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <line
      x1="12"
      x2="20"
      y1="19"
      y2="19"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <polygon
      points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const SparklesIcon = () => (
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
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

// --- Types ---
interface TechCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  technologies: string[];
  whyMatters: string;
}

// --- Data ---
const techStack: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code2Icon />,
    technologies: [
      "Next.js 14 (React framework)",
      "TypeScript (Type-safe code)",
      "Tailwind CSS (Utility-first)",
      "GSAP (60fps motion)",
      "Framer Motion (Animations)",
    ],
    whyMatters:
      "Fast load times. SEO-friendly. Easy to maintain. Your developers won't hate us in 6 months.",
  },
  {
    id: "backend",
    title: "Backend & Architecture",
    icon: <ServerIcon />,
    technologies: [
      "NestJS (Scalable Node.js)",
      "Drizzle ORM (Type-safe SQL)",
      "PostgreSQL (Relational DB)",
      "Redis (Caching & Queues)",
      "Docker (Containerization)",
    ],
    whyMatters:
      "Enterprise-grade reliability. End-to-end type safety from database to frontend. Built to scale.",
  },

  {
    id: "cms",
    title: "Content Management",
    icon: <DatabaseIcon />,
    technologies: [
      "Sanity (Headless CMS)",
      "Contentful (Enterprise platform)",
      "Strapi (Open-source option)",
      "Markdown/MDX (Dev-friendly)",
    ],
    whyMatters:
      "You control content without calling us. Your marketing team can update copy without touching code.",
  },
  {
    id: "infrastructure",
    title: "Performance & Hosting",
    icon: <CloudIcon />,
    technologies: [
      "Vercel (Edge network)",
      "Cloudflare (CDN & Security)",
      "AWS S3 (Asset storage)",
      "ImageKit (Optimization)",
    ],
    whyMatters:
      "Global load times under 1.2s. 99.99% uptime. Auto-scaling during spikes. Zero maintenance.",
  },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ctaSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in from bottom
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Subheading fade in slightly delayed
      gsap.from(subheadingRef.current, {
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      // CTA section fade in
      gsap.from(ctaSectionRef.current, {
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Individual card hover animations
  const handleCardEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const icon = card.querySelector(".tech-icon");
    const heading = card.querySelector(".tech-heading");
    const arrows = card.querySelectorAll(".tech-arrow");

    gsap.to(card, {
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon, {
      scale: 1.15,
      rotate: 5,
      duration: 0.3,
      ease: "back.out(1.7)",
    });

    gsap.to(heading, {
      x: 4,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrows, {
      x: 4,
      opacity: 1,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.out",
    });
  };

  const handleCardLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const icon = card.querySelector(".tech-icon");
    const heading = card.querySelector(".tech-heading");
    const arrows = card.querySelectorAll(".tech-arrow");

    gsap.to(card, {
      y: 0,
      scale: 1,
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(icon, {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(heading, {
      x: 0,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(arrows, {
      x: 0,
      opacity: 0.5,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated Background Grain */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat animate-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4654C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4654C]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">
        {/* Heading Section */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-gradient-to-r from-[#D4654C] to-transparent"></span>
            <span className="text-[#D4654C] uppercase tracking-[0.25em] text-xs font-semibold flex items-center gap-2">
              <SparklesIcon />
              Technology Stack
            </span>
          </div>

          <h2
            ref={headingRef}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
          >
            Built With Modern Tools.
            <br />
            <span className="text-[#D4654C]">Not Legacy Bloat.</span>
          </h2>

          <p
            ref={subheadingRef}
            className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed border-l-2 border-[#D4654C]/30 pl-6"
          >
            We don&apos;t use WordPress, jQuery, or technologies from 2010.
            Here&apos;s our current stack (and why we chose it).
          </p>
        </div>

        {/* Grid Layout - Updated for 5 items centered */}
        <div
          className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-20"
          style={{ perspective: "1500px" }}
        >
          {techStack.map((category, index) => (
            <div
              key={category.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={() => handleCardLeave(index)}
              className="tech-card group relative w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 cursor-pointer transition-colors duration-500"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4654C]/0 via-[#D4654C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4654C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container */}
              <div className="tech-icon w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-[#D4654C] mb-6 group-hover:bg-[#D4654C] group-hover:text-white group-hover:border-[#D4654C] transition-all duration-300 relative overflow-hidden">
                {/* Icon glow */}
                <div className="absolute inset-0 bg-[#D4654C]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">{category.icon}</div>
              </div>

              {/* Title */}
              <h3 className="tech-heading text-xl font-bold mb-6 group-hover:text-[#D4654C] transition-colors duration-300">
                {category.title}
              </h3>

              {/* Technologies List */}
              <ul className="space-y-3 mb-8 min-h-[160px]">
                {category.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300"
                  >
                    <span className="tech-arrow">
                      <ArrowRightIcon className="w-4 h-4 text-[#D4654C] shrink-0 mt-0.5 opacity-50 transition-all duration-300" />
                    </span>
                    <span className="leading-tight">{tech}</span>
                  </li>
                ))}
              </ul>

              {/* Why This Matters */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <ZapIcon />
                  <p className="text-[10px] font-mono text-[#D4654C]/70 uppercase tracking-wider">
                    Why This Matters
                  </p>
                </div>
                <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {category.whyMatters}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-[#D4654C]/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          ref={ctaSectionRef}
          className="flex flex-col items-center justify-center text-center border-t border-white/10 pt-20"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 hover:bg-white/10 hover:border-[#D4654C]/30 transition-all duration-300">
            <TerminalIcon />
            <span className="text-sm font-mono text-white/70">
              Want to talk stack? We&apos;re nerds.
            </span>
          </div>

          {/* CTA Heading */}
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 max-w-2xl">
            Let&apos;s discuss your{" "}
            <span className="text-[#D4654C]">technical requirements.</span>
          </h3>

          {/* CTA Button */}
          <a
            href="https://wa.me/918437153991"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#D4654C] text-white rounded-full overflow-hidden transition-all hover:bg-[#bf5a43] hover:scale-105 hover:shadow-[0_0_40px_rgba(212,101,76,0.4)]"
          >
            <span className="relative z-10 font-bold tracking-wide uppercase text-sm">
              Schedule Technical Call
            </span>
            <span className="relative z-10">
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </a>

          {/* Subtext */}
          <p className="text-sm text-white/40 mt-6 max-w-md">
            Free 30-minute call. No sales pitch. Just technical conversation
            about your project.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0);
          }
          70% {
            transform: translate(0, 10%);
          }
          80% {
            transform: translate(-15%, 0);
          }
          90% {
            transform: translate(10%, 5%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }
      `}</style>
    </section>
  );
};

export default TechStack;
