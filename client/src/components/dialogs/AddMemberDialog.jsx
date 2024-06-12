import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/sample'
import UserItem from '../shared/UserItem'
const AddMemberDialog = ({addMember,isLOadingHandler,chatId}) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => 
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
    console.log(selectedMembers);
  };

  
    const addmembersubmitHandler = () => {
       closeHandler();
    }
    
    const closeHandler = () => {
        setSelectedMembers([]);
        setMembers([]);
    }
    
  return (
    <Dialog open onClose={closeHandler}>
        <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
            <DialogTitle textAlign={"center"}>
                Add Member
            </DialogTitle>
            <Stack spacing={"1rem"}>
                {
                members.length > 0 ? (
                    members.map((i) => (
                        <UserItem 
                            user={i}
                            key={i._id} 
                            handler={selectMemberHandler}
                            isAdded={selectedMembers.includes(i._id)}
                        />
                    ))
                ) : (
                    <Typography textAlign={"center"}>No users</Typography>
                )
                }
            </Stack>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Button marginRight={"auto"} onClick={closeHandler } color='error' variant='outlined'>Cancel</Button>
            <Button onClick={addmembersubmitHandler} variant='contained' disabled={isLOadingHandler} >Submit Changes</Button>
            </Stack>
           
        </Stack>
    </Dialog>
  )
}

export default AddMemberDialog
