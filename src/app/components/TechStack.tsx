import React from 'react';

const frontEnd = [
  {
    id: 1,
    title: 'HTML&CSS',
    img: '/html.svg',
    description:
      'Expert in building custom landing pages using HTML and CSS. Adding interactivity using JavaScript. Familier with different ui framworks like DaisyUI, Bootstrap, MUI etc.',
  },
  {
    id: 2,
    title: 'REACTJS',
    img: '/reactjs.svg',
    description:
      'Building user interfaces, single page applications with the most popular javascript library is my expertise.Building intuitive ui and bringing ideas to life with codes',
  },
  {
    id: 3,
    title: 'NEXTJS',
    img: '/nextjs.svg',
    description:
      'NextJS is the most populer REACTJS framwork. With SSR & SSG supported out of the box, I can build high performant frontend as well as backend REST API.',
  },
];

const backend = [
  {
    id: 1,
    title: 'NODEJS',
    img: '/nodejs.svg',
    description:
      'Experienced in building REST API as well as microservices that scales and performs, handles load and provides better security..',
  },
  {
    id: 2,
    title: 'EXPRESSJS',
    img: '/express.svg',
    description:
      'The most popular nodejs routing and middleware framwork, experience in building REST API and microservices. Implementing route guards, authentication with JWT, 0auth, PassportJWT etc.',
  },
  {
    id: 3,
    title: 'MONGODB',
    img: '/mongo.svg',
    description:
      'A popular nosql database that performs well and integrates seemlessly with nodejs apps.',
  },
];

function TechStack() {
  return (
    <main>
      <h3 className='text-teal-500 text-4xl font-bold'>Tech Stack</h3>
      <p className='mt-4 font-bold'>Frontend</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-8'>
        {frontEnd.map((tech) => {
          return (
            <div
              key={tech.id}
              className='flex flex-col justify-center items-center hover:shadow-2xl transition duration-200 rounded-lg'
            >
              <img
                src={tech.img}
                alt={tech.title}
                width={100}
                height={100}
              />
              <p>{tech.title}</p>
              <p className='p-4'>{tech.description}</p>
            </div>
          );
        })}
      </div>
      <p className='mt-4 font-bold'>Backend</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center mt-8'>
        {backend.map((tech) => {
          return (
            <div
              key={tech.id}
              className='flex flex-col justify-center items-center hover:shadow-2xl transition duration-200 rounded-lg'
            >
              <img
                src={tech.img}
                alt={tech.title}
                width={100}
                height={100}
              />
              <p>{tech.title}</p>
              <p className='p-4'>{tech.description}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default TechStack;
