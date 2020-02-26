import React from 'react' 

 
export default class ChampionInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      skinIndex: 0
    }
 
  }
  componentDidMount() {
    const skins = (this.props.info.skins)
    const num = Math.floor(Math.random() * skins.length + 1)
    console.log(num)
    this.setState({
      skinIndex:num
    })
  }
 
  render() {
    const { name, skins,title,lore } = this.props.info
    console.log(name,skins)
 
    return (
     
      < div className="champInfo" >
        <h1> {name} </h1>
        <h2> {title} </h2>
        <p>skin: {this.state.skinIndex}</p>
        

    </div >
  )
  }

}


 