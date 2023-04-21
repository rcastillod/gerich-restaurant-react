import React from "react";

// Assets
import images from "../../constants/images";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant" style={{ color: "#fff" }}>
      {title}
    </p>
    <img
      src={images.spoon}
      alt="spoon"
      className="spoon__img"
      style={{ display: "inline-block" }}
    />
  </div>
);

export default SubHeading;
