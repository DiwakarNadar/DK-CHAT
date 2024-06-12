import React, { memo } from 'react';
import { Avatar, IconButton, ListItem, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const UserItem = ({ user, handler, handlerIsLoading,isAdded=false,styling}) => {
    const { name, _id, avatar } = user;

    return (
        <ListItem >
            <Stack direction="row" alignItems="center" spacing={"1rem"} width={"100%"} 
            sx={{...styling}}>
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
                    {name}
                </Typography>
                <IconButton 
                    onClick={() => handler(_id)} 
                    disabled={handlerIsLoading} 
                    size="small"
                    sx={{
                        bgcolor: isAdded ? "error.main" : "primary.main",
                        color: "white",
                        "&:hover": {
                            bgcolor: isAdded ? "error.dark" :  "primary.dark"
                        },
                    }}
                >
                    {
                        isAdded ? <RemoveIcon  /> : <AddIcon /> 
                    }
                    
                </IconButton>
            </Stack>
        </ListItem>
    );
}

export default memo(UserItem);
