"use client"
import React from 'react'
import { Stack,TextField,InputAdornment} from '@mui/material'
import { useState } from 'react'
const MuiTextfield = () => {
    const [value,setvalue]=useState('')
  return (
    <Stack spacing={4}>
    <Stack direction='row' spacing={2}>
    <TextField label="Name" variant='outlined'/>
    <TextField label="Name" variant='filled'/>
    <TextField label="Name" variant='standard'/>
    </Stack>

    <Stack direction='row' spacing={2}>
    <TextField label="small secondary" size='small' color='secondary'/>
    </Stack>    

    <Stack direction='row' spacing={2}>
    <TextField label="Form Input" required error={!value} value={value} onChange={e=>setvalue(e.target.value)} helperText={!value?'required':'Do not share your password with anyone'} />
    <TextField label="Password" type='password' disabled helperText='Do not Share your password to anyone' />
    <TextField label="Read Only" InputProps={{readonly:true}} />
    </Stack>    

    <Stack direction='row' spacing={2}>
    <TextField label="amount"
    InputProps={{
    startAdornment:<InputAdornment position='start'>$</InputAdornment>
    }}
     />
    <TextField label="Weight"
     InputProps={{
        endAdornment:<InputAdornment position='end'>kg</InputAdornment>
        }}
    />

    </Stack>  


    </Stack>
  )
}

export default MuiTextfield
