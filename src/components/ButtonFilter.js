import React, { Componen, useState, useEffect } from 'react'
import ButtonImg from './ButtonImg';
import './style.scss';

const ButtonFilter = ({filterData, info, infoButton , size}) => {

  /*const [filterData, setFilterData] = useState({
    forma: 'REDONDO',
    color: 'TRANSPARENTE',
    claridad: '',
    corte: '',
    quilataje: '',
    precio: ''
  })*/


  
  useEffect(() => {
    //console.log("INFO", info);
    console.log("DATA", infoButton)
  }, []); // Or [] if effect doesn't need props or state

  const markButton = (infoButton,event) => {

    filterData(info, infoButton.text);

  };


    return (
      <div>
      {size == 4 ? (
      <div className="grid grid-cols-4">
        {infoButton.map((infoB, i)=>{
          return(
            <button key={i} className="filter-button" onClick={(e) => markButton(infoB, e)}>
              <div className="border-solid border border-blue" ><ButtonImg img={infoB.img} text={infoB.text}></ButtonImg></div> 
            </button>
          )
        })}
      </div>
      ):(
      <div className="grid grid-cols-6">
        {infoButton.map((infoB, i)=>{
          return(
            <button key={i} className="filter-button" onClick={(e) => markButton(infoB,i, e)}>
              <div className="border-solid border border-blue"><ButtonImg img={infoB.img} text={infoB.text}></ButtonImg></div> 
            </button>
          )
        })}
      </div>
    )}
    </div>
  
    )
  }

export default ButtonFilter
