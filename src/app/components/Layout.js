"use client";
import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className="flex relative flex-col">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
};

export default Layout;
