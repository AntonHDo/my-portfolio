"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer"
import { useDarkMode } from "../hooks/DarkModeContext";

const Layout = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={`${isDarkMode ? "bg-gradient-to-tl from-slate-900 to-slate-700" : "bg-gradient-to-tr from-slate-100 to-sky-100"} flex relative flex-col`}>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default Layout;
