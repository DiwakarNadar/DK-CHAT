import React from 'react'
import { transformImageUrl } from '../../lib/features'
import { FileOpen } from "@mui/icons-material";
const RenderAttachment = (file,url) => {
  switch (file) {
    case "image":
      return <img 
      src={transformImageUrl(url)} 
      alt='attachment'
      width={"200px"}
      height={"200px"}
      style={{
        objectFit:"contain"
      }}/>
    case "audio":
      return <audio src={url} controls preload='none' />
    case "video":
      return <video src={url} controls preload='none' width={"200px"} />
    default:
        return <FileOpen />
  }
}

export default RenderAttachment
