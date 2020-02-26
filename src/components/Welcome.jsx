import React from 'react'
import { Link } from 'react-router-dom'

export default function Welcome() {
  return (
    <div className ="welcome">
      <h1 > Welcome to Teemo's Adventure </h1>
      <Link to="/teemo">
        <button>Start</button>
      </Link> 
    </div>
  )
}