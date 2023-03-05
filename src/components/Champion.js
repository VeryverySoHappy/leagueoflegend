import React from "react";

const champion = {
  src: require("../assets/img/banner/champion.jpg"),
  title: "럭스",
  discountPrice: "790",
  discountRate: "20",
  price: "316",
};

function Champion() {
  return (
    <div className="championWrap m16">
      <img src={champion.src} alt={champion.title} className="mb24" />
      <div className="bannerTitle flex jcBtw aiEnd">
        <div>
          <p className="colorW50 font12">Champion</p>
          <h2 className="title pl0">{champion.title}</h2>
        </div>
        <div className="bold">
          <span className="colorW50">{champion.discountPrice} PR</span>
          <span className="colorRed">{champion.discountRate} %</span>
          <span className="font26">{champion.price}<span className="font12">RP</span></span>
        </div>
      </div>
    </div>
  );
}

export default Champion;
