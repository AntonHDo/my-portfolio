import React from "react";
import SectionHeader from "./SectionHeader";
import ContentBlock from "./ContentBlock";
import ImageGrid from "./ImageGrid";
import KeyTakeaway from "./KeyTakeaway";
import Box from "@mui/material/Box";

function ResearchPage() {
  const sections = [
    {
      title: "Research",
      content: (
        <>
          Research Goals and bullet points examples
          <br />
          With the goal of enhancing my understanding, I wanted to examine:
          <br />
          The current methodology in education and teaching.
          <br />
          Analyze current resources offered by competitor apps.
          <br />
          Identify student frustrations when studying.
        </>
      ),
    },
    {
      title: "Secondary",
      content: "Secondary research on the problem that people are having",
    },
    {
      title: "Competitive Analysis",
      content:
        "People had to go through several apps and websites to find a trusted person to adopt a dog because there are so many untrusted sites along with people out there.",
    },
    {
      title: "Primary",
      content: (
        <>
          What are the current needs for families who are looking to adopt their
          new best dog friend? Gather data from people who are looking to adopt
          dogs
          <br />
          <br />
          Use data to show your proof
        </>
      ),
    },
    {
      title: "User Personas",
      content: (
        <>
          What are the current needs for families who are looking to adopt their
          new best dog friend? Gather data from people who are looking to adopt
          dogs
          <br />
          <br />
          Use data to show your proof
        </>
      ),
    },
  ];

  return (
    <Box
      component="main"
      className="flex flex-col self-center mt-24 w-full text-slate-200 max-w-[1583px] max-md:mt-10 max-md:max-w-full"
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component="section"
          className={`flex flex-wrap ${
            index > 0 ? "mt-24 max-md:mt-10" : ""
          } w-full`}
        >
          <SectionHeader title={section.title} />
          <ContentBlock content={section.content} />
          {(index === 2 || index === 3 || index === 4) && <ImageGrid />}
        </Box>
      ))}
      <KeyTakeaway />
    </Box>
  );
}

export default ResearchPage;
