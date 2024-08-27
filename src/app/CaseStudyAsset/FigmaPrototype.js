import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const FigmaPrototype = () => {
  return (
    <Box
      component="main"
      className="px-3.5 py-10 my-10 w-full text-center text-slate-200 max-md:mt-10 max-md:max-w-full"
    >
      <Typography
        variant="h4"
        component="h1"
        className="font-bold text-left w-full max-md:max-w-full"
      >
        Figma Prototype
      </Typography>
      <Box
        className="flex flex-row items-center gap-8 pt-20"
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
      >
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "100%",
            height: "450px",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoiWtSMmZLMs84nFbIgSgqb%2FWireFrame-for-Petsite%3Fpage-id%3D265%253A1455%26node-id%3D265-1546%26viewport%3D-113%252C347%252C0.13%26t%3DjnL2RzP1eTRyCoJh-1%26scaling%3Dscale-down-width%26content-scaling%3Dfixed%26starting-point-node-id%3D265%253A1546"
          allowFullScreen
        ></iframe>
        <iframe
          style={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "800px",
            height: "450px",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoiWtSMmZLMs84nFbIgSgqb%2FWireFrame-for-Petsite%3Fpage-id%3D345%253A2045%26node-id%3D345-2694%26viewport%3D-1889%252C937%252C0.5%26t%3DC1vaqdjZE1A6kPB8-1%26scaling%3Dscale-down%26content-scaling%3Dresponsive"
          allowFullScreen
        ></iframe>
      </Box>
    </Box>
  );
};

export default FigmaPrototype;
