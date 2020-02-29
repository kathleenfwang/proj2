import React from 'react' 
import { championRegions } from '../championRegions.js'
import { Link } from 'react-router-dom'

function randomNum(len) {
  return Math.floor(Math.random() * (len) ) + 1 
}
export default class Regions extends React.Component{
  constructor() {
    super()
    this.state = {
      regionArr: [] 
    }
  }
  pickThreeRegions = () => {
    let len = championRegions.length - 1  
    let arr = [] 
    for (let i = 0; i < 3; i++) {
      let num = randomNum(len)
      if (!arr.includes(num)) arr.push(randomNum(len))
      
    }
    return arr 

  }
  componentDidMount() {
    // render all the picture images 
    window.scrollTo(0, 0);
    const regionArr = championRegions.map((regions) => {
      let len = regions[1].length - 1 
      console.log(regions[1][len])
      return (<div className ="regionContainer">
        <Link to={{
          pathname: `/regions/${regions[0]}`,
          state: {
            info: regions 
          }
        }}>
        <img src={regions[1][len]} className="regionImg"></img>
        <h1 className = "centered">{regions[0]}</h1>
        </Link>
      </div>)
    })
    
    this.setState({
      regionArr: regionArr
    })
  }
  render() {
   
    const { regionArr } = this.state 
    console.log(regionArr)
    let randomRegions = [] 
    for (let i = 0; i < 4; i++) {
      let num = Math.floor(Math.random() * (regionArr.length - 1)) 
      randomRegions.push(regionArr[num])
    }
    console.log(randomRegions)
    return (
      <div className ="regionWholeContainer">
   
        <h1 className ="regionHead"> 
      Explore Different Regions 
      </h1>
       
      
      <div className ="regionDivs"> 
        {randomRegions}
        </div>
      
      </div>
    )
  }
}