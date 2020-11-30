import React, { useRef, useState } from "react";
// import { PDFViewer, BlobProvider, pdf } from "@react-pdf/renderer";
// import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
} from "@material-ui/core";
import { Close, Print } from "@material-ui/icons";
// import PdfView from "./PdfView";
import TestPdf from './TestPdf'
import DialogCard from "../../../global/components/cards/DialogCard";

// const  = () => (
//     <PDFViewer>

//     </PDFViewer>
// )

export default function PrintPdf(props) {


  const [state, setState] = useState({
    open: true,
  });

  const openDialog = () => setState({ ...state, open: true });
  const closeDialog = () => setState({ ...state, open: false });
  const ref = useRef();
  console.log(ref);
  return (
    <React.Fragment>
      <Button onClick={openDialog} endIcon={<Print />}>
        Print
      </Button>
      <Dialog open={state.open} fullScreen onClose={closeDialog}>
        <Grid container justify="center" onClick={closeDialog}>
          <Grid item className="p-5"  style={{overflowX: "auto"}}>
            <Paper>
              <TestPdf />
            </Paper>
          </Grid>
        </Grid>
        {/* <DialogTitle>
          <IconButton onClick={closeDialog}>
            <Close />
          </IconButton>
        </DialogTitle> */}
        {/* <DialogContent style={{height: '70vh'}}> */}
        {/* <PDFViewer ref={ref} id="pdf-main" style={{width: '100%', height: '100vh'}}>
            <PdfView />
          </PDFViewer> */}
        {/* </DialogContent> */}
      </Dialog>
    </React.Fragment>
  );
}
