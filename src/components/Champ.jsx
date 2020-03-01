import React, { Component } from 'react'
import axios from 'axios'
import url from '../url'
import ChampInfo from './ChampInfo'

export default class Champ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
      isLoaded: false,

    }


  }
  async componentDidMount() {
 
    const { name } = this.props.match.params
   

    const resp = await axios.get(`${url}/${name}.json`)
  
    this.setState({
      info: resp.data.data[name],
      isLoaded: true
      })
  }

  render() {
    let { isLoaded, info } = this.state
 

    return (
      <div>
        <h1> Meet.. </h1>
        {isLoaded ? <ChampInfo info={info} /> : null}
      </div>
    )
  }
}