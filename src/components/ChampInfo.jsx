import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class ChampInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}, 
      url: "",
      isLoading: false,
      skinName: ""
    }

  }

 //`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skinNums[skinIndex]}.jpg`
  componentDidMount() {
    // render picture 
    console.log(this.props)
    const { skins,id } = this.props.info // [{},{}] 
    const skinIndexes = skins.map((skin) => {
      return skin.num 
    })
    console.log(skins)
 
    const num = Math.floor(Math.random() * (skins.length)) 
    let index = skinIndexes[num] 
    let skinName = skins[num]["name"]
    if (skinName === "default") skinName = `${skinName} ${id}`

    console.log(index)

    let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${index}.jpg` 

    this.setState({
      data:this.props.info,
      url: url,
      isLoading: true,
      skinName: skinName 
    })
  
  }
  render() {
    let { name, title, blurb, tags, info, spells,stats } = this.props.info
    const { data, isLoading, url, skinName } = this.state 
 
    let champstats = []
    // {attack:5,magic:3..}

    const colors = ["#96ceb4","#ffeead","#ffcc5c","#ff6f69"]
    let i = 0

    for (let stat in info) {

      champstats.push((
        <li>
          <div style={{ width: 80, border: "hidden",padding:5}}>  {stat}   </div>
          <div style={{ backgroundColor: colors[i], width: info[stat] * 50, height: 15 }}
      className ="bar">{info[stat]} </div>  </li>
    ))
    i++
    }
    tags = (tags.join('/'))
    spells = spells.map((spell) =>{
      return (<li key ={spell.id}>{spell.name} </li>)
    })
  
   
    return (
      <div style ={{backgroundColor:"whitesmoke",borderRadius:30}}>
        {
          isLoading ?
            <div className = "wholePage">
        <div className ="container"> 
          <div className = "img">
                  <img src={url} />
                 
                  
          </div> 
                
                <main> 
                  <header> 
          <h1> {skinName} </h1>
                  <h2> {title} </h2>
                    <h3> Tags: {tags}</h3>
                  </header>
                  <section> 
                  <p> {blurb}  </p>
                  
                  <Link to={{
                    pathname:`${name}/moreInfo`,
                    state: {
                      data: data
                    }
                  }} >
                    <button className ="infoButton"> More info </button>
                  </Link>
                  <h4> Spells:</h4>
                  <ul>
                    
                    {spells}
                  </ul>
                  </section>
                 
               
                </main>
                </div>
                <h2 className = "statHeader"> Stats </h2>
              <div className="statGrid"> 
             
                <ul> 
               
                {champstats}
              </ul>
              <ul>
          <li> HP:
          <div className = "bar" style={{ width: stats.hp, height: 20, backgroundColor: 'red' }}>
         {stats.hp}
    
            </div>
            </li>
          <li> Magic Damage:
          <div className = "bar" style={{ width: stats.mp, height: 20, backgroundColor: 'orange' }}>
              {stats.mp}
              </div>
          </li>
          <li> Magic Resist:
          <div className = "bar" style={{ width: stats.spellblock, height: 20, backgroundColor: 'yellow' }}> 
              {stats.spellblock}
              </div>
          </li>
          <li> Armor:
          <div className = "bar" style={{ width: stats.armor, height: 20, backgroundColor: 'lightgreen' }}>
              {stats.armor} 
            </div>
          </li>
          <li> Attack Damage:
          <div className = "bar" style={{ width: stats.attackdamage, height: 20, backgroundColor: 'lightblue' }}>
              {stats.attackdamage}
          </div>
           </li>
                </ul>
                </div>
              <Link to ="/regions"> <button className ="infoButton"> Time to explore! </button></Link>
           
         </div> 
          : null}
      </div>
    )
  }
}