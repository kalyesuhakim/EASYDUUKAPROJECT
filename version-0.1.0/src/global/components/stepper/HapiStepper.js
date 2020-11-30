import { makeStyles, Fab, Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
import propTypes from "prop-types";
import { green, grey, red } from "@material-ui/core/colors";
import { Check, NotificationsActiveRounded } from "@material-ui/icons";

/**
 * PieStepper uses the link component \
 * The steps are link based
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepsWrapper: {
    width: "100%",
    padding: "20px",
    height: "400px",
    marginTop: "20px",
    overflow: "hidden",
    overflowY: "auto",
  },
  stepper: {
    height: "50px",
    position: "relative",
    width: "100%",
  },

  stepperLine: {
    // display: "block",
    position: "absolute",
    width: "90%",
    right: "-47%",
    top: "20%",

    backgroundColor: theme.palette.primary.main,
    border: "thin 0.5px " + theme.palette.primary.main,
  },
  stepperStep: {
    position: "relative",
    width: "100%",
    cursor: "pointer",
    "&.active": {
      color: theme.palette.primary.main,
    },
  },
  stepperIcon: {
    backgroundColor: theme.palette.common.white,
    border: "solid 1px " + theme.palette.primary.main,
    color: theme.palette.primary.main,
    zIndex: "1000",
    "&.active": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
  },
  stepperFooter: {
    width: "100%",
  },
}));

export const HapiStepperStep = (props) => {
  const classes = useStyles();
  const title = props.title || "";
  const icon = props.icon || "";
  const active = (props.active || false) === true ? "active" : "";
  const divider = props.divider || false;
  const completed = props.completed || false;

  return (
    <div
      className={clsx(
        classes.stepperStep,
        "d-flex justify-content-center align-items-center flex-column",
        active
      )}
    >
      <Avatar size="small" className={clsx(classes.stepperIcon, active)}>
        {completed === true ? <Check /> : icon}
      </Avatar>
      <div className={clsx("mt-2")}>{title}</div>
      {divider ? <hr className={clsx(classes.stepperLine)} /> : ""}
    </div>
  );
};

HapiStepperStep.propTypes = {
  title: propTypes.any.isRequired,
  path: propTypes.any.isRequired,
  icon: propTypes.any.isRequired,
};

export function HapiStepTab(props) {
  return <div className="w-100 animated fadeIn">{props.children}</div>;
}

export default function HapiStepper(props) {
  const classes = useStyles();
  const steps = props.steps || [];
  let activeStep = props.activeStep || {};
  const [lastStep, setLastStep] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const _onNextStep = () => true;
  const _onPrevStep = () => true;
  const onNextStep = props.onNextStep || _onNextStep
  const onPrevStep = props.onPrevStep || _onPrevStep

  const nextStep = () => {
    if(onNextStep() === true) {
      steps.map((step, index) => {
        if (JSON.stringify(step) === activeStep && index < steps.length - 1) {
          setLastStep(index + 1);
          props.setActiveStep(JSON.stringify(steps[index + 1]));
        }
        if (JSON.stringify(step) == activeStep) {
          setActiveIndex(index + 1);
        }
      });
    } else {  
      // Do something coz the next step can't procced
    }
    
    // props.setActiveStep(steps[steps.indexOf(activeStep)]);
  };

  const prevStep = () => {
    if(onPrevStep() === true){
      steps.map((step, index) => {
        if (
          JSON.stringify(step) === activeStep &&
          index < steps.length &&
          index > 0
        ) {
          setLastStep(index);
          props.setActiveStep(JSON.stringify(steps[index - 1]));
        }
        if (JSON.stringify(step) == activeStep) {
          setActiveIndex(index - 1);
        }
      });
    } else {
      // perform something coz next step is not valid
    }
  };

  return (
    <div className={classes.root}>
      <div
        className={clsx(
          "w-100",
          classes.stepper,
          "w-100 d-flex justify-content-between align-items-center "
        )}
      >
        {steps.map((step, index) => {
          const { title, link } = step;
          var completed = false;
          if (index < lastStep) {
            completed = true;
          }

          if (index === 0) {
            return (
              <HapiStepperStep
                key={index}
                completed={completed}
                active={activeStep === JSON.stringify(step)}
                title={title}
                link={link}
                icon={Number(index + 1)}
                divider={true}
              />
            );
          }
          if (index % 2 === 1) {
            return (
              <React.Fragment>
                <HapiStepperStep
                  key={index}
                  completed={completed}
                  active={activeStep === JSON.stringify(step)}
                  title={title}
                  link={link}
                  icon={Number(index + 1)}
                  divider={true}
                />
              </React.Fragment>
            );
          }
          return (
            <HapiStepperStep
              key={index}
              completed={completed}
              active={activeStep === JSON.stringify(step)}
              title={title}
              link={link}
              icon={Number(index + 1)}
            />
          );
        })}
      </div>
      <div className={classes.stepsWrapper}>{props.children[activeIndex]}</div>
      <div
        className={clsx(
          classes.stepperFooter,
          "d-flex w-100",
          activeIndex > 0 ? "justify-content-between" : "justify-content-end"
        )}
      >
        {activeIndex > 0 ? (
          <Button variant="outlined" onClick={prevStep}>
            Back
          </Button>
        ) : (
          ""
        )}
        <Button variant="outlined" color="primary" onClick={nextStep} {...props.nextButtonProps}>
          {activeIndex > steps.length - 2 ? "Complete" : "Next"}
        </Button>
      </div>
    </div>
  );
}

HapiStepper.propTypes = {
  nextButtonProps: propTypes.shape({
    disabled: propTypes.string
  }),
  activeStep: propTypes.any,
  setActiveStep: propTypes.func,
  steps: propTypes.array,
  onNextStep: propTypes.func,
  onPrevStep: propTypes.func
}