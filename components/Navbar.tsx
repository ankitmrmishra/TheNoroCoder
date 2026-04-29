"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";

const Navbar = () => {
  return (
    <div className="fixed top-6 inset-x-0 flex justify-center z-50 px-4 font-spaceGrotesk ">
      <nav className="flex items-center justify-between w-full max-w-3xl px-4 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-border">
        
        {/* Left: Logo & Name */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/logo.svg" 
              alt="Noro Work Logo" 
              width={28} 
              height={28} 
              className="w-7 h-auto group-hover:scale-105 transition-transform" 
            />
            <span className="font-bold text-lg tracking-tight text-foreground">NORO.<span className="text-primary">WORK</span></span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <span className="w-1 h-1 rounded-full bg-primary/50"></span>
          <Link href="#showcase" className="hover:text-foreground transition-colors">Work</Link>
          <span className="w-1 h-1 rounded-full bg-primary/50"></span>
          <Link href="#services" className="hover:text-foreground transition-colors">Services</Link>
        </div>

        {/* Right: CTA Button */}
        <div>
          <Link 
            href="#contact" 
            className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:opacity-90 hover:shadow-lg transition-all"
          >
            Talk to us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
