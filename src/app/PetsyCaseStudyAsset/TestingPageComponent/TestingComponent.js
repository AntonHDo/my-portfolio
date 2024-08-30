import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import SectionHeader from "../DesignPageAsset/SectionHeader";
// import ContentSection from "../DesignPageAsset/ContentSection";
import SectionHeader from "./SectionHeader";
import SectionContent from "./SectionContent";

function TestingComponent() {
  const sections = [
    {
      title: <Box className="text-4xl">Testing</Box>,
      content: {
        details: (
          <Box className="text-xl">
            After multiple iterations, I made 3 significant improvements based
            on the feedback gathered.
          </Box>
        ),
      },
    },
    {
      title: <Box className="text-3xl">Filtering System</Box>,
      content: {
        description: (
          <Box className="text-xl">
            "Made changes to the filtering system. The old one was too big and
            made people lose focus on what they were on the page for."
          </Box>
        ),
        details: (
          <Box className="h-auto w-full bg-slate-500 p-6 rounded-xl">
            <img src="/assets/FilterChange.png" />
          </Box>
        ),
      },
    },
    {
      title: <Box className="text-3xl">Contact Form</Box>,
      content: {
        description: (
          <Box className="text-xl">
            Changed the placement of the contact form from the bottom of the
            home page to a whole seperate page because people don't tend to
            scroll all the way down on the homepage.
          </Box>
        ),
        details: (
          <Box className="h-auto w-full bg-slate-500 p-6 rounded-xl">
            <img src="/assets/contact.png" />
          </Box>
        ),
      },
    },
    {
      title: <Box className="text-3xl">Background Colors</Box>,
      content: {
        description: (
          <Box className="text-xl">
            Made changes to the colors to give it a more clean and mordern look
            and for users to focus on the content rather than the colors.
          </Box>
        ),
        details: (
          <Box className="h-auto w-full bg-slate-700 p-6 rounded-xl">
            <img src="/assets/ColorChange.png" />
          </Box>
        ),
      },
    },
  ];

  return (
    <Container className=" mb-20 flex flex-col w-full text-slate-200 max-md:mt-10 max-md:max-w-full">
      {sections.map((section, index) => (
        <Box
          key={index}
          className="flex flex-wrap justify-center items-start px-6 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          <SectionHeader title={section.title} />
          <SectionContent content={section.content} />
        </Box>
      ))}
    </Container>
  );
}

export default TestingComponent;
