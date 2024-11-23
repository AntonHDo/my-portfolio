import React from "react";
import SectionHeader from "./SectionHeader";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import Box from "@mui/material/Box";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

function DesignPage() {
  const { isDarkMode } = useDarkMode();
  const sections = [
    {
      title: "Design",
      content:
        "With a clearer insight into the challenges pet owners face when shopping online, I started brainstorming concepts to enhance the functionality and flow of the Petsy eCommerce site",
    },
    {
      title: "Concept",
      content: (
        <Box>
          <b className="text-2xl">
            The Petsy platform is designed to provide a personalized and
            effortless shopping experience for pet owners, powered by intuitive
            technology
          </b>
          <br />
          <br />
          The site offers tailored product recommendations based on each pet’s
          needs, preferences, and health considerations, making it easier for
          owners to find the right items.
          <br />
          <br />
          By learning from user interactions and refining its suggestions, the
          platform ensures that every product fits seamlessly into the pet's
          life, simplifying the decision-making process.
          <br />
          <br />
          This concept became the foundation of my idea, using smart technology
          to create a shopping journey that caters to the specific needs of pets
          and their owners, ensuring they find the best products effortlessly.
        </Box>
      ),
    },
    {
      title: "Key Features",
      content: (
        <Box>
          <strong>Intuitive Product Finder:</strong> Petsy features an intuitive
          product finder that helps pet owners easily locate the best products
          for their pets. By categorizing items based on pet type, specific
          needs, and user preferences, this feature ensures that customers can
          quickly find exactly what they're looking for without sifting through
          countless irrelevant options.
          <br />
          <br />
          <strong>Personalized Shopping Experience:</strong> Petsy offers a
          personalized shopping experience by tailoring product recommendations
          based on each user's browsing history and preferences. This feature
          allows pet owners to discover products that align with their pets'
          unique needs, ensuring a more customized and satisfying shopping
          journey.
        </Box>
      ),
    },
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
          className={`flex flex-wrap ${index > 0 ? "mt-20 max-md:mt-10" : ""
            } w-full`}
        >
          <SectionHeader title={section.title} />
          <ContentSection content={section.content} />
        </Box>
      ))}
      <Box />
      <ImageSection
        title="Website Flow"
        imageContent={
          <a
            href="\assets\petsyFlowchart.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="\assets\petsyFlowchart.png"
              className="rounded-2xl"
              alt="Website Flow"
            />
          </a>
        }
      />
      <ImageSection
        title="Lofi Wireframes"
        imageContent={
          <a
            href="/assets/petsywireframe.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="p-2 rounded-2xl"
              src="/assets/petsywireframe.png"
              alt="Lofi Wireframes"
            />
          </a>
        }
      />

      {/* <ImageSection
        title="Design System"
        imageContent={
          <a
            href="\assets\Design System 2.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-2xl"
              src="\assets\Design System 2.png"
              alt="Design System"
            />
          </a>
        }
      /> */}
      {/* <ImageSection
        title="Components"
        imageContent={
          <a
            href="\assets\Components.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-2xl bg-slate-400 bg-opacity-75 mb-20"
              src="\assets\Components.png"
              alt="Components"
            />
          </a>
        }
      /> */}
    </Box>
  );
}

export default DesignPage;
