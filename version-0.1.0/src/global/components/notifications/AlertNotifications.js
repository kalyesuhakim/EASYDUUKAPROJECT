import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, IconButton } from "@material-ui/core";
import notificationService from "../../store/services/notificationService";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    right: "10px",
    top: "10%",
    zIndex: theme.zIndex.modal + 10,
  },
}));

/**
 * Alert notifications messages that are pushed to teh user in the application
 * demands to have them pushed.
 */
function AlertNotifications_(props) {
  const classes = useStyles();
  const { alertNotifs, removeAlertNotification } = props;
  const handleClose = (notif) => () => removeAlertNotification(notif);


  
  return (
    <div className={classes.root}>
      {alertNotifs.map((notif, index) => (
        <Alert
          action={<IconButton onClick={handleClose(notif)}>
            <Close />
          </IconButton>}
          className="mt-3"
          // variant="filled"
          severity={notif.severity}
        >
          <AlertTitle>{notif.title}</AlertTitle>
          {notif.message}
        </Alert>
      ))}
    </div>
  );
}

const AlertNotifications = notificationService(AlertNotifications_);
export default AlertNotifications;
