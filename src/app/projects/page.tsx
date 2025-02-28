import React from 'react';
import Card from '../components/Card';

const projects = [
  {
    id: 1,
    title: 'ReactJS Project',
    description:
      'This is a reactjs fully functional shopping cart project. State management is done by Redux Toolkit.',
    img: '/react-redux.png',
    link: 'https://cart-rtk-7799.netlify.app/',
  },
  {
    id: 2,
    title: 'HTML & Tailwindcss',
    description:
      'This is a HTML, Tailwindcss clipboard app landing page project',
    img: '/clipboard-app.png',
    link: 'https://portfolio-clipboard.netlify.app/',
  },
];

function page() {
  return (
    <main className='p-4'>
      <h1 className='text-teal-500 font-bold text-4xl text-center mt-6 mb-8'>
        Projects
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {projects.map((project) => (
          <Card
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </main>
  );
}

export default page;
