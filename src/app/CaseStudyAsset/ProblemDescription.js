import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProblemDescription() {
  return (
    <Box
      component="article"
      className="flex flex-col self-center max-w-full w-[1135px]"
    >
      <Box className="flex flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
        <Typography
          variant="h5"
          component="h2"
          className="text-center text-3xl font-bold max-md:max-w-full"
        >
          How does one adopt a dog with ease?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mt-6 text-2xl max-md:max-w-full"
        >
          More descriptionsMore descriptMore descriptionsMore descriptionsMore
          descriptionsMore descriptionsMore descriptionsMore descriptionsMore
        </Typography>
      </Box>
    </Box>
  );
}

export default ProblemDescription;
