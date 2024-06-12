import React from 'react'
import AdminLayout from './AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Person as PersonIcon, Message as MessageIcon } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/StyledComponents'
import { DoughnutChart, LineChart } from '../../components/specific/Charts'

const Dashboard = () => {
  const Appbar=<Paper
  elevation={3}
  sx={{padding:"2rem",
    margin:"2rem 0" ,
    borderRadius:"1rem",
  }}>
   <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
    <AdminPanelSettingsIcon sx={{fontSize:"3rem"}}/>
    <SearchField placeholder='Search'/>
    <CurveButton>
      Search
    </CurveButton>

<Box sx={{flexGrow:1}}/>
<Typography>
      {moment().format("MMMM Do YYYY")}
    </Typography>

    
   </Stack>
  </Paper>

const Widgets = <Stack direction={{
  xs:"column",
  sm:"row"
}} spacing={"2rem"}
justifyContent={"space-between"}
alignItems={"center"}
margin={"2rem 0"}>

<Widget  title="Users" value={10} Icon={<PersonIcon />}/>
<Widget  title="Chats" value={10} Icon={<GroupIcon />}/>
<Widget  title="Messages" value={10} Icon={<MessageIcon />}/>
</Stack>
  return (
    <AdminLayout>
       <Container component={"main"}>
       {Appbar}
       <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"} height={"25rem"}>
        <Paper elevation={3} sx={{padding:"2rem 3.5rem", 
          borderRadius:"1rem",
          width:"100%",
          maxWidth:"45rem",
         
          }}>
          <Typography>Last Messages</Typography>
          <LineChart value={[10,20,30,40,50,60,70,80,90,100]} />
        </Paper>
        <Paper elevation={3} sx={{
          padding:"1rem",
          borderRadius:"1rem",
          width:"100%",
          maxWidth:"25rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          position:"relative",
          width:{
            xs:"100%",
            sm:"50%"},
        }}
        height={"25rem"}>
          <DoughnutChart />
          <Stack direction={"row"} spacing={"0.5 rem"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
          height={"100%"}
          position={"absolute"}
          >
          <GroupIcon /> 
         <Typography>Vs</Typography>
         <PersonIcon />
          </Stack>
         
        </Paper>
       </Stack>
       {
        Widgets
       }
       </Container>
    </AdminLayout>
  )
}
const Widget = ({title,value,Icon}) => {
  return (
    <Paper
    elevation={3} 
    sx={
      {
        margin:"2rem 0",
        borderRadius:"1rem",
        width:"20rem",
        padding:"2rem",
      }
    }
   >
       <Stack alignItems={"center"} spacing={"1rem"}>
         <Typography 
         sx={{
          color:"black",
          borderRadius:"50%",
          width:"5rem",
          height:"5rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          border:"5px solid black",
         }}>{value}</Typography>
         <Stack direction={"row"} spacing={"1rem"}>
          {Icon}
           <Typography>{title}</Typography>
         </Stack>
       </Stack>
    </Paper>
    
  )
}

export default Dashboard
