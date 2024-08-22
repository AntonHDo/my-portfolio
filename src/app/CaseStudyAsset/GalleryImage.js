import React from "react";

function GalleryImage({ src, alt, isFigmaEmbed }) {
  return (
    <div className="w-full max-w-[400px] max-md:max-w-full">
      {isFigmaEmbed ? (
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          width="800"
          height="450"
          src={src}
          allowFullScreen
          title={alt}
        ></iframe>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover border"
        />
      )}
    </div>
  );
}

export default GalleryImage;
