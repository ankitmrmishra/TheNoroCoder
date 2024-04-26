"use client"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/highlight";
import Navbar from "../components/Navbar"
import SocialMedia from "@/components/ui/SocialMedia";

import Showcase from "@/components/ShowCase";
import {GoogleGeminiEffectDemo }from '../components/whatspp'
import { IoArrowForward } from "react-icons/io5";
import KnowMe from "@/components/KnowMe";
import TechStack from "@/components/TechStack";
export default function Home() {
  const socialMediaLinks = {
    twitter: "https://twitter.com/AnkitMishraexe",
    linkedin: "https://www.linkedin.com/in/ankitmishra1106",
    github: "https://github.com/ankitmrmishra",
  };
  return (
    <div className=''>
      <Navbar />
      <div className='h-screen w-full dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/5 relative flex items-center  lg:pt-72 pt-52 lg:items-center flex-col justify-start'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
        <p className='lg:text-7xl text-3xl p-5 font-extrabold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-white/95 via-white/55 to-white  text-center'>
          A Noob Coder Who Thinks he is Pro <br />
          <Highlight className='bg-gradient-to-r from-white/95 via-white/55 to-white inline-block text-transparent text-3xl bg-clip-text lg:text-7xl  '>
            THE NORO-CODER
          </Highlight>
          <br />
        </p>
        <p className='text-xs text-[#DA0037] font-bold lg:text-lg pl-10 pr-10 text-center z-[100] '>
          Confidently coding my way into a world of bugs and broken layouts, but
          hey, at least it looks good(ish).
        </p>
        <div className='pt-11'>
          <SocialMedia links={socialMediaLinks} />
        </div>
       
        <button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-[10rem] mt-5'>
          <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
          <span className='flex h-full w-full cursor-pointer items-center justify-center align-middle text-center  rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-3'>
            <p className=' z-[80] font-medium text-lg'>Hire me</p>
            <IoArrowForward className='animate-moveBackwardForward' />
          </span>
        </button>
        ;
      </div>
      <Showcase />
      <KnowMe/>
      <TechStack/>
      <GoogleGeminiEffectDemo/>
    </div>
  );
}
