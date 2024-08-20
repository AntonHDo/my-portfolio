import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProjectDescription() {
  return (
    <Box
      component="article"
      className="flex flex-col justify-center px-3.5 w-full max-md:max-w-full"
    >
      <Box className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
        <Typography
          variant="h5"
          component="h2"
          className="text-center text-3xl font-bold max-md:max-w-full"
        >
          Description of the project
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mt-4 text-2xl max-md:max-w-full"
        >
          More descriptionsMore descriptMore descriptionsMore descriptionsMore
          descriptionsMore descriptionsMore descriptionsMore descriptionsMore
        </Typography>
      </Box>
      <Typography
        variant="body2"
        component="p"
        className="flex-1 shrink gap-2.5 self-stretch px-16 mt-6 w-full text-2xl max-md:px-5 max-md:max-w-full"
      >
        More descriptionsMore descriptMore descriptionsMore descriptionsMore
        descriptionsMore descriptionsMore descriptionsMore descriptionsMore
      </Typography>
    </Box>
  );
}

export default ProjectDescription;
