'use client';
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import ContainerBoxes from "../components/ContainerBoxes";
import { useDarkMode } from "../hooks/DarkModeContext";

const ProjectPage = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <Box className={`${isDarkMode ? "!bg-slate-800 text-slate-200" : " text-slate-800 !bg-slate-200"} flex relative flex-col`}>
      <Navbar />
      <ContainerBoxes />
      <Footer />
    </Box>
  );
};

export default ProjectPage;
