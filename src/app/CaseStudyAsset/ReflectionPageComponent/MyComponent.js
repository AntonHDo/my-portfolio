import React from "react";
import ReflectionSection from "./ReflectionSection";
import NextStepsSection from "./NextStepsSection";
import { Box } from "@mui/material";

const MyComponent = () => {
  const reflectionContent = {
    subtitle:
      "Designing with a user-centered approach that prioritizes the needs and experiences of potential adopters is crucial.",
    description:
      "My Olana Adoptions project highlighted the importance of truly understanding the users' needs in creating a meaningful and effective adoption platform. It's not just about listing available dogs; it's about making the adoption process smooth, accessible, and responsive for every user. This journey reaffirmed that a user-centered approach is essential, ensuring that Olana Adoptions is a valuable resource for connecting dogs with their future families.",
  };

  const nextStepsContent = {
    subtitle:
      "In the future, my focus will be on expanding the capabilities of Olana Adoptions to enhance the overall adoption experience for users.",
    description: (
      <ul>
        <li>
          Real-time chat support - enables potential adopters to get immediate
          responses to their inquiries and assistance throughout the adoption
          process.
        </li>
        <li>
          Advanced search filters - allows users to find the perfect dog based
          on specific criteria like age, breed, and temperament.
        </li>
        <li>
          Personalized adoption recommendations - provides users with tailored
          suggestions based on their preferences and lifestyle, making the
          adoption process even more seamless and user-friendly.
        </li>
      </ul>
    ),
  };

  return (
    <Box
      component="main"
      className="flex flex-col mt-24 w-full text-slate-200 max-md:mt-10 max-md:max-w-full"
    >
      <ReflectionSection title="Reflection" content={reflectionContent} />
      <NextStepsSection title="Next Steps" content={nextStepsContent} />
    </Box>
  );
};

export default MyComponent;
