import React from 'react'
import { Box,CardContent,Card,Typography,CardActions,Button,CardMedia } from '@mui/material'
const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
        component='img'
        height='140'
        image='https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
        alt='unsplas image'
         />
        <CardContent>
            <Typography gutterBottom variant='h5' component='div'>React </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid velit eveniet esse voluptatibus iure quibusdam pariatur atque id recusandae saepe? Repellat.
            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>

        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard
