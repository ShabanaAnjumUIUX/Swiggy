import React from 'react'

function About(props) {
  console.log(props);
  return (
    <div className='container'>
      <h1>Welcome to the {props.virat} page</h1>
      <p>Phone number </p>

      {props.phno===true ?<h5>Welcome</h5> :<h5>Change the value</h5>}
      
    </div>
  )
}

export default About
