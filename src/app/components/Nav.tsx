import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav className='flex flex-col justify-between items-center p-4 md:flex-row'>
      <Link
        href='/'
        className='text-4xl md:text-6xl font-bold'
      >
        Mehedi<span className='text-teal-500 text-8xl'>.</span>
      </Link>
      <div className='flex flex-col mt-6 gap-6 font-medium md:flex-row'>
        <Link
          className='hover:text-teal-500 transition duration-200'
          href='/'
        >
          Home
        </Link>
        <Link
          className='hover:text-teal-500 transition duration-200'
          href='/projects'
        >
          Projects
        </Link>
        <Link
          className='hover:text-teal-500 transition duration-200'
          href='/contact'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
