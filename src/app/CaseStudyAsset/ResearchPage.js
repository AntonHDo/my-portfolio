import React from "react";
import SectionHeader from "./SectionHeader";
import ContentBlock from "./ContentBlock";
import ImageGrid from "./ImageGrid";
import Box from "@mui/material/Box";

function ResearchPage() {
  const keyTakeawaySection = [
    {
      title: "Key Takeaway",
      content: (
        <Box>
          Potential dog adopters often face challenges in finding comprehensive
          and reliable information that matches their specific needs and
          preferences during the adoption process.
        </Box>
      ),
    },
  ];
  const sections = [
    {
      title: "Research",
      content: (
        <Box>
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
        </Box>
      ),
    },
    {
      title: "Secondary",
      content: (
        <Box>
          According to the ASPCA, <strong>34% of pet adopters</strong> found
          their pets online. However, many adoption websites have poor
          usability, making the adoption process more difficult. Enhancing
          website design can <strong>significantly</strong> improve the chances
          of finding homes for pets.
        </Box>
      ),
    },
    {
      title: "Competitive Analysis",
      content: (
        <Box>
          Many pet adoption websites focus on either showcasing available pets
          or providing adoption resources, often neglecting a seamless user
          experience.{" "}
          <strong>
            Users frequently need to visit multiple sites to find comprehensive
            information, leading to a fragmented and frustrating adoption
            process.
          </strong>
        </Box>
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
        <Box>
          <Box>
            How might we enhance the dog adoption experience for potential pet
            owners?
          </Box>
          <br />
          Based on patterns from my user insights, I developed three personas
          representing common challenges and desires of individuals looking to
          adopt a dog today.
        </Box>
      ),
    },
  ];

  const logos = [
    { name: "ASPCALogo", imagePath: "/assets/aspca.png" },
    { name: "CuddlyLogo", imagePath: "/assets/cuddly.png" },
    { name: "PetFinderLogo", imagePath: "/assets/petfinder.png" },
  ];
  const personas = [
    { name: "ChrisPersona", imagePath: "/assets/Chris.png" },
    { name: "SuePersona", imagePath: "/assets/Suee.png" },
    { name: "EvanPersona", imagePath: "/assets/Evan.png" },
  ];
  const primaries = [
    { name: "ASPCALogo", imagePath: "/assets/EaseOfAdoption.png" },
    { name: "CuddlyLogo", imagePath: "/assets/InformationAccessibility.png" },
    { name: "PetFinderLogo", imagePath: "/assets/SupportAfter.png" },
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
          {index === 2 && <ImageGrid items={logos} />}
          {index === 3 && <ImageGrid items={primaries} />}
          {index === 4 && <ImageGrid items={personas} />}
        </Box>
      ))}
      {keyTakeawaySection.map((keyTakeawaySection, index) => (
        <Box
          key={index}
          component="section"
          className={`flex flex-wrap py-20 ${
            index > 0 ? "mt-24 max-md:mt-10" : ""
          } w-full`}
        >
          <SectionHeader title={keyTakeawaySection.title} />
          <ContentBlock content={keyTakeawaySection.content} />
        </Box>
      ))}
    </Box>
  );
}

export default ResearchPage;
