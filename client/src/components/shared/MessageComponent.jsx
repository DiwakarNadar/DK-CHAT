import { Box, Typography } from '@mui/material';
import moment from 'moment';
import React, { memo } from 'react'
import { fileFormat } from '../../lib/features';
import RenderAttachment from './RenderAttachment';

const MessageComponent = ({message,user}) => {
  const {attachments=[],createdAt,content,sender}=message
  const samesender=message.sender._id===user._id;
  const timeAgo= moment(createdAt).fromNow();
  
  return (
    <div style={{
    alignSelf:samesender?"flex-end":"flex-start",
    color:"black",
    backgroundColor:'white',
    padding:"0.5rem",
    borderRadius:"5px",
    width:"fit-content",
    }}>
      {
        !samesender && <Typography
        variant="caption"
        color={"#2694ab"}
        fontWeight={"600"}>{sender.name}</Typography>
      }
      {
        content && <Typography>{content}</Typography>
      }
      {
        attachments.length > 0 && attachments.map((i,index)=>{
          const url=i.url;
          const file=fileFormat(url);
          return <Box key={index}>
              <a href={url} target="_blank" download style={{
                color:"black",
              }}>
                  {RenderAttachment(file,url)}
                </a>
          </Box>
        })
      }
      {
       <Typography variant="caption" color={"text.secondary"}>{timeAgo}</Typography>
      }
    </div>
  )
}

export default memo(MessageComponent);
