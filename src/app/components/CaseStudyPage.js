"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectDetails from "../CaseStudyAsset/ProjectDetails";
import ImageGallery from "../CaseStudyAsset/ImageGallery";
import FigmaPrototype from "../CaseStudyAsset/FigmaPrototype";
import CustomDivider from "../CaseStudyAsset/CustomerDivider";
import { Container, Typography, Box, Grid } from "@mui/material";
import SectionTitle from "@/app/components/Section Title"; // Make sure to adjust the import as per your actual file structure

const CaseStudyPage = () => {
  return (
    <div className="flex relative flex-col bg-slate-800">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e745ad32264ba7e793e2aa122c4eefe8c1c56603a2e5471a7162aa7ee1ade37e?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
        alt=""
        className="object-cover absolute inset-0 size-full opacity-25"
      />
      <Navbar />
      <Container className="z-10">
        {/* Project Overview */}
        <ImageGallery />
        <ProjectDetails />
        <FigmaPrototype />
        <CustomDivider />
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Project Overview" />
          <Typography variant="h6" paragraph>
            Introduction: Briefly describe the purpose of the project. For
            instance: "Olana Adoptions is a web platform designed to facilitate
            dog adoption by connecting potential pet owners with dogs in need of
            homes."
          </Typography>
          <Typography variant="h6" paragraph>
            Objective: Outline the main goals of the project. "The primary
            objective was to create a user-friendly and visually appealing
            website that provides all necessary information to potential
            adopters while ensuring an easy and efficient browsing experience."
          </Typography>
        </Box>

        {/* Research */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Research" />
          <Typography variant="h6" paragraph>
            User Research: Discuss the research conducted to understand the
            needs and preferences of the target audience. "We conducted user
            interviews with potential adopters to identify key pain points in
            the adoption process, such as difficulty in finding reliable
            information about available dogs and the adoption process."
          </Typography>
          <Typography variant="h6" paragraph>
            Competitive Analysis: Mention if any competitor analysis was done.
            "A thorough analysis of competitor websites was performed to
            identify strengths and weaknesses in their designs, allowing us to
            build a more intuitive and user-centric platform."
          </Typography>
        </Box>

        {/* Design Process */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Design Process" />
          <Typography variant="h6" paragraph>
            Wireframes: Describe the creation of wireframes. "The initial design
            phase involved creating low-fidelity wireframes to map out the basic
            structure and layout of the website. These wireframes helped us
            ensure that the website would be intuitive and easy to navigate."
          </Typography>
          <Typography variant="h6" paragraph>
            Prototype: Discuss the development of the prototype. "Once the
            wireframes were approved, high-fidelity prototypes were created
            using Figma. These prototypes were used for user testing and further
            refinement of the design."
          </Typography>
          <Box sx={{ mt: 4, mb: 6, border: "1px solid #ddd", height: 300 }}>
            {/* Placeholder for Wireframes Image */}
            <Typography variant="body2" align="center" sx={{ pt: 12 }}>
              [Wireframes Image Placeholder]
            </Typography>
          </Box>
          <Box sx={{ mb: 6, border: "1px solid #ddd", height: 300 }}>
            {/* Placeholder for Prototype Image */}
            <Typography variant="body2" align="center" sx={{ pt: 12 }}>
              [Prototype Image Placeholder]
            </Typography>
          </Box>
        </Box>

        {/* Challenges */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Challenges" />
          <Typography variant="h6" paragraph>
            Design Challenges: Highlight any specific challenges faced during
            the design process. "One of the key challenges was ensuring that the
            website was fully responsive and accessible on both desktop and
            mobile devices."
          </Typography>
          <Typography variant="h6" paragraph>
            Technical Constraints: Mention any technical limitations. "Another
            challenge was integrating a filter bar for mobile that was draggable
            and scrollable from left to right, which required careful
            consideration of both user experience and technical feasibility."
          </Typography>
        </Box>

        {/* Final Design */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Final Design" />
          <Typography variant="h6" paragraph>
            Design Solution: Describe the final design and its key features.
            "The final design of the Olana Adoptions website features a clean
            and modern aesthetic, with easy-to-navigate sections such as 'About
            Us,' 'Dogs Available,' and 'Contact Us.' The use of white space and
            clear typography ensures readability, while the responsive design
            allows for a seamless experience across all devices."
          </Typography>
          <Typography variant="h6" paragraph>
            Key Features: Highlight the key features of the website. "Key
            features include a detailed dog profile page, a contact form for
            inquiries, and a section dedicated to information about the adoption
            process."
          </Typography>
          <Box sx={{ mt: 4, mb: 6, border: "1px solid #ddd", height: 300 }}>
            {/* Placeholder for Final Design Image */}
            <Typography variant="body2" align="center" sx={{ pt: 12 }}>
              [Final Design Image Placeholder]
            </Typography>
          </Box>
        </Box>

        {/* User Testing & Feedback */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="User Testing & Feedback" />
          <Typography variant="h6" paragraph>
            Testing Process: Describe how the design was tested. "The prototype
            was tested with a group of potential adopters to gather feedback on
            usability and design."
          </Typography>
          <Typography variant="h6" paragraph>
            Feedback & Iterations: Discuss any feedback received and how it was
            addressed. "Feedback indicated that users appreciated the clean
            layout and easy navigation, but some suggested adding more filtering
            options on the dog profiles. This feedback was incorporated into the
            final design."
          </Typography>
        </Box>

        {/* Conclusion */}
        <Box sx={{ py: 8 }}>
          <SectionTitle title="Conclusion" />
          <Typography variant="h6" paragraph>
            Outcome: Summarize the outcome of the project. "The Olana Adoptions
            website successfully meets the needs of potential dog adopters by
            providing a user-friendly platform that simplifies the adoption
            process. The final design is both aesthetically pleasing and
            functional, ensuring a positive experience for all users."
          </Typography>
          <Typography variant="h6" paragraph>
            Future Improvements: Mention any potential future improvements.
            "Future iterations of the website may include additional features
            such as a blog section, user accounts, and advanced search
            functionalities."
          </Typography>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
