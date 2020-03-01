import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer> 
        <Link to="/regions"> Regions </Link> | 
        <Link to="/" > Home </Link>
        </footer>
    </div>
  )
}