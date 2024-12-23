"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
// import Navbar from "@/components/Navbar";
import SocialMedia from "@/components/ui/SocialMedia";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/ShowCase";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
    </div>
  );
}
