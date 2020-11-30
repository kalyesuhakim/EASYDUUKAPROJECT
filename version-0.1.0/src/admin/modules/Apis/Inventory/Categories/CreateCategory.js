import { Button, Dialog, Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import DialogCard from "../../../../../global/components/cards/DialogCard";
import clsx from "clsx";
import { KijjeInput } from "../../../../../global/components/inputs/Inputs";

export default function CreateCategory(props) {
  const [dialogState, setDialogState] = useState(false);
  const openDialog = () => setDialogState(true);
  const closeDialog = () => setDialogState(false);
  return (
    <React.Fragment>
      <Button
        onClick={openDialog}
        className={clsx("round-btn")}
        variant="outlined"
      >
        Create Category
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={dialogState}
        onBackdropClick={closeDialog}
      >
        <DialogCard title={"Create Category"} onClose={closeDialog}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <KijjeInput
                label="Name"
                placeholder="Category Name"
                variant="line"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className="p-3">
              <Typography>
                <b>Attributes</b>
              </Typography>
              
            </Paper>
          </Grid>
        </DialogCard>
      </Dialog>
    </React.Fragment>
  );
}
