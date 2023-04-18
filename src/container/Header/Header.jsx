import React from "react";

import "./Header.css";

// Swiper
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data
import { data } from "../../constants";
// Components
import { SubHeading } from "../../components";
// Icons
import { TfiAngleLeft } from "react-icons/tfi";
import { TfiAngleRight } from "react-icons/tfi";

const Header = () => (
  <header id="home" className="app__header section__padding-block">
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        effect="fade"
        loop
        speed={1000}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.slider.map((slide, index) => (
          <SwiperSlide key={index} className="app__wrapper">
            <div className="app__wrapper-info">
              <SubHeading title={slide.subheading} />
              <h1 className="app__header-title">{slide.title}</h1>
              <p className="app__header-text p__opensans">{slide.text}</p>
              <a href={slide.linkUrl} className="button">
                {slide.linkText}
              </a>
            </div>
            <div className="app__wrapper-img">
              <img src={slide.image} alt="header img" />
            </div>
          </SwiperSlide>
        ))}
        <div className="app__slider-navigation">
          <div className="swiper-button-prev">
            <TfiAngleLeft color="#fff" fontSize={16} />
          </div>
          <div className="swiper-button-next">
            <TfiAngleRight color="#fff" fontSize={16} />
          </div>
        </div>
      </Swiper>
    </div>
  </header>
);

export default Header;
