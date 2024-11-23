'use client';
import React from "react";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";
function ContentSection({ content }) {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="div"
      className="flex flex-col flex-1 shrink px-12 text-2xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full"
    >
      <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
        <Box className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} flex-1 shrink gap-2.5 self-stretch px-16 text-xl w-full max-md:px-5 max-md:max-w-full `}>
          {content}
        </Box>
      </Box>
    </Box>
  );
}

export default ContentSection;
