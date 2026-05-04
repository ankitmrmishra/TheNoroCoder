"use client";

import React from "react";
import Image from "next/image";
import Ankit from "../app/assets/MyImage.jpg";

export default function QuickCallWidget() {
  return (
    <a
      href="https://cal.com/worknoro/quick-chat" // Update with your actual cal.com link if different
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group flex flex-col bg-card rounded-[20px] shadow-lg border-2 border-border hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-40 h-[140px] p-2"
    >
      <div className="relative w-full h-[75%] overflow-hidden rounded-[14px] bg-muted">
        <Image
          src={Ankit}
          alt="Book a call with Ankit"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="w-full h-[25%] flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300 rounded-b-[14px]">
        <span className="text-foreground text-sm font-extrabold tracking-wide group-hover:text-primary transition-colors duration-300">
          Book a Call
        </span>
      </div>
    </a>
  );
}
