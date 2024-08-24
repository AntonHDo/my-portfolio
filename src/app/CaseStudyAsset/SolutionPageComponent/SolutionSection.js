import React from "react";
import { Box, Typography } from "@mui/material";
import FeatureBlock from "./FeatureBlock";

const features = [
  {
    title: "Easy to Navigate",
    details:
      "A user-friendly interface ensures that visitors can easily find the information they need without confusion, making the adoption process smoother and more accessible.",
  },
  {
    title: "Fast responding",
    details:
      "Quick replies to inquiries keep potential adopters engaged and provide them with the information they need without long waits, enhancing their overall experience.",
  },
  {
    title: "Easy to search for dogs",
    details:
      "Implementing an intuitive search feature allows users to quickly find dogs that match their preferences, making it easier for them to find their perfect companion.",
  },
];

function SolutionSection() {
  return (
    <Box
      component="section"
      className="flex flex-col mt-24 w-full text-slate-200 max-md:mt-10 max-md:max-w-full"
    >
      <Box
        component="header"
        className="flex flex-wrap justify-center px-6 w-full font-bold max-md:px-5 max-md:max-w-full"
      >
        <Typography
          variant="h1"
          className="grow shrink gap-2.5 self-start py-4 w-80 text-6xl whitespace-nowrap min-w-[240px] max-md:text-4xl"
        >
          Solution
        </Typography>
        <Box className="flex flex-col grow shrink justify-center text-3xl min-w-[240px] w-[1055px] max-md:max-w-full">
          <Box className="flex flex-col flex-1 justify-center px-3.5 w-full max-md:max-w-full">
            <Typography
              variant="h2"
              className="px-16 w-full max-md:px-5 max-md:max-w-full"
            >
              Olana Adoptions, the solution to solve easy dog adoption.
            </Typography>
          </Box>
        </Box>
      </Box>
      {features.map((feature, index) => (
        <FeatureBlock key={index} {...feature} />
      ))}
    </Box>
  );
}

export default SolutionSection;
