import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

const ContainerBoxes = () => {
  return (
    <Box
      component="main"
      className="px-3.5 py-10 my-10 w-full text-center text-slate-200 max-md:mt-10 max-md:max-w-full"
    >
      <Typography
        variant="h3"
        component="h1"
        className="font-bold text-center w-full max-md:max-w-full"
      >
        Projects
      </Typography>
      <Box className="flex flex-row px-20 items-center gap-20 pt-10 flex-wrap max-md:flex-col">
        <Box className="flex-1 w-full max-w-full">
          <Typography className="text-2xl font-bold mb-5">
            OlanaAdoptions
          </Typography>
          <Link href="/projects/olanaadoptions">
            <Box
              className="rounded-lg bg-slate-300 p-5 transition-transform transform hover:scale-105"
              sx={{
                transition: "transform 0.3s ease-in-out", // Smooth transition
              }}
            >
              <Box
                component="img"
                src="/assets/OlanaHero.png"
                alt="OlanaAdoptions"
                sx={{
                  width: "100%",
                  height: {
                    xs: "200px", // Small screens
                    sm: "250px", // Medium screens
                    md: "300px", // Large screens
                    lg: "350px", // Extra large screens
                  },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Link>
        </Box>
        <Box className="flex-1 w-full max-w-full">
          <Typography className="text-2xl font-bold mb-5">Petsy</Typography>
          <Link href="/projects/petsy">
            <Box
              className="rounded-lg bg-slate-300 p-5 transition-transform transform hover:scale-105"
              sx={{
                transition: "transform 0.9s ease-in-out", // Smooth transition
              }}
            >
              <Box
                component="img"
                src="/assets/petsyimagev2.png"
                alt="Petsy"
                sx={{
                  width: "100%",
                  height: {
                    xs: "200px", // Small screens
                    sm: "250px", // Medium screens
                    md: "300px", // Large screens
                    lg: "350px", // Extra large screens
                  },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ContainerBoxes;
