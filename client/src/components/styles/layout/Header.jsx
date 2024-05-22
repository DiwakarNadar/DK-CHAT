import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon, Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon,Notifications as NotificationsIcon } from '@mui/icons-material';
import React, { Suspense, lazy } from 'react';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

const Header = () => {
  const NotificationDialog=lazy(()=>import( '../../specific/Notifications'))
  const SearchDialog=lazy(()=>import( '../../specific/Search'))
  const NewGroupDialog=lazy(()=>import( '../../specific/NewGroup'))
  const navigate= useNavigate();
  const [isMobile, setIsMobile] =useState(false);
  const [isSearch  , setIsSearch] =useState(false);
  const [isNewGroup  , setIsNewGroup] =useState(false);
  const [isNotification  , setIsNotification] =useState(false);
  const handleMobile = () => {
    setIsMobile(prev=>!prev);
  };

  const openNotifications = () => {
    setIsNotification(prev=>!prev);
  }
  const openSearchDialog = () => {
    setIsSearch(prev=>!prev);
  };
  const openNewGroup = () => {
    setIsNewGroup(prev=>!prev);
  };
  const navigateToGroup = () => {
    navigate("/groups");
  };
  const logoutHandler = () => {
    console.log("Search dialog opened");
  };

  return (
    <>
    <Box sx={{ flexGrow: 1 }} height={"4rem"}>
      <AppBar position='static' sx={{ bgcolor: "#ea7070" }}>
        <Toolbar>
          <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
            Chatt APP
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton color='inherit' onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Search">
          <IconButton color='inherit' size='large' onClick={openSearchDialog}>
            <SearchIcon />
          </IconButton>
          </Tooltip>
          
          <Tooltip title="New Group">
          <IconButton color='inherit' size='large' onClick={openNewGroup}>
            <AddIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Manage Group">
          <IconButton color='inherit' size='large' onClick={navigateToGroup}>
            <GroupIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
          <IconButton color='inherit' size='large' onClick={openNotifications}>
            <NotificationsIcon />
          </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
          <IconButton color='inherit' size='large' onClick={logoutHandler}>
            <LogoutIcon />
          </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    {
    isSearch && (
    <Suspense fallback={<div>Loading...</div>}>
     <SearchDialog />
     </Suspense>
    )
  }
  {
    isNotification && (
    <Suspense fallback={<div>Loading...</div>}>
     <NotificationDialog />
     </Suspense>
    )
  }
  {
    isNewGroup && (
    <Suspense fallback={<div>Loading...</div>}>
     <NewGroupDialog />
     </Suspense>
    )
  }
    </>

  );
};

export default Header;
