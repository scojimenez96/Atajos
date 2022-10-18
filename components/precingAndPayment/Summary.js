import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Summary = () => {
  const [age, setAge] = useState("")

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

    <div>
      <h3>
        Summary
      </h3>
      <div className='content-Summary'>
        <div className='div'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Billing Cycle</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Billing Cycle"
                onChange={handleChange}
              >
                <MenuItem value={1}>Monthly</MenuItem>
                <MenuItem value={3}>3 Monthly</MenuItem>
                <MenuItem value={6}>6 Monthly</MenuItem>
                <MenuItem value={12}>Year</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <hr />
        <div className='div'>
          <p className='tittle-summary-plan'>
            Base Plan
          </p>
          <p className='display-detail'>
            <strong>
              standard
            </strong>
            <span>$149</span>
          </p>
          <p>
            includes: 2 users and 10 profiles
          </p>
        </div>
        <hr />
        <div className='div'>
          <p className='display-detail'>
            <strong>
              Monthly Total
            </strong>
            <span>$149</span>
          </p>
          <p className='daysfree'>
            You have 30 days remaining in your free trial.
            your paid subscription will not begin until the
            end of your trial.
          </p>
          <button className='proceed'>Proceed to payment</button>
        </div>
      </div>
      <div className='div'>
        <strong>
          Questions?
        </strong>
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
      </div>
    </div>
  )
}
