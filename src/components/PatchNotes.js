import React from "react";
import { Link } from "react-router-dom";

const patch = [
  {
    title: "[#1] 13.4 패치노트 (수정)",
    date: "1",
    writer: "Riot Riru",
  },
  {
    title: "[#4] 13.3 패치노트 (수정)",
    date: "2",
    writer: "RiotAether",
  },
  {
    title: "[#2] 13.1B 패치노트 (수정)",
    date: "2",
    writer: "Riot Riru",
  },
  {
    title: "[#3] 13.1 패치노트 (수정)",
    date: "3",
    writer: "ahrisoo, RiotAether",
  },
  {
    title: "[#2] 12.23 패치노트 (수정)",
    date: "4",
    writer: "RiotAether",
  },
];

function PatchNotes() {
  return (
    <ul className="patch p16">
      {patch.map((patch, i) => {
        return (
          <li key={i}>
            <Link to="/" className="flex jcBtw">
              <h3 className="font16">{patch.title}</h3>
              <div className="textEnd font10">
                <p className="colorW50">
                  <span className="colorRed">{patch.date}</span>주 전
                </p>
                <p className="letterSpacing">{patch.writer}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PatchNotes;
