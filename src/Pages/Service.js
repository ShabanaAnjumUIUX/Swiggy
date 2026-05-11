import React from 'react'

function Service(props) {
  console.log(props)
  return (
    <div className='container'>
      <h1>Welcome to the service page</h1>
      <button className='btn btn-primary' onClick={props.prop1}>Click</button>
      
    </div>
  )
}

export default Service
