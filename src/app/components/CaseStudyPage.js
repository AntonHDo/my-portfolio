"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SeeMore from "../CaseStudyAsset/SeeMorePageComponent/SeeMore";
import MyComponent from "../CaseStudyAsset/ReflectionPageComponent/MyComponent";
import SolutionSection from "../CaseStudyAsset/SolutionPageComponent/SolutionSection";
import TestingComponent from "../CaseStudyAsset/TestingPageComponent/TestingComponent";
import DesignPage from "../CaseStudyAsset/DesignPageAsset/DesignPage";
import ResearchPage from "../CaseStudyAsset/ResearchPage";
import Problem from "../CaseStudyAsset/Problem";
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
        <Problem />
        <ResearchPage />
        <CustomDivider />
        <DesignPage />
        <CustomDivider />
        <TestingComponent />
        <CustomDivider />
        <SolutionSection />
        <CustomDivider />
        <MyComponent />
        <CustomDivider />
        <SeeMore />
      </Container>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
