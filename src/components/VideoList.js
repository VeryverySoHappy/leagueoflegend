import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

const videoList = [
  {
    src: require("../assets/img/video/video_01.jpg"),
    alt: "영겁의 귀로",
    date: "March 10, 2023",
    title: "영겁의 귀로",
  },
  {
    src: require("../assets/img/video/video_02.jpg"),
    alt: "챔피언, 세계관, 모드 등에 관하여",
    date: "March 03, 2023",
    title: "챔피언, 세계관에 관하여",
  },
  {
    src: require("../assets/img/video/video_03.jpg"),
    alt: "LoL 개발 현황",
    date: "Feb 20, 2023",
    title: "LoL 개발 현황",
  },
  {
    src: require("../assets/img/video/video_04.jpg"),
    alt: "2023 설맞이 축제 시네마틱",
    date: "Feb 05, 2023",
    title: "2023 설맞이 축제 시네마틱",
  },
  {
    src: require("../assets/img/video/video_05.jpg"),
    alt: "나만의 상점을 만나보세요",
    date: "Jan 28, 2023",
    title: "나만의 상점을 만나보세요",
  },
];

function VideoList() {
  return (
    <Swiper
    className="videoList"
    slidesPerView='auto'
    spaceBetween={16}
    autoplay={{
      delay: 1000,
      disableOnInteraction: false
    }}
    loopAdditionalSlides={1}
    slideToClickedSlide={true}
    loop={true}
    >
      {videoList.map((videoLists, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={videoLists.src} alt={videoLists.alt} />
            <div className="playText flex">
              <span className="playBtn"><PlayArrowRoundedIcon/></span>
              <div>
                <div className="date colorW50 font10">{videoLists.date}</div>
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
