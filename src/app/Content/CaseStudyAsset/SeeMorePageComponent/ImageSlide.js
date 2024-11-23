'use client';
import React from "react";
import { Box, Typography } from "@mui/material";

function ImageSlide({ content }) {
  return (
    <Box
      className="flex-shrink-0 w-full h-[338px] flex items-center justify-center bg-gray-200"
      sx={{ width: "100%" }} // Ensures each slide takes the full width of the container
    >
      <Typography variant="h5" className="text-2xl">
        {content}
      </Typography>
    </Box>
  );
}

export default ImageSlide;
