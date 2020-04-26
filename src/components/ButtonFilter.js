import React, { Componen, useState, useEffect } from 'react'
import ButtonImg from './ButtonImg';

const ButtonFilter = ({claridad}) => {
  const [size, setSize] = useState(4);

  useEffect(() => {
    console.log("DATA", claridad)

  }, []); // Or [] if effect doesn't need props or state

    return (
      <div>
      {size == 4 ? (
      <div className="grid grid-cols-4">
        {claridad.map((clar, i)=>{
          return(
            <div key={i}><ButtonImg img={clar.img} text={clar.text}></ButtonImg></div> 
          )
        })}
      </div>
      ):(
        <div><ButtonImg></ButtonImg></div>
    )}
    </div>
  
    )
  }

export default ButtonFilter
