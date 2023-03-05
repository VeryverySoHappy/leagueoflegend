import React from "react";
import google from "../assets/common/google.png";
import apple from "../assets/common/apple.png";
import { Link } from "react-router-dom";

function Visual() {
  return (
    <div className="fullWrap first bgBlack">
      <div className="wrap colorWhite flex jcStart">
        <div>
          <h2 className="title mb100">
            <p className="subTitle">크리에이터의 NFT를 주식처럼 자유롭게</p>
            세상에서 가장 활발한 <br /> NFT 플랫폼
          </h2>
          <Link to="/" className="appIcon mr16">
            <img src={google} alt="" />
          </Link>
          <Link to="/" className="appIcon">
            <img src={apple} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Visual;
