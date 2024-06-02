import React, { Fragment, useRef } from 'react'
import AppLayout from '../components/styles/layout/AppLayout'
import { IconButton ,Stack} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { InputBox } from '../components/styles/StyledComponents';
import SendIcon from '@mui/icons-material/Send';
import FileMenu from '../components/dialogs/FileMenu';
import { sampleMessages } from '../components/constants/sample';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {
  const containerRef=useRef(null);
  const fileMenuRef=useRef(null);
  const user={
    name:"John",
    _id:"1",
  }
  return (
   <Fragment>
    <Stack 
    ref={containerRef}
    boxSizing="border-box"
    padding = "1rem"
    spacing = "1rem"
    bgcolor = "rgba(0,0,0,0.1)"
    height = "90%"
    sx={{overflowY:"auto"
    ,overflowX:"hidden"
    }}>
     {
      sampleMessages.map((i)=>(
        <MessageComponent key={i._id} message={i} user={user}/>
      ))
     }
    </Stack> 
    <form style={{height:"10%"}}>
      <Stack direction="row"
      height={"100%"}
      padding={"1rem"}
      alignItems={"center"}
      position={"relative"}>
        <IconButton
        sx={{
          position:"absolute",
          left:"1.5rem",
          rotate:"30deg",
        }}
        ref={fileMenuRef}
        >
          <AttachFileIcon  />
        </IconButton>
        <InputBox placeholder='Type Message Here...' />
        <IconButton 
        type="submit"
        sx={{
          backgroundColor:"orange",
          color:"white",
          marginLeft:"0.5rem",
          padding:"0.5rem",
          "&:hover":{
            backgroundColor:"darkorange"}
        }}>
          <SendIcon />
        </IconButton>

      </Stack>
      </form>\
      <FileMenu />
   </Fragment>
  )
}

export default AppLayout()(Chat);
