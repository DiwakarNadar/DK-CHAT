import { Avatar, Stack, Typography } from '@mui/material';
import React from 'react';
import { Face as FaceIcon, AlternateEmail as AlternateEmailIcon, CalendarMonth as CalendarMonthIcon } from '@mui/icons-material';
import moment from 'moment';
const Profile = () => {
  return (
    <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
      <Avatar 
        sx={{
          width: "12rem",
          height: "12rem",
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white",
        }} 
      />
      <ProfileCard heading={"Bio"} text={"This is my bio"} />
      <ProfileCard heading={"Username"} text={"Diwakar0208"} Icon={<AlternateEmailIcon />} />
      <ProfileCard heading={"Name"} text={"Diwakar"} Icon={<FaceIcon />} />
      <ProfileCard heading={"Joined"} text={moment('2024-05-27T00:00:00.000Z').fromNow()} Icon={<CalendarMonthIcon />} />

    </Stack>
  );
}
const a=new Date("2024-05-27");
a.toISOString();
const ProfileCard = ({ text, Icon, heading }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={"1rem"}
      color={"white"}
      textAlign={"center"}
    >
      {Icon && Icon}
      <Stack>
        <Typography variant={"body1"}>{text}</Typography>
        <Typography variant={"caption"} color={"gray"}>{heading}</Typography>
      </Stack>
    </Stack>
  );
}

export default Profile;
