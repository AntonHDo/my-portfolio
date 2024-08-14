import React from "react";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      className="relative flex flex-col items-center px-16 w-full max-md:px-5 max-md:max-w-full"
    >
      <Box className="shrink-0 max-w-full h-1.5 bg-slate-200 bg-opacity-70 w-[996px]" />
      <h2 className="mt-24 text-4xl text-center text-slate-200  border-slate-200 border-opacity-50 tracking-[2px] max-md:mt-24 max-md:max-w-full">
        Stay Connected With Me!
      </h2>
      <Box className="flex gap-5 justify-center items-start py-20">
        <a href="#" aria-label="LinkedIn">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/722db9d5068146866e79d930f697a5a6576ba7df4b890faa695a798ff208ec32?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
            alt="LinkedIn"
            className="shrink-0 aspect-square w-[70px]"
          />
        </a>
        <a href="#" aria-label="GitHub">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b41bea0c94d04b20871630ef5737036afe847c18e8eaa3672e861ebb7146b0f?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
            alt="GitHub"
            className="shrink-0 aspect-[1.03] w-[70px] border-slate-200 text-slate-200"
          />
        </a>
      </Box>
      <Box
        className="absolute bottom-0 right-0 "
        sx={{
          textAlign: "right",
          color: "white",
          width: "100%",
        }}
      >
        <p className="max-md:max-w-full font-thin text-sm">
          Created by Anton Do with NextJS
        </p>
      </Box>
    </Box>
  );
};

export default Footer;
