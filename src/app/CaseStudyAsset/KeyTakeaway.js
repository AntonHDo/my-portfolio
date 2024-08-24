import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function KeyTakeaway() {
  return (
    <Box
      component="section"
      className="flex flex-wrap items-center px-6 mt-24 w-full font-bold max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <Box
        component="header"
        className="grow shrink gap-2.5 self-stretch py-4 my-auto w-80 text-4xl min-w-[240px]"
      >
        <Typography variant="h4" className="font-bold">
          Key Takeaway
        </Typography>
      </Box>
      <Box className="flex flex-col grow shrink self-stretch my-auto text-2xl min-w-[240px] w-[1055px] max-md:max-w-full">
        <Typography className="px-16 w-full max-md:px-5 max-md:max-w-full">
          Potential dog adopters often face challenges in finding comprehensive
          and reliable information that matches their specific needs and
          preferences during the adoption process.
        </Typography>
      </Box>
    </Box>
  );
}

export default KeyTakeaway;
