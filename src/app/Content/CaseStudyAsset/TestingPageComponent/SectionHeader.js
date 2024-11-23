'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function SectionHeader({ title }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box className="grow shrink gap-2.5 self-stretch py-5 w-80 min-w-[240px]">
      <Box variant="h4" className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} font-bold`}>
        {title}
      </Box>
    </Box>
  );
}

export default SectionHeader;
