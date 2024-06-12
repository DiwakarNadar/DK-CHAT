import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const ConfirmDeleteDialog = ({ confirmDeleteHandler, closeConfirmDeleteHandler }) => {
  return (
    <Dialog open onClose={closeConfirmDeleteHandler}>
      <DialogTitle>Confirm Deletion</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this group?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeConfirmDeleteHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={confirmDeleteHandler} color="secondary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteDialog;
