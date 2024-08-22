import React from "react";
import ImageSlider from "./ImageSlider";
import { Box, Typography } from "@mui/material";

function SeeMore() {
  const imageSlides = [
    { id: 1, content: "Image 1" },
    { id: 2, content: "Image 2" },
    { id: 3, content: "Image 3" },
    { id: 4, content: "Image 4" },
    { id: 5, content: "Image 5" },
  ];

  return (
    <Box
      component="main"
      className="flex flex-col mt-24 w-full text-slate-200 max-md:mt-10 max-md:max-w-full"
    >
      <Box
        component="header"
        className="flex justify-center items-start px-6 w-full text-6xl font-bold max-md:px-5 max-md:max-w-full max-md:text-4xl"
      >
        <Typography
          variant="h1"
          className="flex-1 shrink gap-2.5 self-stretch py-4 w-full min-w-[240px] max-md:max-w-full max-md:text-4xl"
        >
          See More
        </Typography>
      </Box>
      <Box
        component="section"
        className="mt-24 w-full max-md:mt-10 max-md:max-w-full"
      >
        <ImageSlider slides={imageSlides} />
      </Box>
    </Box>
  );
}

export default SeeMore;
