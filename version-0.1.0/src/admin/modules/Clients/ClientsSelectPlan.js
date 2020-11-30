import React from "react";
import { makeStyles } from "@material-ui/core";
import { KijjeInput } from "../../../global/components/inputs/Inputs";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

export default function ClientsSelectPlan(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <KijjeInput
        required
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            Company Name
          </div>
        }
        placeholder="Enter Client's full name"
        // startIcon={<Person style={{ fontSize: "25px" }} />}
        variant="line"
      />
      <KijjeInput
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            About Company
          </div>
        }
        required
        multiline
        placeholder="Enter Phone Number"
        // startIcon={<Phone style={{ fontSize: "25px" }} />}
        variant="line"
      />
      <KijjeInput
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            Company Address
          </div>
        }
        required
        placeholder="Enter Address Line"
        // startIcon={<Email style={{ fontSize: "25px" }} />}
        variant="line"
      />
      <KijjeInput
        label={<div style={{ fontWeight: "300", fontSize: "15px" }}>City</div>}
        required
        placeholder="Enter Address Line"
        // startIcon={<Email style={{ fontSize: "25px" }} />}
        variant="line"
      />
      <KijjeInput
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            Phone Number
          </div>
        }
        required
        placeholder="Enter Address Line"
        // startIcon={<Email style={{ fontSize: "25px" }} />}
        variant="line"
      />
      <KijjeInput
        label={
          <div style={{ fontWeight: "300", fontSize: "15px" }}>
            Company Email
          </div>
        }
        required
        placeholder="Enter Address Line"
        // startIcon={<Email style={{ fontSize: "25px" }} />}
        variant="line"
      />
    </div>
  );
}
