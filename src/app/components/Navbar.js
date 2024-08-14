"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex relative justify-between px-8 py-1.5 text-stone-50 max-md:flex-wrap max-md:px-5 max-md:py-5">
      <h1 className="my-auto text-5xl font-medium border-stone-50 border-opacity-50 tracking-[2.6px] max-md:text-4xl">
        Anton Do
      </h1>

      {/* Hamburger menu for mobile (only visible on small screens) */}
      <div className=" flex items-center md:hidden">
        <div onClick={toggleMenu} className="cursor-pointer">
          <div className="w-8 h-1 bg-stone-50 mb-1"></div>
          <div className="w-8 h-1 bg-stone-50 mb-1"></div>
          <div className="w-8 h-1 bg-stone-50"></div>
        </div>

        {/* Dropdown menu (shown when hamburger is clicked) */}
        {isMenuOpen && (
          <nav className="absolute top-12 right-0 bg-stone-800 p-5 rounded-lg shadow-lg w-full md:hidden z-10">
            <a href="#about" className="block py-2">About</a>
            <a href="#projects" className="block py-2">Projects</a>
            <a href="#contact" className="block py-2">Contact</a>
          </nav>
        )}
      </div>

      {/* Standard navigation links (hidden on mobile) */}
      <nav className="hidden md:flex gap-5 py-8 text-2xl whitespace-nowrap">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="self-start">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
