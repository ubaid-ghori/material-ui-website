"use client"
import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false); // Corrected variable name

    console.log({ checked }); // Moved this line after useState

    const handleChange = (e) => {
        setChecked(e.target.checked); // Corrected function call
    };

    return (
        <Box>
            <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Dark-mode"/> {/* Corrected onChange */}
        </Box>
    );
};

export default MuiSwitch;

