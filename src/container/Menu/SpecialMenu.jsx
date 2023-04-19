import React from "react";

// Components
import { SubHeading, MenuItem } from "../../components";
// Assets
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div id="menu" className="section__padding-block">
    <div className="container">
      <div className="app__specialMenu flex__center">
        <div className="app__specialMenu-title">
          <SubHeading title="Menu that fits you palatte" />
          <h3 className="headtext__cormorant">Today’s Special</h3>
        </div>

        <div className="app__specialMenu-menu">
          <div className="app__specialMenu-menu_wine flex__center">
            <p className="app__specialMenu-menu_heading">Wine & Beer</p>
            <div className="app__specialMenu-menu_items">
              {data.wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>
          <div className="app__specialMenu-menu_img">
            <img src={images.menu} alt="menu img" />
          </div>
          <div className="app__specialMenu-menu_cocktails flex__center">
            <p className="app__specialMenu-menu_heading">Cocktails</p>
            <div className="app__specialMenu-menu_items">
              {data.cocktails.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBlockStart: "15px" }}>
          <a href="#" className="button">
            View More
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
