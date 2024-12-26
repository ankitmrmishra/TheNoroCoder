import { cn } from "../../lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import LawgicalInsights from "../../app/assets/Li.png";
import KN from "../../app/assets/KalaNamak.png";
import JK from "../../app/assets/jobkonnect.png";
import khelo from "../../app/assets/khelo.png";
import dcex from "../../app/assets/dcex.png";
import { Poppins } from "next/font/google";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import display from "../../app/assets/github.png";
import { BackgroundBeamsWithCollision } from "./BeamCollison";

// const poppins = Poppins({
//   subsets: ["latin"],

//   weight: ["600"],
// });
const poppinslight = Poppins({
  subsets: ["latin"],

  weight: ["400"],
});

const projects = [
  {
    title: "KheloYaha",
    display: khelo,
    link: "https://kheloyaha.vercel.app/",
    companyType: "Prediction Betting App",
    timeOfwork: "June 2024",
    details:
      "Turn Your Predictions into Profits Trade on your convictions, earn from your insights. India's first social prediction market where opinions have real value.",
  },
  {
    title: "DCEX",
    display: dcex,
    link: "https://dcex.vercel.app/",
    companyType: "Web Based Crypto Wallet",
    timeOfwork: "July 2024",
    details:
      "A web based crypto wallet, BharatWallet makes it more easier to use cryptowallet",
  },
  {
    title: "JobKonnect",
    display: JK,
    link: "https://jobkonnect.vercel.app/",
    companyType: "Job Search Platform",
    timeOfwork: "August 2024",
    details:
      "At JobConnect, we are not just another job board. We are your career catalyst, bringing together ambitious professionals and visionary companies.",
  },
  {
    title: "LawGical Insights",
    display: LawgicalInsights,
    link: "https://lawgical-insights-page.vercel.app/",
    companyType: "Legal Platform",
    timeOfwork: "April 2024",
    details: "LawGical Insights is an Portfolio Website and a Law info Page ",
  },
  {
    title: "Kalanamak",
    display: KN,
    link: "https://kalanamak.vercel.app/",
    companyType: "E-commerce Platform",
    timeOfwork: "May 2024",
    details:
      "Kalanamak is a specialized e-commerce platform focusing on authentic, high-quality KalaNamak rice.",
  },
];
function ProjectCard({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "    grid lg:grid-cols-2 grid-cols-1 gap-3 md:pt-12 w-full",
        className
      )}
    >
      {projects.map((project, map) => (
        <Card key={map} {...project} />
      ))}
      <BackgroundBeamsWithCollision className="shadow-2xl border border-gray-300 md:w-[510px] w-full md:p-5 p-2 rounded-3xl md:h-[35rem] h-[32rem] text-black group overflow-hidden hover:cursor-pointer">
        <div className="relative  flex justify-center align-middle items-center h-full  ">
          {/* Image container that stays fixed */}

          <Button
            onClick={() => router.push("https://github.com/ankitmrmishra")}
            className="py-6 px-6 text-lg mt-5  "
          >
            More Projects
          </Button>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export const Card = ({
  title,
  display,
  companyType,
  link,
  timeOfwork,
  details,
}: {
  title: string;
  display: StaticImageData;
  companyType: string;
  timeOfwork: string;
  link: string;
  details: string;
}) => {
  const router = useRouter();
  return (
    <motion.div className=" shadow-2xl border border-gray-300 md:w-[510px] w-full md:p-5 p-2 rounded-3xl md:h-[35rem] h-[32rem] text-black group overflow-hidden hover:cursor-pointer ">
      <div className="relative  overflow-hidden rounded-3xl transition-[height] duration-500 ease-in-out md:group-hover:h-[230px] h-[200px] md:h-[300px] ">
        {/* Image container that stays fixed */}
        <div className="absolute top-0 left-0 w-full ">
          <Image
            src={display}
            width={500}
            height={500}
            alt={title}
            className="md:h-[20rem] h-[15rem] w-full object-fill rounded-2xl "
          />
        </div>
      </div>
      <div className="w-full md:mt-1 mt-5  flex flex-col md:justify-center justify-start align-middle items-start  px-4  md:h-[20rem] h-[10rem] md:gap-3 gap-1    ">
        <span
          className={` md:text-4xl text-xl  font-semibold ${poppinslight.className}  flex gap-2 justify-start align-middle items-start text-start`}
        >
          {title}
        </span>
        <div className="flex flex-col justify-center align-middle items-start">
          <p
            className={` md:text-xl    ${poppinslight.className}  flex gap-2 justify-start align-middle items-center`}
          >
            {companyType}
          </p>
          <span className="text-gray-500">{timeOfwork}</span>
        </div>
        <p className="details text-start text-gray-800">{details}</p>
        <Button
          onClick={() => router.push(link)}
          className="py-6 px-6 text-lg mt-5  "
        >
          Learn More
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
