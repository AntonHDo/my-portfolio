import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProblemTitle() {
  return (
    <Box
      component="header"
      className="flex flex-col justify-center items-start pb-10 w-full  max-md:max-w-full"
    >
      <Box className="flex-1 text-4xl gap-2.5 self-stretch h-full font-bold">
        Problem
      </Box>
    </Box>
  );
}

export default ProblemTitle;
