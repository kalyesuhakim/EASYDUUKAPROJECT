import React, { useState } from 'react';
import { Button, Dialog, DialogContent, TextField } from '@material-ui/core';
import DialogCard from '../../../global/components/cards/DialogCard';
import { KijjeInput } from '../../../global/components/inputs/Inputs';

export default function CreateProject(props){
    const [state, setState] = useState({
        openDialog: false,
    })

    const onOpenDialog = () => {
        setState({...state, openDialog: true});
    }

    const onCloseDialog = () => {
        setState({...state, openDialog: false});
    }
    
    return (
      <React.Fragment>
        <Button variant="contained" color="primary" onClick={onOpenDialog}>
          Create Project
        </Button>
        <Dialog
          fullWidth
          open={state.openDialog}
          onBackdropClick={onCloseDialog}
        >
          <DialogContent>
            <DialogCard
              onClose={onCloseDialog}
              title={<b>Create New Project</b>}
            >
              <KijjeInput
                variant="line"
                label="Project Name"
                name="projectName"
              />
              <KijjeInput
                variant="line"
                label="Area of operation"
                name="areaOfOperation"
              />
              <KijjeInput
                variant="line"
                type="date"
                label="Starting Date"
                name="startingDate"
              />
              <KijjeInput
                variant="line"
                type="date"
                label="Ending date"
                name="endingDate"
              />
              <KijjeInput
                variant="line"
                type="number"
                label="Budget"
                name="budget"
              />
              <KijjeInput
                variant="line"
                label="Target Group"
                name="targetGroup"
              />
              <Button variant="outlined" size="small">
                Create Project
              </Button>
            </DialogCard>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
}