"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

// --- Types ---
interface Project {
  title: string;
  display?: string;
  link: string;
  companyType: string;
  timeOfwork: string;
  details: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
}

// --- Data ---
const projects: Project[] = [
  {
    title: "KheloYaha",
    display:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    link: "https://kheloyaha.vercel.app/",
    companyType: "Prediction Betting App",
    timeOfwork: "June 2024",
    details:
      "Turn Your Predictions into Profits. India's first social prediction market where opinions have real value.",
    tags: ["React", "Web3", "Real-time"],
    metrics: [
      { label: "User Growth", value: "+240%" },
      { label: "Engagement", value: "4.2x" },
    ],
  },
  {
    title: "DCEX",
    display:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    link: "https://dcex.vercel.app/",
    companyType: "Web Based Crypto Wallet",
    timeOfwork: "July 2024",
    details:
      "A web based crypto wallet, BharatWallet makes it easier to use crypto wallets with seamless integration.",
    tags: ["Blockchain", "Security", "UI/UX"],
    metrics: [
      { label: "Transactions", value: "50K+" },
      { label: "Security Score", value: "99.9%" },
    ],
  },
  {
    title: "JobKonnect",
    display:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    link: "https://jobkonnect.vercel.app/",
    companyType: "Job Search Platform",
    timeOfwork: "August 2024",
    details:
      "We are your career catalyst, bringing together ambitious professionals and visionary companies.",
    tags: ["SaaS", "AI Matching", "Platform"],
    metrics: [
      { label: "Job Matches", value: "10K+" },
      { label: "Success Rate", value: "87%" },
    ],
  },
  {
    title: "LawGical Insights",
    display:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
    link: "https://lawgical-insights-page.vercel.app/",
    companyType: "Legal Platform",
    timeOfwork: "April 2024",
    details:
      "LawGical Insights is a Portfolio Website and a Law info Page designed for legal professionals.",
    tags: ["Professional", "Content", "Design"],
    metrics: [
      { label: "Page Views", value: "15K+" },
      { label: "Bounce Rate", value: "-45%" },
    ],
  },
  {
    title: "Kalanamak",
    display:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    link: "https://kalanamak.vercel.app/",
    companyType: "E-commerce Platform",
    timeOfwork: "May 2024",
    details:
      "Kalanamak is a specialized e-commerce platform focusing on authentic, high-quality KalaNamak rice.",
    tags: ["E-commerce", "Payments", "Responsive"],
    metrics: [
      { label: "Conversion", value: "+180%" },
      { label: "Revenue", value: "3.5x" },
    ],
  },
];

const Showcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 1]);

  useEffect(() => {
    // Only run the scroll spy logic on desktop where the refs are attached
    const handleScroll = () => {
      if (window.innerWidth < 1024) return; // Skip logic for mobile layout

      const container = containerRef.current;
      if (!container) return;

      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      imageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementMiddle = elementTop + rect.height / 2;
        const viewportMiddle = scrollY + windowHeight / 2;

        if (Math.abs(elementMiddle - viewportMiddle) < rect.height / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-black min-h-screen">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header Section (Shared) */}
      <motion.div
        ref={headerRef}
        style={{ opacity: headerOpacity }}
        className="top-0 z-10 px-6 sm:px-12 lg:px-24 xl:px-32 py-16 sm:py-20 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#D4654C]"></span>
            <span className="text-[#D4654C] uppercase tracking-[0.2em] text-sm">
              Featured Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-tight mb-6">
            Work That Moved <span className="text-[#D4654C]">Metrics</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/60 max-w-3xl leading-relaxed">
            Pretty sites are easy. Sites that{" "}
            <span className="text-white">perform</span> are rare. Here&apos;s
            what happened when brands trusted us with their most important
            digital asset.
          </p>
        </motion.div>
      </motion.div>

      {/* ========================================================= */}
      {/* MOBILE LAYOUT (Stacked Cards like Philosophy Page)        */}
      {/* Hidden on Large Screens (lg:hidden)                       */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col gap-12 px-6 py-12 lg:hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative  bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm"
          >
            {/* Mobile Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
              <img
                src={project.display}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Number Badge */}
              <div className="absolute top-4 left-4 w-10 h-10  border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center">
                <span className="text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-6 sm:p-8">
              {/* Title Header */}
              <div className="flex flex-col gap-2 mb-6">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h2>
                  <span className="text-xs font-mono text-[#D4654C] border border-[#D4654C]/30 bg-[#D4654C]/10 px-2 py-1  whitespace-nowrap">
                    {project.timeOfwork}
                  </span>
                </div>
                <p className="text-[#D4654C] text-sm font-medium tracking-wide">
                  {project.companyType}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs text-white/70 bg-white/5 border border-white/10 "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              {project.metrics && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-black/40 border border-white/10"
                    >
                      <p className="text-2xl font-bold text-white mb-1">
                        {metric.value}
                      </p>
                      <p className="text-xs text-white/50 uppercase tracking-wider">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-8 text-sm sm:text-base">
                {project.details}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2  bg-[#D4654C] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#bf5a43]"
                >
                  Case Study <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2  border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
                >
                  Live Site <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* More Projects Link - Mobile */}
        <div className="mt-8 text-center px-4 py-12 border border-white/10 rounded-3xl bg-white/5">
          <h2 className="text-2xl font-bold text-white mb-4">More Projects</h2>
          <p className="text-white/60 text-sm mb-6">
            Check out my open source contributions.
          </p>
          <a
            href="https://github.com/ankitmrmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2  bg-[#D4654C] px-8 py-3 text-sm font-semibold text-white"
          >
            GitHub Profile <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DESKTOP LAYOUT (Sticky Image + Scroll)                    */}
      {/* Hidden on Mobile (hidden lg:grid)                         */}
      {/* ========================================================= */}
      <div
        ref={containerRef}
        className="relative z-20 hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-16 px-6 sm:px-12 lg:px-24 xl:px-32 pb-20 pt-12"
      >
        {/* Left Side - Sticky Image Container */}
        <div className="sticky top-32 h-[75vh] relative z-30 bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <motion.img
                  src={projects[activeIndex].display!}
                  initial={{ opacity: 1, scale: 0.99 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  alt={projects[activeIndex].title}
                  className="w-full h-full object-cover grayscale sticky top-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Project Number */}
                <div className="absolute top-8 left-8">
                  <motion.div
                    key={`number-${activeIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16  border-2 border-white/30 backdrop-blur-md bg-black/30 flex items-center justify-center"
                  >
                    <span className="text-2xl font-bold text-white">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </div>

                {/* Tags */}
                <div className="absolute bottom-8 left-8 right-8">
                  <motion.div
                    key={`tags-${activeIndex}`}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-2"
                  >
                    {projects[activeIndex].tags?.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm  bg-white/10 backdrop-blur-md text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side - Scrolling Content */}
        <div className="space-y-40 pt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="min-h-[70vh] flex flex-col justify-center"
            >
              <AnimatePresence mode="popLayout">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6 flex justify-start flex-col min-h-[60vh] relative"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4 mb-6 h-full">
                      <div>
                        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-xl text-[#D4654C] font-light">
                          {project.companyType}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2  border border-white/20 px-4 py-2 text-sm text-white/70 whitespace-nowrap ">
                        <div className="w-2 h-2  bg-[#D4654C]" />
                        {project.timeOfwork}
                      </span>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D4654C]/50 transition-colors"
                          >
                            <p className="text-3xl lg:text-4xl font-bold text-white mb-1">
                              {metric.value}
                            </p>
                            <p className="text-sm text-white/50 font-light">
                              {metric.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-8">
                      {project.details}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 bottom-0">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-1 bg-[#D4654C] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#bf5a43] group"
                      >
                        View Case Study
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </motion.a>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2 border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 group"
                      >
                        Live Site
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Final Section - More Projects Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-[70vh] flex flex-col justify-center"
          >
            <div className="text-center py-20 px-6 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-white/20 ">
                <div className="w-2 h-2  bg-[#D4654C] animate-pulse" />
                <span className="text-sm text-white/70 font-light tracking-widest uppercase">
                  Open Source
                </span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                More Projects
              </h2>
              <p className="text-xl lg:text-2xl text-white/60 mb-10 max-w-2xl mx-auto px-4">
                Explore the rest of my open source work and contributions to the
                developer community.
              </p>

              <motion.a
                href="https://github.com/ankitmrmishra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3  bg-[#D4654C] px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-[#bf5a43] group"
              >
                View GitHub Profile
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
