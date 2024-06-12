import { Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace, Menu as MenuIcon } from '@mui/icons-material';
import { Grid, Tooltip, IconButton, Box, Drawer, Typography, Stack, TextField, Button, Backdrop } from '@mui/material';
import React, { useState, memo, useEffect, lazy, Suspense } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import AvatarCard from '../components/shared/AvatarCard';
import { sampleChats, sampleUsers } from '../components/constants/sample';
import UserItem from '../components/shared/UserItem';

const ConfirmDeleteDialog = lazy(() => import('../components/dialogs/ConfirmDeleteDialog'));
const AddMemberDialog = lazy(() => import('../components/dialogs/AddMemberDialog'));

const Groups = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [updatedGroupNameValue, setUpdatedGroupNameValue] = useState("");
  const [searchParams] = useSearchParams();
  const chatId = searchParams.get("group");
  const isAddmember=false;
  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setUpdatedGroupNameValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupName("");
      setUpdatedGroupNameValue("");
      setIsEdit(false);
    };
  }, [chatId]);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobile(false);
  };

  const updateGroupName = () => {
    setGroupName(updatedGroupNameValue);
    setIsEdit(false);
  };

  const openAddHandler = () => {
    console.log("Add group handler");
  };

  const confirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const handleDelete = () => {
    console.log("Delete group handler");
    closeConfirmDeleteHandler();
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const removeMemberHandler = (id) => {
    console.log("Remove Member handler");
  }
  const GroupName = (
    <Stack direction="row" alignItems="center" spacing="1rem" padding="0.5rem" justifyContent="center">
      {isEdit ? (
        <>
          <TextField value={updatedGroupNameValue} onChange={(e) => setUpdatedGroupNameValue(e.target.value)} />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h5" textAlign="center">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}><EditIcon /></IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{ xs: "column-reverse", sm: "row" }}
      spacing="1rem"
      p={{ sm: "1rem", xs: "0rem", md: "1rem 4rem" }}
    >
      <Button size="large" variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={confirmDeleteHandler}>
        Delete
      </Button>
      <Button size="large" variant="contained" startIcon={<DoneIcon />} onClick={openAddHandler}>
        Add Members
      </Button>
    </Stack>
  );

  const IconBtns = (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" }, position: "fixed", right: "1rem", top: "1rem" }}>
        <IconButton onClick={handleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            ":hover": { color: "black", bgcolor: "rgba(0,0,0,0.5)" },
          }}
          onClick={() => navigate("/")}
        >
          <KeyboardBackspace />
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <Grid container height="100vh">
      <Grid item sx={{ display: { xs: "none", sm: "block" } }} sm={4} height="100vh" bgcolor="bisque">
      <GroupsList
          myGroups={sampleChats}
          chatId={chatId}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
      >
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <Typography variant="body1" margin="2rem" alignSelf="flex-start">
              Members
            </Typography>
            <Stack
              maxWidth="45rem"
              width="100%"
              boxSizing="border-box"
              padding={{ sm: "1rem", xs: "0", md: "1rem 4rem" }}
              spacing="2rem"
              height="50vh"
              overflow="auto"
            >
              {sampleUsers.map((user) => (
                <UserItem user={user} key={user._id} isAdded styling={{
                  boxShadow: "0 0 0.5rem 0.2rem rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                }}
                handler={removeMemberHandler} />
              ))}
            </Stack>
            {ButtonGroup}
          </>
        )}
      </Grid>
      <Suspense fallback={<Backdrop open />}>
        {confirmDeleteDialog && (
          <ConfirmDeleteDialog
            confirmDeleteHandler={handleDelete}
            closeConfirmDeleteHandler={closeConfirmDeleteHandler}
          />
        )}
        {isAddmember && (
          <AddMemberDialog />
        )}
      </Suspense>
      <Drawer
        open={isMobile}
        onClose={handleMobileClose}
        sx={{ display: { xs: "block", sm: "none" }, width: '50%' }}
        PaperProps={{ sx: { width: '50%' } }}
       
      >
        <GroupsList
          w={"50vw"}
          myGroups={sampleChats}
          chatId={chatId}
        />
      </Drawer>
    </Grid>
  );
};

const GroupsList = ({ w = "100%", myGroups, chatId }) => (
  <Stack
    width={w}
    sx={{
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;
