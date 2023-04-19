import React from "react";

// Assets
import { images } from "../../constants";
// Components
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div id="chef" className="app__bg section__padding-block">
    <div className="container">
      <div className="app__wrapper">
        <div className="app__wrapper-img app__wrapper-img_reverse">
          <img src={images.chef} alt="chef" />
        </div>
        <div className="app__wrapper-info">
          <SubHeading title="Chef’s Word" />
          <h3 className="headtext__cormorant">What we believe in</h3>
          <div className="app__chef-content">
            <div className="app__chef-content_quote">
              <img src={images.quoteSvg} alt="quote" />
              <p className="p__opensans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>
            <p className="p__opensans">
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>
          <div className="app__chef-sign">
            <p className="">Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <img src={images.sign} alt="sign" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
