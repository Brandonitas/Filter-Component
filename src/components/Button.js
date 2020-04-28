import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import './style.scss';

const ButtonComponent = ({cleanData, arrayData, label, background, color}) => {
  
  let styles = {
    color: color,
    backgroundColor: background,
    border: "solid", 
    borderColor: '#1724ab',
    borderWidth: '1px'
  };

  const searchData =()=>{
    if(label == 'BUSCAR'){
      console.log("LOS DATOS DEL FILTRO SON:",arrayData)
    }else{
      cleanData();
      console.log("EL FILTRO HA SIDO LIMPIADO")
    }
    
  }

    return (
      <div className="m-4">
        <Button onClick={(e) => searchData()} className="button-style" variant="contained" style={styles}>
          {label}
        </Button>
      </div>
    )
  
}

export default ButtonComponent
