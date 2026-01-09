"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Icons ---
const ArrowRightIcon = ({ className = "w-4 h-4" }) => (
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

const TwitterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const DribbbleIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.93-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.742-4.015-2.1-7.83-3.414 1.018-6.497 3.38-8.753 5.418 2.035 1.777 4.707 2.768 7.42 2.768 1.23 0 2.42-.196 3.433-.356zm-12.28-2.618c2.115-1.912 5.068-4.212 8.528-5.344-.645-1.585-1.36-3.085-2.074-4.52-4.14 1.163-8.08 2.894-8.08 6.945 0 .977.165 1.933.504 2.92h1.122zm1.613-10.518c.95-.316 4.316-1.282 8.133-1.636-.576-1.077-1.192-2.1-1.808-3.003-2.68 1.114-4.877 2.986-6.325 4.64zM14.037 1.54c.734 1.06 1.48 2.308 2.14 3.655 2.878-.86 4.965-1.075 5.308-1.096-.948-1.583-2.45-2.825-4.238-3.528-1.11.238-2.188.58-3.21.968zM17.8 6.57c-2.812.23-5.247.96-7.817 1.837.776 1.62 1.55 3.23 2.15 4.885 3.597-.6 6.91-.017 7.234.052.128-2.45-1.03-4.562-1.567-6.774z" />
  </svg>
);

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Columns Stagger Animation
      gsap.from(columnsRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 2. Watermark Parallax (Subtle movement)
      gsap.to(watermarkRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
        y: -50, // Moves slightly up as you scroll down
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#050505] text-white pt-24 pb-12 overflow-hidden"
    >
      {/* --- Background Assets --- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Massive Watermark Behind Content */}
      <div
        ref={watermarkRef}
        className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none z-0"
      >
        <h1 className="text-[25vw] font-bold leading-none tracking-tighter text-white">
          NORO
        </h1>
      </div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 xl:px-32 max-w-[1600px] mx-auto">
        {/* --- Main 4-Column Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Company Info */}
          <div
            ref={(el) => {
              columnsRef.current[0] = el;
            }}
          >
            <a
              href="/"
              className="inline-block text-2xl font-bold tracking-tighter mb-6 hover:text-[#D4654C] transition-colors"
            >
              NORO.WORK
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-[250px]">
              We design and build digital experiences that feel impossible,
              until they&apos;re live.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4654C]/30 bg-[#D4654C]/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4654C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4654C]"></span>
              </span>
              <span className="text-xs font-mono text-[#D4654C] uppercase tracking-wider">
                Booking: Q1 2026
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div
            ref={(el) => {
              columnsRef.current[1] = el;
            }}
          >
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Brand Elevation",
                "Digital Products",
                "Enterprise Platforms",
                "Ongoing Maintenance",
                "Performance Audits",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4654C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div
            ref={(el) => {
              columnsRef.current[2] = el;
            }}
          >
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              {[
                "Our Work",
                "Case Studies",
                "Process",
                "Technology Stack",
                "Pricing",
                "Blog",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#D4654C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div
            ref={(el) => {
              columnsRef.current[3] = el;
            }}
          >
            <h4 className="text-white font-bold mb-6">Connect</h4>

            <a
              href="mailto:hello@noro.work"
              className="block text-xl font-bold text-white hover:text-[#D4654C] transition-colors mb-6"
            >
              hello@noro.work
            </a>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[
                <TwitterIcon key="tw" />,
                <LinkedInIcon key="li" />,
                <GithubIcon key="gh" />,
                <DribbbleIcon key="dr" />,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#D4654C] hover:border-[#D4654C] transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">
                Newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-transparent border-b border-white/20 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#D4654C] transition-colors"
                />
                <button
                  type="button"
                  className="text-sm font-bold text-white hover:text-[#D4654C] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
            <span>&copy; 2026 NORO.WORK</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with Next.js, GSAP, and an unhealthy amount of</span>
            <span className="text-[#D4654C] line-through decoration-white/40">
              caffeine
            </span>
            <span className="text-white">passion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
