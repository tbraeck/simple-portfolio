// import React from 'react';
// // import DevCard from './components/DevCard';
// import { Grid, Container, Typography } from '@mui/material';
// // import { useDevProjectContext } from './contexts/DevProjectContext';

// const Home = () => {
//   // const devProjects = useDevProjectContext();

//   return (
//     <div className="App">
//       <Container sx={{ marginY: 5 }}>
//         <Typography 
//           variant="h4"
//           component="h2"
//           marginTop={5}
//           marginBottom={3}
//         >
//           Developer Projects
//         </Typography>
//         <Grid container spacing={3}>
//           {/* {devProjects.length > 0 ? (
//             devProjects.map((project, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <DevCard project={project} />
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" component="p">
//               No projects available.
//             </Typography>
//           )} */}
//         </Grid> 
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React from 'react'
import SearchAppBar from './components/SearchAppBar';
// import TourCard from '../components/TourCard';
// import Container from '@mui/material/Container';
import { Grid, Container, Typography } from '@mui/material';
// import cities from "../data.json"

const Home = () => {
  return (
    <div className="App">
      <Container sx={{marginY: 5}}>
        {/* {cities.map((city) => (
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
            {city.tours.map((tour, index) => <TourCard tour={tour} key={index}/> )}
          </Grid>
          </>
         ))} */}
      </Container>
    </div>
  );
}

export default Home
