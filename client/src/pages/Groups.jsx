import { KeyboardBackspace, Menu as MenuIcon } from '@mui/icons-material';
import { Grid, Tooltip, IconButton, Box, Drawer, Typography, Stack } from '@mui/material';
import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../components/styles/StyledComponents';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats } from '../components/constants/sample';

const Groups = () => {
  const navigate = useNavigate();
  const navigateBack = () => navigate("/");
  const [isMobile, setIsMobile] = useState(false);

  const handleMobile = () => {
    setIsMobile(prev => !prev);
  };

  const handleMobileClose = () => {
    setIsMobile(false);
  };

  const IconBtns = (
    <>
      <Box sx={{
        display: {
          xs: "block",
          sm: "none",
        },
        position: "fixed",
        right: "1rem",
        top: "1rem",
      }}>
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            ":hover": {
              color: "black",
              bgcolor: "rgba(0,0,0,0.5)"
            }
          }}
          onClick={navigateBack}>
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid item
        sx={{ display: { xs: "none", sm: "block" } }}
        sm={4}
        height={"100vh"}
        bgcolor={"bisque"}>
        <GroupsList group={sampleChats} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "1rem 3rem"
      }}>
        {IconBtns}
      </Grid>
      <Drawer open={isMobile} onClose={handleMobileClose} sx={{ display: { xs: "block", sm: "none" } }}>
        <GroupsList group={sampleChats} />
      </Drawer>
    </Grid>
  );
}

const GroupsList = ({ group }) => {
  return (
    <Stack>
      {group.length > 0 ? group.map((i) => (
        <GroupListItem key={i._id} group={i} />
      )) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No groups
        </Typography>
      )}
    </Stack>
  );
}

const GroupListItem = memo(({ group }) => {
  const { name, avatar } = group;
  return (
    <Link>
      <Stack direction="row" alignItems="center" spacing={2}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
