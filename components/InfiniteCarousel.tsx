"use client";

import React from "react";
import Image from "next/image";

const projects = [
    "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
   "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
   "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
   "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
   "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
   "/projects/MacBook Pro 16_ - 1 (1).png",
    "/projects/Landing Page.png",
    "/projects/homedesign.png",
      "/projects/MacBook Pro 14_ - 1.png",
  
   "/projects/Hero itr 5.png",
  "/projects/dashboaeddesign.png",
  "/projects/Cofounds hero iteration 1.png",
  "/projects/Desktop.jpg",
  
];

const InfiniteCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden relative">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Carousel Track */}
      <div className="flex gap-4 animate-scroll">
        {/* First set of images */}
        {projects.map((project, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 w-[280px] h-[180px] relative rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={project}
              alt={`Project ${index + 1}`}
              fill
              sizes="280px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {projects.map((project, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 w-[280px] h-[180px] relative rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={project}
              alt={`Project ${index + 1}`}
              fill
              sizes="280px"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default InfiniteCarousel;
