import React from 'react'
import { Highlight } from './ui/highlight';

function Showcase() {
  return (
    <div className='bg-black text-white flex justify-start items-center p-8'>
      <span className='hed text-2xl font-bold text-[#DA0037]'>
        <Highlight className='bg-gradient-to-r from-[#DA0037] via-[#da0037] to-[#DA0037] inline-block text-transparent text-3xl bg-clip-text lg:text-7xl  '>
          Questionable Creations: A Showcase
        </Highlight>
      </span>
    </div>
  );
}

export default Showcase