import React from 'react';
import Header from './Header';
import Title from '../../shared/Title';
import { Grid } from '@mui/material';

const AppLayout =()=>(WrappedComponent) => {
  return (props) => {
    return (
      <>
      <Title />
      <Header />
      
        <Grid container height={"calc(100vh - 4rem)"}>
        <Grid 
        item 
        sm={4}
        md={3}
        sx={{
          display:{xs:"none",sm:"block"}
        }}
        height={"100%"}>
        First
        </Grid>
        <Grid 
        item 
        sm={8}
        md={5}
        xs={12}
        lg={6}
        height={"100%"}>
         Second
        </Grid>
        <Grid 
        item 
        md={4}
        lg={3}
        height={"100%"}
        sx={{
          display:{xs:"none",md:"block"},
          padding:"2rem",
          bgcolor:"rgba(0,0,0,0.5)"
        }}
       >
        
       Third
        </Grid>
          
        </Grid>

        
        
      </>
    );
  };
}

export default AppLayout;
