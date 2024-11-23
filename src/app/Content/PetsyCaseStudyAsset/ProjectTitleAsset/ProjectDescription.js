import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProjectDescription() {
  return (
    <Box
      component="article"
      className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full"
    >
      <Box className="flex flex-col pl-16 w-full max-md:px-5 max-md:max-w-full">
        <Typography
          variant="h5"
          component="h2"
          className="text-left text-3xl font-bold max-md:max-w-full"
        >
          An eCommerce web app that helps people find high quality pet products
          at an affordable price
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mt-4 text-2xl max-md:max-w-full"
        >
          At Petsy, we’re here to help pet parents find just the right products
          for their beloved furry family members. Whether it’s nutritious food
          or essential supplies, Petsy has you covered with love and care.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectDescription;
