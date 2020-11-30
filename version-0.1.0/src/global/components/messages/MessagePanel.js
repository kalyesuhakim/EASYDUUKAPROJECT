import React from "react";
import {
  Paper,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import {Email, PersonOutline, SendOutlined } from "@material-ui/icons";
// import { sendMesssageConnector } from "../../store/containers/sendMessageContainer";
// import { useState } from "react";
// import MyTextField from "../../../admin/components/inputs/MyTextField";
// import { Alert } from "@material-ui/lab";
import { SEND_CONTACT_US_MESSAGE_THREAD } from "../../store/threads";
import { reqService } from "../../store/services/reqService";
import { addAlertNotifAction } from "../../store/actions/alertNotifsActions";
import { grey } from "@material-ui/core/colors";
import { KijjeInput } from "../inputs/Inputs";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    position: "relative",
    overflowY: "auto",
    position: "relative",
  },
  header: {
    width: "100%",
    height: "150px",
    backgroundColor: grey[100],
    boxShadow: theme.boxShadows[1],
    padding: theme.spacing(2),
  },
  text: {
    // color: theme.palette.common.white
  },
  body: {
    width: "100%",
    padding: "20px",
    // height: `calc(100% - 200px)`,
    // overflowY: "auto",
    position: "relative",
  },
  footer: {
    width: "100%",
    borderTop: `solid 1px ${theme.palette.grey[300]}`,
    height: "50px",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editor: {
    width: `calc(100% - 50px)`,
    height: "100%",
  },
  button: {
    width: "50px",
    height: "100%",
    backgroundColor: theme.palette.grey[50],
  },
  editorInput: {
    width: "100%",
    height: "100%",
    background: "transparent",
    border: "none",
    padding: "10px 5px 10px 10px",
    fontFamily: "Roboto",
  },
}));

// function ChatMessage(props){
//   const classes = useStyles()
//   if(props.to){
//     return <div className={classes.chatRootTo}>

//     </div>
//   } else if(props.from){
//     return <div className={classes.chatRootFrom}>

//     </div>
//   } else {
//     return <></>
//   }
// }

function MessagePanel_(props) {
  const classes = useStyles();

  const { reqInput, reqSubmitBtn, dispatch } = props;

  return (
    <Paper elevation={6} square className={classes.root}>
      <div className={classes.header}>
        {/* {props.netError || props.failed ? (
          <Alert severity="error">
            An Error occoured while sending your message. <br />
            Please check your network and try again latter.
          </Alert>
        ) : (
          <> */}
        <Typography className={classes.text + " mt-4"} variant="h4">
          Hello,
        </Typography>
        <Typography>
          We are ready to hear from you and are ready to provide you feed back.
        </Typography>
        {/* </>
        )} */}
      </div>
      <div className={classes.body}>
        <KijjeInput
          label="Email"
          variant="outlined"
          required
          fullWidth
          placeholder="Your email"
          startIcon={<Email />}
          {...reqInput({
            name: "email",
            thread: SEND_CONTACT_US_MESSAGE_THREAD,
          })}
        />
        <KijjeInput
          label="Full Name"
          variant="outlined"
          required
          fullWidth
          placeholder="Your full name"
          startIcon={<PersonOutline />}
          {...reqInput({
            name: "full_name",
            thread: SEND_CONTACT_US_MESSAGE_THREAD,
          })}
        />
        <KijjeInput
          helperText="Min 50 characters Max 500 characters"
          label="Message Body"
          required
          variant="outlined"
          rows={4}
          fullWidth
          multiline
          placeholder="Your Message here "
          {...reqInput({
            name: "message",
            thread: SEND_CONTACT_US_MESSAGE_THREAD,
          })}
        />
        <Typography>
          <small></small>
        </Typography>
        <div className="w-100" align="left">
          <Button
            startIcon={<SendOutlined />}
            className={classes.sendMessageBtn}
            variant="contained"
            color="primary"
            {...reqSubmitBtn({
              thread: SEND_CONTACT_US_MESSAGE_THREAD,
              callbacks: {
                success: () => {
                  props.closePanel();
                  dispatch(
                    addAlertNotifAction({
                      code: "MESSAGE_HAS_BEEN_SENT",
                      message: "Thank you for contacting us.",
                      severity: "success",
                    })
                  )
                },
                  
              },
            })}
          >
            Send
          </Button>
        </div>
      </div>
      {/* <div className={classes.footer}>
        <div className={classes.editor}>
          <textarea
            placeholder="Your message here"
            className={classes.editorInput + " editor-input"}
          />
        </div>
        <div className={classes.button}>
          
        </div>
      </div> */}
    </Paper>
  );
}

const MessagePanel = reqService(MessagePanel_);
export default MessagePanel;
