'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function FeatureBlock({ title, description, details }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="article"
      className="flex flex-wrap justify-center items-start px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <Typography className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} grow shrink gap-2.5 text-2xl self-stretch py-4 w-80 font-bold min-w-[240px]`}>
        {title}
      </Typography>
      <Box className="flex flex-col grow shrink min-w-[240px] w-[1055px] max-md:max-w-full">
        <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
          <Box className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
            <Typography className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} text-center max-md:max-w-full`}>
              {description}
            </Typography>
            <Typography
              variant="body1"
              className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} mt-3 text-xl max-md:max-w-full`}
            >
              {details}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureBlock;
