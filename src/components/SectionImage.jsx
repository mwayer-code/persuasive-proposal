import React from "react";

const SectionImage = ({ 
  src, 
  alt, 
  caption, 
  position = "right",
  size = "medium" 
}) => {
  return (
    <figure className={`section-image section-image-${position} section-image-${size}`}>
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default SectionImage;