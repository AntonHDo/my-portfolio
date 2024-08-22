import React from "react";
import { Box, Typography } from "@mui/material";

const ReflectionSection = ({ title, content }) => (
  <Box
    component="section"
    className="flex flex-wrap justify-center items-start px-6 w-full max-md:px-5 max-md:max-w-full"
  >
    <Typography
      variant="h2"
      className="grow shrink gap-2.5 self-stretch py-4 w-80 text-6xl font-bold whitespace-nowrap min-w-[240px] max-md:text-4xl"
    >
      {title}
    </Typography>
    <Box className="flex flex-col grow shrink min-w-[240px] w-[1055px] max-md:max-w-full">
      <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
        <Typography
          variant="h3"
          className="px-16 w-full text-3xl font-bold text-center max-md:px-5 max-md:max-w-full"
        >
          {content.subtitle}
        </Typography>
        <Typography
          variant="body1"
          className="flex-1 shrink gap-2.5 self-stretch px-16 mt-6 w-full text-2xl max-md:px-5 max-md:max-w-full"
        >
          {content.description}
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default ReflectionSection;
