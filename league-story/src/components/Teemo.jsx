import React from 'react'
import { Link } from 'react-router-dom'
import YouGet from './YouGet'
import ChampionInfo from './ChampionInfo'
import axios from 'axios'
import url from '../url'

export default class Teemo extends React.Component {
  constructor() {
    super()
    this.state = {
      info: {},
      isLoaded:false 
    }
  }

  async componentDidMount() {
    const resp = await axios.get(url + '/Teemo.json')
    console.log(resp.data.data)
    this.setState({
      info: resp.data.data.Teemo,
      isLoaded:true
    })

  
  }

  render() {
    const { isLoaded } = this.state 
    return (
      <div>
        <YouGet />
        {
          isLoaded ? <ChampionInfo info={this.state.info} /> : null }
      </div>
    )
  }
}
