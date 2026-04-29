"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

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
      "India's first social prediction market where opinions have real value.",
    tags: ["React", "Web3", "Real-time"],
    metrics: [
      { label: "User Growth", value: "+35%" },
      { label: "Engagement", value: "2.1x" },
    ],
  },
  {
    title: "DCEX",
    display:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800",
    link: "https://dcex.vercel.app/",
    companyType: "Crypto Wallet",
    timeOfwork: "July 2024",
    details:
      "Web-based crypto wallet with seamless integration.",
    tags: ["Blockchain", "Security", "UI/UX"],
    metrics: [
      { label: "Transactions", value: "8K+" },
      { label: "Security", value: "A+" },
    ],
  },
  {
    title: "JobKonnect",
    display:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    link: "https://jobkonnect.vercel.app/",
    companyType: "Job Platform",
    timeOfwork: "August 2024",
    details:
      "Career catalyst connecting professionals with opportunities.",
    tags: ["SaaS", "AI", "Platform"],
    metrics: [
      { label: "Matches", value: "2K+" },
      { label: "Success", value: "78%" },
    ],
  },
];

const Showcase: React.FC = () => {
  return (
    <div id="showcase" className="relative bg-background py-24">
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary"></span>
            <span className="text-primary uppercase tracking-[0.2em] text-sm font-bold">
              Featured Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-spaceGrotesk font-medium leading-[1.15] tracking-tight text-foreground mb-6">
            Work That Moved <span className="text-primary">Metrics</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Sites that perform are rare. Here&apos;s what we built.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
          {/* Project 1 - Large Featured (Spans 8 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-8 group relative bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500"
            style={{ borderRadius: '8px' }}
          >
            {/* Image */}
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <img
                src={projects[0].display}
                alt={projects[0].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tags Overlay */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {projects[0].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-black/50 backdrop-blur-md text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Time Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 text-xs bg-black/50 backdrop-blur-md text-white border border-white/20">
                {projects[0].timeOfwork}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {projects[0].title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">
                {projects[0].companyType}
              </p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {projects[0].details}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {projects[0].metrics?.map((metric, i) => (
                  <div key={i} className="p-3 bg-muted border border-border">
                    <p className="text-xl font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground uppercase">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Metrics + Small Project (Spans 4 columns) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* Overall Metrics Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border border-primary/20 p-5"
              style={{ borderRadius: '8px' }}
            >
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Overall Impact
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Measurable results
              </p>

              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Users</span>
                  </div>
                  <span className="text-base font-bold text-foreground">12K+</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                  <span className="text-base font-bold text-foreground">+65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-xs text-muted-foreground">Score</span>
                  </div>
                  <span className="text-base font-bold text-foreground">92</span>
                </div>
              </div>
            </motion.div>

            {/* Small Project Showcase - Project 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="group relative bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500 flex-1"
              style={{ borderRadius: '8px' }}
            >
              {/* Small Image */}
              <div className="relative h-[140px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800"
                  alt="LawGical Insights"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Tag */}
                <div className="absolute bottom-2 left-2">
                  <span className="px-2 py-0.5 text-xs bg-black/50 backdrop-blur-md text-white border border-white/20">
                    Legal
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-base font-bold text-foreground mb-1">
                  LawGical Insights
                </h3>
                <p className="text-xs text-primary font-medium mb-2">
                  Legal Platform
                </p>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  Portfolio website for legal professionals.
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="p-2 bg-muted border border-border">
                    <p className="text-sm font-bold text-foreground">3K+</p>
                    <p className="text-xs text-muted-foreground">Views</p>
                  </div>
                  <div className="p-2 bg-muted border border-border">
                    <p className="text-sm font-bold text-foreground">-28%</p>
                    <p className="text-xs text-muted-foreground">Bounce</p>
                  </div>
                </div>

                <a
                  href="https://lawgical-insights-page.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-primary transition-colors"
                >
                  View <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Project 2 - Medium (Spans 5 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 group relative bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500"
            style={{ borderRadius: '8px' }}
          >
            {/* Image */}
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={projects[1].display}
                alt={projects[1].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tags */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                {projects[1].tags?.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-black/50 backdrop-blur-md text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {projects[1].title}
              </h3>
              <p className="text-xs text-primary font-medium mb-2">
                {projects[1].companyType}
              </p>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {projects[1].details}
              </p>

              {/* Metrics Inline */}
              <div className="flex gap-4 mb-3">
                {projects[1].metrics?.map((metric, i) => (
                  <div key={i}>
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={projects[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Project 3 - Medium (Spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7 group relative bg-card border border-border overflow-hidden hover:shadow-lg transition-all duration-500"
            style={{ borderRadius: '8px' }}
          >
            {/* Image */}
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={projects[2].display}
                alt={projects[2].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tags */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                {projects[2].tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs bg-black/50 backdrop-blur-md text-white border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-foreground mb-1">
                {projects[2].title}
              </h3>
              <p className="text-xs text-primary font-medium mb-2">
                {projects[2].companyType}
              </p>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                {projects[2].details}
              </p>

              {/* Metrics Inline */}
              <div className="flex gap-4 mb-3">
                {projects[2].metrics?.map((metric, i) => (
                  <div key={i}>
                    <p className="text-lg font-bold text-foreground">{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <a
                href={projects[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-primary transition-colors"
              >
                View <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* More Projects CTA (Spans full width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-12 bg-card border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ borderRadius: '8px' }}
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                More Projects
              </h3>
              <p className="text-sm text-muted-foreground">
                Open source work and contributions on GitHub
              </p>
            </div>
            <a
              href="https://github.com/ankitmrmishra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors"
              style={{ borderRadius: '6px' }}
            >
              View GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
