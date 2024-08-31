import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import CustomDivider from "../CaseStudyAsset/CustomerDivider";

const Layout = () => {
  return (
    <div className="flex relative flex-col bg-zinc-800">
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e745ad32264ba7e793e2aa122c4eefe8c1c56603a2e5471a7162aa7ee1ade37e?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
        alt=""
        className="object-cover absolute inset-0 size-full opacity-25"
      /> */}
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <div className="flex relative justify-center items-center px-20 w-full max-md:px-5 max-md:max-w-full">
          <CustomDivider />
        </div> */}
        <Projects />
        {/* <div className="flex relative justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <CustomDivider />
        </div>
        <Contact />
        <div className="flex relative justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full"></div> */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
