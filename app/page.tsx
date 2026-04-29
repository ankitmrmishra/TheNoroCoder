"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SocialProofStrip from "../components/SocialProofStrip";
import Showcase from "../components/ShowCase";

import Footer from "../components/Footer";

import ServicesRedesign from "../components/Provide";
import PhilosophySection from "../components/Philosophy";
import Process from "../components/Process";
import FAQ from "../components/Faqs";
import QuickCallWidget from "../components/QuickCallWidget";
import Pricing from "../components/Pricing";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Left vertical lines */}
      <div className="hidden lg:block fixed left-[15%] bg-primary/10 w-[1px] h-[100vh] top-0 z-[100]"></div>
      <div className="hidden lg:block fixed left-[13%] bg-primary/10 w-[1px] h-[100vh] top-0 z-[100]"></div>
      
      {/* Horizontal lines SVG between left vertical lines */}
      <div 
        className="hidden lg:block fixed left-[13%] top-0 h-[100vh] z-[99] overflow-hidden pointer-events-none opacity-30"
        style={{ width: 'calc(15% - 13%)' }}
      >
        <img 
          src="/linehorizontal2.svg" 
          alt="" 
          className="w-full h-full object-cover"
         
        />
      </div>
      
      {/* Right vertical lines */}
      <div className="hidden lg:block fixed right-[15%] bg-primary/10 w-[1px] h-[100vh] top-0 z-[100]"></div>
      <div className="hidden lg:block fixed right-[13%] bg-primary/10 w-[1px] h-[100vh] top-0 z-[100]"></div>
      
      {/* Horizontal lines SVG between right vertical lines */}
      <div 
        className="hidden lg:block fixed right-[13%] top-0 h-[100vh] z-[99] overflow-hidden pointer-events-none opacity-30"
        style={{ width: 'calc(15% - 13%)' }}
      >
        <img 
          src="/linehorizontal2.svg" 
          alt="" 
          className="w-full h-full object-cover"
          
        />
      </div>
      <Navbar />
      {/* 1. HERO: Pinned first. Lowest Z-index. */}
      <div className="pinned-panel relative min-h-screen w-full z-0 bg-background">
        <Hero />
      </div>
      {/* <SocialProofStrip /> */}
      
      {/* 3. PROVIDE: Slides over Showcase. Normal Scroll starts here. Highest Z-index. */}
      {/* We do not add 'pinned-panel' here so it scrolls normally once in view. */}
      <div className="relative min-h-screen w-full z-20 bg-background">
        <ServicesRedesign />
      </div>
      {/* 2. SHOWCASE: Slides over Hero, then Pins. Higher Z-index. */}
      <div className="pinned-panel relative min-h-screen w-full z-10 bg-background">
        <Showcase />
      </div>{" "}
      <div className="pinned-panel relative min-h-screen w-full z-10 bg-background">
        <PhilosophySection />
      </div>
      <Process />
      <Pricing />
      {/* 4. REST OF CONTENT: Continues naturally below Provide */}
      <div className="relative z-20 bg-background">
        <FAQ />
        <Team />
        <Footer />
      </div>
      <QuickCallWidget />
    </div>
  );
}
