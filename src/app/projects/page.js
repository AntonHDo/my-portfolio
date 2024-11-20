import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@mui/material";
import ContainerBoxes from "../components/ContainerBoxes";
import DarkModeToggle from "../components/DarkModeToggle";

const ProjectPage = () => {
  return (
    <Box className="flex relative flex-col bg-zinc-800">
      {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e745ad32264ba7e793e2aa122c4eefe8c1c56603a2e5471a7162aa7ee1ade37e?apiKey=04b03a6f932f43d5ac0f299cdc8c8e61&&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61"
        alt=""
        className="object-cover absolute inset-0 size-full opacity-25"
      /> */}
      <Navbar />
      <ContainerBoxes />
      <Footer />
    </Box>
  );
};

export default ProjectPage;
