import React from "react";

function Pay(props) {
  const { list } = props;

  return (
    <div className="mypageCont flex jcBtw">
      <img src={list.src} alt="아이콘" />
      <div className="colorW50 textEnd">
        <div className="colorW50 mb8">
          <span className="font22 bold colorW">{list.id}</span> 님
        </div>
        <span className="colorY bold">{list.rp}</span>{" "}
        <span className="font12">RP</span>{" "}
        <span className="colorBlue bold">{list.be}</span>{" "}
        <span className="font12">BE</span>
      </div>
    </div>
  );
}

export default Pay;
