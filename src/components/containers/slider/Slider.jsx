import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
 Navigation, Pagination, Autoplay,
} from 'swiper';

import './slider.scss';
import { CardMedia } from '@mui/material';

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
                    <div className="slide--image__container">
                      <CardMedia
                        sx={{ height: 400 }}
                        image={el.url}
                        title={el.alt}
                      />
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      );
};

export default Slider;
