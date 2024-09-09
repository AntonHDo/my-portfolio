import React from "react";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectInfo from "./ProjectInfo";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function ProjectDetails() {
  return (
    <Container maxWidth="lg">
      <Box
        component="main"
        className="flex flex-row justify-between  py-10 mt-10 w-full text-slate-200 max-md:flex-col max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <Box
          component="section"
          className="flex flex-col justify-start  min-w-[240px] w-1/3 max-md:w-full"
        >
          <ProjectTitle title="Petsy" />
        </Box>
        <Box
          component="section"
          className="flex flex-col justify-center  w-2/3 max-md:px-5 max-md:w-full"
        >
          <ProjectDescription />
          <ProjectInfo />
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectDetails;
