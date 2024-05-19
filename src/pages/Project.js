import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'

const Project = ({project}) => {
  return (
    <Container 
    sx={{width: 900}}>
        <Typography variant='h3' component='h1' marginTop={3}>
            {project.title}
        </Typography>
        <Box marginTop={3} sx={{display: "flex"}}>
            <img src={project.videoUrl} alt='' height={325}/>
            <ImageCollage/>
        </Box>
        <Box marginTop={3} sx={{width: 800}}>
            <Typography variant='h6' component='h4' marginTop={3}>
                {project.title}
            </Typography>
            <Typography variant='paragraph' component='p' marginTop={3}>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.             
            </Typography>
        </Box>
        
    </Container>
  )
}

export default Project
