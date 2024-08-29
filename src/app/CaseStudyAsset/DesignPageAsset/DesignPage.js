import React from "react";
import SectionHeader from "./SectionHeader";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import Box from "@mui/material/Box";

function DesignPage() {
  const sections = [
    {
      title: "Design",
      content:
        "With a better understanding of the users’ needs and goals, I began coming up with  concepts for the web app’s function and flow.",
    },
    {
      title: "Concept",
      content: (
        <Box>
          <b className="text-2xl">
            The website offers a personalized and seamless dog adoption
            experience, enhanced by smart technology.
          </b>
          <br />
          <br />
          The platform can engage potential adopters with tailored
          recommendations based on their preferences, lifestyle, and home
          environment.
          <br />
          <br />
          It also learns from user interactions, adapting its suggestions to
          match their needs, making the process of finding the perfect dog
          easier and more intuitive.
          <br />
          <br />
          This concept became the foundation of my idea, leveraging technology
          to create a personalized adoption journey that aligns with the unique
          needs of each adopter, ensuring a successful match.
        </Box>
      ),
    },
    {
      title: "Key Features",
      content: (
        <Box>
          Personalized Matching: Users can receive tailored dog recommendations
          by providing details about their lifestyle, home environment, and
          preferences.
          <br />
          <br />
          Interactive Support: Users can engage with the platform to ask
          questions and get advice on dog care, training, and adoption
          readiness. These features are designed to ensure that each user finds
          a dog that perfectly fits their needs, making the adoption process
          smoother and more successful.
        </Box>
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
          <ContentSection content={section.content} />
        </Box>
      ))}
      <Box />
      <ImageSection
        title="Website Flow"
        imageContent={
          <a
            href="/assets/Webside Flow for Olana Adoptions2.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/Webside Flow for Olana Adoptions2.png"
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
            href="/assets/WireFrame for Petsite.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-2xl"
              src="/assets/WireFrame for Petsite.png"
              alt="Lofi Wireframes"
            />
          </a>
        }
      />

      <ImageSection
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
      />
      <ImageSection
        title="Components"
        imageContent={
          <a
            href="\assets\Components.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="rounded-2xl bg-slate-500 mb-20"
              src="\assets\Components.png"
              alt="Components"
            />
          </a>
        }
      />
    </Box>
  );
}

export default DesignPage;
