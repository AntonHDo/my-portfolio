import React from "react";
import ReflectionSection from "./ReflectionSection";
import NextStepsSection from "./NextStepsSection";
import { Box } from "@mui/material";

const MyComponent = () => {
  const reflectionContent = {
    subtitle:
      "Designing with a user-centered approach that values and incorporates user feedback and opinions is crucial.",
    description:
      "My Study Buddy case study emphasized the vital role of user-centered design. Integrating user feedback is essential for a meaningful app that truly meets students' needs. It's not just features; it's about understanding and serving each student. This journey reinforced that a user-centered approach is key, making Study Buddy a valuable companion for all.",
  };

  const nextStepsContent = {
    subtitle: "What else to improve",
    description:
      "Bullet points about new things to implement for better use experience",
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
