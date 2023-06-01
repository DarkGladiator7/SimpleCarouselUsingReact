import React from "react";

const CarouselItem = ({ item, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <img className="carousel-img" src={item.icons.default} />
      <div className="carousel-item-text">{item.descrip}</div>
    </div>
  );
};

export default CarouselItem;
