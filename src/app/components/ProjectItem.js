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

  // Handle mouse movement for the 3D effect and zoom in
  const handleMouseMove = (e) => {
    const rect = boxRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    boxRef.current.style.transform = `perspective(1200px) rotateX(${
      -y / 80
    }deg) rotateY(${x / 80}deg) scale(1.07)`;
  };

  const handleMouseLeave = () => {
    boxRef.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={4}
      xl={3}
      className="w-full pb-20 max-md:mb-0 max-md:pb-20"
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
            transition: "transform 0.3s ease-out", // Smooth transition for hover effect
          }}
          className="bg-slate-200 opacity-85"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
            <Grid
              item
              xs={12}
              className="flex justify-center bg-slate-700 rounded-xl md:justify-start"
            >
              <img
                loading="lazy"
                src={imageSrc}
                alt={title}
                className="max-w-full rounded-lg object-cover opacity-80"
              />
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};

export default ProjectItem;
