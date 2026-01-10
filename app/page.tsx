"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Showcase from "../components/ShowCase";

import Footer from "../components/Footer";

import ServicesRedesign from "../components/Provide";
import PhilosophySection from "../components/Philosophy";
import Process from "../components/Process";
import TechStack from "../components/TechStack";
import FAQ from "../components/Faqs";
import Pricing from "../components/Pricing";
import Team from "../components/Team";

// Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // const container = useRef<HTMLDivElement>(null);

  // useGSAP(
  //   () => {
  //     // Select the sections intended to be pinned
  //     // Note: We do NOT include Provide in this list because
  //     // it shouldn't get pinned itself, it just covers the stack.
  //     const panels = gsap.utils.toArray(".pinned-panel");

  //     panels.forEach((panel: any) => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         start: "top top",
  //         // The pinning lasts until the footer/end of the page content
  //         // but visually it effectively works as an infinite pin
  //         // until covered by the next layer.
  //         pin: true,
  //         pinSpacing: false, // Allows the next section to slide UP underneath/over
  //       });
  //     });
  //   },
  //   { scope: container }
  // );

  return (
    <div className="min-h-screen ">
      <Navbar />
      {/* 1. HERO: Pinned first. Lowest Z-index. */}
      <div className="pinned-panel relative min-h-screen w-full z-0 bg-white dark:bg-black">
        <Hero />
      </div>
      {/* <AgencyTechHero /> */}
      {/* 3. PROVIDE: Slides over Showcase. Normal Scroll starts here. Highest Z-index. */}
      {/* We do not add 'pinned-panel' here so it scrolls normally once in view. */}
      <div className="relative min-h-screen w-full z-20 bg-white dark:bg-black">
        <ServicesRedesign />
      </div>
      {/* 2. SHOWCASE: Slides over Hero, then Pins. Higher Z-index. */}
      <div className="pinned-panel relative min-h-screen w-full z-10 bg-white dark:bg-black">
        <Showcase />
      </div>{" "}
      <div className="pinned-panel relative min-h-screen w-full z-10 bg-white dark:bg-black">
        <PhilosophySection />
      </div>
      <Process />
      <TechStack />
      <Pricing />
      {/* 4. REST OF CONTENT: Continues naturally below Provide */}
      <div className="relative z-20 bg-white dark:bg-black">
        {/* <Testimonial /> */}
        <FAQ />

        <Team />
        {/* <About /> */}
        <Footer />
      </div>
    </div>
  );
}
