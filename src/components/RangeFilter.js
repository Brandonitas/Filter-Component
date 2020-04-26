import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';


const RangeFilter = () => {
 
  const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange1 = (event) => {
    setValue([event.target.value === '' ? '' : Number(event.target.value),value[1]]);
  };

  const handleInputChange2 = (event) => {
    setValue([value[0],event.target.value === '' ? '' : Number(event.target.value)]);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };



    return (
      <div>

        <Input
            value={value[0]}
            //margin="dense"
            onChange={handleInputChange1}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number'
            }}
          />

        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          //aria-labelledby="range-slider"
        />
        <Input
            value={value[1]}
            //margin="dense"
            onChange={handleInputChange2}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number'
            }}
          />
      </div>
    )
 
}

export default RangeFilter
