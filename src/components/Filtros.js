import React, { Component, useState } from 'react'
import ButtonFilter from './ButtonFilter';

//Import data from JSON
import Data from '../service/Daja.json'

const Filtros = () => {
  const [claridad, setClaridad] = useState(Data.claridad);
  const [forma, setForma] = useState(Data.forma);
  const [color, setColor] = useState(Data.color);
  const [corte, setCorte] = useState(Data.corte);

    return (
      <div>
        <ButtonFilter claridad={claridad}></ButtonFilter>
        <ButtonFilter claridad={forma}></ButtonFilter>
        <ButtonFilter claridad={color}></ButtonFilter>
        <ButtonFilter claridad={corte}></ButtonFilter>

        
      </div>
    )
  
}

export default Filtros
