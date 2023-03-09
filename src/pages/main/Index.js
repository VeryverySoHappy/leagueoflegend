import React, { useState } from 'react';
import Banner from "../../components/Banner";
import ItemList from '../../components/ItemList';
import VideoList from '../../components/VideoList';
import Champion from '../../components/Champion';
import PatchNotes from '../../components/PatchNotes';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import HomeModal from '../../components/Modal/HomeModal';

const bannerImgs = [
  {
    src: require("../../assets/img/banner/Banner_01.jpg"),
    title: "3월 PC방 혜택을 만나보세요",
  },
  {
    src: require("../../assets/img/banner/Banner_02.jpg"),
    title: "13.4 패치 상점 소식",
  },
  {
    src: require("../../assets/img/banner/Banner_03.jpg"),
    title: "게임플레이에 대한 단상: 13.4",
  },
  {
    src: require("../../assets/img/banner/Banner_04.jpg"),
    title: `2023 LoL 설맞이 이벤트`,
  },
  {
    src: require("../../assets/img/banner/Banner_05.jpg"),
    title: "2023년 게임 모드 현황",
  }
]
const itemList = [
  {
    src: require("../../assets/img/item/item_01.jpg"),
    alt: "신화 창조자 이렐리아",
    name: "신화 창조자 이렐리아",
    explain: "2023 설맞이 축제",
    discountPrice: "1,820",
    discountRate: "20",
    price: "1,456"
  },
  {
    src: require("../../assets/img/item/item_02.jpg"),
    alt: "신화 창조자 갈리오",
    name: "신화 창조자 갈리오",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
  {
    src: require("../../assets/img/item/item_03.jpg"),
    alt: "신화 창조자 가렌",
    name: "신화 창조자 가렌",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
  {
    src: require("../../assets/img/item/item_04.jpg"),
    alt: "신화 창조자 자이라",
    name: "신화 창조자 자이라",
    explain: "2023 설맞이 축제",
    discountPrice: "1,820",
    discountRate: "20",
    price: "1,456"
  },
  {
    src: require("../../assets/img/item/item_05.jpg"),
    alt: "신화 창조자 시비르",
    name: "신화 창조자 시비르",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
]
const itemList02 = [
  {
    src: require("../../assets/img/item/item_01.jpg"),
    alt: "신화 창조자 이렐리아",
    name: "신화 창조자 이렐리아",
    explain: "2023 설맞이 축제",
    discountPrice: "1,820",
    discountRate: "20",
    price: "1,456"
  },
  {
    src: require("../../assets/img/item/item_02.jpg"),
    alt: "신화 창조자 갈리오",
    name: "신화 창조자 갈리오",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
  {
    src: require("../../assets/img/item/item_03.jpg"),
    alt: "신화 창조자 가렌",
    name: "신화 창조자 가렌",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
  {
    src: require("../../assets/img/item/item_04.jpg"),
    alt: "신화 창조자 자이라",
    name: "신화 창조자 자이라",
    explain: "2023 설맞이 축제",
    discountPrice: "1,820",
    discountRate: "20",
    price: "1,456"
  },
  {
    src: require("../../assets/img/item/item_05.jpg"),
    alt: "신화 창조자 시비르",
    name: "신화 창조자 시비르",
    explain: "2023 설맞이 축제",
    discountPrice: "1,350",
    discountRate: "20",
    price: "1,080"
  },
]

function Index() {
  const [modal, setModal] = useState(false);
  const closeModal = (state) => {
    setModal(false);
  };
  return (
    <div className="mainWrap">
      <div className="section borderNone pb0">
        <Banner bannerImgs={bannerImgs}/>
      </div>
      <div className="section">
        <h2 className="title">2023 설맞이 축제를 만나보세요</h2>
        <p className="subTitle">설맞이 축제 스킨들이 할인 중이에요</p>
        <ItemList itemList={itemList}/>
      </div>
      <div className="section">
        <h2 className="title">2023 시즌</h2>
        <p className="subTitle">협곡을 덮은 안개와 그림자 너머에 새로운 시작</p>
        <VideoList/>
      </div>
      <div className="section">
        <div className="flex jcBtw">
          <h2 className="title">놓치지 마세요!</h2>
          <button className='flex moreBtn'>더보기<KeyboardArrowRightRoundedIcon/></button>
        </div>
        <p className="subTitle">지금 할인 중인 스킨 &#38; 챔피언</p>
        <Champion/>
        <ItemList itemList={itemList02}/>
      </div>
      <div className="section borderNone">
        <div className="flex jcBtw mb24">
          <h2 className="title">패치 노트</h2>
          <button className='flex colorW50 pr16'>더보기<KeyboardArrowRightRoundedIcon/></button>
        </div>
        <PatchNotes/>
      </div>
      {modal ? <HomeModal ></HomeModal> : null}
    </div>
  )
}

export default Index