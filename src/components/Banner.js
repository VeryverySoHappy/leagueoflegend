import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Banner(props) {
  const { bannerImgs } = props;
  return (
    <Swiper
      slidesPerView="auto"
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      loopAdditionalSlides={1}
      slideToClickedSlide={true}
      loop={true}
    >
      {bannerImgs.map((bannerImgs, i) => {
        return (
          <SwiperSlide key={i}>
            <div className="bannerWrap">
              <img src={bannerImgs.src} alt={bannerImgs.title} />
              <div className="bannerTitle">
                <h2 className="title bold pl0">{bannerImgs.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Banner;
