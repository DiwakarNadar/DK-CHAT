import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sampleUsers } from '../constants/sample';
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';

const NewGroup = () => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => 
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
    console.log(selectedMembers);
  };

  const groupName = useInputValidation("");

  const handleCreate = () => {
    // Handle group creation logic here
    console.log("Group Created with name:", groupName.value, "and members:", selectedMembers);
  };

  const handleCancel = () => {
    // Handle cancel logic here, e.g., close the dialog
    console.log("Group creation canceled");
  };

  return (
    <Dialog open={true}>
      <Stack p={{ xs: "1rem", sm: "3rem" }} maxWidth={"25rem"} spacing={"1.5rem"}>
        <DialogTitle textAlign={"center"}>New Group</DialogTitle>
        <TextField 
          label="Group Name" 
          value={groupName.value} 
          onChange={groupName.changeHandler} 
        />
        <Typography>
          Members
        </Typography>
        <Stack>
          {members.map((user) => (
            <UserItem 
              user={user}
              key={user._id}
              isSelected={selectedMembers.includes(user._id)}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction="row" justifyContent="space-evenly">
          <Button variant="contained" onClick={handleCreate}>Create</Button>
          <Button variant="outlined" color='error' onClick={handleCancel}>Cancel</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;
