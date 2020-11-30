import React, { useState } from "react";
import {
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Paper,
} from "@material-ui/core";
import {
  ArrowBack,
  ArrowForward,
  Close,
  Email,
  Person,
  PersonOutline,
  Phone,
} from "@material-ui/icons";
import propTypes from "prop-types";
import HapiStepper, {
  HapiStepTab,
} from "../../../global/components/stepper/HapiStepper";
import DialogCard from "../../../global/components/cards/DialogCard";
import { KijjeInput } from "../../../global/components/inputs/Inputs";
import AddFamilyForm from "./AddFamilyForm";
import { grey, orange } from "@material-ui/core/colors";
import { useMutation, gql } from "@apollo/client";


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import adminEndPoints from "../../routes/adminEndPoints";
import Axios from "axios";

const client = new ApolloClient({
  uri: adminEndPoints.graphql,
  cache: new InMemoryCache(),
});

client
  .mutate({
    mutate: gql`
      mutation BulkAddFamilySurvey($list: [familiesList]) {
        bulkAddFamilySurvey(list: [$list]) {
          id
        }
      }
    `,
    variables: { ["list"]: [{ first_born_age: 122 }] },
  })
  .then((result) => console.log(result))
  .catch((err) => {
    console.log("There is an error", err);
  });

const useStyles = makeStyles((theme) => ({}));

const form_template = {
  survey_id: 1,
  project_id: 1,
  family_photo: "",
  name_father: "",
  name_mother: "",
  age_mother: "",
  employment_status_mother: "",
  employment_status_father: "",
  number_of_children: "",
  number_of_foster_children: "",
  first_born_age: "",
  last_born_age: "",
  meals_a_day: "",
  monthly_earning_father: "",
  monthly_earning_mother: "",
  how_can_we_help: "",
  bread_winner: "",
  occupation_mother: "",
  occupation_father: "",
  parents_alive: "",
  guardian: "",
  profile: "",
};

const SAVE_FORMS = gql`
  mutation BulkAddFamilySurvey($list: [familiesList]) {
    bulkAddFamilySurvey(list: $list) {
      id
    }
  }
`;

export default function NewFoodOutReach(props) {

  const classes = useStyles();

  /**
   * Read cached forms on the device
   */
  var cachedForms = [{ ...form_template }];
  var cachedActiveForm = JSON.stringify({ ...form_template });
  var cachedLastId = "1";

  if (localStorage.getItem("abm_forms")) {
    cachedForms = localStorage.getItem("abm_forms");
    cachedActiveForm = localStorage.getItem("abm_cached_active_form");
    try {
      if (
        typeof JSON.parse(cachedForms) === "object" &&
        typeof JSON.parse(cachedActiveForm) === "object"
      ) {
        cachedForms = JSON.parse(cachedForms);
      }
      localStorage.setItem("abm_forms", JSON.stringify(cachedForms));
      localStorage.setItem("abm_cached_active_form", cachedActiveForm);
    } catch ($exception) {
      cachedForms = [{ ...form_template }];
      localStorage.setItem("abm_forms", JSON.stringify(cachedForms));
      localStorage.setItem("abm_cached_active_form", cachedActiveForm);
    }
  } else {
    localStorage.setItem("abm_forms", JSON.stringify(cachedForms));
    localStorage.setItem("abm_cached_active_form", cachedActiveForm);
  }

  /**
   * Update the form localy such that we cound be able to make updates latter
   */
  const updateForm = (form, position) => {
    var list = [...formsList];
    list[position] = form;
    localStorage.setItem("abm_forms", JSON.stringify(list));
    localStorage.setItem("abm_cached_active_form", JSON.stringify(form));
    setFormsList(list);
    setActiveForm(JSON.stringify(form));
  };


  const [state, setState] = useState({
    openDialog: false,
  });

  const closeDialog = () => {
    setState({ ...state, openDialog: false });
  };

  const [lastId, setLastId] = useState(cachedLastId);
  const [formsList, setFormsList] = useState(cachedForms);

  const [activeForm, setActiveForm] = useState(cachedActiveForm);

  const nextForm = () => {};
  const prevForm = () => {};
  /**
   * Saving the form that has been cached
   * After the form is saved it will be removed from cache and then a new list will be
   * sublied
   */
  const [saveLocalForms, savingForm] = useMutation(SAVE_FORMS, {errorPolicy: "all", onError: (error) => {
    console.log("\n\nThe errors are here\n\n", error);
  }});

  const saveForms = () => {
    saveLocalForms({ variables: {["list"]: formsList} });  
  };

  const [isLoading, setLoading] = useState(false);


  if(savingForm.loading){
    return <div>Saving the form</div>
  }



//   if(error) {
//       console.log("There was an error", error);
//   }
  
//   if (loading) {
//     return <h1>Loading</h1>;
//   }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setState({ ...state, openDialog: true })}
      >
        Add Family
      </Button>
      <Dialog open={state.openDialog} fullScreen fullWidth scroll="body">
        <Grid
          container
          className="h-100 pt-5 pb-5"
          justify="center"
          alignItems="center"
        >
          <Grid xs={11} md={8}>
            <DialogCard onClose={closeDialog} title="Add Family Details">
              {formsList.map((_form, index) => {
                console.log("The index %s the Length", index, formsList.length);
                if (index + 1 !== formsList.length) {
                  if (JSON.stringify(_form) === activeForm) {
                    return (
                      <AddFamilyForm
                      key={index}
                        form={_form}
                        position={index}
                        updateForm={updateForm}
                      />
                    );
                  } else {
                    return "";
                  }
                } else {
                  return (
                    <AddFamilyForm
                    key={index}
                      form={_form}
                      position={index}
                      updateForm={updateForm}
                    />
                  );
                }
              })}
              <div className="d-flex justify-content-between align-items-center">
                <Button
                  startIcon={<ArrowBack />}
                  variant="contained"
                  color="secondary"
                  onClick={prevForm}
                >
                  Prev
                </Button>
                <Button variant="contained" color="primary" onClick={saveForms}>
                  {isLoading ? "Saving..." : "Save"}
                </Button>
                <Button
                  endIcon={<ArrowForward />}
                  variant="contained"
                  color="secondary"
                  onClick={nextForm}
                >
                  Next
                </Button>
              </div>
            </DialogCard>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
