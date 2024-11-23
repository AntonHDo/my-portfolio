'use client';
import React from "react";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function SectionHeader({ title }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="header"
      className="gap-2.5 self-stretch py-4 min-w-[240px] w-[400px]"
    >
      <Box variant="h4" component="h1" className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} font-bold text-4xl`}>
        {title}
      </Box>
    </Box>
  );
}

export default SectionHeader;
