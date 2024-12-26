"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/ShowCase";
import Provide from "@/components/Provide";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Showcase />
      <Provide />
      <Pricing />
    </div>
  );
}
