'use client';
import React from "react";
import ImageSlider from "./ImageSlider";
import { Box, Typography } from "@mui/material";
import SectionHeader from "../DesignPageAsset/SectionHeader";

function SeeMore() {
  const sections = [
    {
      title: "See More",
    },
  ];

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
      className="flex flex-col self-center my-20 w-full text-slate-200 max-w-[1583px] max-md:mt-10 max-md:max-w-full"
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component="section"
          className={`flex flex-wrap ${index > 0 ? "mt-20 max-md:mt-10" : ""
            } w-full`}
        >
          <SectionHeader title={section.title} />
        </Box>
      ))}
      <Box />
      <ImageSlider slides={imageSlides} />
    </Box>
  );
}

export default SeeMore;
