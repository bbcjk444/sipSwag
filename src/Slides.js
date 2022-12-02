import React from "react";
import "./Slides.css";

import iconF from "./SlideImage/mask-group.png";
import iconS from "./SlideImage/mask-group1.png";
import iconT from "./SlideImage/mask-group2.png";
import iconFff from "./SlideImage/동아리1.png";
import iconFf from "./SlideImage/동아리5.png";
import iconSi from "./SlideImage/동아리3.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slides.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Slides = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={iconF} />
          <span className="D-title">당나귀</span>
          <span>봉사동아리</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconS} />
          <span className="D-title">당나귀</span>
          <span>봉사동아리</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconT} />
          <span className="D-title">당나귀</span>
          <span>봉사동아리</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconSi} />
          <span className="D-title">인공지능사관학교</span>
          <span>it동아리</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconFf} />
          <span className="D-title">인공지능사관학교</span>
          <span>개발동아리</span>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconFff} />
          <span className="D-title">인공지능사관학교</span>
          <span>it동아리</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
