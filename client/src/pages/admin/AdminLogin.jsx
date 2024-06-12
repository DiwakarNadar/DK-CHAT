import React, { useState } from 'react'
import {Container, Paper, Typography,TextField, Button, Stack, Avatar, IconButton  } from "@mui/material";
import { useFileHandler, useInputValidation } from "6pp";
import {usernameValidator} from "../../utils/validators"
import { Navigate } from 'react-router-dom';
const AdminLogin = () => {
   const isAdmin=true;
  const secretKey=useInputValidation("",)
   const submitHandler=(e)=>
    {
      e.preventDefault();
      console.log("hello")
    }
    if(isAdmin) return <Navigate to="/admin/dashboard"/>
  return (
    <Container component={"main"} maxWidth="xs" sx={{
      height:"100vh",
      display:"flex",
      justifyContent:'center',
      alignItems:'center',
     }}>
       <Paper 
       elevation={3}
       sx={{
          padding:4,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
       }}>
    <>
    
      <Typography variant="h5">Admin Login</Typography>
      <form style={{width:"100%",
  marginTop:"1rem",}}
  onSubmit={submitHandler}>
          <TextField required fullWidth type="password" label="Password" margin="normal" variant="outlined"  onChange={secretKey.changeHandler}/>
          <Button sx={{marginTop:"1rem"}}
          variant="contained"
          color='primary'
          type='submit'
      fullWidth>
              
           Login
          </Button>
      <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
      </form>
      </>
       </Paper>
     </Container>
  )
}

export default AdminLogin
