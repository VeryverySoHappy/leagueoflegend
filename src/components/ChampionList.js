import React from "react";

function ChampionList(props) {
  const { list } = props;

  return (
    <>
      <ul className="flex jcBtw">
        {list.map((list, i) => {
          return (
            <li key={i} className="championList">
              <img
                src={list.src}
                alt={list.name}
                className="radius50 mb16"
              />
              <h3 className="mb4">{list.name}</h3>
              <progress
                value={list.percent}
                max="100"
                className={list.percent > 50 ? "red" : "blue"}
              ></progress>
              <div className="flex jcBtw font12">
                <div className="flex">
                  <div>{list.percent}%</div>
                  <div>
                    {list.win}승{list.lose}패
                  </div>
                </div>
                <div>{list.score}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ChampionList;
