import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
 Navigation, Pagination, Autoplay,
} from 'swiper';

import './slider.scss';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = ({ data }) => {
      return (
        <div className="slider">
          <Swiper
            navigation
            className="slider-container"
            modules={[Navigation, Pagination, Autoplay]}
            effect="flip"
            spaceBetween={0}// space between slides
            centeredSlides
            pagination={{ clickable: true }} // pagination
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >

            {
              data.map((el) => {
                return (
                  <SwiperSlide key={`slide-${el.id}`}>
                    <img src={el.url} alt="imagen" />
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      );
};

export default Slider;
