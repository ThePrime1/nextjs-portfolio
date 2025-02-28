import React from 'react';

function About() {
  return (
    <main>
      <h1 className='text-teal-500 text-4xl font-bold'>About</h1>
      <div className='flex justify-between items-center gap-8'>
        <article>
          <h4 className='font-bold mb-4 mt-4'>About Me</h4>
          <p>
            Hi, I'm Mehedi Hasan, a passionate Full-Stack Web Developer
            specializing in building scalable and user-friendly web
            applications. With expertise in React.js, Next.js, and Redux, I
            create dynamic and high-performance front-end experiences. My skills
            in Tailwind CSS, DaisyUI, Bootstrap, MUI, and CSS allow me to craft
            clean, responsive, and visually appealing designs.
          </p>
          <p>
            On the backend, I leverage Node.js and Express.js to develop robust
            and efficient APIs, seamlessly integrating with MongoDB for secure
            and scalable database management. Whether it's crafting intuitive
            UIs or architecting powerful back-end systems
          </p>
          <p>
            I enjoy solving challenges and bringing ideas to life through code.
            I'm always eager to learn and stay updated with the latest
            technologies. Let's collaborate to build something amazing! 🚀
          </p>
        </article>
        <div className='hidden md:block'>
          <img
            src='/about.svg'
            alt='about me'
          />
        </div>
      </div>
    </main>
  );
}

export default About;
