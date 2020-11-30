import React, { useState } from 'react';
import { Button, Dialog, DialogContent } from '@material-ui/core';
import DialogCard from '../../../global/components/cards/DialogCard';
import { KijjeInput } from '../../../global/components/inputs/Inputs';


export default function NewSurvey(props){
    const [openDialog, setOpenDialog] = useState(false);
    const onCloseDialog = () => {
        setOpenDialog(false);
    }

    const onOpenDialog = () => {
        setOpenDialog(true);
    }
    return (
      <React.Fragment>
        <Button onClick={onOpenDialog} variant="contained">
          New Survey
        </Button>
        <Dialog open={openDialog} fullWidth>
          <DialogContent>
            <DialogCard onClose={onCloseDialog} title={<b>New Survey</b>}>
              <KijjeInput variant="line" label="Choose Project" />
              <KijjeInput variant="line" label="Survey Name" />
              <KijjeInput variant="line" label="Location" />
              <KijjeInput variant="line" label="Officer In charge" />
              <KijjeInput variant="line" type="date" label="Starting Date" />
              <KijjeInput variant="line" type="date" label="Ending Date" />
              <KijjeInput variant="line" label="Target Age Group" />
            </DialogCard>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
}