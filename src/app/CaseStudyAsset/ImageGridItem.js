import React from "react";
import Box from "@mui/material/Box";

function ImageGridItem({ name, imagePath }) {
  return (
    <Box className="flex justify-center items-center m-2 p-4  rounded-lg   max-md:mb-4">
      <img src={imagePath} alt={name} className="max-w-full h-auto" />
    </Box>
  );
}

export default ImageGridItem;
