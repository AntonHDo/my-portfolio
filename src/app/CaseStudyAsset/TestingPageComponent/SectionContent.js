import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SectionContent({ content }) {
  return (
    <Box className="flex flex-col grow shrink min-w-[240px] w-[1055px] max-md:max-w-full">
      <Box className="flex relative flex-col justify-center px-3.5 w-full max-md:max-w-full">
        <Box className="flex z-0 flex-col px-16 w-full max-md:px-5 max-md:max-w-full">
          {typeof content === "string" ? (
            <Typography variant="body1" className="text-2xl">
              {content}
            </Typography>
          ) : (
            <>
              <Typography
                variant="h5"
                className="text-3xl pb-5 text-start max-md:max-w-full"
              >
                {content.description}
              </Typography>
              <Typography
                variant="body1"
                className="mt-3 text-2xl max-md:max-w-full"
              >
                {content.details}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default SectionContent;
