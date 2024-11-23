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
          Why is finding the right pet products so difficult?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          className="mt-6 pb-20 text-2xl max-md:max-w-full"
        >
          Pet owners often struggle to find quality, affordable pet products
          that meet their pets' specific needs. The overwhelming number of
          choices and lack of personalized recommendations create frustration,
          leaving pet parents unsure if they're making the best decisions for
          their furry friends.
        </Typography>
      </Box>
    </Box>
  );
}

export default ProblemDescription;
