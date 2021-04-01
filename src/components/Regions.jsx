import React from "react";
import { championRegions } from "../championRegions.js";
import { Link } from "react-router-dom";

export default class Regions extends React.Component {
  constructor() {
    super();
    this.state = {
      regionArr: [],
    };
  }
  componentDidMount() {
    // render all the picture images
    window.scrollTo(0, 0);
    const regionArr = championRegions.map((regions) => {
      let len = regions[1].length - 1;
      return (
        <div className="regionContainer">
          <Link
            to={{
              pathname: `/regions/${regions[0]}`,
              state: {info: regions},
            }}>
            <img src={regions[1][len]} className="regionImg"></img>
            <h1 className="centered">{regions[0]}</h1>
          </Link>
        </div>
      );
    });
    this.setState({regionArr: regionArr});
  }
  getRandomRegions = () => {
    const { regionArr } = this.state;
    let randomRegions = [];
    let nums = {};
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * (regionArr.length - 1));
      if (!nums[num]) {
        nums.push(num);
        randomRegions.push(regionArr[num])}
    }
    return randomRegions 
  }
  render() {
    const randomRegions = this.getRandomRegions()
    return (
      <div className="regionWholeContainer">
        <h1 className="regionHead">Regions</h1>
        <div className="regionDivs">{randomRegions}</div>
      </div>
    );
  }
}
