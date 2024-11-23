'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function SectionHeader({ title }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="header"
      className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} gap-2.5 self-stretch py-4 min-w-[240px] w-[400px]`}
    >
      <Typography variant="h4" component="h1" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
