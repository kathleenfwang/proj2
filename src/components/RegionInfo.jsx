import React from "react";
import { Link } from "react-router-dom";

export default function regionInfo(props) {
  const { name } = props.match.params;
  const { info } = props.location.state;
  //https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Lux.png
  let url = "https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/";
  let champs = info[1].map((champ) => {
    if (!champ.includes("http")) {
      let imgUrl = `${url}${champ}.png`;
      return (
        <li className="champRegionListItem">
          <Link
            style={{ textDecoration: "none", fontSize: 15 }}
            to={`/champions/${champ}`}
          >
            <img className="champRegionImgs" src={imgUrl} />
            <h2 id="champRegionName"> {champ} </h2>
          </Link>
        </li>
      );
    }
  });
  let regionUrl = info[1][info[1].length - 1];
  return (
    <div className="regionInfo">
      <div className="regionContainer">
        <img className="regionImg" src={regionUrl}></img>
        <h1 className="centered"> {name} </h1>
      </div>
      <div>
        <div className="regionList">
          <div className="regionLore">
            <p style={{ padding: 20 }}>
              <p id="letterLore"> {info[2][0]} </p>
              {info[2].slice(1)}
            </p>
          </div>
          <h1 id="regionChampions">Champions</h1>
          <ul className="regionChampList">{champs}</ul>
        </div>
      </div>
    </div>
  );
}
