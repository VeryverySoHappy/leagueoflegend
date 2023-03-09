import React from "react";
import ShareIcon from "@mui/icons-material/Share";

const list = [
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
  {
    src: require("../assets/img/video/streaming03.png"),
    icon: require("../assets/img/video/icon03.png"),
    name: "야옹해바바",
    title: "브론즈 무시했다가",
  },
  {
    src: require("../assets/img/video/streaming04.png"),
    icon: require("../assets/img/video/icon04.png"),
    name: "무지개맛",
    title: "행복한 체력 요정 우르프",
  },
  {
    src: require("../assets/img/video/streaming05.png"),
    icon: require("../assets/img/video/icon03.png"),
    name: "야옹해바바",
    title: "정정당당한 정글러 티모",
  },
];
function Streaming() {
  return (
    <div className="mainWrap mb8 p16">
      {list.map((list, i) => {
        return (
          <div className="streaming positionRe radius5">
            <img src={list.src} alt={list.title} />
            <div className="textWrap">
              <div>LIVE</div>
              <div className="flex jcBtw">
                <div>
                  <img src={list.icon} alt="" />
                  <div>
                    <div>{list.name}</div>
                    <div>{list.title}</div>
                  </div>
                </div>
                <ShareIcon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Streaming;
