"use client";

import React, { useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./BeamCollison";

// Import your assets
import LawgicalInsights from "../../app/assets/Li.png";
import KN from "../../app/assets/KalaNamak.png";
import JK from "../../app/assets/jobkonnect.png";
import khelo from "../../app/assets/khelo.png";
import dcex from "../../app/assets/dcex.png";

gsap.registerPlugin(ScrollTrigger);

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

// --- Types ---
interface Project {
  title: string;
  display?: StaticImageData;
  link: string;
  companyType: string;
  timeOfwork: string;
  details: string;
  isSpecial?: boolean;
}

// --- Data ---
const projects: Project[] = [
  {
    title: "KheloYaha",
    display: khelo,
    link: "https://kheloyaha.vercel.app/",
    companyType: "Prediction Betting App",
    timeOfwork: "June 2024",
    details:
      "Turn Your Predictions into Profits. India's first social prediction market where opinions have real value.",
  },
  {
    title: "DCEX",
    display: dcex,
    link: "https://dcex.vercel.app/",
    companyType: "Web Based Crypto Wallet",
    timeOfwork: "July 2024",
    details:
      "A web based crypto wallet, BharatWallet makes it easier to use crypto wallets with seamless integration.",
  },
  {
    title: "JobKonnect",
    display: JK,
    link: "https://jobkonnect.vercel.app/",
    companyType: "Job Search Platform",
    timeOfwork: "August 2024",
    details:
      "We are your career catalyst, bringing together ambitious professionals and visionary companies.",
  },
  {
    title: "LawGical Insights",
    display: LawgicalInsights,
    link: "https://lawgical-insights-page.vercel.app/",
    companyType: "Legal Platform",
    timeOfwork: "April 2024",
    details:
      "LawGical Insights is a Portfolio Website and a Law info Page designed for legal professionals.",
  },
  {
    title: "Kalanamak",
    display: KN,
    link: "https://kalanamak.vercel.app/",
    companyType: "E-commerce Platform",
    timeOfwork: "May 2024",
    details:
      "Kalanamak is a specialized e-commerce platform focusing on authentic, high-quality KalaNamak rice.",
  },
  {
    title: "More Projects",
    link: "https://github.com/ankitmrmishra",
    companyType: "Github",
    timeOfwork: "Ongoing",
    details: "Explore the rest of my open source work and contributions.",
    isSpecial: true,
  },
];

export default function HorizontalProjectScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    // GSAP Match Media: Only runs animation on Desktop (min-width: 768px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!section || !trigger) return;

      const pin = gsap.fromTo(
        section,
        {
          translateX: 0,
        },
        {
          translateX: `-${section.scrollWidth - window.innerWidth}px`,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        }
      );

      return () => {
        pin.kill();
      };
    });

    return () => mm.revert(); // Clean up GSAP when component unmounts
  }, []);

  return (
    <section className="overflow-hidden bg-red-100">
      <div ref={triggerRef}>
        {/* LAYOUT LOGIC:
            Mobile: flex-col, h-auto, w-full, padding-y (vertical stack)
            Desktop (md): flex-row, h-screen, w-max (horizontal strip)
        */}
        <div
          ref={sectionRef}
          className="relative flex flex-col gap-8  w-screen md:max-h-max md:w-max md:flex-row md:items-start md:gap-10 md:px-10 md:py-0"
        >
          {projects.map((project, index) => (
            <ParallaxCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Individual Card Component ---
const ParallaxCard = ({ project }: { project: Project }) => {
  // Special Card Logic (More Projects)
  if (project.isSpecial) {
    return (
      <div className="relative  w-full shrink-0 overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:h-[60vh] md:w-[40vw] md:min-w-[350px]">
        <BackgroundBeamsWithCollision className="flex h-full w-full flex-col items-center justify-center p-5 text-center">
          <h3
            className={`mb-5 text-3xl font-bold text-white ${poppins.className}`}
          >
            {project.title}
          </h3>
          <Link href={project.link} target="_blank">
            <button className="rounded-full bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-200">
              View GitHub
            </button>
          </Link>
        </BackgroundBeamsWithCollision>
      </div>
    );
  }

  // Standard Project Card
  return (
    <div
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-3xl  shadow-2xl border border-white/10",
        // Mobile Dimensions:
        "h-[500px] w-full",
        // Desktop Dimensions:
        "md:h-[60vh] md:w-[50vw] md:min-w-[500px]",
        poppins.className
      )}
    >
      {/* 1. Background Image */}
      <div className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out md:group-hover:scale-110">
        {project.display && (
          <Image
            src={project.display}
            alt={project.title}
            fill
            className="object-cover opacity-80 md:opacity-100" // Slightly darker image on mobile by default
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={90}
          />
        )}
      </div>

      {/* 2. Dark Vignette Overlay 
          - Mobile: Always visible (opacity-100) so text pops
          - Desktop: Hidden (md:opacity-0), fades in on hover (md:hover:opacity-100)
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 opacity-100 " />

      {/* 3. Top Content (Title)
          - Mobile: Always in position (translate-y-0)
          - Desktop: Hidden above (md:translate-y-[-100%]), slides down on hover
      */}
      <div className="absolute top-0 left-0 w-full p-6 transition-transform duration-500 z-20  md:p-8 md:group-hover:translate-y-0">
        <div className="flex justify-between items-start">
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h3>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-light text-gray-300 md:text-sm">
            {project.timeOfwork}
          </span>
        </div>
        <p className="mt-1 text-base font-light text-gray-300 md:text-lg">
          {project.companyType}
        </p>
      </div>

      {/* 4. Bottom Content (Desc + Button)
          - Mobile: Always in position (translate-y-0)
          - Desktop: Hidden below (md:translate-y-[100%]), slides up on hover
      */}
      <div className="absolute bottom-0 left-0 w-full p-6 transition-transform duration-500 z-20 ">
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-gray-300 md:text-base">
          {project.details}
        </p>

        <Link href={project.link} target="_blank">
          <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95">
            View Case Study <ArrowRight className="h-4 w-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};
