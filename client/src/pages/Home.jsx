import React from 'react'
import AppLayout from '../components/styles/layout/AppLayout'
import { Typography ,Box} from '@mui/material';

const Home = () => {
  return (
    <Box bgcolor={"rgba(0,0,0,0.1)"} height={"100%"}>
      <Typography p={"2rem"} variant='h5' textAlign={"center"}>
        Select a friend to chat
      </Typography>
    </Box>
  ) 
}

export default AppLayout()(Home);
