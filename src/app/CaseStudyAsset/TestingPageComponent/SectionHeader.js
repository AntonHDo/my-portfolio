import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SectionHeader({ title }) {
  return (
    <Box className="grow shrink gap-2.5 self-stretch py-5 w-80 min-w-[240px]">
      <Typography variant="h4" className="font-bold">
        {title}
      </Typography>
    </Box>
  );
}

export default SectionHeader;
