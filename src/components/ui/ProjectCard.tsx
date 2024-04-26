import { cn } from '@/lib/utils'
import React from 'react'
import {  motion, MotionValue } from "framer-motion";
import Image, { StaticImageData } from 'next/image';
import LawgicalInsights from '../../app/assets/Li.png'
import Studinity from '../../app/assets/st.png'
import hackforBloom from '../../app/assets/hfb.png'
import duggup from '../../app/assets/du.png'
import Link from 'next/link';



function ProjectCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "bg-black mt-16 lg:mt-24 text-red-900 md:grid grid-cols-2 gap-3 m-4 pt-12",
        className
      )}>
      <Card
        title='LawGical Insights'
        display={LawgicalInsights}
        link='https://lawgicalinsights.vercel.app/'>
       
      </Card>
      <Card
        title='Studinity'
        display={Studinity}
        link='https://studinity.vercel.app/'>
      
      </Card>
      <Card
      
        title='Hack-FOR-Bloom'
        display={hackforBloom}
        link='https://hfb-rho.vercel.app/'>
        
      </Card>
      <Card
      
        title='Duggup:A no nonsense Social Media platform'
        display={duggup}
        link='https://duggup-assignment-ankitmishra.vercel.app/'>
       
      </Card>
    </div>
  );
}


export const Card = ({
title,
display,
 
  link,
  
}: {
 title:string,
 display:StaticImageData,
 
  link:string,
  
}) => {
  return (
    <motion.div
      style={{
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className='max-w-5xl -mt-12 mx-auto h-[10rem] md:rounded-[30px] rounded-[23px] md:h-[25rem]  md:w-[40rem] border-2 border-[#6C6C6C] md:p-2 p-1 bg-[#000000]  shadow-2xl m-14 hover:border-4  overflow-hidden'>
      <div className=' h-full w-full  overflow-hidden rounded-xl bg-transparent dark:bg-zinc-900 md:rounded-2xl hover:scale-125 duration-400 hover:cursor-pointer ease-in-out  '>
        <Link href={link} className=' top-[50%]'>
          {" "}
          <Image
            src={display}
            alt='hero'
            height={100}
            width={1400}
            className='  h-full object-fit rounded-2xl  '
            draggable={false}
          />
        </Link>
        <h1 className='relative z-50 flex items-center justify-center align-middle bg-black/100 text-gray-50 font-bold text-xl w-full h-full rounded-md px-2 opacity-90 flex-col'>
          {title}
          
        </h1>

       
      </div>
    </motion.div>
  );
};

export default ProjectCard