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
          <p>추천도 : 89%</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconS} />
          <span className="D-title">오로아</span>
          <span>농사동아리</span>
          <p>추천도 : 75%</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconT} />
          <span className="D-title">냥냥이</span>
          <span>동물동아리</span>
          <p>추천도 : 70%</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconSi} />
          <span className="D-title">스마트인재</span>
          <span>it동아리</span>
          <p>추천도 : 68%</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconFf} />
          <span className="D-title">인공지능사관학교</span>
          <span>개발동아리</span>
          <p>추천도 : 67%</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={iconFff} />
          <span className="D-title">무등산</span>
          <span>등산동아리</span>
          <p>추천도 : 67%</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slides;
