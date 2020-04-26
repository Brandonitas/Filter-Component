import React, { Componen, useState, useEffect } from 'react'
import ButtonImg from './ButtonImg';
import './style.scss';

const ButtonFilter = ({infoButton , size}) => {
  
  useEffect(() => {
    console.log("DATA", infoButton)

  }, []); // Or [] if effect doesn't need props or state

    return (
      <div>
      {size == 4 ? (
      <div className="grid grid-cols-4">
        {infoButton.map((clar, i)=>{
          return(
            <div key={i} className="border-solid border border-blue"><ButtonImg img={clar.img} text={clar.text}></ButtonImg></div> 
          )
        })}
      </div>
      ):(
      <div className="grid grid-cols-6">
        {infoButton.map((clar, i)=>{
          return(
            <div key={i} className="border-solid border border-blue"><ButtonImg img={clar.img} text={clar.text}></ButtonImg></div> 
          )
        })}
      </div>
    )}
    </div>
  
    )
  }

export default ButtonFilter
