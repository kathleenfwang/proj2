import React, { Component } from 'react'
import axios from 'axios'
import url from '../url'
import ChampInfo from './ChampInfo'
import Loading from './Loading'
import Error from './Error'


export default class Champ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      isLoaded: false,
      params: "",
      error: false

    }

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  async componentDidMount() {
 
    const { name } = this.props.match.params
   
    this.setState({
        params:name
      })
    await axios.get(`${url}/${name}.json`)
      .then(resp => {
        this.setState({
    
          info: resp.data.data[name],
          isLoaded: true
        })
      })
    .catch( e => this.setState({error:true}))
  
    
  }
 handleKeyPress(event) {
    if (event.key === "Enter") {
      const {value }  = event.target
      window.location.replace(`/champions/${value}`)
    }
  }
 
  render() {
    let { error,isLoaded, info } = this.state
 

    return (
      <div>
        <div id ="search"> 
          <h1> 
            <input onKeyPress={this.handleKeyPress}placeholder= "Search..."></input>
          </h1>
        </div>
        {error ? <Error /> : isLoaded && <ChampInfo info={info}/>}
      </div>
    )
  }
}