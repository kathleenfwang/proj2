import React from 'react'
import {Link} from 'react-router-dom'

export default function regionInfo(props) {
  const { name } = props.match.params
  console.log(props.location.state)
  const { info } = props.location.state
  //https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Lux.png
  let url = 'https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/'
  let champs = info[1].map((champ) => {
    if (!champ.includes('http')) {
      let imgUrl = `${url}${champ}.png`
      console.log(url)
      return (
        <li>
          <Link to = {`/champions/${champ}`}>
          <img src={imgUrl} />
            {champ}
            </Link>
        </li>
      )
    }
    })
  let regionUrl = info[1][info[1].length-1]
  return (
    
    <div>
     
      <img src={regionUrl}></img> 
      
      {name}
      {champs}
    
    </div>
  )
}