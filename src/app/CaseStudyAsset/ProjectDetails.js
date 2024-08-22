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
        className="flex flex-wrap justify-center items-start px-6 py-6 mt-24 w-full text-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        <ProjectTitle title="Title Of Project" />
        <Box
          component="section"
          className="flex flex-col justify-center px-12 min-w-[240px] w-[1135px] max-md:px-5 max-md:max-w-full"
        >
          <ProjectDescription />
          <ProjectInfo />
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectDetails;
