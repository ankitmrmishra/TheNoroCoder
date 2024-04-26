import React from "react";
import Image from "next/image";

const TechStack: React.FC = () => {
  return (
    <div className='bg-black text-white w-full flex flex-col justify-center items-center align-middle lg:-mt-72 z-[200] relative md:p-12 pb-12'>
      <h3 className=' font-bold mb-4 lg:text-4xl text-2xl text-center'>
        I Put the &quot;<span className='text-green-500'>Stack</span>&quot; in
        Tech Stack
      </h3>
      <p className='mb-6 text-sm lg:w-[35rem] text-center text-white/35'>
        You know how they say &quot;jack of all trades, master of none&quot;?
        Well, I&#39;m the &quot;jack of no trades&quot; who&#39;s still trying
        to figure out this whole coding thing. But hey, at least I&#39;m having
        fun playing around with these tools and technologies:
      </p>
      <div className='md:w-[70%] p-5 text-sm '>
        <div className='mb-8 w-full '>
          <h4 className='text-xl font-bold mb-2 bg-green-600 w-max p-1 text-black rounded-xl'>
            The Essentials
          </h4>
          <ul className='list-disc list-inside '>
            <li>
              <strong className='text-green-500'>HTML/CSS</strong>: The building
              blocks of the web. I&#39;m basically a digital Bob the Builder.
            </li>
            <li>
              <strong className='text-green-500'>JavaScript</strong>: I use JS
              to add some razzle-dazzle (and an absurd amount of console.log
              statements).
            </li>

            <li>
              <strong className='text-green-500'>React</strong>: The framework
              that makes me feel like I&#39;m actually doing &quot;real&quot;
              coding. Kind of.
            </li>
            <li>
              <strong className='text-green-500'>TailwindCSS</strong>: using to
              center my div on daily basis.
            </li>
            <li>
              <strong className='text-green-500'>Node.js/ExpressJS</strong>: I
              try to be a full-stack hero, but I&#39;m really just aották
              masquerading as a back-end baddie.
            </li>
            <li>
              <strong className='text-green-500'>MongoDB</strong>: NoSQL? No
              problemo! At least, that&#39;s what I tell myself before breaking
              something.
            </li>
          </ul>
        </div>

        <div className='mb-8'>
          <h4 className='text-xl font-bold mb-2 bg-blue-600 text-black rounded-xl w-max p-1'>The Endeavors</h4>
          <ul className='list-disc list-inside'>
            <li>
              <strong className='text-blue-500'>NextJS</strong>: I try to be a
              full-stack hero and this is the key
            </li>
            <li>
              <strong className='text-blue-500'>TypeScript</strong>: Just
              trying to move on (from JS).
            </li>
          </ul>
        </div>

        <div className='mb-8'>
          <h4 className='text-xl font-bold mb-2 text-black rounded-xl p-1 bg-yellow-500 w-max'>
            The Learning Phase
          </h4>
          <ul className='list-disc list-inside'>
            <li>
              <strong className='text-yellow-400'>
                PostgreSQL/SQL and PrismORM
              </strong>
              : The cool kid I desperately want to be friends with. We&#39;re
              still in the &quot;awkward wave&quot; phase of our relationship.
            </li>
            <li>
              <strong className='text-yellow-400'>
                BlockChain Developement
              </strong>
              : I&#39;ll masters this sorcery one day. But for now, I&#39;m the
              trying to figure it out.
            </li>
          </ul>
        </div>

        <p>
          So, there you have it - an ever-growing jumble of languages,
          frameworks, and buzzwords that make me feel like I know what I&#39;m
          doing. Spoiler alert: I don&#39;t. But I&#39;m having fun pretending!
        </p>
      </div>
    </div>
  );
};

export default TechStack;
