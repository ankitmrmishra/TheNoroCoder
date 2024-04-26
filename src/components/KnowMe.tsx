import React, { useEffect } from "react";
import backgroundImage from "../../public/bggrad.jpg";
import Image from "next/image";
import { BackgroundGradient } from "./ui/phot";
import { ContainerScroll } from "./ScrollRoate";
import MyPhoto from "../app/assets/WhatsApp Image 2024-04-21 at 20.39.22_7cc2dc0b.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

function KnowMe() {


  return (
    <div className='h-[45rem] w-full dark:bg-black bg-black  dark:bg-grid-white/[0.8] bg-grid-white/20 relative flex items-center  lg:pt-2 pt-1 lg:items-center flex-col justify-start'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'></div>
      <ContainerScroll
        titleComponent={
          <>
            <div className=' text-white inline-block text-transparent text-2xl bg-clip-text lg:text-8xl font-semibold text-center '>
              The Underdog <span className='text-[#DA0037]'>DEV</span>
              <br />
            </div>
          </>
        }>
        <div className=' bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-orange-600 via-gray-900 to-blue-900 w-full p-4 rounded-2xl lg:flex h-full'>
          <div className='leftIntro lg:w-[50%]'>
            <p className='lg:w-[40rem] mt-5 font-extrabold md:text-4xl text-xl lg:p-4 text-white'></p>
            <div className='flex flex-col justify-center items-center text-start'>
              <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-transparent bg-clip-text p-5 font-bold text-sm md:text-xl gap-4 flex flex-col'>
                <div>
                  {" "}
                  Hi there! I am the so-called PRO coder behind this
                  questionable website.{" "}
                </div>
                <div>
                  {" "}
                  In reality, I am just a scrappy self-taught developer with
                  more enthusiasm than skills.{" "}
                </div>
                <div>
                  {" "}
                  I spend my days wielding code like a chimp with a keyboard,
                  hoping something halfway functional materializes.{" "}
                </div>
                <div>My expertise?</div>
                <div>Making things work...eventually (maybe).</div>
              </div>
            </div>
          </div>
          <div className='Image md:flex align-middle  hidden items-center justify-center md:w-[50%] md:p-8 '>
            <BackgroundGradient className='w-[18rem] '>
              <Image
                src={MyPhoto}
                alt='jordans'
                height='400'
                width='400'
                className='object-fill w-[30rem]  rounded-3xl'
              />
            </BackgroundGradient>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}

export default KnowMe;
