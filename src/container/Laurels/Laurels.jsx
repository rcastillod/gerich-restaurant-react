import React from "react";

import "./Laurels.css";

// Assets
import { images, data } from "../../constants";
// Components
import { SubHeading } from "../../components";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div id="awards" className="app__bg section__padding-block">
    <div className="container">
      <div className="app__wrapper">
        <div className="app__wrapper-info">
          <SubHeading title="Awards & Recognitions" />
          <h3 className="headtext__cormorant">Our Laurels</h3>

          <div className="app__laurels_awards">
            {data.awards.map((award, index) => (
              <AwardCard award={award} key={index} />
            ))}
          </div>
        </div>
        <div className="app__wrapper-img">
          <img src={images.laurels} alt="laurels" />
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
