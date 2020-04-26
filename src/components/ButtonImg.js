import React, { Component } from 'react'

const ButtonImg = props => {
  
    return (
      <div>
        <div className="m-auto">
          <img className="m-auto" src={`/assets/${props.img}`}/>
          <p className="text-center mt-2">{props.text}</p>
        </div>
      </div>
    )

}

export default ButtonImg
