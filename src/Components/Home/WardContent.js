import React from 'react'

function WardContent(props) {
  return (
    <div>
    <h1>Ward Number : {props.ward_no}</h1>
    <h2>Ward Name : {props.ward_name}</h2>
</div>

  )
}

export default WardContent