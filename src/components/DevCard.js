// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { Paper, Grid, Typography, Box } from '@mui/material';
import {AccessTime } from "@mui/icons-material"
import {createTheme, ThemeProvider} from "@mui/material"
import React from 'react';
// import { DevProjectProvider } from '../contexts/DevProjectContext';



// const theme = createTheme({
//   components: {
//     MuiTypography: {
//       variants: [
//         {
//           props: {
//             variant: "body2"
//         }, 
//         style: {
//           fontSize: 11
//         },
//       },
//       {
//         props: {
//           variant: "body3"
//       }, 
//       style: {
//         fontSize: 9,
//       },
//     }
//       ]
//     }
//   }
// })
const DevCard = ({project}) => {
  return (
    // <DevProjectProvider>
        <Grid item xs={3}>
      {/* <ThemeProvider theme={theme} > */}
        <Paper elevation={5}>
          <img 
          src={project.imageUrl} 
          alt='projectImg' 
          className='img'/>
        <Box paddingX={1}>
        <Typography variant='subtitle1' component="h2">
          {project.title}
        </Typography>
        </Box>
        <Box
          paddingX={1}
          sx={{
            display: 'flex',
            alignitems: 'center',
          }}>
            <AccessTime sx={{width: 12.5}} />
            <Typography variant='body2' component="p" marginLeft={0.5} marginTop={.5}>
              {project.description} 
            </Typography>
        </Box>
        <Box 
         paddingX={1}
         sx={{
           display: 'flex',
           alignitems: 'center'}}
           marginTop={3}
           >
            {/* <Rating name="read-only" value={tour.rating} precision={0.25} size='small'readOnly /> */}
          {/* <Typography 
          variant='body2' 
          component="p" 
          marginLeft={0.5}
          >
            {tour.rating}
          </Typography> */}
          <Typography 
          variant='body3' 
          component="body3" 
          marginLeft={1.5}
          >
            ({project.videoUrl})
          </Typography>
        </Box>
        <Box 
        paddingX={1}
         sx={{
          display: 'flex',
          alignitems: 'center'}}
          marginTop={0}
          >
        <Typography 
          variant='h6' 
          component="h3" 
          marginTop={0}
          >
            {project.githubUrl}
          </Typography>
        </Box>
        
        </Paper>
        {/* </ThemeProvider> */}
    </Grid>
    
  )
}

export default DevCard
