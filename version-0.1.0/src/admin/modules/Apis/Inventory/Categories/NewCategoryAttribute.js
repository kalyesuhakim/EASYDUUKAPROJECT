import { Button, Dialog, DialogActions, IconButton } from "@material-ui/core";
import { Add, AddOutlined, CloseOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import DialogCard from "../../../../../global/components/cards/DialogCard";
import { KijjeInput } from "../../../../../global/components/inputs/Inputs";
import clsx from 'clsx';


export default function NewCategoryAttribute(props) {
  const [dialogState, setDialogState] = useState(false);
  const openDialog = () => setDialogState(true);
  const closeDialog = () => setDialogState(false);

  return (
    <React.Fragment>
      <IconButton onClick={openDialog}>
        <AddOutlined />
      </IconButton>
      <Dialog fullWidth maxWidth="sm" open={dialogState}>
        <DialogCard title="New Category Attribute" onClose={closeDialog}>
          <KijjeInput label="Name" placeholder="Attribute Name" />
          <KijjeInput label="Unit" placeholder="Attribute Unites" />
          <KijjeInput label="Type" placeholder="Attribute Type" />
        </DialogCard>
        <DialogActions>
          <Button onClick={closeDialog} className="round-btn" endIcon={<CloseOutlined />} variant="contained">
            Cancel
          </Button>
          <Button className="round-btn" color="primary" endIcon={<Add />} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
