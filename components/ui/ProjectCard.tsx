import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import LawgicalInsights from "../../app/assets/Li.png";
import Studinity from "../../app/assets/st.png";
import hackforBloom from "../../app/assets/hfb.png";
import duggup from "../../app/assets/du.png";
// import Link from "next/link";
import { Poppins } from "next/font/google";
import { Button } from "./button";
import { useRouter } from "next/navigation";

// const poppins = Poppins({
//   subsets: ["latin"],

//   weight: ["600"],
// });
const poppinslight = Poppins({
  subsets: ["latin"],

  weight: ["400"],
});
function ProjectCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "    grid lg:grid-cols-2 grid-cols-1 gap-3 md:pt-12 w-full",
        className
      )}
    >
      <Card
        title="LawGical Insights"
        display={LawgicalInsights}
        link="https://lawgicalinsights.vercel.app/"
        companyType="This is CompanyType"
        timeOfwork="April 2024"
        details="this is detail and i am doing this detail shit and writing this abolute crap aboyut the website and i am working on it and i am not going to stop here"
      ></Card>
      <Card
        title="Studinity"
        display={Studinity}
        link="https://studinity.vercel.app/"
        companyType="This is CompanyType"
        timeOfwork="April 2024"
        details="this is detail and i am doing this detail shit and writing this abolute crap aboyut the website and i am working on it and i am not going to stop here"
      ></Card>
      <Card
        title="Hack-FOR-Bloom"
        display={hackforBloom}
        link="https://hfb-rho.vercel.app/"
        companyType="This is CompanyType"
        timeOfwork="April 2024"
        details="this is detail and i am doing this detail shit and writing this abolute crap aboyut the website and i am working on it and i am not going to stop here"
      ></Card>
      <Card
        title="Duggup"
        display={duggup}
        link="https://duggup-assignment-ankitmishra.vercel.app/"
        companyType="This is CompanyType"
        timeOfwork="April 2024"
        details="this is detail and i am doing this detail shit and writing this abolute crap aboyut the website and i am working on it and i am not going to stop here"
      ></Card>
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
