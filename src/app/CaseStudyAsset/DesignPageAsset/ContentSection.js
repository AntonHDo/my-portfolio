import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ContentSection({ title, content }) {
  return (
    <Box
      component="section"
      className="flex flex-wrap justify-center px-6 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <Typography
        variant="h3"
        component="h3"
        className="flex-1 shrink gap-2.5 self-start py-4 text-4xl font-bold min-w-[240px]"
      >
        {title}
      </Typography>
      <Box className="flex flex-col justify-center text-2xl min-w-[240px] w-[1135px] max-md:max-w-full">
        <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
          <Typography className="px-16 w-full max-md:px-5 max-md:max-w-full">
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ContentSection;
