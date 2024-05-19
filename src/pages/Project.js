import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'

const Tour = () => {
  return (
    <Container 
    sx={{width: 900}}>
        <Typography variant='h3' component='h1' marginTop={3}>
            Explore the World
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFSg0TJRATIYGxNPzgywgK8B4uPl1_ka6E5IXN8N7byN9j8Gfe8IllAdTX-gcsYvvIofU&usqp=CAU' alt='' height={325}/>
            <ImageCollage/>
        </Box>
        <Box marginTop={3} sx={{width: 800}}>
            <Typography variant='h6' component='h4' marginTop={3}>
                About this ticket
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             
            </Typography>
        </Box>
        
    </Container>
  )
}

export default Tour
