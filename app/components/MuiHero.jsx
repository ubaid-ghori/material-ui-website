import React from 'react'
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
const Hero = () => {
  return (
    <Box id="hero"
    sx={{
        width:"100%",
        backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
      backgroundSize: '100% 20%',
      backgroundRepeat: 'no-repeat',
    }}
    >

      
    </Box>
  )
}

export default Hero
