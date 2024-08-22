import React, { useState } from "react";
import ImageSlide from "./ImageSlide";
import { Box, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box className="relative w-full max-w-full h-[338px] overflow-hidden">
      <IconButton
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full z-10"
        aria-label="Previous slide"
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full z-10"
        aria-label="Next slide"
      >
        <ArrowForwardIos />
      </IconButton>
      <Box
        className="flex transition-transform duration-500 ease-out"
        sx={{ transform: `translateX(-${currentIndex * 100}%)` }}
        style={{ width: `${slides.length * 100}%` }} // Ensures all slides are side-by-side
      >
        {slides.map((slide) => (
          <ImageSlide key={slide.id} content={slide.content} />
        ))}
      </Box>
    </Box>
  );
}

export default ImageSlider;
