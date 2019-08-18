import React from "react";
import Button from "../utils/Button";

const HomePromotions = props => {
  const promotion = {
    img: "/images/featured/featured_home_3.jpg",
    lineOne: "Up to 40% off",
    lineTwo: "In second hand guitars",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderPromotions = () =>
    promotion ? (
      <div
        style={{ background: `url(${promotion.img})` }}
        className="home_promotion_img"
      >
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag title">{promotion.lineTwo}</div>
        <div className="">
          <Button
            type="default"
            title={promotion.linkTitle}
            addStyles={{
              margin: "10px 0 0 0"
            }}
            linkTo={promotion.linkTo}
          />
        </div>
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotions()}</div>;
};

export default HomePromotions;
