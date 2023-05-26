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
const videoList01 = [
  {
    src: require("../assets/img/video/videoList01.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #04",
    num: "조회수 9천회",
    title: "LoL 13.06 PBE 스킨\n미리보기 #04",
  },
  {
    src: require("../assets/img/video/videoList02.jpg"),
    alt: "진 장인만 보이는 궁각 #리그오브레전드",
    num: "조회수 81만회",
    title: "진 장인만 보이는 궁각\n#리그오브레전드",
  },
  {
    src: require("../assets/img/video/videoList03.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #03",
    num: "조회수 1.3만회",
    title: "LoL 13.06 PBE 스킨\n미리보기 #03",
  },
  {
    src: require("../assets/img/video/videoList04.jpg"),
    alt: "LoL 13.06 PBE 스킨 미리보기 #02",
    num: "조회수 9천회",
    title: "LoL 13.06 PBE 스킨\n미리보기 #02",
  },
  {
    src: require("../assets/img/video/videoList05.jpg"),
    alt: "롤 역사상 가장 웃기다고 평가 받는 시네마틱 #lol #시네마틱",
    num: "조회수 524만회",
    title: "롤 역사상 가장 웃기다고\n평가 받는 시네마틱\n#lol #시네마틱",
  },
];
const videoList02 = [
  {
    src: require("../assets/img/video/videoList06.jpg"),
    alt: "소환사의 협곡에 놀러온 오리아나",
    num: "조회수 23만회",
    title: `소환사의 협곡에 놀러온\n오리아나`,
  },
  {
    src: require("../assets/img/video/videoList07.jpg"),
    alt: "카르마로 캐리하는 방법\n#13.06카르마 스킨",
    num: "조회수 5천회",
    title: "카르마로 캐리하는 방법\n#13.06카르마 스킨",
  },
  {
    src: require("../assets/img/video/videoList08.jpg"),
    alt: "험난한 정글을 슬기롭게\n헤쳐나가는 방법",
    num: "조회수 23만회",
    title: "험난한 정글을 슬기롭게\n헤쳐나가는 방법",
  },
  {
    src: require("../assets/img/video/videoList09.jpg"),
    alt: "이 맛에 정화들지\n#리그오브레전드 #lol",
    num: "조회수 11만회",
    title: "이 맛에 정화들지\n#리그오브레전드 #lol",
  },
  {
    src: require("../assets/img/video/videoList10.jpg"),
    alt: "에어본도\n풀어버리는 스킬들",
    num: "조회수 34만회",
    title: "에어본도\n풀어버리는 스킬들",
  },
];


function Streaming() {
  return (
    <div className="streaming mainWrap mb8">
      <div className="pt8 p16">
        <StreamingLarge list={list01}/>
      </div>
      <div className="mb24">
        <VideoList videoList={videoList01} playBtn/>
      </div>
      <div className="mb24 p16">
        <StreamingLarge list={list02}/>
      </div>
      <div className="mb24">
        <VideoList videoList={videoList02} playBtn/>
      </div>
      <div className="section p16 borderNone mb0">
        <StreamingLarge list={list03}/>
      </div>
    </div>
  );
}

export default Streaming;
