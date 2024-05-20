"use client"
import React,{useState} from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
const MuiBottonNavigation = () => {
    const [value,setvalue]=useState(0)
  return (
    <BottomNavigation sx={{width:'100%',position:'absolute',bottom:0}} value={value} onChange={(event,newValue)=>{setvalue(newValue)}} showLabels>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" icon={<PersonIcon />} />

    </BottomNavigation>
  )
}

export default MuiBottonNavigation
