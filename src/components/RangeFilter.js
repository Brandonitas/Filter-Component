import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import './style.scss';
import { withStyles } from '@material-ui/core/styles';


const StyleSlider = withStyles({
  root: {
    color: '#1724ab',
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#1724ab',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const RangeFilter = ({tipo}) => {
 
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
      <div className="block">
        {tipo == 'quilataje' ? (
          <div className="flex justify-between">
            <div>
              <img className="m-auto mt-4" src="/assets/quilataje/pequeno.png"/>
            </div>
            <div>
              <img className="m-auto" src="/assets/quilataje/grande.png"/>
            </div>
          </div>
        ) : ''}
        <div>
          <StyleSlider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            //aria-labelledby="range-slider"
          />
        </div>
        
        <div className="flex justify-between">
          <div>
            <Input
              className="border-solid border border-blue input-size"
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
          </div>
        <div>
          <Input
              className="border-solid border border-blue input-size"
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
        </div>
      </div>
    )
 
}

export default RangeFilter
