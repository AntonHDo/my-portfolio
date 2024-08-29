"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Grid, Box } from "@mui/material";

const ProjectItem = ({ imageSrc, title, href, height }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.style.height = height;
    }
  }, [height]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      className="w-full mb-12 pb-20 max-md:mb-0 max-md:pb-20"
    >
      <Link href={href}>
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
          className=" bg-slate-200"
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
              <p className="text-center text-4xl md:text-6xl text-slate-500 max-md:text-3xl">
                {title}
              </p>
            </Grid>
            <Grid item xs={12} className="flex justify-center md:justify-start">
              <img
                loading="lazy"
                src={imageSrc}
                alt={title}
                className="max-w-full rounded-lg object-cover"
              />
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};

export default ProjectItem;
