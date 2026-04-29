"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, AlertCircle, Clock } from "lucide-react";
import Image from "next/image";

// --- Types ---
interface Phase {
  id: string;
  title: string;
  timeline: string;
  illustration: string;
  whatHappens: string[];
  whatYouGet: string[];
  realTalk: string;
}

// --- Data ---
const phases: Phase[] = [
  {
    id: "01",
    title: "Discovery & Strategy",
    timeline: "Week 1–2",
    illustration: "/ilst1process.png",
    whatHappens: [
      "Stakeholder interviews",
      "Analytics audit",
      "Competitor analysis",
    ],
    whatYouGet: [
      "Strategic brief",
      "User personas",
      "Competitive report",
    ],
    realTalk:
      "Deep dive into your business goals, target audience, and competitive landscape. We map out the strategy before touching design.",
  },
  {
    id: "02",
    title: "Design & Prototyping",
    timeline: "Week 3–6",
    illustration: "/ilst2process.png",
    whatHappens: [
      "Wireframing",
      "Style exploration",
      "High-fidelity mockups",
    ],
    whatYouGet: [
      "Design system",
      "Desktop + mobile designs",
      "Figma prototype",
    ],
    realTalk:
      "Strategic design directions that align with your brand. Interactive prototypes you can click through and test with real users.",
  },
  {
    id: "03",
    title: "Development & Animation",
    timeline: "Week 7–12",
    illustration: "/ilst3process.png",
    whatHappens: [
      "Component architecture",
      "GSAP animations",
      "CMS integration",
    ],
    whatYouGet: [
      "Production codebase",
      "Headless CMS",
      "Custom animations",
    ],
    realTalk:
      "Clean, scalable code built with modern frameworks. Every animation timed to perfection. Performance optimized from day one.",
  },
  {
    id: "04",
    title: "Testing & Launch",
    timeline: "Week 13–14",
    illustration: "/ilst4process.png",
    whatHappens: [
      "QA testing",
      "Security audit",
      "Analytics setup",
    ],
    whatYouGet: [
      "Tested site",
      "Analytics dashboard",
      "30 days monitoring",
    ],
    realTalk:
      "Rigorous testing across devices and browsers. Zero-downtime launch. 30 days of post-launch support to ensure everything runs smoothly.",
  },
];

// --- Sub-Component: The Card Content ---
const PhaseCardContent = ({ phase }: { phase: Phase }) => {
  return (
    <div className="h-full max-h-[30rem] flex flex-col lg:flex-row gap-8 lg:gap-12">
      {/* Left Side - Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Phase Number & Timeline */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-lg">
            {phase.id}
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-muted border border-border text-xs font-mono text-muted-foreground">
            <Clock className="w-3 h-3 text-primary" />
            {phase.timeline}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl lg:text-3xl font-spaceGrotesk font-medium text-foreground mb-3 leading-tight">
          {phase.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {phase.realTalk}
        </p>

        {/* Features List */}
        <div className="space-y-2.5">
          {phase.whatHappens.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-xs text-foreground/80 font-medium"
            >
              <div className="w-7 h-7 bg-muted border border-border flex items-center justify-center shrink-0">
                <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Visual Area */}
      <div className="flex-1 border-primary/20 p-4 sm:p-6 flex items-center justify-center min-h-[200px] sm:min-h-[280px] lg:min-h-0 relative overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={phase.illustration}
            alt={phase.title}
            width={600}
            height={600}
            className="w-full h-full max-w-[400px] max-h-[400px] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Register GSAP Plugin
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (>1024px) ---
      mm.add("(min-width: 1024px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        const totalCards = cards.length;

        // Pin the cards container when it hits the top
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top top",
            end: `+=${totalCards * 100}%`, // Scroll distance
            pin: true,
            scrub: 1, // Smooth scrubbing
            // markers: true, // Uncomment for debugging
          },
        });

        // Loop: Start from 2nd card (index 1)
        cards.forEach((card, i) => {
          if (i === 0) return;

          const prevCard = cards[i - 1];

          // 1. Current card slides UP from bottom
          tl.fromTo(
            card,
            { y: "110%" }, // Start just off screen
            { y: "0%", ease: "none", duration: 1 }
          );

          // 2. Previous card tilts BACK (Simultaneous)
          tl.to(
            prevCard,
            {
              scale: 0.95, // Subtle scale down
              y: -40, // Move up slightly
              rotationX: 5, // Subtle tilt
              opacity: 1, // KEEP OPACITY 1 so it doesn't fade to black
              transformOrigin: "top center",
              ease: "none",
              duration: 1,
            },
            "<" // Run at start of previous animation
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-background text-foreground w-full"
    >
      {/* Texture Overlay */}
      {/* <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat animate-noise"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      {/* HEADER SECTION (Normal Flow)
        This scrolls away naturally before the cards pin.
      */}
      <div className="relative z-10 w-full pt-20 pb-16 px-6 sm:px-12 max-w-5xl mx-auto">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight text-foreground mb-6">
            How We Work
            <span className="block text-muted-foreground text-xl sm:text-2xl md:text-3xl font-medium mt-2 lg:mt-4">
              (The Truth, Not the Sales Pitch)
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary pl-6 mt-8 font-medium">
            What actually happens when you hire us.
          </p>
        </div>
      </div>

      {/* DESKTOP CARDS (Pinned Stack)
       */}
      <div
        ref={cardsContainerRef}
        className="hidden lg:flex flex-col h-screen relative z-10 perspective-[1000px] items-center justify-center overflow-hidden"
      >
        <div className="relative w-full max-w-5xl h-[35rem] max-h-[32rem] flex items-center justify-center  sm:px-12 ">
          {phases.map((phase, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute w-full h-full origin-top"
              // z-index ensures later cards naturally sit on top if positioned correctly
              style={{ zIndex: index + 1 }}
            >
              {/* Card Container - Solid BG to cover previous card */}
              <div className="w-full h-full bg-card border border-border shadow-lg flex flex-col relative overflow-hidden" style={{ borderRadius: '8px' }}>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl pointer-events-none" />

                <div className="relative z-10 h-full p-8 lg:p-12">
                  <PhaseCardContent phase={phase} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE CARDS (Vertical Stack)
       */}
      <div className="lg:hidden relative z-10 px-4 sm:px-8 pb-24 space-y-6 max-w-5xl mx-auto">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="group border border-border bg-card shadow-sm p-6 sm:p-8 relative overflow-hidden hover:shadow-md transition-shadow"
            style={{ borderRadius: '8px' }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl pointer-events-none" />
            <PhaseCardContent phase={phase} />
          </div>
        ))}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.15);
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}
