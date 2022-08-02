import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Slider.module.css";

const items = [
  {
    id: 1,
    src: "https://cdn.wallpapersafari.com/14/33/DftePO.jpg",
  },
  {
    id: 2,
    src: "https://miro.medium.com/max/768/0*6AdA5DWlotC2NFiU.jpg",
  },
  {
    id: 3,
    src: "https://content.propertyroom.com/listings/sellers/seller888888940/images/origimgs/14k-persian-turquoise-encrusted-flower-link-yellow-gold-bracelet-775-888888940_28220171739445863920.jpg",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={classes["carousel"]}
    >
      {items.map((item) => {
        return (
          <Carousel.Item interval={3000} key={item.id}>
            <img
              className={classes["carousel__img"]}
              src={item.src}
              alt="slide"
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
