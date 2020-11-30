import React, { useState } from "react";
import {
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  List,
  ListItemText,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import DialogCard from "../../../../global/components/cards/DialogCard";
import { KijjeInput } from "../../../../global/components/inputs/Inputs";
import { blueGrey, orange } from "@material-ui/core/colors";
import ApiRequest from "../../../../api/ApiRequest";
import { ArrowForward, CloudUpload } from "@material-ui/icons";
import { INVENTORY_CREATE_INVENTORY } from "../../../../api/apiThreads";
const useStyles = makeStyles((theme) => ({
  billPaper: {
    padding: theme.spacing(2),
    backgroundColor: blueGrey[50],
  },
}));

const inventory = (props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>Inventory has been created...</Typography>
      </Grid>
    </Grid>
  );
};

export default function CreateInventory(props) {
  const classes = useStyles();
  const [dialogState, setDialogState] = useState(false);
  const [billingCycle, setBillingCycle] = useState();
  const [inventory, setInventory] = useState(null);

  const openDialog = () => setDialogState(true);
  const closeDialog = () => setDialogState(false);
  const onBillingCycleChange = (e) => setBillingCycle(e.target.value);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={openDialog}>
        Create Inventory
      </Button>
      <Dialog open={dialogState} onClose={closeDialog} minWidth="md" maxWidth="md" fullWidth>
        <ApiRequest
          afterLoad={({ data }) => setInventory(data)}
          initialData={{}}
          validationRules={{
            name: "required",
            description: "required",
          }}
          initialPayload={{ name: "", description: "", billingCycle: "yearly" }}
          thread={INVENTORY_CREATE_INVENTORY}
        >
          {({ error, submitBtn, input, validationError }) => {
            /**
              If the inventory has been created lets manage it
             */
            if (inventory) {
              return <inventory data={inventory} />;
            }
            return (
              <DialogCard title="Create Inventory" onClose={closeDialog}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <KijjeInput
                      variant="line"
                      placeholder="Enter Inventory Name"
                      label="Inventory Name"
                      {...input({
                        name: "name",
                      })}
                    />
                    <KijjeInput
                      multiline
                      variant="line"
                      placeholder="What do you plan to use your inventory"
                      label="Description"
                      {...input({
                        name: "description",
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} className="mt-3">
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Billing Cycle</FormLabel>
                      <RadioGroup
                        aria-label="billing-cycle"
                        value={billingCycle}
                        {...input({
                          name: "billingCycle",
                          onChange: onBillingCycleChange,
                        })}
                      >
                        <FormControlLabel
                          value="monthly"
                          control={<Radio />}
                          label={
                            <span>
                              Monthly <b>UGX 35,000</b>
                            </span>
                          }
                        />
                        <FormControlLabel
                          value="yearly"
                          control={<Radio />}
                          label="Yearly"
                        />
                      </RadioGroup>
                    </FormControl>
                    <KijjeInput
                      type="number"
                      required
                      variant="line"
                      label="Number of stores"
                      max="2"
                      {...input({
                        name: "numberOfStores",
                      })}
                    />
                  </Grid>
                </Grid>
                <div>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className="btn-rounded"
                    {...submitBtn({
                      endIcon: <ArrowForward />,
                    })}
                  >
                    Create Inventory
                  </Button>
                </div>
              </DialogCard>
            );
          }}
        </ApiRequest>
      </Dialog>
    </React.Fragment>
  );
}
