import React, { useRef } from "react";

import "./Gallery.css";

// Assets
import { images } from "../../constants";
// Icons
import { BsInstagram } from "react-icons/bs";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
// Components
import { SubHeading } from "../../components";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const imagesGallery = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h3 className="headtext__cormorant">Photo Gallery</h3>
        <p className="p__opensans" style={{ marginBlock: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <a href="#" className="button">
          View More
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {imagesGallery.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery img" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_navigation">
          <div className="gallery__arrow-icon" onClick={() => scroll("left")}>
            <TfiAngleLeft />
          </div>
          <div className="gallery__arrow-icon" onClick={() => scroll("right")}>
            <TfiAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
