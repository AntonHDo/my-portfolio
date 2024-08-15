import React from "react";
import { Grid } from "@mui/material";

const ProjectItem = ({ imageSrc, title, isReversed }) => {
  return (
    <Grid
      container
      spacing={2}
      direction={{
        xs: "column", // Text on top, image below on mobile
        md: isReversed ? "row-reverse" : "row", // Alternate on desktop
      }}
      alignItems="center"
      className="mb-12 max-md:mb-0 w-full pb-20"
    >
      <Grid
        item
        xs={12}
        md={6}
        className="flex justify-center md:justify-start py-10"
      >
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="max-w-full w-[608px]"
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        className="flex justify-center items-center text-center"
      >
        <p className="text-center text-6xl text-slate-200 max-md:text-4xl">
          {title}
        </p>
      </Grid>
    </Grid>
  );
};

export default ProjectItem;
