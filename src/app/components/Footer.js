'use client';
import React from "react";
import { Box } from "@mui/material";
import { useDarkMode } from "../hooks/DarkModeContext"; // Ensure this path is correct
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const { isDarkMode } = useDarkMode(); // Destructure the isDarkMode state

  return (
    <div
      className={`${isDarkMode ? " text-slate-200" : " text-slate-800"} flex flex-col items-center px-16 w-full max-md:px-5 max-md:max-w-full`}
    >
      <div className="mt-20 text-4xl font-bold text-center border-slate-200 border-opacity-50 max-md:mt-20 max-md:max-w-full">
        Stay Connected With Me!
      </div>
      <Box className={`flex gap-8 justify-center items-center py-20`}>
        <a
          href="https://www.linkedin.com/in/anton-do/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        // className={`${isDarkMode ? " !bg-slate-800" : " !bg-slate-800"}`}
        >
          <LinkedInIcon
            loading="lazy"
            alt="LinkedIn"
            className={` aspect-square w-[70px] text-7xl`}
            fontSize="large"
          />
        </a>
        <a
          href="https://github.com/AntonHDo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon
            loading="lazy"
            alt="GitHub"
            className="shrink-0 aspect-[1.03] w-[70px] text-6xl"
            fontSize='large'
          />
        </a>
      </Box>
      <Box
        className="absolute bottom-0 right-0 "
      >
        <p className={`max-md:max-w-full font-normal text-sm pr-2`}>
          Created by Anton Do with NextJS
        </p>
      </Box>
    </div>
  );
};

export default Footer;
