/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Carousel from 'better-react-carousel';

import './carouselBasic.scss';
import CardItem from '../../pure/card/CardItem';

const dots = ({ isActive }) => (
  <span
    className="carouselDots"
    style={{
      height: isActive ? '8px' : '5px',
      width: isActive ? '8px' : '5px',
      opacity: isActive ? '1' : '0.5',
    }}
  />
);

const responsive = [
  {
    breakpoint: 500,
    cols: 1,
    rows: 1,
    gap: 10,
    loop: true,
  },
  {
    breakpoint: 767,
    cols: 2,
    rows: 1,
    gap: 10,
    loop: true,
  },
  {
    breakpoint: 1200,
    cols: 3,
    rows: 1,
    gap: 10,
    loop: true,
  },
];

const CarouselBasic = () => {
  return (
    <Carousel
      dot={dots}
      cols={4}
      rows={1}
      gap={15}
      loop
      showDots
      responsiveLayout={responsive}
      // autoplay={5000}
      containerStyle={{
        maxWidth: '95vw',
        margin: '0 auto',
      }}
    >
      <Carousel.Item>
        <CardItem />
      </Carousel.Item>
      <Carousel.Item>
        <CardItem />
      </Carousel.Item>
      <Carousel.Item>
        <CardItem />
      </Carousel.Item>
      <Carousel.Item>
        <CardItem />
      </Carousel.Item>
      <Carousel.Item>
        <CardItem />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
);
};

export default CarouselBasic;
