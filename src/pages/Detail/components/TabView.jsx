import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
function TabView(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval={null}
    >
      {props.images.map(item => (
        <Carousel.Item key={item}>
          <img
            src={item}
            alt="First slide"
            className="d-block"
            style={{width:'100%', height: 700, alignSelf:'center' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default TabView;
