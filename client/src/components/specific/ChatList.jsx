import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'
 // Ensure correct import

const ChatList = ({
  w = "100%",
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [],
  handleDeleteChat,
}) => {
  return (
    <Stack width={w} direction={"column"}  
      overflow={"auto"}
      height={"100%"}
    >
      {
        chats?.map((data, index) => {
          const { avatar, name, _id, groupChat } = data
          const sameSender = chatId === _id
          const isOnline = onlineUsers.includes(_id)
          const newMessageAlert = newMessagesAlert.find(
            (alert) => alert.chatId === _id
          );

          return (
            <ChatItem
              avatar={avatar}
              name={name}
              _id={_id}
              groupChat={groupChat}
              sameSender={sameSender}
              isOnline={onlineUsers.includes(_id)}
              index={index}
              newMessageAlert={newMessageAlert}
              handleDeleteChat={handleDeleteChat}
              key={_id}
            />
          )
        })
      }
    </Stack>
  )
}

export default ChatList
