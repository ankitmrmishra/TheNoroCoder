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

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
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
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Fixed Heading Section with Scroll Fade */}
      <motion.div
        ref={headerRef}
        style={{ opacity: headerOpacity }}
        className=" top-0 z-10 px-6 sm:px-12 lg:px-24 xl:px-32 py-16 sm:py-20 bg-black/80 backdrop-blur-sm border-b border-white/10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border border-white/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#D4654C] animate-pulse" />
            <span className="text-sm text-white/70 font-light tracking-widest uppercase">
              Featured Work
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white max-w-5xl leading-tight mb-6">
            Work That Moved <span className="text-[#D4654C]">Metrics</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/60 max-w-3xl leading-relaxed">
            Pretty sites are easy. Sites that{" "}
            <span className="text-white">perform</span> are rare. Here's what
            happened when brands trusted us with their most important digital
            asset.
          </p>
        </motion.div>
      </motion.div>

      {/* Main Content Grid */}
      <div
        ref={containerRef}
        className="relative z-20 grid lg:grid-cols-2 gap-8 lg:gap-16 px-6 sm:px-12 lg:px-24 xl:px-32 pb-20 pt-12"
      >
        {/* Left Side - Image Container - UPDATED FOR MOBILE STICKY */}
        <div className="sticky top-0 lg:top-32 h-[40vh] sm:h-[50vh] lg:h-[75vh] relative z-30 bg-black">
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
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8">
                  <motion.div
                    key={`number-${activeIndex}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 border-white/30 backdrop-blur-md bg-black/30 flex items-center justify-center"
                  >
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </motion.div>
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:bottom-8 lg:left-8 lg:right-8">
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
                        className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
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
        <div className="space-y-24 sm:space-y-32 lg:space-y-40 pt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
            >
              <AnimatePresence mode="popLayout">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2 py-4  px-2 sm:space-y-6  flex justify-start flex-col min-h-[60vh] relative"
                  >
                    {/* Header */}
                    <div className="flex  justify-between sm:items-start items-center gap-3 sm:gap-4 mb-4 sm:mb-6 h-full">
                      <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                          {project.title}
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-[#D4654C] font-light">
                          {project.companyType}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 max-h-max rounded-full max-w-max border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-white/70 whitespace-nowrap">
                        <div className="w-2 h-2 rounded-full bg-[#D4654C]" />
                        {project.timeOfwork}
                      </span>
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {project.metrics.map((metric, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                            className="p-3 sm:p-4 lg:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#D4654C]/50 transition-colors"
                          >
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">
                              {metric.value}
                            </p>
                            <p className="text-xs sm:text-sm text-white/50 font-light">
                              {metric.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/70 leading-relaxed mb-6 sm:mb-8">
                      {project.details}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex  gap-3 sm:gap-4 absolute bottom-0">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2  bg-[#D4654C] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-[#bf5a43] group"
                      >
                        View Case Study
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                      </motion.a>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-2  border-2 border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 group"
                      >
                        Live Site
                        <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Final Section - More Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center"
          >
            <div className="text-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border border-white/10 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6 border border-white/20 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#D4654C] animate-pulse" />
                <span className="text-xs sm:text-sm text-white/70 font-light tracking-widest uppercase">
                  Open Source
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6">
                More Projects
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                Explore the rest of my open source work and contributions to the
                developer community.
              </p>

              <motion.a
                href="https://github.com/ankitmrmishra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#D4654C] px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base lg:text-lg font-semibold text-white transition-all hover:bg-[#bf5a43] group"
              >
                View GitHub Profile
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
