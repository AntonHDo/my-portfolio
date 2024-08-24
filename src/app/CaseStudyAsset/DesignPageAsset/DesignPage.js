import React from "react";
import SectionHeader from "./SectionHeader";
import ContentSection from "./ContentSection";
import ImageSection from "./ImageSection";
import Box from "@mui/material/Box";

function DesignPage() {
  return (
    <Box
      component="main"
      className="flex flex-col self-center mt-24 w-full text-slate-200 max-w-[1583px] max-md:mt-10 max-md:max-w-full"
    >
      <SectionHeader
        title="Design"
        content="With a better understanding of the users’ needs and goals, I began coming up with  concepts for the web app’s function and flow."
      />
      <ContentSection
        title="Concept"
        content={
          <>
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
            to create a personalized adoption journey that aligns with the
            unique needs of each adopter, ensuring a successful match.
          </>
        }
      />

      <ContentSection
        title="Key Features"
        content={
          <>
            Personalized Matching: Users can receive tailored dog
            recommendations by providing details about their lifestyle, home
            environment, and preferences.
            <br />
            <br />
            Interactive Support: Users can engage with the platform to ask
            questions and get advice on dog care, training, and adoption
            readiness. These features are designed to ensure that each user
            finds a dog that perfectly fits their needs, making the adoption
            process smoother and more successful.
          </>
        }
      />
      <ImageSection
        title="Site Map"
        description="Description of the project"
        imageContent="Image of Site Map"
      />
      <ImageSection
        title="Lofi Wireframes"
        description="Description of the project"
        imageContent="Image of Lofi Wireframe"
      />
      <ImageSection
        title="Design System"
        description="Showcase the designs and components, icons, etc"
        imageContent="Image of all the different design systems"
      />
    </Box>
  );
}

export default DesignPage;
