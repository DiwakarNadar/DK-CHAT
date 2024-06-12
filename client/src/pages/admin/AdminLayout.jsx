import { Close, ExitToApp as ExitToAppIcon, Group as GroupIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import { Link as LinkComponent, Navigate, useLocation } from 'react-router-dom';

import { Dashboard as DashboardIcon } from "@mui/icons-material";

const Link=styled(LinkComponent)`
    text-decoration: none;
    padding: 1rem 2rem;
    border-radius: 2rem;
    color: black;
    &:hover {
        
       color: rgba(0, 0, 0, 0.5);
    }`

export const adminTabs=[
    {
        name:"Dashboard",
        path:"/admin/dashboard",
        icon:<DashboardIcon />,
    },
    {
        name:"Users",
        path:"/admin/users-management",
        icon:<ManageAccountsIcon />,
    },
    {
        name:"Chats",
        path:"/admin/chats-management",
        icon:<MessageIcon />,
    },
    {
        name:"Groups",
        path:"/admin/groups-management",
        icon:<GroupIcon />,
    },
   
    {
        name:"Messages",
        path:"/admin/messages-management",
        icon:<MessageIcon />,
    }
]

const SideBar = ({w="100%"}) => {
    const logoutHandler=()=>{
        localStorage.clear();
        window.location.reload();
    }
    const location = useLocation();
    return (
      <Stack width={w} direction="column" p={"3rem"} spacing={"3rem"} >
          <Typography variant="h5" textTransform={"uppercase"}>ChatAPP</Typography>
          <Stack spacing={"1rem"}>
            {
                adminTabs.map((tabs)=>(
                    <Link key={tabs.name} to={tabs.path}
                    sx={{color:location.pathname === tabs.path ? "black": "rgba(0, 0, 0, 0.5)",
                        
                     }}>
                       <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                           {tabs.icon}
                           <Typography>{tabs.name}</Typography>
                       </Stack>
                    </Link>
                ))
                    
            }
            <Link onClick={logoutHandler}>
                       <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
                           <ExitToAppIcon />
                           <Typography >Logout</Typography>
                       </Stack>
                    </Link>
            </Stack>
      </Stack>
        
    )
}
const AdminLayout = ({ children }) => {
    const isAdmin=true;
    const [isMobile, setIsMobile] =useState(false);
    if(!isAdmin) return <Navigate to="/admin"/>
  return (
   <Grid container minHeight={"100vh"}>
    <Box
    sx={{ display: { xs: "block", md: "none" } }}
    position="fixed"
    right="1rem"
    top="1rem">
        <IconButton onClick={() => setIsMobile(prev => !prev)}>
          {
            isMobile ?  <Close/>: <MenuIcon />
          }
        </IconButton>
    </Box>
    <Grid item 
    md={4} 
    lg={3}
    sx={{ display: { xs: "none", md: "block" } }}>
        <SideBar />
    </Grid>
    <Grid item 

    xs={12}
    md={8} 
    lg={9}
   >
        {children}
    </Grid>
    <Drawer open={isMobile} onClose={() => setIsMobile(false)}>
      <SideBar />
    </Drawer>
   </Grid>
  )
}

export default AdminLayout
