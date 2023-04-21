import React from "react";

import "./Footer.css";

// Assets
import { images } from "../../constants";
// Components
import { Newsletter } from "../../components";
// Icons
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className="app__footer section__padding-block">
    <Newsletter />
    <div className="container">
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h5 class="app__footer-headtext">Contact Us</h5>
          <p className="p__opensans" style={{ marginBlockEnd: "1rem" }}>
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="p__opensans">
            <a href="#">+1 212-344-1230</a>
          </p>
          <p className="p__opensans">
            <a href="#">+1 212-344-1230</a>
          </p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="gericht" />
          <p className="p__opensans" style={{ color: "#fff" }}>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img
            src={images.spoon}
            alt=""
            className="spoon__img"
            style={{ marginBlockStart: 15, display: "inline-block" }}
          />
          <div className="app__footer-links_social">
            <FiFacebook color="#fff" fontSize={24} />
            <FiTwitter color="#fff" fontSize={24} />
            <FiInstagram color="#fff" fontSize={24} />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h5 class="app__footer-headtext">Working Ours</h5>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans" style={{ marginBlockEnd: "1rem" }}>
            08:00 am -12:00 am
          </p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
