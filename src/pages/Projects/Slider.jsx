import { PropTypes } from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ sliderImg }) => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderImg?.map((image) => (
          <SwiperSlide key={image}>
            <div
              className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden
           "
            >
              <img src={image} className="w-full h-full" alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  sliderImg: PropTypes.array,
};

export default Slider;
