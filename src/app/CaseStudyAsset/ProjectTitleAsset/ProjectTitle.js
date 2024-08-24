import React from "react";
import Typography from "@mui/material/Typography";

function ProjectTitle({ title }) {
  return (
    <Typography
      variant="h4"
      component="h1"
      className="gap-2.5 py-4 font-bold min-w-[300px] w-[full]"
    >
      {title}
    </Typography>
  );
}

export default ProjectTitle;
