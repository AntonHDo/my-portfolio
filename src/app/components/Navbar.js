import React from 'react';

const Navbar = () => {
  return (
    <header className="flex relative justify-between px-8 py-1.5 text-stone-50 max-md:flex-wrap max-md:px-5">
      <h1 className="my-auto text-5xl font-medium  border-stone-50 border-opacity-50 tracking-[2.6px] max-md:text-4xl">
        Anton Do
      </h1>
      <nav className="flex gap-5 py-8 text-2xl whitespace-nowrap max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="self-start">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;