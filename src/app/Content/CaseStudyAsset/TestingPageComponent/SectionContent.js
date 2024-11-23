'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function SectionContent({ content }) {
  const { isDarkMode } = useDarkMode()
  return (
    <Box className="flex flex-col grow shrink min-w-[240px] w-[1055px] max-md:max-w-full">
      <Box className="flex relative flex-col justify-center px-3.5 w-full max-md:max-w-full">
        <Box className="flex z-0 flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
          {typeof content === "string" ? (
            <Box variant="body1" className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} text-2xl`}>
              {content}
            </Box>
          ) : (
            <>
              <Box
                variant="h5"
                className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} text-3xl pb-5 text-start max-md:max-w-full`}
              >
                {content.description}
              </Box>
              <Box variant="body1" className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} mt-3 text-2xl max-md:max-w-full`}>
                {content.details}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SectionContent;
