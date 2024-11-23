"use client";

import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SeeMore from "./SeeMorePageComponent/SeeMore";
import MyComponent from "./ReflectionPageComponent/MyComponent";
import SolutionSection from "./SolutionPageComponent/SolutionSection";
import TestingComponent from "./TestingPageComponent/TestingComponent";
import DesignPage from "./DesignPageAsset/DesignPage";
import Problem from "./ProblemPageComponents/Problem";
import ResearchPage from "./ResearchPage";
import ProjectDetails from "./ProjectTitleAsset/ProjectDetails";
import FigmaPrototype from "./FigmaPrototype";
import CustomDivider from "./CustomerDivider";
import { Container, Typography, Box, Grid } from "@mui/material";
import { useDarkMode } from "@/app/hooks/DarkModeContext";

const CaseStudyPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box className={`${isDarkMode ? "bg-slate-800" : "bg-slate-200"} flex relative flex-col `}>
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e745ad32264ba7e793e2aa122c4eefe8c1c56603a2e5471a7162aa7ee1ade37e?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
        alt=""
        className="object-cover absolute inset-0 size-full opacity-25"
      /> */}
      <Navbar />
      <Container className="z-10">
        {/* Project Overview */}
        <ProjectDetails />
        <CustomDivider />
        {/* <FigmaPrototype />
        <CustomDivider /> */}
        <Problem />
        <CustomDivider />
        <ResearchPage />
        <CustomDivider />
        <DesignPage />
        <CustomDivider />
        <TestingComponent />
        <CustomDivider />
        <SolutionSection />
        <CustomDivider />
        <MyComponent />
        {/* <CustomDivider /> */}
        {/* <SeeMore /> */}
      </Container>
      <Footer />
    </Box>
  );
};

export default CaseStudyPage;
