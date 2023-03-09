import React, { useState } from "react";
import { Link } from "react-router-dom";
import Score from "../../components/Score";
import Pay from "../../components/Pay";
import myPageIcon from "../../assets/img/item/item_01.jpg";
import Accordion from "../../components/Accordion";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import ChampionList from "../../components/ChampionList";

const pay = {
  src: require("../../assets/img/item/item_01.jpg"),
  id: "아그걸님이왜",
  rp: 60,
  be: "2.835",
};

const champion = [
  {
    src: require("../../assets/img/myPage/champion01.png"),
    name: "이즈리얼",
    percent: 50,
    win: 1,
    lose: 1,
    score: "8.22:1",
  },
  {
    src: require("../../assets/img/myPage/champion02.png"),
    name: "트리스타나",
    percent: 50,
    win: 1,
    lose: 1,
    score: "3.08",
  },
  {
    src: require("../../assets/img/myPage/champion03.png"),
    name: "징크스",
    percent: 100,
    win: 1,
    lose: 0,
    score: "5.00",
  },
];

const accordion = {
  total: 20,
  win: 11,
  lose: 7,
  k: 6.1,
  d: 4.9,
  a: 21.9,
  ratio: "5.47:1",
  killParticipantion: 66,
};
function Index() {
  return (
    <div className="mainWrap">
      <div className="section borderNone pt8 p16 mb0">
        <Pay list={pay} />
      </div>
      <div className="section borderNone p16 pb0 mb0">
        <Accordion list={accordion} />
      </div>
      <div className="section p16">
        <div className="flex aiEnd mb24">
          <h2 className="font22 pl0 pr8">플레이한 챔피언</h2>
          <span className="colorW50">(최근 20게임)</span>
        </div>
        <ChampionList list={champion} />
      </div>
      <div className="section p16 borderNone">
        <ul className="myPageList">
          <li>
            <Link to="/" className="w100 flex jcBtw">
              회원정보관리
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="w100 flex jcBtw">
              공지사항
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="w100 flex jcBtw">
              약관 및 정책
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="w100 flex jcBtw">
              비전 정보
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </li>
          <li>
            <Link to="/" className="w100 flex jcBtw">
              환경설정
              <KeyboardArrowRightRoundedIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Index;
