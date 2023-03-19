import React from "react";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
function StreamingLarge(props) {
  const { list } = props;
  return (
  <div className="section borderNone mb0 pb0">
    {list.map((list, i) => {
      return (
        <Link
          to="/community"
          className="streaming positionRe mb24 pb36 radius5"
          key={i}
        >
          <img src={list.src} alt={list.title} />
          <div className="textWrap ptb16 p10">
            <div className="textEnd bold colorW30 letterSpacing">LIVE</div>
            <div className="flex jcBtw aiEnd">
              <div className="flex positionAb lb10 aiEnd">
                <img src={list.icon} alt={list.name} className="icon mr10" />
                <div>
                  <div className="font12 colorW50">{list.name}</div>
                  <div className="font18 bold">{list.title}</div>
                </div>
              </div>
              <ShareIcon className="colorW30 positionAb rb16" />
            </div>
          </div>
        </Link>
      );
    })}
  </div>
  )
}

export default StreamingLarge;
