'use client';
import React from "react";
import ProblemTitle from "./ProblemTitle";
import ProblemDescription from "./ProblemDescription";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function Problem() {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="section"
      className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} flex flex-col mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full`}
    >
      <ProblemTitle />
      <ProblemDescription />
    </Box>
  );
}

export default Problem;
