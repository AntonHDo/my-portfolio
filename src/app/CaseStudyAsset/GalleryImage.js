import React from "react";

function GalleryImage({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain flex-1 shrink my-auto w-full aspect-[4.07] basis-0 min-w-[240px] max-md:max-w-full"
    />
  );
}

export default GalleryImage;
