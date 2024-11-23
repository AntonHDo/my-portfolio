'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";
function ProblemTitle() {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="header"
      className="flex flex-col justify-center items-start pb-10 w-full  max-md:max-w-full"
    >
      <Box className={` flex-1 text-4xl h-full font-bold`}>
        Problem
      </Box>
    </Box>
  );
}

export default ProblemTitle;
