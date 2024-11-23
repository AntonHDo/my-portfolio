"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Grid, Box } from "@mui/material";
import { useDarkMode } from "../hooks/DarkModeContext";

const ProjectItem = ({ imageSrc, title, href, height }) => {
  const boxRef = useRef(null);
  const { isDarkMode } = useDarkMode();

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

    boxRef.current.style.transform = `perspective(1200px) rotateX(${-y / 80
      }deg) rotateY(${x / 80}deg) scale(1.07)`;
  };

  const handleMouseLeave = () => {
    boxRef.current.style.transform =
      "perspective(1200px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <Grid
      className="w-full h-full pb-20 max-md:pb-20 px-4 max-md:px-0"
    >
      <Link href={href}>
        <Box
          ref={boxRef}
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.3s ease-out", // Smooth transition for hover effect
          }}
          className="w-full h-full md:px-4"
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
              <p className={`${isDarkMode ? "text-slate-200" : "text-slate-800"} text-center text-3xl font-bold`}>
                {title}
              </p>
            </Grid>
            <Grid
              item
              xs={12}
              className="flex justify-center rounded-xl md:justify-center item-center"
            >
              <img
                loading="lazy"
                src={imageSrc}
                alt={title}
                className="w-full h-full rounded-lg object-cover aspect-[8/4] opacity-80"
              />
            </Grid>
          </Grid>
        </Box>
      </Link>
    </Grid>
  );
};

export default ProjectItem;
