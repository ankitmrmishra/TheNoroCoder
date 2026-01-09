"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, AlertCircle, Clock } from "lucide-react";

// --- Types ---
interface Phase {
  id: string;
  title: string;
  timeline: string;
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
    whatHappens: [
      "Stakeholder interviews (we talk to your team)",
      "Analytics audit (where users drop off)",
      "Competitor analysis & positioning",
      "Technical assessment & architecture",
      "Goal alignment & success metrics",
    ],
    whatYouGet: [
      "Strategic brief (20–30 pages)",
      "User personas and journey maps",
      "Competitive positioning report",
      "Technical architecture proposal",
      "Project timeline with milestones",
    ],
    realTalk:
      "This phase feels slow. That's intentional. We're eliminating the \"can you just...\" requests that derail projects 3 months in.",
  },
  {
    id: "02",
    title: "Design & Prototyping",
    timeline: "Week 3–6",
    whatHappens: [
      "Wireframing (structure before aesthetics)",
      "Style exploration (3–5 directions)",
      "High-fidelity mockups (all devices)",
      "Interactive prototype (clickable)",
      "User testing (real feedback)",
    ],
    whatYouGet: [
      "Complete design system",
      "Desktop + mobile designs",
      "Interactive Figma prototype",
      "Motion design specifications",
      "User testing report",
    ],
    realTalk:
      "You'll see 3–5 strategic directions, not 50 variations of the same homepage. We're exploring concepts, not pixel-pushing.",
  },
  {
    id: "03",
    title: "Development & Animation",
    timeline: "Week 7–12",
    whatHappens: [
      "Component-based architecture",
      "GSAP animations (smooth, purposeful)",
      "CMS integration (you control content)",
      "Performance optimization",
      "SEO foundation & Schema markup",
      "Accessibility testing (WCAG AA)",
    ],
    whatYouGet: [
      "Production-ready codebase",
      "Headless CMS setup",
      "Custom physics-based animations",
      "Performance report (Lighthouse 95+)",
      "SEO & Accessibility audit",
    ],
    realTalk:
      "We don't ship until every animation is timed to the millisecond and every page scores 95+ on Lighthouse.",
  },
  {
    id: "04",
    title: "Testing & Launch",
    timeline: "Week 13–14",
    whatHappens: [
      "QA testing (12+ devices)",
      "Load testing & Security audit",
      "Analytics setup (GA4, Hotjar)",
      "DNS migration (zero downtime)",
      "Post-launch monitoring (24/7)",
    ],
    whatYouGet: [
      "Fully tested site",
      "Analytics dashboard",
      "Launch checklist completed",
      "30 days of monitoring",
      "Training session & Documentation",
    ],
    realTalk:
      "Launch day is just the beginning. We stick around for 30 days to fix bugs and optimize conversions.",
  },
];

// --- Sub-Component: The Card Content ---
const PhaseCardContent = ({ phase }: { phase: Phase }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-4">
          <span className="text-[#D4654C] font-mono text-xl sm:text-2xl tracking-widest">
            /{phase.id}
          </span>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            {phase.title}
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 shrink-0">
          <Clock className="w-4 h-4 text-[#D4654C]" />
          <span className="text-xs sm:text-sm font-mono text-white/70">
            {phase.timeline}
          </span>
        </div>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 flex-grow overflow-y-auto custom-scrollbar pr-2">
        {/* Left: What Happens */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">
            What Happens
          </h4>
          <ul className="space-y-4">
            {phase.whatHappens.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm sm:text-base text-white/70"
              >
                <ArrowRight className="w-5 h-5 text-[#D4654C] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: What You Get */}
        <div className="flex flex-col h-full">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white/40 mb-6">
            What You Get
          </h4>
          <ul className="space-y-4 mb-10">
            {phase.whatYouGet.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm sm:text-base text-white font-medium"
              >
                <Check className="w-5 h-5 text-[#D4654C] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8 border-t border-dashed border-white/20">
            <div className="flex items-center gap-2 mb-3 text-[#D4654C]">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">
                Real Talk
              </span>
            </div>
            <p className="text-base sm:text-lg text-white/90 italic leading-relaxed bg-white/5 p-6 rounded-2xl border-l-2 border-[#D4654C]">
              "{phase.realTalk}"
            </p>
          </div>
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
    <section ref={containerRef} className="bg-[#050505] text-white w-full">
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay">
        <div
          className="absolute inset-0 bg-repeat animate-noise"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* HEADER SECTION (Normal Flow)
        This scrolls away naturally before the cards pin.
      */}
      <div className="relative z-10 w-full pt-20 pb-16 px-6 sm:px-12 lg:px-24 xl:px-32">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 sm:w-12 bg-[#D4654C]"></span>
            <span className="text-[#D4654C] uppercase tracking-[0.2em] text-sm font-medium">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] text-white mb-6">
            How We Work
            <span className="block text-white/40 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-2 lg:mt-4">
              (The Truth, Not the Sales Pitch)
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed border-l-2 border-[#D4654C] pl-6 mt-8">
            Most agencies have a "process" that looks great in a deck and falls
            apart in reality. Here's what actually happens when you hire us.
          </p>
        </div>
      </div>

      {/* DESKTOP CARDS (Pinned Stack)
       */}
      <div
        ref={cardsContainerRef}
        className="hidden lg:flex flex-col h-screen relative z-10 perspective-[1000px] items-center justify-center overflow-hidden "
      >
        <div className="relative w-full max-w-7xl h-[95vh] flex items-center justify-center">
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
              <div className="w-full h-full bg-[#0A0A0A] border border-white/10 rounded-[2rem] p-10 xl:p-14 shadow-2xl flex flex-col relative overflow-hidden">
                {/* Decorative Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4654C]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />

                <div className="relative z-10 h-full">
                  <PhaseCardContent phase={phase} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE CARDS (Vertical Stack)
       */}
      <div className="lg:hidden relative z-10 px-4 sm:px-8 pb-24 space-y-6">
        {phases.map((phase, index) => (
          <div
            key={index}
            className="group border border-white/10 bg-[#0a0a0a] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#D4654C]/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <PhaseCardContent phase={phase} />
          </div>
        ))}
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
}
