import React from "react";

// Assets
import { images } from "../../constants";
// Components
import { SubHeading } from "../../components";

const FindUs = () => (
  <div id="contact" className="app__bg section__padding-block">
    <div className="container">
      <div className="app__wrapper">
        <div className="app__wrapper-info">
          <SubHeading title="Contact" />
          <h3 className="headtext__cormorant">Find Us</h3>
          <div className="app__wrapper-content">
            <p className="app__header-text p__opensans">
              Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
            </p>
            <p
              className="p__cormorant"
              style={{ color: "#DCCA87", margin: "2rem0" }}
            >
              Opening Hours
            </p>
            <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
            <a
              href="#"
              className="button"
              style={{ display: "inline-block", marginBlockStart: "3rem" }}
            >
              Visit Us
            </a>
          </div>
        </div>
        <div className="app__wrapper-img">
          <img src={images.findus} alt="findus img" />
        </div>
      </div>
    </div>
  </div>
);

export default FindUs;
