import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SectionHeader({ title, content }) {
  return (
    <Box
      component="section"
      className="flex flex-wrap justify-center px-6 w-full max-md:px-5 max-md:max-w-full"
    >
      <Typography
        variant="h2"
        component="h2"
        className="grow shrink gap-2.5 self-start py-4 w-80 text-6xl font-bold whitespace-nowrap min-w-[240px] max-md:text-4xl"
      >
        {title}
      </Typography>
      <Box className="flex grow shrink gap-6 justify-center items-center px-3.5 h-full text-2xl min-w-[240px] w-[1055px] max-md:max-w-full">
        <Typography className="self-stretch px-16 my-auto min-w-[240px] w-[1107px] max-md:px-5 max-md:max-w-full">
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

export default SectionHeader;
