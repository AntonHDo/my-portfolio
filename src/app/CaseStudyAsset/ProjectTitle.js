import React from "react";
import Typography from "@mui/material/Typography";

function ProjectTitle({ title }) {
  return (
    <Typography
      variant="h4"
      component="h1"
      className="gap-2.5 py-4 font-bold min-w-[240px] w-[257px]"
    >
      {title}
    </Typography>
  );
}

export default ProjectTitle;
