import { Avatar, AvatarGroup, Stack, Box } from '@mui/material';
import React from 'react';
import { transformImageUrl } from '../../lib/features';

const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <Stack direction="row" spacing={0.5}>
      <AvatarGroup max={max}>
        <Box width={"5rem"} height={"3rem"}>
        {avatar.map((src, index) => (
          <Avatar 
            key={index} 
            src={transformImageUrl(src)} 
            alt={`Avatar ${index}`}
            sx={{ width: "3rem", height: "3rem",position: "absolute",
              left:{
                xs:`${index + 0.5}rem`,
                sm:`${index}rem`,
              }
             }}
          />
        ))}

        </Box>
       
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
