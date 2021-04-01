import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Welcome() {
  return (<div>
  <Redirect to="/champions/Teemo" />
  {/* previously displays a "welcome page", but now just showing the "Teemo" champion info
  // window.scrollTo(0, 0);
  // return (
  //   <div className ="welcome">
  //     <h1 > Welcome to Teemo's Adventure </h1>

  //     <div className="welcomeMsg">
  //         <p> Explore the different regions in League of Legends as Teemo and find out more information about the champions </p>
  //       </div>
  //     <Link to={{
  //       pathname: "champions/Teemo",
  //       state: {
  //         name:'Teemo'
  //       }
  //     }}>
  //       <button>Start</button>
  //     </Link>  */}
  </div>
  )
}