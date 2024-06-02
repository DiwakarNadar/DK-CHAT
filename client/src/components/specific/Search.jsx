import React, { useState } from 'react';
import { Dialog, InputAdornment, List, Stack, TextField } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../constants/sample';
import { useInputValidation } from '6pp';

const Search = () => {
  const search = useInputValidation("", "");
  
  const isLoadingSendFriendRequest = false;
  
  const addFriendHandler = (id) => {
    console.log("add friend handler", id);
  };
  
  const [users, setUsers] = useState(sampleUsers);
  
  return (
    <Dialog open={true}>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField 
          label="Search"
          variant="outlined"
          onChange={search.changeHandler}
          value={search.value}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <List>
          {users.map((user) => (
            <UserItem 
              user={user}
              key={user._id} 
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
}

export default Search;
