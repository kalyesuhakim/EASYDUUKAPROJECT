import React, {useState} from "react";
import MaterialTable from "material-table";
import {Typography, Paper, createMuiTheme, ThemeProvider, Dialog} from "@material-ui/core";
import { BookOutlined} from "@material-ui/icons";

const theme = createMuiTheme({
  palette: {
    // primary: {
    //   light: "#5efc82",
    //   dark: "#009624",
    //   main: "#00c853",
    //   contarstText: "#f57f17"
    // },
    secondary: {
      light: "#5efc82",
      dark: "#009624",
      main: "#00c853",
      contarstText: "#f57f17"
    }
  }
});
export default function Table(props) {
  const [state, setState] = useState({
      openDialog: false,
  })
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        onBackdropClick={() => setState({ ...state, openDialog: false })}
        open={state.openDialog}
      >
        <Typography variant="h1">Books</Typography>
      </Dialog>
      <Paper variant="outlined" className="mt-3 pl-2 pr-2">
        <MaterialTable
          {...props}
          style={{ boxShadow: "none", width: "100%" }}
          options={{
            search: true,
            //   pageSize: props.data1.length + 1,
            detailPanelType: "single",
            selection: true,
            paging: true,
            tableLayout: 'auto',
          }}
          title={
            <div className="d-flex align-items-center">
              <BookOutlined />
              <Typography className="ml-3">Bookmarked Jobs</Typography>
            </div>
          }
          actions={[
            {
              position: "toolbar",
              icon: "save",
              tooltip: "Save User",
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            }
          ]}
          editable={{
            isDeletable: false,
            isEditable: false
          }}
        />
      </Paper>
    </ThemeProvider>
  );
}
