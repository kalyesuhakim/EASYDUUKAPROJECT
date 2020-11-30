import React from 'react';
import {
  makeStyles,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { reqErrorService } from "../../store/services/reqService";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    position: "fixed",
    top: "0px",
    left: `calc(50% - 180px)`,
    zIndex: theme.zIndex.modal + 20,
    maxWidth: "360px",
  },
  alert: {
    backgroundColor: theme.palette.common.white,
  },
}));

class ErrorTimer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 15,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.timer === 0) {
        this.setState({ ...this.state, timer: 15 });
        return;
      }
      const _state = { ...this.state };
      _state.timer = _state.timer - 1;
      _state.started = true;
      this.setState(_state);
      this.props.pingTest();
    }, 1000);
  }

  render() {
    return (
      <NetworkErrorMessage
        message={this.props.message}
        timer={this.state.timer}
      />
    );
  }
}

function NetworkErrorMessage(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={12}>
      <Alert severity="warning" className={classes.alert}>
        <Typography>
          <b>{props.message}</b> Retrying in{" "}
          <Typography color="error" component="span">
            <b>{props.timer}s</b>
          </Typography>
        </Typography>
        <Button  onClick={() => window['_retry_request']}>
          Retry Now
        </Button>
      </Alert>
    </Paper>
  );
}

const NetworkErrorWrapper = (props) => {
  
  const {netError} = props.req;

  const message = "Connection Error";

  if (netError === true) {
    return <ErrorTimer {...props} message={message} />;
  }

  return <div></div>;

};

const NetworkError = reqErrorService(NetworkErrorWrapper);
export default NetworkError
