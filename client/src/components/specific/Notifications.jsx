import React, { memo } from 'react';
import { Dialog, DialogTitle, Stack, Typography, Avatar, Button, ListItem } from '@mui/material';
import { sampleNotifications } from '../constants/sample';

const Notifications = () => {
  const friendRequestHandler = ({ id, accept }) => {
    console.log("friend request handler", id, accept);
  }

  return (
    <Dialog open={true}>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          sampleNotifications.length > 0 ? (
            sampleNotifications.map((i) => (
              <NotificationsItem 
                sender={i.sender} 
                _id={i._id} 
                handler={friendRequestHandler}
                key={i._id}
              />
            ))
          ) : (
            <Typography textAlign={"center"}>No notifications</Typography>
          )
        }
      </Stack>
    </Dialog>
  );
}

const NotificationsItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack direction="row" alignItems="center" spacing={"1rem"} width={"100%"}>
        <Avatar src={avatar} alt={name} />
        <Typography 
          variant="body1"
          sx={{
            flexGrow: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }}>
          <Button onClick={() => handler({ id: _id, accept: true })}>
            Accept
          </Button>
          <Button color="error" onClick={() => handler({ id: _id, accept: false })}>
            Decline
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications;
