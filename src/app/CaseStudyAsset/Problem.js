import React from "react";
import ProblemTitle from "./ProblemTItle";
import ProblemDescription from "./ProblemDescription";
import Box from "@mui/material/Box";

function Problem() {
  return (
    <Box
      component="section"
      className="flex flex-col px-6 mt-24 w-full text-slate-200 max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <ProblemTitle />
      <ProblemDescription />
    </Box>
  );
}

export default Problem;
