import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  BlobProvider,
} from "@react-pdf/renderer";
import {
  Document as DocumentView,
  Page as PageView,
} from "react-pdf/dist/esm/entry.webpack"; 
import PdfView from "./PdfView";
import { Paper } from "@material-ui/core";
// import { Document } from "react-pdf/dist/esm/entry.webpack"; 


const TestPdf = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
    }
  return (
    <React.Fragment>
      <BlobProvider document={<PdfView />}>
        {({ blob, url, loading, error }) => {
          return loading ? (
            "Loading Document"
          ) : (
            <div>
              <DocumentView
                file={URL.createObjectURL(blob)}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <PageView pageNumber={pageNumber} />
                <Paper>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p>
                </Paper>
              </DocumentView>
            </div>
          );
        }}
      </BlobProvider>
   
    </React.Fragment>
  );
};

export default TestPdf;
