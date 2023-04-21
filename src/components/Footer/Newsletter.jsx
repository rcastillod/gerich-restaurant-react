import React from "react";

import "./Newsletter.css";

// Components
import SubHeading from "../SubHeading/SubHeading";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h3 className="headtext__cormorant">Subscribe To Our Newsletter</h3>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="Enter your email address" />
      <button className="button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
