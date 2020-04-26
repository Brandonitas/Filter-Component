import React, { Component, useState } from 'react'
import ButtonFilter from './ButtonFilter';
import RangeFilter from './RangeFilter'

//Import data from JSON
import Data from '../service/Daja.json'

const Filtros = () => {
  const [claridad, setClaridad] = useState(Data.claridad);
  const [forma, setForma] = useState(Data.forma);
  const [color, setColor] = useState(Data.color);
  const [corte, setCorte] = useState(Data.corte);

    return (
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-5">
            <span className="text-base">FORMA</span>
            <ButtonFilter infoButton={forma} size={6}></ButtonFilter>
          </div>
          
          <div className="mb-5">
            <span className="text-base">COLOR</span>
            <ButtonFilter infoButton={color} size={4}></ButtonFilter>
          </div>
          
          <div className="mb-5">
            <span className="text-base">CLARIDAD</span>
            <ButtonFilter infoButton={claridad} size={4}></ButtonFilter>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <span className="text-base">CORTE</span>
            <ButtonFilter infoButton={corte} size={4}></ButtonFilter>
          </div>

          <div className="mb-5">
            <span className="text-base">QUILATAJE</span>
            <RangeFilter></RangeFilter>
          </div>

          <div className="mb-5">
            <span className="text-base">PRECIO</span>
            <RangeFilter></RangeFilter>
          </div>


        </div>
        

        
      </div>
    )
  
}

export default Filtros
