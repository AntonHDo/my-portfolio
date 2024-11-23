'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function ProjectDescription() {
  const { isDarkMode } = useDarkMode()
  return (
    <Box
      component="article"
      className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full"
    >
      <Box className="flex flex-col pl-16 w-full max-md:px-5 max-md:max-w-full">
        <Typography
          variant="h5"
          component="h2"
          className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} text-left text-3xl font-bold max-md:max-w-full`}
        >
          Dog adoption web app that helps dogs find a new home
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} mt-4 text-2xl max-md:max-w-full`}
        >
          Olana Adoptions helps dogs find their new forever home in the
          simpliest way. From easy ways to contact the company, to fast replies.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectDescription;
