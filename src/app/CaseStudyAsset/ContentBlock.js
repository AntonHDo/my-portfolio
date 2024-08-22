import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ContentBlock({ content }) {
  return (
    <Box
      component="div"
      className="flex flex-col flex-1 shrink px-12 text-2xl basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full"
    >
      <Box className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full">
        <Typography className="flex-1 shrink gap-2.5 self-stretch px-16 w-full max-md:px-5 max-md:max-w-full">
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

export default ContentBlock;
