import React, { useState } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Score from "./Score";

function Accordion(props) {
  const { list } = props;
  const [score, setScore] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setScore((e) => !e);
        }}
        className="w100 flex jcBtw"
      >
        <div>
          {list.total}전 {list.win}승 {list.lose}패
        </div>
        {score ? (
          <KeyboardArrowUpRoundedIcon />
        ) : (
          <KeyboardArrowDownRoundedIcon />
        )}
      </div>{" "}
      {score && (
        <div className="flex jcBtw scoreWrap colorW50 mb36">
          <Score />
          <div className="textEnd">
            <div className="mb8">
              {list.k} / {list.d} / {list.a}
            </div>
            <div className="font30 colorW bold">{list.ratio}</div>
            <div className="font18 colorRed bold">
              킬관여{list.killParticipantion}%
            </div>
          </div>
        </div>
      )}
      {/* {score && <Score/>} */}
    </>
  );
}

export default Accordion;
