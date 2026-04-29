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
    icon: <BrainCircuit className="w-7 h-7 text-primary" />,
    headline: "Revenue first.\nDesign second.",
    subHeadline: "Data-Driven Strategy",
    body: [
      "Analytics before aesthetics",
      "Competitor research",
      "Customer insights",
      "Then we design",
    ],
    statCallout: "projects launch on time",
    statConfig: { value: 78, suffix: "%" },
  },
  {
    id: "performance",
    icon: <Zap className="w-7 h-7 text-primary" />,
    headline: "Fast code.\nClean architecture.",
    subHeadline: "Built for Speed",
    body: [
      "TypeScript end-to-end",
      "Component-based",
      "Zero WordPress",
      "Production-ready",
    ],
    statCallout: "conversion lift from speed",
    statConfig: { prefix: "+", value: 25, suffix: "%" },
  },
  {
    id: "craft",
    icon: <Trophy className="w-7 h-7 text-primary" />,
    headline: "Small team.\nDirect access.",
    subHeadline: "No Middlemen",
    body: [
      "Talk to developers directly",
      "Designer-reviewed code",
      "Fast decisions",
      "Studio quality",
    ],
    statCallout: "higher prices via positioning",
    statConfig: { value: 1.8, suffix: "x", decimals: 1 },
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
      id="philosophy"
      ref={containerRef}
      className="relative bg-background py-20 sm:py-28 overflow-hidden"
    >
      {/* Background grid */}

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mb-20 px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="uppercase tracking-[0.2em] text-sm text-primary font-bold">
              Why Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight text-foreground">
            Three things we do
           
          </h2><h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight text-foreground">
          
            <span className="text-muted-foreground">differently.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
            <span className="text-foreground font-medium">Measurable results.</span> That&apos;s it.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {philosophyData.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative p-8 sm:p-10 bg-card border border-border backdrop-blur-md shadow-sm hover:shadow-md transition-shadow"
              style={{ borderRadius: '8px' }}
            >
              {/* <div className="mb-8 w-14 h-14 rounded-full flex items-center justify-center bg-muted border border-border">
                {item.icon}
              </div> */}

              <h3 className="text-2xl font-bold text-foreground whitespace-pre-line mb-4">
                {item.headline}
              </h3>

              <p className="italic text-primary font-medium mb-6">“{item.subHeadline}”</p>

              <ul className="space-y-3 mb-10">
                {item.body.map((line, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground text-sm">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-border">
                <div className="flex items-baseline gap-1 text-foreground">
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
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
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
