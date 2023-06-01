import React, { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  var [aI, setaI] = useState(0);
  const [autoP, setautoP] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      autoP &&
      setTimeout(() => {
        if (aI === items.length - 1) updateIndex(0);
        else updateIndex(aI + 1);
      }, 3000);
  });

  const items = [
    {
      title: "appre",
      descrip: "Appreciation for achieving a particular task",
      icons: require("./Media/undraw_appreciation_y90s.svg"),
    },
    {
      title: "exer",
      descrip: "Do exercise everyday",
      icons: require("./Media/undraw_healthy_habit_kwe6.svg"),
    },
    {
      title: "photo",
      descrip: "Photography is my passion",
      icons: require("./Media/undraw_videographer_d5rn.svg"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setaI(newIndex);
  };
  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setautoP(false);
      }}
      onMouseLeave={() => {
        setautoP(true);
      }}
    >
      <div className="inner" style={{ transform: `translate(-${aI * 100}%)` }}>
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            updateIndex(aI - 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>

        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === aI
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            updateIndex(aI + 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
