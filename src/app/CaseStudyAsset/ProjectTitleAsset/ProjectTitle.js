import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function ProjectTitle({ title }) {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        className="gap-2.5 py-4 font-bold min-w-[300px] w-[full]"
      >
        {title}
      </Typography>
    </Box>
  );
}

export default ProjectTitle;
