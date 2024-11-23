import React from "react";
import { Box, Typography } from "@mui/material";
import FeatureBlock from "./FeatureBlock";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

const features = [
  {
    title: "AI customer support bot",
    details:
      "Have a personal AI bot that has knowledge of what products are best for all types of different pets.",
  },
  {
    title: "Consultations with pet experts",
    details:
      "To make users feel more secured and confident in their choice of purchasing a product, we offer them one free consultation with a pet expert to help guide them to make a more confident choice.",
  },
  {
    title: "Backed up researched pet products",
    details:
      "Every product that is available on Petsy has been reviewed and backed up by experts to ensure that they are top quality.",
  },
];

function SolutionSection() {
  const { isDarkMode } = useDarkMode();
  return (
    <Box
      component="section"
      className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} flex flex-col my-20 w-full max-md:mt-10 max-md:max-w-full`}
    >
      <Box
        component="header"
        className="flex flex-wrap justify-center items-center px-6 w-full font-bold max-md:px-5 max-md:max-w-full"
      >
        <Typography
          variant="h4"
          className="grow shrink gap-2.5 self-start py-4 w-80  font-bold whitespace-nowrap min-w-[240px] max-md:text-4xl"
        >
          Solution
        </Typography>
        <Box className="flex flex-col grow shrink justify-center  text-3xl min-w-[240px] w-[1055px] max-md:max-w-full">
          <Box className="flex flex-col flex-1 justify-center px-3.5 w-full max-md:max-w-full">
            <Typography
              variant="h5"
              className="px-16 text-center font-bold w-full max-md:px-5 max-md:max-w-full"
            >
              Petsy, the solution to easy and confident pet product shopping.
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
