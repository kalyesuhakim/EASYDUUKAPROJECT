import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import AceEditor from "react-ace";
import PropTypes from 'prop-types'
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialog-paperScrollPaper": {
      height: "calc(100% - 64px)",
    },
  },
}));

export default function HtmlEditor(props) {
  const { value, onClose, open, onChange } = props;
  const classes = useStyles();
//   const onChange = (content) => {
//     console.log("The content from the editor is: ", content);
//   };
  return (
    <Dialog open={open} fullWidth maxWidth="lg" className={classes.root}>
      <DialogTitle>The Html Editor for the code</DialogTitle>
      <DialogActions>
          <IconButton onClick={() => onClose()}>
              <Close />
          </IconButton>
      </DialogActions>
      <DialogContent>
        <AceEditor
          width="100%"
          height="100%"
          value={value}
          mode="html"
          theme="monokai"
          name="ace-html-editor"
          onChange={onChange}
          editorProps={{ $blockScrolling: true }}
        />
      </DialogContent>
    </Dialog>
  );
}

HtmlEditor.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
}