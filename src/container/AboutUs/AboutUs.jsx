import React from "react";

import "./AboutUs.css";

// Assets
import { images } from "../../constants";

const AboutUs = () => (
  <div
    id="about"
    className="app__aboutus app__bg flex__center section__padding-block"
  >
    <div className="container">
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="G letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h3 className="headtext__cormorant">About Us</h3>
          <img className="spoon_img" src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <a href="#" className="button">
            Know More
          </a>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history">
          <h3 className="headtext__cormorant">Our History</h3>
          <img className="spoon_img" src={images.spoon} alt="spoon" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <a href="#" className="button">
            Know More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
