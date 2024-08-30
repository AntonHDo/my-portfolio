import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SectionHeader({ title }) {
  return (
    <Box
      component="header"
      className="gap-2.5 self-stretch py-4 min-w-[240px] w-[400px]"
    >
      <Typography variant="h4" component="h1" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
