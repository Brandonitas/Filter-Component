import React, {useState } from 'react'
import ButtonFilter from './ButtonFilter';
import RangeFilter from './RangeFilter'
import ButtonComponent from './Button';
import Button from '@material-ui/core/Button';
import './style.scss';

//Import data from JSON
import Data from '../service/Daja.json'

const Filtros = () => {
  const [claridad, setClaridad] = useState(Data.claridad);
  const [forma, setForma] = useState(Data.forma);
  const [color, setColor] = useState(Data.color);
  const [corte, setCorte] = useState(Data.corte);

  const [arrayData, setArrayData] = useState({ 
    forma: [],
    color: [],
    claridad: [],
    corte: [],
    quilataje:[],
    precio:[],
  });

  const filterData = (info, data) =>{
    let cArray = Object.assign([], arrayData);
    if(info === 'quilataje' || info === 'precio'){
      cArray[info] = []
    }
    cArray[info].push(data);
    setArrayData(cArray);
    //console.log(arrayData)
  }

  const cleanData = () =>{
    let cArray = { 
      forma: [],
      color: [],
      claridad: [],
      corte: [],
      quilataje:[],
      precio:[],
    }
    setArrayData(cArray);
    console.log(arrayData)
  }
  

    return (
      <div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="mb-5">
              <span className="text-base title-bold">FORMA</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'forma'} infoButton={forma} size={6}></ButtonFilter>
            </div>
            
            <div className="mb-5">
              <span className="text-base title-bold">COLOR</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'color'} infoButton={color} size={4}></ButtonFilter>
            </div>
            
            <div className="mb-5">
              <span className="text-base title-bold">CLARIDAD</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'claridad'} infoButton={claridad} size={4}></ButtonFilter>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <span className="text-base title-bold">CORTE</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <ButtonFilter filterData={filterData} arrayData={arrayData} info={'corte'} infoButton={corte} size={4}></ButtonFilter>
            </div>

            <div className="mb-5">
              <span className="text-base title-bold">QUILATAJE</span>
              <span className="text-base about-button mb-2 ml-2">?</span>
              <RangeFilter filterData={filterData} info={'quilataje'} minValue={0} maxValue={30} tipo={'quilataje'}></RangeFilter>
            </div>

            <div className="mb-5">
              <span className="text-base title-bold">PRECIO</span>
              <RangeFilter filterData={filterData} info={'precio'} prefijo={'$'} minValue={200} maxValue={5000000} tipo={'precio'}></RangeFilter>
            </div>
          </div>
        </div>

      <div className="button-container flex justify-center">
        <ButtonComponent arrayData={arrayData} label={'BUSCAR'} background={'#1724ab'}  color={'#ffffff'}></ButtonComponent>
        <ButtonComponent cleanData={cleanData} label={'LIMPIAR FILTROS'} background={'#ffffff'} color={'#1724ab'}></ButtonComponent>
      </div>

      </div>
    )
  
}

export default Filtros
