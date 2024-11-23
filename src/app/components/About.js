'use client';
import React from "react";
import SectionTitle from "./Section Title";
import { Box } from "@mui/material";
import { useDarkMode } from "../hooks/DarkModeContext";

const About = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <section
      className={`${isDarkMode ? "!bg-slate-800 text-slate-200" : " text-slate-800 !bg-slate-200"} flex flex-col items-center py-20 w-full max-md:max-w-full`}
    >
      <Box className="flex justify-center items-center py-5 px-16 text-5xl font-bold w-full max-md:px-5 max-md:max-w-full">
        About Me      </Box>
      <Box className="flex justify-center items-center px-32 py-2 w-full max-md:px-10 max-md:max-w-full">
        <Box className="mt-20 mb-12 w-full max-w-[1292px] max-md:mb-10 max-md:my-0 max-md:max-w-full">
          <Box className="flex gap-5 max-md:flex-col items-center">
            <Box className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
              <ul className={` self-stretch pr-14 pl-12 my-auto text-3xl text-pretty leading-10 list-disc max-md:pr-8 max-md:pl-5 max-md:mt-10 max-md:max-w-full`}>
                <li>
                  Graduated from San Jose State University with a BA in
                  Linguistics
                </li>
                <li>Completed App Academy Full Stack Boot Camp</li>
                <li>Focused on Frontend and UI Development</li>
                <li>Fell in love with Web Design and UX/UI Design</li>
                <li>Rock Climbing is my outlet</li>
                <li>Lifelong Learner</li>
              </ul>
            </Box>
            <Box className=" flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="/assets/Me.jpg"
                alt="Anton Do"
                className="w-full h-auto object-cover rounded-2xl aspect-[1] max-md:max-w-full"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default About;
