'use client';
import React from "react";
import SectionHeader from "./SectionHeader";
import ContentBlock from "./ContentBlock";
import ImageGrid from "./ImageGrid";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function ResearchPage() {
  const { isDarkMode } = useDarkMode();
  const keyTakeawaySection = [
    {
      title: "Key Takeaway",
      content: (
        <Box>
          Potential pet product shoppers often struggle to find reliable and
          relevant information tailored to their pets' unique needs, making the
          shopping experience overwhelming and frustrating.
        </Box>
      ),
    },
  ];
  const sections = [
    {
      title: "Research",
      content: (
        <Box>
          With the goal of improving my eCommerce UX/UI design and to help
          people find high quality pet products, I wanted to examine
          <ul className="list-disc">
            <li>
              Simplify Product Discovery: Refine the process of finding quality
              pet products by creating an intuitive and user-friendly shopping
              interface.
            </li>
            <li>
              Enhance User Experience: Design seamless and engaging interactions
              that guide users effortlessly through the process of selecting and
              purchasing pet products.
            </li>
            <li>
              Solve Challenges in Pet Product Search: Address common pain points
              for pet owners by ensuring they can easily discover and buy the
              best products for their pets.
            </li>
          </ul>
        </Box>
      ),
    },
    {
      title: "Secondary",
      content: (
        <Box>
          According to recent studies, 70% of pet owners face challenges in
          finding the right products online. However, many pet product websites
          lack user-friendly design, making the shopping experience frustrating.
          By improving website usability, Petsy aims to make it easier for pet
          parents to discover the perfect products for their furry friends,
          ensuring a simple and enjoyable shopping journey.
        </Box>
      ),
    },
    {
      title: "Competitive Analysis",
      content: (
        <Box>
          Many pet eCommerce websites prioritize pushing products over user
          experience, making it difficult for pet owners to find the right
          items. Confusing navigation often leads to frustration, leaving
          customers unsure if the products they’re viewing are truly the best
          fit for their pets’ needs.{" "}
          <strong>
            Users frequently need to visit multiple sites to gather information,
            further adding to the frustrating experience.
          </strong>
        </Box>
      ),
    },
    {
      title: "Primary",
      content: (
        <>
          <strong>
            What are the current needs of pet owners shopping online?
          </strong>{" "}
          To gathered insights on this, I conducted interviews with over 7
          individuals who frequently purchase pet products. Using this data, I
          organized their responses into affinity maps, focusing on three main
          categories: ease of finding products, trust in product quality, and
          overall shopping experience.
        </>
      ),
    },
    {
      title: "User Personas",
      content: (
        <Box>
          <Box className="text-2xl font-bold">
            How might we improve the online shopping experience for pet owners,
            making it easier for them to find and trust the right products for
            their pets?
          </Box>
          <br />
          Based on patterns from my user insights, I developed three personas
          representing common challenges and desires of individuals who are avid
          pet product shoppers.
        </Box>
      ),
    },
  ];

  const logos = [
    { title: "Chewy", name: "Chewy", imagePath: "/assets/ChewyLogo.png" },
    { title: "Petco", name: "Petco", imagePath: "/assets/PetcoLogo.png" },
    { title: "Amazon", name: "Amazon", imagePath: "/assets/AmazonLogo.png" },
  ];
  const personas = [
    { title: "", name: "Kevin", imagePath: "/assets/KevinCard.png" },
    { title: "", name: "Sandra", imagePath: "/assets/SandraCard.png" },
    { title: "", name: "Ivana", imagePath: "/assets/IvanaCard.png" },
  ];
  const primaries = [
    { title: "", name: "", imagePath: "/assets/EaseOfFindingProducts.png" },
    { title: "", name: "", imagePath: "/assets/TrustInProductQuality.png" },
    { title: "", name: "", imagePath: "/assets/ShoppingExperience.png" },
  ];

  return (
    <Box
      component="main"
      className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} flex flex-col self-center mt-20 w-full max-w-[1583px] max-md:mt-10 max-md:max-w-full`}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          component="section"
          className={`flex flex-wrap justify-center ${index > 0 ? "mt-20 max-md:mt-10" : ""
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
          className={`flex flex-wrap py-20 ${index > 0 ? "mt-20 max-md:mt-10" : ""
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
