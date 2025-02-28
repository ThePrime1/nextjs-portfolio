import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

const Card: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='max-w-sm p-4 bg-zinc-700 rounded-lg shadow-sm hover:shadow-teal-500 transition duration-300'>
      <img
        src={project.img}
        alt={project.title}
        className='w-full h-48 object-cover rounded-md'
      />
      <div className='mt-4'>
        <h3 className='text-lg font-semibold text-white'>{project.title}</h3>
        <p className='text-gray-300 mb-8'>{project.description}</p>
        <div className='mt-4 flex justify-center'>
          <Link
            href={project.link}
            className='px-8 font-medium py-2 bg-teal-500 rounded-sm hover:bg-teal-600 transition duration-300'
          >
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
