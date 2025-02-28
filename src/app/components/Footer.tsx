import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='text-center md:text-start mt-12 p-4'>
      <div className='flex flex-col justify-center gap-4 mb-6'>
        <h3 className='font-bold text-xl underline'>Contact Through</h3>
        <Link
          className='text-xl hover:text-teal-500 transition duration-300'
          href='https://www.fiverr.com/mhmitul?public_mode=true'
          target='_blank'
          rel='noopener noreferrer'
        >
          Fiverr
        </Link>
        <Link
          className='text-xl hover:text-teal-500 transition duration-300'
          href='https://www.upwork.com/freelancers/~0159a6dce9f58fa296?mp_source=share'
          target='_blank'
          rel='noopener noreferrer'
        >
          Upwork
        </Link>
      </div>

      <p className='text-center'>
        Made with <FaHeart className='inline-flex items-center text-red-500' />{' '}
        using NextJS and Tailwindcss
      </p>
    </footer>
  );
}

export default Footer;
