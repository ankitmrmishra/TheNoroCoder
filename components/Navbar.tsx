"use client";

import React, { useState } from "react";
import { Ghost } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#Services" },
    { name: "Our Work", href: "#showcase" },
    { name: "Our Process", href: "#process" },
    { name: "FAQs", href: "#faqs" },
    { name: "Pricing", href: "#pricing" },
  ];

  const menuVariants = {
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: i * 0.17,
      },
    }),
    closed: (i: number) => ({
      opacity: 0,
      y: -40,
      x: -40,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.05,
      },
    }),
  };

  return (
    <nav
      className={cn(
        " w-full flex justify-between items-center align-middle bg-black  relative py-3",
        isOpen && ""
      )}
    >
      <div className="Logo   w-full px-[7%]">
        <span className="font-GalgoCondesed text-5xl sm:text-6xl lg:text-8xl ml-2 text-white">
          NORO<span className="text-secondary-foreground">.</span>WORK
        </span>
      </div>

      {/* Menu Button - Now visible on all screen sizes */}
      <motion.div
        className={cn("z-50 cursor-pointer px-10 ", isOpen && " ")}
        onClick={toggleMenu}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div
          className={cn("w-8 h-0.5 bg-white mb-2", isOpen && "bg-white")}
          variants={{
            open: { rotate: 45, y: 9 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-8 h-0.5 bg-white mb-2"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={cn("w-8 h-0.5 bg-white mb-2", isOpen && "bg-white")}
          variants={{
            open: { rotate: -45, y: -9 },
            closed: { rotate: 0, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Full-Screen Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center "
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{
              duration: 0.9,
              ease: [0, 0, 0.24, 1],
            }}
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="text-8xl  text-white hover:bg-white transfor font-Galgo700 group sm:border-b border-white w-full px-10   ease-in-out"
                custom={index}
              >
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-white group-hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              custom={menuItems.length}
              className="mt-8"
            >
              <Button
                variant={"outline"}
                className="border-primary rounded-full px-8 py-6 text-xl text-primary bg-secondary hover:bg-primary hover:text-white transition-colors"
              >
                <Link href="https://wa.me/918437153991?text=hey%20ANKIT%20I%20want%20to%20work%20on%20a%20project%20with%20you">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
