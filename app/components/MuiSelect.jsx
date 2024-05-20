"use client";
import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
  const [country, setCountry] = useState('');

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <Box width='250px'>
      <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth>
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='PK'>Pakistan</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
