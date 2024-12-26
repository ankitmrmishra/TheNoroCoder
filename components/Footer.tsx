"use client";

import { motion } from "framer-motion";
import { Ghost, Mail } from "lucide-react";
import Link from "next/link";
import SocialMedia from "./ui/SocialMedia";

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "About Me", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQs", href: "#faqs" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        name: "Get in Touch",
        href: "https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you",
      },
      { name: "Email", href: "mailto:contact@ankitmishra.xyz" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 mt-auto bg-white">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <Ghost className="text-mainColour size-8" />
              <span className="text-xl font-firacode ml-2">Ankit Mishra</span>
            </div>
            <p className="text-gray-600 text-sm">
              Full Stack Developer based in India, building modern web
              applications.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              className="col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-mainColour transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Media Section */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Connect</h3>
            <SocialMedia
              links={{
                twitter: "https://twitter.com/AnkitMishra",
                linkedin: "https://linkedin.com/in/AnkitMishra",
                github: "https://github.com/AnkitMishra",
              }}
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Ankit Mishra. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-[#1A2B3B]/20 focus:ring-offset-2 focus:ring-offset-[#E8E6E3]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1A2B3B_0%,#FF4D4D_50%,#1A2B3B_100%)]" />
                <span className="flex h-full w-full items-center justify-center rounded-full bg-[#E8E6E3] px-4 py-1 text-sm font-medium text-[#1A2B3B] backdrop-blur-3xl">
                  <Link
                    href="mailto:contact@ankitmishra.xyz"
                    className="flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email Me
                  </Link>
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
