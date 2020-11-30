import React, { useState } from "react";
import {
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Close, Email, Person, PersonOutline, Phone } from "@material-ui/icons";
import propTypes from "prop-types";
import HapiStepper, {
  HapiStepTab,
} from "../../../global/components/stepper/HapiStepper";
import DialogCard from "../../../global/components/cards/DialogCard";
import { KijjeInput } from "../../../global/components/inputs/Inputs";
import ClientsCreateAccount from "./ClientsCreateAccount";
import ClientsAddProfile from "./ClientsAddProfile";
import ClientsSelectPlan from "./ClientsSelectPlan";
import { Alert } from "@material-ui/lab";

/**

/**
 * REGISTER CLIENT STEP

/**
 * Styles for registering the new client
 */
const useStyles = makeStyles((theme) => ({}));

/**
 * REGISTER A NEW CLIENT VIA THE ADMIN PANEL
 * This will not require a password since irt will e
 * created by default
 */
export default function ClientsRegisterClient(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    openDialog: false,
  });

  const closeDialog = () => {
    setState({ ...state, openDialog: false });
  };



  /**
   * Stepper steps
   */
  const steps = [
    {
      title: "Create Account",
      path: "/clients/create-account",
    },
    {
      title: "Add Profile",
      path: "/clients/add-profile",
    },
    {
      title: "Select Plan",
      path: "/clients/select-plan",
    },
  ];

  /**
   * The active step from the stepper
   */
  const [activeStep, setActiveStep] = useState(JSON.stringify(steps[0]));

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setState({ ...state, openDialog: true })}
      >
        Register Client
      </Button>
      <Dialog open={state.openDialog} fullScreen fullWidth scroll="body">
        <Grid
          container
          className="h-100 pt-5 pb-5"
          justify="center"
          alignItems="center"
        >
          <Grid xs={11} md={8}>
            <DialogCard onClose={closeDialog} title="Register Client">
              <HapiStepper
                steps={steps}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                nextButtonProps={{ disabled: true }}
              >
                <HapiStepTab>
                  <ClientsCreateAccount />
                </HapiStepTab>
                <HapiStepTab>
                  <ClientsAddProfile />
                </HapiStepTab>
                <HapiStepTab>
                  <ClientsSelectPlan />
                </HapiStepTab>
              </HapiStepper>
            </DialogCard>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
