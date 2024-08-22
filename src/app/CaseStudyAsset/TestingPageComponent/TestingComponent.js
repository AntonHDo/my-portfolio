import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

function TestingComponent() {
  const sections = [
    {
      title: "Testing",
      content:
        "Write about the different iterations you did and reviews to lead you there",
    },
    {
      title: "Navigating",
      content: {
        description: "Description of the project",
        details:
          "More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore",
      },
    },
    {
      title: "Color Palettes",
      content: {
        description: "Description of the project",
        details:
          "More descriptionsMore descriptMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore descriptionsMore",
      },
    },
  ];

  return (
    <Container className="flex flex-col mt-24 w-full text-slate-200 max-md:mt-10 max-md:max-w-full">
      {sections.map((section, index) => (
        <Box
          key={index}
          className="flex flex-wrap justify-center items-start px-6 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <SectionHeader title={section.title} />
          <SectionContent content={section.content} />
        </Box>
      ))}
    </Container>
  );
}

export default TestingComponent;
