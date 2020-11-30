import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { KijjeInput } from "../../../global/components/inputs/Inputs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function ClientsCreateAccount(props) {
  const classes = useStyles();
  const { name, phoneNumber, email, onChange, loading, error } = props;

  return (
    <div className={classes.root}>
      <KijjeInput
        disabled={loading}
        required
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}> Full name </div>
        }
        placeholder="Enter Client's full name"
        name="name"
        variant="line"
        value={name}
        onChange={onChange}
        onKeyUp={onChange}
      />
      <KijjeInput
        disabled={loading}
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            Phone Number{" "}
          </div>
        }
        required
        placeholder="Enter Phone Number"
        name="phoneNumber"
        variant="line"
        value={phoneNumber}
        onChange={onChange}
      />
      <KijjeInput
        disabled={loading}
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}> Email </div>
        }
        required
        placeholder="Enter Email"
        name="email"
        type="email"
        // startIcon={<Email style={{ fontSize: "25px" }} />}
        variant="line"
        value={email}
        onChange={onChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={props.onCreateAccount}
        disabled={loading}
      >
        
        Create Account
      </Button>
    </div>
  );
}
