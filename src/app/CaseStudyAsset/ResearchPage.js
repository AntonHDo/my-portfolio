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
          With the goal of getting better at UX/UI design to help make adopting
          a dog an easier process, I wanted to examine
          <ul className="list-disc">
            <li>
              Simplify the Adoption Process: Streamline procedures to reduce
              complexity and make the process more user-friendly. Enhance User
            </li>
            <li>
              Experience: Design intuitive interfaces that guide users through
              the adoption journey seamlessly.
            </li>
            <li>
              Foster Emotional Connection: Create engaging content and visuals
              that connect potential adopters with the dogs they meet online.
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Secondary",
      content: (
        <>
          According to the ASPCA, <strong>34% of pet adopters</strong> found
          their pets online. However, many adoption websites have poor
          usability, making the adoption process more difficult. Enhancing
          website design can <strong>significantly</strong> improve the chances
          of finding homes for pets.
        </>
      ),
    },
    {
      title: "Competitive Analysis",
      content: (
        <>
          Many pet adoption websites focus on either showcasing available pets
          or providing adoption resources, often neglecting a seamless user
          experience.{" "}
          <strong>
            Users frequently need to visit multiple sites to find comprehensive
            information, leading to a fragmented and frustrating adoption
            process.
          </strong>
        </>
      ),
    },
    {
      title: "Primary",
      content: (
        <>
          <strong>What are the current needs of potential dog adopters?</strong>{" "}
          To understand this question, I gathered insights from{" "}
          <strong>20+ survey responses</strong> and conducted interviews with{" "}
          <strong>7 individuals</strong> who have recently adopted or are
          considering adopting a dog. With this data, I organized their
          responses into affinity maps focusing on 3 main categories:
        </>
      ),
    },
    {
      title: "User Personas",
      content: (
        <>
          <Box>
            How might we enhance the dog adoption experience for potential pet
            owners?
          </Box>
          <br />
          Based on patterns from my user insights, I developed three personas
          representing common challenges and desires of individuals looking to
          adopt a dog today.
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
