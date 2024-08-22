import React from "react";
import GalleryImage from "./GalleryImage";

const imageData = [
  {
    src: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FoiWtSMmZLMs84nFbIgSgqb%2FWireFrame-for-Petsite%3Fpage-id%3D265%253A1455%26node-id%3D265-1546%26viewport%3D-113%252C347%252C0.13%26t%3DjnL2RzP1eTRyCoJh-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D265%253A1546",
    alt: "Figma Prototype",
    isFigmaEmbed: true,
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b71afa52f6f97f11cd3a29f63253828dd5433f3c4cfb6e1d4e316f9bb0b0724?placeholderIfAbsent=true&apiKey=04b03a6f932f43d5ac0f299cdc8c8e61",
    alt: "Gallery image 1",
    isFigmaEmbed: false,
  },
];

function ImageGallery() {
  return (
    <section className="flex flex-wrap gap-2.5 justify-center py-10 my-10 w-full max-md:max-w-full">
      {imageData.map((image, index) => (
        <GalleryImage
          key={index}
          src={image.src}
          alt={image.alt}
          isFigmaEmbed={image.isFigmaEmbed}
        />
      ))}
    </section>
  );
}

export default ImageGallery;
