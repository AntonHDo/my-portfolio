import React from "react";
import GalleryImage from "./GalleryImage";

const imageData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b71afa52f6f97f11cd3a29f63253828dd5433f3c4cfb6e1d4e316f9bb0b0724?placeholderIfAbsent=true&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61",
    alt: "Gallery image 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9b3e071f371672428d43eb68e60b4bdce3b55d90bae552c40a95a5142e2f1686?placeholderIfAbsent=true&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61",
    alt: "Gallery image 2",
  },
];

function ImageGallery() {
  return (
    <section className="flex flex-wrap gap-2.5 justify-center p-2.5 w-full max-md:max-w-full">
      {imageData.map((image, index) => (
        <GalleryImage key={index} src={image.src} alt={image.alt} />
      ))}
    </section>
  );
}

export default ImageGallery;
