import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";
import Grid from "@mui/material/Grid";

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
      <Grid container spacing={4} className="pt-10 justify-center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="text-2xl font-bold mb-5">
            OlanaAdoptions
          </Typography>
          <Link href="/projects/olanaadoptions">
            <Box
              className="rounded-lg bg-slate-300 p-5 transition-transform transform hover:scale-105"
              sx={{
                transition: "transform 0.3s ease-in-out",
              }}
            >
              <Box
                className="opacity-80"
                component="img"
                src="/assets/OlanaHero.png"
                alt="OlanaAdoptions"
                sx={{
                  width: "100%",
                  height: {
                    xs: "200px",
                    sm: "250px",
                    md: "300px",
                    lg: "350px",
                  },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography className="text-2xl font-bold mb-5">Petsy</Typography>
          <Link href="/projects/petsy">
            <Box
              className="rounded-lg bg-slate-300 p-5 transition-transform transform hover:scale-105"
              sx={{
                transition: "transform 0.9s ease-in-out",
              }}
            >
              <Box
                className="opacity-80"
                component="img"
                src="/assets/petsyimagev2.png"
                alt="Petsy"
                sx={{
                  width: "100%",
                  height: {
                    xs: "200px",
                    sm: "250px",
                    md: "300px",
                    lg: "350px",
                  },
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Link>
        </Grid>
        {/* Add more Grid items here for additional projects */}
      </Grid>
    </Box>
  );
};

export default ContainerBoxes;
