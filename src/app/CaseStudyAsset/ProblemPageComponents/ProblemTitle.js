import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProblemTitle() {
  return (
    <Box
      component="header"
      className="flex flex-col justify-center items-start pb-20 w-full  max-md:max-w-full"
    >
      <Typography
        variant="h4"
        component="h1"
        className="flex-1 gap-2.5 self-stretch h-full font-bold"
      >
        Problem
      </Typography>
    </Box>
  );
}

export default ProblemTitle;
