import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

interface Image {
  id: string;
  src: string;
  alt?: string;
}

const images: Image[] = [
  { id: "1", src: "/img/1.avif", alt: "Photo 1" },
  { id: "2", src: "/img/3.avif", alt: "Photo 2" },
  { id: "3", src: "/img/4.avif", alt: "Photo 3" },
  { id: "4", src: "/img/9.avif", alt: "Photo 4" },
  { id: "5", src: "/img/10.avif", alt: "Photo 5" },
  { id: "6", src: "/img/12.avif", alt: "Photo 6" },
  { id: "7", src: "/img/13.avif", alt: "Photo 7" },
  { id: "8", src: "/img/14.avif", alt: "Photo 8" },
  { id: "9", src: "/img/15.avif", alt: "Photo 9" },
  { id: "10", src: "/img/17.avif", alt: "Photo 10" },
  { id: "11", src: "/img/18.avif", alt: "Photo 11" },
  { id: "12", src: "/img/19.avif", alt: "Photo 12" },
  { id: "13", src: "/img/25.avif", alt: "Photo 13" },
  { id: "14", src: "/img/26.avif", alt: "Photo 14" },
  { id: "15", src: "/img/28.avif", alt: "Photo 15" },
  { id: "16", src: "/img/29.avif", alt: "Photo 16" },
  { id: "17", src: "/img/31.avif", alt: "Photo 17" },
  { id: "18", src: "/img/32.avif", alt: "Photo 18" },
  { id: "19", src: "/img/33.avif", alt: "Photo 19" },
  { id: "20", src: "/img/36.avif", alt: "Photo 20" },
  { id: "21", src: "/img/37.avif", alt: "Photo 21" },
  { id: "22", src: "/img/38.avif", alt: "Photo 22" },
  { id: "23", src: "/img/42.avif", alt: "Photo 23" },
  { id: "24", src: "/img/45.avif", alt: "Photo 24" },
  { id: "25", src: "/img/46.jpg", alt: "Photo 25" },
  { id: "26", src: "/img/47.jpg", alt: "Photo 26" },
  { id: "27", src: "/img/48.jpg", alt: "Photo 27" },

];

const Images: React.FC = () => {
  return (
    <ImageList
      variant="masonry"
      cols={4}
      gap={12}
      sx={{
        px: 4,
        pt: 7,
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            style={{ borderRadius: 8, width: "100%", display: "block" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Images;
