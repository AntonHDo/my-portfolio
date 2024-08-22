import React from "react";
import Box from "@mui/material/Box";

function ImageGrid() {
  return (
    <Box
      component="div"
      className="flex flex-wrap justify-center items-center self-center mt-12 max-w-full text-4xl font-bold whitespace-nowrap w-[1392px] max-md:mt-10"
    >
      {[1, 2, 3].map((index) => (
        <Box
          key={index}
          className="flex-1 shrink gap-2.5 self-stretch py-4 my-auto min-w-[240px] w-[257px]"
        >
          Image
        </Box>
      ))}
    </Box>
  );
}

export default ImageGrid;
