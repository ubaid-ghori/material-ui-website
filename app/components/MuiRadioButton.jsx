"use client";

import React from 'react';
import { Box, FormLabel, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useState } from 'react';
const MuiRadioButton = () => {
    const [value,setvalue]=useState('')
    console.log({value});
    const handlechange=(e)=>{
        setvalue(e.target.value)
    }
  return (
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>Years Of Experience</FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label'
        value={value}
        onChange={handlechange}
        row
        >
          <FormControlLabel value='0-2' control={<Radio />} label='0-2' />
          <FormControlLabel value='3-5' control={<Radio />} label='3-5' />
          <FormControlLabel value='6-10' control={<Radio />} label='6-10' />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
