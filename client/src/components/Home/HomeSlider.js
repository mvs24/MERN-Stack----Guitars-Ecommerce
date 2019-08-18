import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import Button from "../utils/Button";

const HomeSlider = props => {
  const slides = [
    {
      img: "/images/featured/featured_home.jpg",
      lineOne: "Fender",
      lineTwo: "Custom shop",
      linkTitle: "Shop now",
      linkTo: "/shop"
    },
    {
      img: "/images/featured/featured_home_2.jpg",
      lineOne: "B-Stock",
      lineTwo: "Awesome discounts",
      linkTitle: "View offers",
      linkTo: "/shop"
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const generateSlides = () =>
    slides
      ? slides.map((slide, index) => (
          <div className="" key={index}>
            <div
              className="featured_image"
              style={{
                background: `url(${slide.img})`,
                height: `${window.innerHeight}px`
              }}
            >
              <div className="featured_action">
                <div className="tag title">{slide.lineOne}</div>
                <div className="tag title">{slide.lineTwo}</div>
                <div className="">
                  <Button
                    type="default"
                    title={slide.linkTitle}
                    addStyles={{
                      margin: "10px 0 0 0"
                    }}
                    linkTo={slide.linkTo}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      : null;
  return (
    <div className="featured_container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default HomeSlider;
