import React from 'react'
import SearchAppBar from './components/SearchAppBar';
import DevCard from './components/DevCard';
// import Container from '@mui/material/Container';
import { Grid, Container, Typography } from '@mui/material';
import cities from "../data.json"

const Home = () => {
  return (
    <div className="App">
      <Container sx={{marginY: 5}}>
        {cities.map((city) => (
          <>
          <Typography 
          variant="h4"
          component="h2"
          marginTop={5}
          marginBottom={3}
          >
            Top {city.name} Tours
          </Typography>
          <Grid container spacing={3}>
            {city.tours.map((tour, index) => <DevCard tour={tour} key={index}/> )}
          </Grid>
          </>
         ))}
      </Container>
    </div>
  );
}

export default Home
