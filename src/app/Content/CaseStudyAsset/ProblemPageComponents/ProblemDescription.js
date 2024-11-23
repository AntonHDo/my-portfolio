'use client';
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProblemDescription() {
  return (
    <Box
      component="article"
      className="flex flex-col self-center max-w-full w-[1135px]"
    >
      <Box className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
        <Typography
          variant="h5"
          component="h2"
          className="text-center text-3xl font-bold max-md:max-w-full"
        >
          Why is adopting a dog so complicated?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mt-6 pb-20 text-2xl max-md:max-w-full"
        >
          The current adoption process often overwhelms potential pet parents
          with complex requirements and procedures, creating a disconnect
          between those looking to provide a loving home and the dogs in need.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProblemDescription;
