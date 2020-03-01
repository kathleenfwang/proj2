import React, { Component } from 'react'
import axios from 'axios'
import url from '../url'
import ChampInfo from './ChampInfo'
import Error from './Error'

export default class Champ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      isLoaded: false,
      params: ""

    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  async componentDidMount() {
 
    const { name } = this.props.match.params
   
    this.setState({
        params:name
      })
      const resp = await axios.get(`${url}/${name}.json`)
  
    this.setState({
    
        info: resp.data.data[name],
        isLoaded: true
      })
  }
 handleKeyPress(event) {
    if (event.key === "Enter") {
      const {value }  = event.target
      window.location.replace(`/champions/${value}`)
    }
  }
 
  render() {
    let { isLoaded, info } = this.state
 

    return (
      <div>
        <div id ="search"> 
          <h1> Meet..
            <input onKeyPress={this.handleKeyPress}placeholder= "Search..."></input>
          </h1>
        </div>
        {isLoaded ? <ChampInfo info={info} /> : <Error info={this.state.params}/> }
      </div>
    )
  }
}