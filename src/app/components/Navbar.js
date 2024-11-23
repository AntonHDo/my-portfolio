"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../hooks/DarkModeContext"; // Import the useDarkMode hook

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useDarkMode(); // Use the useDarkMode hook

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <header className={`navbar ${isDarkMode ? " text-slate-200" : " text-slate-800"} flex relative justify-between items-center text-nowrap px-10 max-md:px-5 max-md:py-4 z-20`}>
      <div className="flex flex-row items-center justify-between w-full" >
        <Link href="/">
          <h1 className="my-auto text-3xl font-semibold border-slate-200 border-opacity-50">
            Anton Do
          </h1>
        </Link>
        <div className="flex justify-end pr-2">

          <DarkModeToggle />
        </div>
      </div>
      <div className="flex items-center md:hidden z-20">
        <div onClick={toggleMenu} className="cursor-pointer">
          {isMenuOpen ? (
            <CloseIcon style={{ fontSize: 48 }} />
          ) : (
            <MenuIcon style={{ fontSize: 48 }} />
          )}
        </div>
      </div>
      <nav className="hidden md:flex gap-10 py-6 text-xl whitespace-nowrap w-fit">
        <Link href="/projects">Projects</Link>
        <a
          href="/assets/My Resume.pdf"
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
      {isMenuOpen && (
        <nav className={` ${isDarkMode ? "bg-slate-800 text-slate-200" : "bg-slate-200 text-slate-800"} absolute top-20 right-0 flex flex-col text-xl items-end bg-opacity-85 p-5 shadow-lg w-full md:hidden z-10 menu-container`}>
          <a href="/projects" className="block py-2">
            Projects
          </a>
          <a
            href="/assets/My Resume.pdf"
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