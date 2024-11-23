import React from "react";
import Box from "@mui/material/Box";
import ImageGridItem from "./ImageGridItem"; // Adjust the import path as necessary

function ImageGrid({ items }) {
  return (
    <Box
      component="div"
      className="flex flex-row justify-center items-center mt-12 max-w-full text-4xl font-bold whitespace-nowrap max-md:flex max-md:flex-wrap "
    >
      {items.map((item, index) => (
        <ImageGridItem
          title={item.title}
          key={index}
          name={item.name}
          imagePath={item.imagePath}
        />
      ))}
    </Box>
  );
}

export default ImageGrid;
