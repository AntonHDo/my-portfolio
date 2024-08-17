"use client";
import React, { useRef, useEffect } from "react";
import { Grid, Box } from "@mui/material";

const ProjectItem = ({ imageSrc, title, height }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.height = height;
    }
  }, [height]);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="mb-12 w-full pb-20 max-md:mb-0 max-md:pb-20"
    >
      <Box
        ref={boxRef}
        sx={{
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          padding: {
            xs: "12px",
            md: "24px",
          },
          display: "flex",
          flexDirection: "column",
        }}
        className="max-w-full w-[1080px] bg-slate-200"
      >
        <Grid
          container
          direction="column"
          alignItems="center"
          className="rounded-lg flex-1"
        >
          <Grid
            item
            xs={12}
            className="flex justify-center items-center text-center pb-6 max-md:pb-3"
          >
            <p className="text-center text-6xl text-slate-500 max-md:text-3xl">
              {title}
            </p>
          </Grid>
          <Grid item xs={12} className="flex justify-center md:justify-start">
            <img
              loading="lazy"
              src={imageSrc}
              alt={title}
              className="max-w-full rounded-lg"
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ProjectItem;
