"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// --- Data ---
const services = [
  {
    id: "01",
    title: "Digital Brand Experiences",
    subtitle: "Your website is your highest-leverage sales asset.",
    description: "We design interfaces that convert better and load faster.",
    metrics: [
      "Convert 40–60% better than industry averages",
      "Load 3x faster than typical agency builds",
      "Win design awards (brand positioning)",
    ],
    outcome:
      "What this means for you: Premium positioning. Higher customer LTV. Less dependence on paid ads.",
  },
  {
    id: "02",
    title: "E-Commerce That Actually Sells",
    subtitle: "Engineered for brands doing $5M+ in annual revenue.",
    description:
      "Custom Shopify and headless commerce builds. Not interested in 'good enough'.",
    metrics: [
      "Reducing cart abandonment by 30%+",
      "Increasing AOV through strategic UX architecture",
      "Core Web Vitals optimized for Google ranking",
    ],
    outcome:
      "Recent project: 217% increase in mobile conversion for a DTC brand in 90 days.",
  },
  {
    id: "03",
    title: "Creative Development",
    subtitle: "WebGL, Shaders, and Physics-driven interfaces.",
    description:
      "The stuff that makes users text their friends a link to your site. Built on Three.js, GSAP, and Framer Motion.",
    metrics: [
      "Optimized for mid-tier devices",
      "Strategy-first animation",
      "Memorable user interactions",
    ],
    outcome: "But only when it serves the strategy. Never for its own sake.",
  },
];

const ServiceCard = ({
  service,
  index,
  scrollProgress,
}: {
  service: any;
  index: number;
  scrollProgress: any;
}) => {
  const cardCount = services.length + 1; // +1 for CTA card

  // Each card gets 1/4 of the scroll progress
  const start = index / cardCount;
  const end = (index + 1) / cardCount;

  // Card slides in from right (100vw) to center (0)
  const x = useTransform(
    scrollProgress,
    [Math.max(0, start - 0.1), start],
    ["100%", "0%"]
  );

  // Scale down slightly when next card comes in
  const scale = useTransform(scrollProgress, [end - 0.1, end], [1, 0.92]);

  // Fade out slightly when next card comes in
  const opacity = useTransform(
    scrollProgress,
    [start - 0.05, start, end, end + 0.05],
    [0, 1, 1, 0.6]
  );

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
      }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div
        className="group relative w-full max-w-[85vw] md:max-w-[60vw] lg:max-w-[50vw] h-[70vh] flex flex-col justify-between p-8 md:p-12 border border-white/10 bg-[#0a0a0a] backdrop-blur-md rounded-3xl hover:border-[#D4654C]/50 transition-colors duration-500 overflow-hidden"
        style={{ zIndex: cardCount - index }}
      >
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4654C]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top Section */}
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <span className="text-[#D4654C] font-mono text-xl md:text-2xl tracking-widest">
              /{service.id}
            </span>
            <ArrowUpRight className="text-white/40 group-hover:text-[#D4654C] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 w-8 h-8" />
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {service.title}
          </h3>
          <p className="text-lg text-white/60 font-light max-w-md">
            {service.subtitle}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 space-y-8">
          <ul className="space-y-3">
            {service.metrics.map((metric: string, i: number) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm md:text-base text-white/80"
              >
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D4654C]" />
                {metric}
              </li>
            ))}
          </ul>

          <div className="pt-6 border-t border-white/10">
            <p className="text-xs font-mono text-[#D4654C] mb-2">
              {"///"} OUTCOME
            </p>
            <p className="text-white/90 italic text-sm md:text-base">
              &quot;{service.outcome} &quot;
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CTACard = ({ scrollProgress }: { scrollProgress: any }) => {
  const cardCount = services.length + 1;
  const index = services.length;

  const start = index / cardCount;

  const x = useTransform(
    scrollProgress,
    [Math.max(0, start - 0.1), start],
    ["100%", "0%"]
  );

  const scale = useTransform(scrollProgress, [start - 0.05, start], [0.9, 1]);

  const opacity = useTransform(scrollProgress, [start - 0.05, start], [0, 1]);

  return (
    <motion.div
      style={{
        x,
        scale,
        opacity,
      }}
      className="absolute inset-0 flex items-center justify-center p-4"
    >
      <div
        className="group relative w-full max-w-[85vw] md:max-w-[60vw] lg:max-w-[50vw] h-[70vh] flex flex-col justify-center items-center p-8 md:p-12 border border-white/10 bg-[#0a0a0a] backdrop-blur-md rounded-3xl hover:border-[#D4654C]/50 transition-colors duration-500 overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <a
          href="https://wa.me/918437153991"
          className="text-center cursor-pointer"
        >
          <div className="w-24 h-24 rounded-full bg-[#D4654C] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
            <ArrowUpRight className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">
            Let&apos;s Talk
          </h3>
          <p className="text-white/60">Ready to start your project?</p>
        </a>
      </div>
    </motion.div>
  );
};

export default function ServicesHorizontal() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-[#050505] text-white relative">
      {/* --- Grain Texture Overlay --- */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat animate-noise"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Scroll Container - height determines scroll duration */}
      <div ref={targetRef} className="relative h-[400vh]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row overflow-hidden">
          {/* --- Left Side: Fixed Content --- */}
          <div className="w-full lg:w-[35%] h-[20vh] lg:h-full p-8 lg:p-20 flex flex-col justify-center relative z-10 bg-[#050505] lg:bg-transparent lg:border-r border-white/5">
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#D4654C]"></span>
                <span className="text-[#D4654C] uppercase tracking-[0.2em] text-sm">
                  Services
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-8">
                What We Build
                <span className="text-[#D4654C] text-6xl">.</span>
              </h2>

              <p className="text-white/60 text-lg max-w-xs hidden lg:block leading-relaxed">
                We don&apos;t just write code. We build digital infrastructure
                that scales revenue.
              </p>

              <a
                href="https://wa.me/918437153991"
                className="hidden lg:inline-flex items-center gap-2 mt-12 text-sm font-bold uppercase tracking-wider hover:text-[#D4654C] transition-colors group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* --- Right Side: Stacking Cards --- */}
          <div className="w-full lg:w-[65%] h-[80vh] lg:h-full relative">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                scrollProgress={scrollYProgress}
              />
            ))}
            <CTACard scrollProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes noise {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -10%);
          }
          20% {
            transform: translate(-15%, 5%);
          }
          30% {
            transform: translate(7%, -25%);
          }
          40% {
            transform: translate(-5%, 25%);
          }
          50% {
            transform: translate(-15%, 10%);
          }
          60% {
            transform: translate(15%, 0%);
          }
          70% {
            transform: translate(0%, 15%);
          }
          80% {
            transform: translate(3%, 35%);
          }
          90% {
            transform: translate(-10%, 10%);
          }
        }
        .animate-noise {
          animation: noise 8s steps(10) infinite;
        }
      `}</style>
    </section>
  );
}
