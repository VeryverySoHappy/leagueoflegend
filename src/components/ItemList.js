import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

function ItemList(props) {
  const {itemList} = props;

  return (
    <Swiper
      className="itemList"
      slidesPerView='auto'
      spaceBetween={16}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false
      }}
      slideToClickedSlide={true}
    >
      {itemList.map((itemLists, i) => {
          return (
          <SwiperSlide key={i} className="item">
            <div className="imgWrap"><img src={itemLists.src} alt={itemLists.alt} /></div>
            <div>
              <div>{itemList.subTitle}</div>
              <div className="bold name">{itemLists.name}</div>
            </div>
            <p>{itemLists.explain}</p>
            {itemLists.discountPrice ? (
              <div className="flex jcBtw">
                <div>
                  <del>{itemLists.discountPrice} RP</del>
                  <span>{itemLists.discountRate} %</span>
                </div>
                <div className="price bold">{itemLists.price}</div>
              </div>
            ):(
              <div className="price bold textEnd">{itemLists.price}</div>
            )} 
          </SwiperSlide>
          )
      })}
    </Swiper>
  );
}

export default ItemList;
