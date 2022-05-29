import React from 'react'

function Card(props) {
  return (
    <div
    className={`bg-white  shadow-modal rounded-lg ${props.className}`}>{props.children}</div>
  )
}

export default Card