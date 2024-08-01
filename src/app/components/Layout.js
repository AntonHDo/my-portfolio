import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex relative flex-col min-h-[4535px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e745ad32264ba7e793e2aa122c4eefe8c1c56603a2e5471a7162aa7ee1ade37e?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61" alt="" className="object-cover absolute inset-0 size-full" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="flex relative justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="shrink-0 max-w-full h-1.5 bg-stone-50 bg-opacity-70 w-[996px]" />
        </div>
        <Projects />
        <div className="flex relative justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="shrink-0 max-w-full h-1.5 bg-stone-50 bg-opacity-70 w-[996px]" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;