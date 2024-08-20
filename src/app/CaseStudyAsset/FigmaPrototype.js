import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FigmaPrototype = () => {
  return (
    <Box
      component="main"
      className="px-3.5 py-12 mt-24 w-full text-center text-black max-md:mt-10 max-md:max-w-full"
    >
      <Typography
        variant="h1"
        component="h1"
        className="text-9xl max-md:text-4xl"
      >
        Figma Prototype
      </Typography>
    </Box>
  );
};

export default FigmaPrototype;
