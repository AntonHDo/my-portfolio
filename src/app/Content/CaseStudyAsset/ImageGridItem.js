'use client';
import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ImageGridItem({ name, imagePath, title }) {
  return (
    <Box className="flex flex-col justify-center items-center m-2 p-4  rounded-lg   max-md:mb-4">
      <Typography className="text-2xl pb-4">{title}</Typography>
      <img src={imagePath} alt={name} className="max-w-full h-auto" />
    </Box>
  );
}

export default ImageGridItem;
