import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

function VideoList(props) {
  const { videoList, playBtn } = props;

  return (
    <Swiper
      className="videoList"
      slidesPerView="auto"
      spaceBetween={16}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slideToClickedSlide={true}
    >
      {videoList.map((videoLists, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={videoLists.src} alt={videoLists.alt} />
            <div className="playText flex">
              {!playBtn ? (
                <span className="playBtn">
                  <PlayArrowRoundedIcon />
                </span>
              ) : null}
              <div>
                <div className="date colorW50 font12">
                  {videoLists.date || videoLists.num}
                </div>
                <div className="title font18">{videoLists.title}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default VideoList;
