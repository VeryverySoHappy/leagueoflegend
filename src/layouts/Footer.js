import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer>
      <div className="wrap flex jcBtw font10">
        <div className="footerLeft">
          <div className="footerInfo mb8">
            <span>주식회사 오메타</span>
            <span>대표이사 박희목</span>
            <span>사업자등록번호 206-86-89330</span>
            <span>통신판매신고 제2019-서울송파-1315</span>
            <span className="none">서울특별시 송파구 삼전로 7길 15, 3층</span>
            <span>고객센터 1588-8079</span>
            <span>이메일 cs@5meta.co.kr</span>
          </div>
          <div className="footerInfo font12 mb8 mobileNone">
            <span className="bold mr8 none">고객센터 운영시간</span>
            <span>평일 09:30 - 18:30</span>
            <span>점심시간 12:30 - 13:00</span>
            <span>주말 및 공휴일 휴무</span>
          </div>
          <p className="color999 mb8 mobileNone">
            (주)오메타는 인플루언서 전문 NFT카드 거래 중개자로서 NFT카드의 구매
            또는 판매 거래에 관한 의무와 책임은 판매자에게 있습니다. <br />
            인플루언서의 NFT카드 저작권은 NFT카드 발행 인플루언서에게 있으며
            저작권법과 콘텐츠 산업 진흥법 등 관련 법령에 의하여 보호받을 수
            있습니다.
          </p>
          <p className="copyRight color999">
            Copyright @ 2022 5meta Inc. All rights reserved
          </p>
        </div>
        <div className="footerRight flex column jcBtw aiEnd">
          <div className="flex footerInfo">
            <Link to="/">서비스 이용약관</Link>
            <Link to="/">개인정보처리방침</Link>
            <Link to="/">회사소개</Link>
            <Link to="/">앱다운로드</Link>
          </div>
          <div className="flex footerInfo">
            <Link to="/">
              <InstagramIcon
                style={{ fontSize: "16px" }}
                className="color999"
              />
            </Link>
            <Link to="/">
              <FacebookIcon style={{ fontSize: "16px" }} className="color999" />
            </Link>
            <Link to="/">
              <YouTubeIcon style={{ fontSize: "18px" }} className="color999" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
