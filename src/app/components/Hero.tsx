import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbBrandFiverr } from 'react-icons/tb';
import { FaSquareUpwork } from 'react-icons/fa6';

function Hero() {
  return (
    <main className='flex justify-center items-center md:justify-between mt-12'>
      <article>
        <p className='text-xl font-medium tracking-wide '>Software Developer</p>
        <h1 className='text-6xl font-bold text-teal-500'>Hello I'm</h1>
        <h1 className='text-6xl font-bold'>Mehedi Hasan</h1>
        <div className='mt-6 flex gap-4 text-teal-500'>
          <Link
            className='border border-teal-500 p-2 rounded-2xl hover:scale-110 transition-transform duration-300'
            href='https://github.com/ThePrime1'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </Link>
          <Link
            className='border border-teal-500 p-2 rounded-2xl hover:scale-110 transition-transform duration-300'
            href='https://www.fiverr.com/mhmitul?public_mode=true'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TbBrandFiverr />
          </Link>
          <Link
            className='border border-teal-500 p-2 rounded-2xl hover:scale-110 transition-transform duration-300'
            href='https://www.upwork.com/freelancers/~0159a6dce9f58fa296?mp_source=share'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaSquareUpwork />
          </Link>
        </div>
      </article>

      <div className='hidden md:block'>
        <img
          src='hello.svg'
          alt='icon'
          width={400}
          height={400}
        />
      </div>
    </main>
  );
}

export default Hero;
