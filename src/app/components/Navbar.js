"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu"; // Importing the Menu icon
import CloseIcon from "@mui/icons-material/Close"; // Importing the Close icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".menu-container") === null) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="flex relative justify-between items-center text-nowrap px-10  text-slate-200 max-md:px-5 max-md:py-4 z-20">
      <Link href="/">
        <h1 className="my-auto text-3xl font-semibold border-slate-200 border-opacity-50 ">
          Anton Do
        </h1>
      </Link>

      {/* Hamburger menu for mobile (only visible on small screens) */}
      <div className="flex items-center md:hidden z-20 ">
        <div onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <CloseIcon style={{ fontSize: 48 }} /> // Displaying Close icon
          ) : (
            <MenuIcon style={{ fontSize: 48 }} /> // Displaying Menu icon
          )}
        </div>
      </div>

      {/* Standard navigation links (hidden on mobile) */}
      <nav className="hidden md:flex gap-10 py-6 text-xl whitespace-nowrap">
        <Link href="/projects">Projects</Link>
        <a
          href="/assets/My Resume .pdf" // Replace with the actual path to your resume
          target="_blank"
          rel="noopener noreferrer"
          className="self-start"
        >
          Resume
        </a>
        <Link href="/about">About</Link>
        <Link href="/contact" className="self-start">
          Contact
        </Link>
      </nav>

      {/* Dropdown menu (shown when hamburger is clicked) */}
      {isMenuOpen && (
        <nav className="absolute top-20 right-0 flex flex-col text-xl items-end bg-zinc-800 bg-opacity-85 p-5 rounded-lg shadow-lg w-full md:hidden z-10 menu-container">
          <a href="/projects" className="block py-2">
            Projects
          </a>
          <a
          href="/assets/My Resume .pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2"
        >
          Resume
        </a>
          <a href="/contact" className="block py-2">
            Contact
          </a>
          <a href="/about" className="block py-2">
            About
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
