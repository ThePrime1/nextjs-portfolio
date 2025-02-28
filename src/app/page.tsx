import Image from 'next/image';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import About from './components/About';

export default function Home() {
  return (
    <>
      <div className='p-4 mb-8'>
        <Hero />
      </div>
      <hr />

      <div className='p-4 mb-8'>
        <TechStack />
      </div>
      <hr />

      <div className='p-4 mb-8'>
        <About />
      </div>
      <hr />
    </>
  );
}
