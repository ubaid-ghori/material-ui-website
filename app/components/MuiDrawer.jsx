"use client"
import React,{useState} from 'react'
import { Drawer,Box,Typography,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const MuiDrawer = () => {
    const [isDraweropen,setDraweropen] = useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
        <MenuIcon onClick={()=>setDraweropen(true)}/>
    </IconButton>
      <Drawer anchor='left' open={isDraweropen} 
        onopen={()=>setDraweropen(false)}
       >
        <Box p={2} width='250px' textAlign='center' role='presentetion'>
            <Typography variant='h6' component='div'>
                Side Panel
            </Typography>
        </Box>
      </Drawer>
    </>
  )
}

export default MuiDrawer
