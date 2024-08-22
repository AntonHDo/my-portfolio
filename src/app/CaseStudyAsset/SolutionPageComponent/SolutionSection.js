import React from "react";
import { Box, Typography } from "@mui/material";
import FeatureBlock from "./FeatureBlock";

const features = [
  {
    title: "Easy to use",
    description: "Description of the project",
    details:
      "More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore",
  },
  {
    title: "Trusted",
    description: "Description of the project",
    details:
      "More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore",
  },
  {
    title: "Fast Replies",
    description: "Description of the project",
    details:
      "More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore",
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
              Adopting your new best pup friend
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
