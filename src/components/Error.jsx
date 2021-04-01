import React from 'react'

export default function Error(props) {
  return (
  <div className ="errorPage"> 
    <div className ="error">
      <h1 id="red"> 404 Error ⊙︿⊙!</h1>
      <h2> Could not find "{props.info}". Please double-check spelling. </h2>
      <p> Hint: Remember to capitalize the first name (i.e. "Teemo") </p>
    </div>
</div>
  ) 
}