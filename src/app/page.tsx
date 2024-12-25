"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/ShowCase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
    </div>
  );
}
