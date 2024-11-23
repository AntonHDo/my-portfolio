'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function ProjectTitle({ title }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        className={`${isDarkMode ? "text-slate-200" : "text-slate-800"}  py-4 font-bold min-w-[300px] w-[full]`}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default ProjectTitle;
