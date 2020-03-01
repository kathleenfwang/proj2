import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer> 
        <button> <Link to="/regions">  Regions</Link>  </button>
       |
      <button> <Link to="/" >   Home </Link></button>
        </footer>
    </div>
  )
}