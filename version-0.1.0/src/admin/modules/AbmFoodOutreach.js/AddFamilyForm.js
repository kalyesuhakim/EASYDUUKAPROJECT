import { Grid, makeStyles, Typography } from "@material-ui/core";
import { People } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import { KijjeInput } from "../../../global/components/inputs/Inputs";
import { gql, useMutation } from "@apollo/client";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    overflowY: "auto",
  },
}));

export default function AddFamilyForm(props) {

  const classes = useStyles();
  console.log("\n\nThe form is\n\n\n", props.form, "\n\n\n");

  const [form, setForm] = useState(props.form);

  const onChange = (e) => {
    const { name, value, type } = e.target;
    setForm({ ...form, [name]: type == "number" ? Number(value) : value, survey_id: 1, project_id: 1 });
    props.updateForm(
      { ...form, [name]: type == "number" ? Number(value) : value },
      props.position
    );
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Alert icon={<People />}>
          <b>Family {props.position + 1}</b>
        </Alert>
        {/* <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>Picture</div>
          }
          required
          placeholder="Family Photo"
          name="family_photo"
          value={form["family_photo"]}
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
        /> */}
        {[
          {
            name: "name_father",
            type: "string",
            label: " Enter Fathers' name",
            placeholder: "Fathers Name",
          },
          {
            name: "name_mother",
            type: "string",
            label: " Enter Mother's name",
            placeholder: "Mothers' Name",
          },
          {
            name: "age_mother",
            type: "number",
            label: " Enter Mother's age",
            placeholder: "Fathers Name",
          },
          {
            name: "age_father",
            type: "number",
            label: " Enter Father's age",
            placeholder: "Fathers Age",
          },
        ].map((field, index) => (
          <KijjeInput
            key={index}
            onChange={onChange}
            label={
              <div style={{ fontWeight: "300", fontSize: "15px" }}>
                {field.label}
              </div>
            }
            required
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={form[field.name]}
            variant="line"
          />
        ))}
        {/* 
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Enter Mother's name
            </div>
          }
          required
          placeholder="Mothers Name"
          name="name_mother"
          value={form["name_mother"]}
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Enter Mother's Age
            </div>
          }
          required
          placeholder="Age mother"
          name="age_mother"
          value={form["age_mother"]}
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Age Father
            </div>
          }
          required
          placeholder="Enter Father's age"
          name="age_father"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["age_father"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Enter the employment Status of the mother
            </div>
          }
          required
          placeholder="Mother's Employment Status"
          name="employment_status_mother"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["employment_status_mother"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Employment Status Father
            </div>
          }
          required
          placeholder="Enter father's employment status"
          name="employment_status_father"
          value={form["employment_status_father"]}
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Number of Children
            </div>
          }
          required
          type="number"
          placeholder="Enter the number fo children in the family"
          name="number_of_children"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["number_of_children"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Number of Foster Children
            </div>
          }
          required
          type="number"
          placeholder="Enter number of foster Children in the family"
          name="number_of_foster_children"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["number_of_foster_children"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Enter the first born's age
            </div>
          }
          required
          placeholder="Enter the first born's age"
          name="first_born_age"
          type="number"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["first_born_age"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Last born's age
            </div>
          }
          required
          placeholder="Enter last born's age"
          type="number"
          name="last_born_age"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["last_born_age"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Enter the number of meals you have a day
            </div>
          }
          required
          placeholder="Meals a day"
          name="meals_a_day"
          type="number"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["meals_a_day"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Monthly Earnings father
            </div>
          }
          required
          placeholder="Enter the monthly earning of the father"
          name="monthly_earning_father"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["monthly_earning_father"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Monthly Earning mother
            </div>
          }
          required
          placeholder="Enter the monthly earnings of the mother"
          name="monthly_earning_mother"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["monthly_earning_mother"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              How would like us to help you
            </div>
          }
          required
          placeholder="Enter the type of help you would like from us"
          multiline
          name="how_can_we_help"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["how_can_we_help"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Bread Winner{" "}
            </div>
          }
          required
          placeholder="Enter the bread winner for the family"
          name="bread_winner"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["bread_winner"]}
        />

        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Occupation Father
            </div>
          }
          required
          placeholder="Enter the father's occupation or work "
          name="occupation_father"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["occupation_father"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Occupation Mother
            </div>
          }
          required
          placeholder="Enter the mother's occupation or work "
          name="occupation_mother"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["occupation_mother"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>
              Both Parents Alive
            </div>
          }
          required
          placeholder="Enter the list of parents alive with space separation"
          name="parents_alive"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["parents_alive"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>Guardian</div>
          }
          required
          placeholder="Enter the guardian name if any"
          name="guardian"
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["guardian"]}
        />
        <KijjeInput
          onChange={onChange}
          label={
            <div style={{ fontWeight: "300", fontSize: "15px" }}>Profile</div>
          }
          required
          placeholder="Profile"
          name="profile"
          multiline
          // startIcon={<Email style={{ fontSize: "25px" }} />}
          variant="line"
          value={form["profile"]}
        /> */}
      </Grid>
    </Grid>
  );
}
