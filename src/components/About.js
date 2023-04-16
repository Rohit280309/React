import React from 'react'

export default function About(props) {
  return (
    <div className="container" style={{color:props.mode === 'light' ? 'black': 'white'}}>
      <h1 my-3>About Us</h1>
      <p>Itna khali time hai tere pass ke Word Counter website ka about padh raha hai</p>
    </div>
  )
}
