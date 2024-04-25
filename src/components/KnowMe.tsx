import React from 'react'
import backgroundImage from '../../public/bggrad.jpg'
import Image from 'next/image';
import { BackgroundGradient } from './ui/phot';
import MyPhoto from '../app/assets/WhatsApp Image 2024-04-21 at 20.39.22_7cc2dc0b.jpg'


function KnowMe() {
  return (
    <div className='bg-black flex align-middle flex-col justify-center items-center r'>
      <div className=' text-white inline-block text-transparent text-2xl bg-clip-text lg:text-4xl font-semibold text-center '>
        The Underdog <span className='text-[#DA0037]'>DEV</span> <br />
        <p className=' lg:w-[40rem] w-[20rem] text-sm mt-5 text-white/40'>
          Sure, I may not be a coding guru (yet), but I make up for it with
          grit, determination, and an extraordinarily high tolerance for
          caffeine-fueled all-nighters...
        </p>
      </div>
      <div className='mt-6 lg:bg-gradient-to-l bg-gradient-to-r from-gray-700 via-gray-900 to-black w-[80%] p-4 rounded-2xl lg:flex lg:p-8'>
        <div className='leftIntro lg:w-[50%]'>
          <p className='lg:w-[40rem]  mt-5  font-extrabold md:text-4xl text-xl lg:p-4 text-white'>
            Who Is This "Pro" Anyway?
          </p>
          <div className='flex flex-col justify-center items-center text-start'>
            <div className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 text-transparent bg-clip-text p-5 font-bold text-sm md:text-xl gap-4 flex flex-col'>
              <div>
                Hi there! I am the so-called "pro" coder behind this questionable
                website.
              </div>
              <div>
                In reality, I am just a scrappy self-taught developer with more
                enthusiasm than skills.
              </div>
              <div>
                I spend my days wielding code like a chimp with a keyboard,
                hoping something halfway functional materializes.
              </div>
              <div>My expertise?</div>
              <div>Making things work...eventually (maybe).</div>
            </div>
          </div>
        </div>
        <div className='Image  flex align-middle items-center justify-center md:w-[50%] md:p-8 pl-36 pr-36 pt-3 pb-4'>
          <BackgroundGradient className='w-[18rem]'>
            <Image
              src={MyPhoto}
              alt='jordans'
              height='400'
              width='400'
              className='object-fill w-[30rem] rounded-3xl'
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

export default KnowMe