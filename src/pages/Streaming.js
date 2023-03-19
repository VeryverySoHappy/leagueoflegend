import React from "react";

import { Link } from "react-router-dom";
import VideoList from '../components/VideoList';
import StreamingLarge from "../components/StreamingLarge";

const list01 = [
  {
    src: require("../assets/img/video/streaming01.png"),
    icon: require("../assets/img/video/icon01.png"),
    name: "괴물쥐",
    title: "우르곳에 대한 20가지 진실..!",
  },
  {
    src: require("../assets/img/video/streaming02.png"),
    icon: require("../assets/img/video/icon02.png"),
    name: "테스터훈",
    title: "아크샨 솔바론 20초 컷",
  },
];
const list02 = [
  {
    src: require("../assets/img/video/streaming03.png"),
    icon: require("../assets/img/video/icon03.png"),
    name: "야옹해바바",
    title: "브론즈 탐방기",
  },
  {
    src: require("../assets/img/video/streaming04.png"),
    icon: require("../assets/img/video/icon04.png"),
    name: "무지개맛",
    title: "행복한 체력 요정 우르곳",
  },
]
const list03 = [
  {
    src: require("../assets/img/video/streaming05.png"),
    icon: require("../assets/img/video/icon03.png"),
    name: "야옹해바바",
    title: "정정당당한 정글러 티모",
  },
]
const videoList = [
  {
    src: require("../assets/img/video/videoList01.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #04",
    num: "조회수 9천회",
    title: "LoL 13.06 PBE 스킨 미리보기 #04",
  },
  {
    src: require("../assets/img/video/video_02.jpg"),
    alt: "진 장인만 보이는 궁각 #리그오브레전드",
    num: "조회수 81만회",
    title: "진 장인만 보이는 궁각 \n #리그오브레전드",
  },
  {
    src: require("../assets/img/video/video_03.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #03",
    num: "조회수 1.3만회",
    title: "LoL 13.06 PBE 스킨 미리보기 #03",
  },
  {
    src: require("../assets/img/video/video_04.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #02",
    num: "조회수 9천회",
    title: "LoL 13.06 PBE 스킨 미리보기 #02",
  },
  {
    src: require("../assets/img/video/video_05.jpg"),
    alt: "롤 역사상 가장 웃기다고 평가 받는 시네마틱 #lol #시네마틱",
    num: "조회수 524만회",
    title: "롤 역사상 가장 웃기다고 평가 받는 시네마틱 \n #lol #시네마틱",
  },
];
const videoList02 = [
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

function Streaming() {
  return (
    <div className="streaming mainWrap mb8">
      <div className="pt8 p16">
        <StreamingLarge list={list01}/>
      </div>
      <div className="mb24">
        <VideoList videoList={videoList} playBtn/>
      </div>
      <div className="mb24 p16">
        <StreamingLarge list={list02}/>
      </div>
      <div className="mb24">
        <VideoList videoList={videoList} playBtn/>
      </div>
      <div className="section p16 borderNone mb0">
        <StreamingLarge list={list03}/>
      </div>
    </div>
  );
}

export default Streaming;
