import React from 'react'
import DevCard from './components/DevCard';
// import Container from '@mui/material/Container';
import { Grid, Container, Typography } from '@mui/material';
import data from "./data.json"

const Home = () => {

const devProjects = data;
  

  return (
    <div className="App">
    <Container sx={{ marginY: 5 }}>
      <Typography 
        variant="h4"
        component="h2"
        marginTop={5}
        marginBottom={3}
      >
        Developer Projects
      </Typography>
      <Grid container spacing={3}>
        {devProjects.map((project, index) => (
          <DevCard key={index} project={project} />
        ))}
      </Grid>
    </Container>
  </div>
);
}


export default Home
