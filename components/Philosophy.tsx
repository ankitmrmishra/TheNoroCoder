"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Trophy, Zap, BrainCircuit } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------------- TYPES ---------------- */

interface StatConfig {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
}

interface PhilosophyItem {
  id: string;
  icon: React.ReactNode;
  headline: string;
  subHeadline: string;
  body: string[];
  statCallout: string;
  statConfig: StatConfig;
}

/* ---------------- DATA ---------------- */

const philosophyData: PhilosophyItem[] = [
  {
    id: "strategy",
    icon: <BrainCircuit className="w-7 h-7 text-[#D4654C]" />,
    headline: "Strategy-First\nDevelopment",
    subHeadline: "We Don't Start With Design. We Start With Why.",
    body: [
      "Analytics deep-dive & audit",
      "Competitor positioning analysis",
      "Technical debt assessment",
      "Revenue-model alignment",
    ],
    statCallout: "of projects launch on time due to discovery.",
    statConfig: { value: 87, suffix: "%" },
  },
  {
    id: "performance",
    icon: <Zap className="w-7 h-7 text-[#D4654C]" />,
    headline: "Performance-Obsessed\nEngineering",
    subHeadline: "Your Site Loads in 3 Seconds. It Should Load in 1.2.",
    body: [
      "Advanced image optimization",
      "Code splitting & lazy loading",
      "Edge CDN architecture",
      "Zero layout shift (CLS 0)",
    ],
    statCallout: "conversion lift from speed updates alone.",
    statConfig: { prefix: "+", value: 40, suffix: "%" },
  },
  {
    id: "craft",
    icon: <Trophy className="w-7 h-7 text-[#D4654C]" />,
    headline: "Award-Winning\nCraft",
    subHeadline: "We Don't Follow Trends. We Set Them.",
    body: [
      "Guide attention to CTAs",
      "Reduce cognitive load",
      "Intuitive interactions",
      "Memorable brand moments",
    ],
    statCallout: "higher prices via premium positioning.",
    statConfig: { value: 2.5, suffix: "x", decimals: 1 },
  },
];

/* ---------------- COMPONENT ---------------- */

const PhilosophySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  /* ---------- HELPERS ---------- */

  const splitText = (el: HTMLElement) => {
    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map(
        (char) =>
          `<span class="char inline-block will-change-transform">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");
  };

  /* ---------- GSAP ---------- */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* Background parallax */
      gsap.to(bgRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* Header animation */
      const headline = headerRef.current?.querySelector("h2");
      if (headline) {
        splitText(headline as HTMLElement);

        gsap.from(".char", {
          y: 60,
          opacity: 0,
          rotateX: -90,
          stagger: 0.025,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headline,
            start: "top 80%",
          },
        });
      }

      /* Cards entrance */
      cardsRef.current.forEach((card) => {
        if (!card) return;

        gsap.from(card, {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotateX: 30,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        gsap.from(card.querySelectorAll("li"), {
          x: -20,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          },
        });
      });

      /* Counters */
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const cfg = philosophyData[index].statConfig;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: cfg.value,
          duration: 2.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(cfg.decimals || 0);
          },
        });
      });

      /* Magnetic hover – desktop only */
      mm.add("(min-width: 1024px)", () => {
        cardsRef.current.forEach((card) => {
          if (!card) return;

          const move = (e: MouseEvent) => {
            const r = card.getBoundingClientRect();
            const x = e.clientX - r.left - r.width / 2;
            const y = e.clientY - r.top - r.height / 2;

            gsap.to(card, {
              x: x * 0.05,
              y: y * 0.05,
              rotateY: x * 0.04,
              rotateX: -y * 0.04,
              duration: 0.4,
              ease: "power3.out",
            });
          };

          const reset = () => {
            gsap.to(card, {
              x: 0,
              y: 0,
              rotateX: 0,
              rotateY: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.4)",
            });
          };

          card.addEventListener("mousemove", move);
          card.addEventListener("mouseleave", reset);

          return () => {
            card.removeEventListener("mousemove", move);
            card.removeEventListener("mouseleave", reset);
          };
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  /* ---------- JSX ---------- */

  return (
    <section
      ref={containerRef}
      className="relative bg-black py-20 sm:py-28 overflow-hidden"
    >
      {/* Background grid */}
      <div
        ref={bgRef}
        className="absolute inset-0 opacity-5 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-24 xl:px-32">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#D4654C]" />
            <span className="uppercase tracking-[0.2em] text-sm text-[#D4654C]">
              The Philosophy
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Why Brands Choose Us Over{" "}
            <span className="block text-white/40">Template Builders.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl">
            We focus on what actually matters:{" "}
            <span className="text-white">measurable results.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophyData.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="mb-8 w-14 h-14 rounded-full flex items-center justify-center bg-black border border-white/10">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white whitespace-pre-line mb-4">
                {item.headline}
              </h3>

              <p className="italic text-[#D4654C] mb-6">“{item.subHeadline}”</p>

              <ul className="space-y-3 mb-10">
                {item.body.map((line, idx) => (
                  <li key={idx} className="flex gap-3 text-white/60 text-sm">
                    <ArrowRight className="w-4 h-4 text-[#D4654C]" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-1 text-white">
                  <span className="text-4xl font-bold">
                    {item.statConfig.prefix}
                  </span>
                  <span
                    ref={(el) => {
                      numbersRef.current[i] = el;
                    }}
                    className="text-4xl font-bold"
                  >
                    0
                  </span>
                  <span className="text-4xl font-bold">
                    {item.statConfig.suffix}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-white/40">
                  {item.statCallout}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
