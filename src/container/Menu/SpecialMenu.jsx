import React from "react";

// Components
import { SubHeading, MenuItem } from "../../components";
// Assets
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div id="menu" className="app__specialMenu section__padding-block">
    <div className="container">
      <div className="flex__center">
        <div className="app__specialMenu-title">
          <SubHeading title="Menu that fits you palatte" />
          <h3 className="headtext__cormorant">Today’s Special</h3>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
