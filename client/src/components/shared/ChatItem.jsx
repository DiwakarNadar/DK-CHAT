import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from '../styles/StyledComponents'
import AvatarCard from './AvatarCard'


const ChatItem = ({
  avatar=[],
  name,
  _id,
  groupChat = false,
  sameSender,
  isOnline,
  index = 0,
  newMessageAlert,
  handleDeleteChat,
}) => {
  return (
    <Link to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChat(e, _id, groupChat)}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding:"1rem",
        color: sameSender ? "white" : "unset",
        backgroundColor: sameSender ? "black" : "unset",
        position: "relative",
      }}>
       <AvatarCard avatar={avatar}/>
        <Stack>
          <Typography>
            {name}
          </Typography>
          {newMessageAlert && (
            <Typography>
              {newMessageAlert.count} New Messages
            </Typography>
          )}

          {isOnline && <Box 
            sx={{position:"absolute",
            right:"1rem",
            top:"50%",
            width:"10px",
            height:"10px",
            bgcolor:"green",
            borderRadius:"50%"}}/>}
            
        </Stack>
      </div>
    </Link>
  )
}

export default ChatItem;
