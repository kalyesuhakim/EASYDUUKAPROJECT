import React, { useEffect, useRef } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { blueGrey, grey } from "@material-ui/core/colors";
import Images from "../../images/images";

const theme = {
  palette: {
    // primary: {
    //   light: "#484848",
    //   dark: "#000000",
    //   main: "#212121",
    //   contrastText: "#ffffff"
    // },
    // secondary: {
    //   light: "#ffffff",
    //   dark: "#bcbcbc",
    //   main: "#eeeeee",
    //   contrastText: "#000000"
    // },
    primary: {
      light: "#4890c9",
      dark: "#125183",
      main: "#1B75BC",
      contrastText: "#fff",
    },
    secondary: {
      main: "#EF4136",
      light: "#f2675e",
      dark: "#a72d25",
      text: "#fff",
    },
    colored: {
      green: "#00FF00",
    },
    type: "light",
  },
  typography: {
    h1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
  },
  appBarHeight: "60px",
  secondaryAppBarHeight: "60px",
  sideBarWidth: "100px",
  boxShadows: [
    `0 1px 2px 0 rgba(0,0,0,0.05)`,
    `0 2px 5px 0 rgba(0,0,0,0.05)`,
    `0 5px 10px 0 rgba(0,0,0,0.05)`,
    `0 10px 15px 0 rgba(0,0,0,0.05)`,
  ],
};

Font.register({
  family: "Roboto-Light",
  src: "http://localhost:3000/fonts/Roboto-Light/style.css",
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.palette.primary.path,
    height: "100px",
    padding: "20px",
    color: "#fff",
    fontWeight: 100,
    fontSize: 12,
  },
  page: {
    // paddingRight: "calc(100% - 97.5%)",
    // paddingLeft: "calc(100% - 97.5%)",
    padding: 20,
  },
  familyImage: {
    // width: "100%",
    display: "flex",
    justifyContent: "center",
    minHeight: "150px",
    ["& img"]: {
      width: "50%",
      height: "auto",
    },
  },
  familyPreview: {
    minHeight: "250px",
    padding: "10px",
    borderWidth: 1,
    borderColor: theme.palette.primary.path,
    borderStyle: "solid",
  },

  familyBody: {
    borderStyle: "solid",
    borderWidth: "1",
    borderColor: theme.palette.primary.path,
    padding: "10px",
  },
  row: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    marginTop: 2,
  },
  gridRow: {
    marginTop: "2px",
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
  valuePlaceHolder: {
    backgroundColor: grey[200],
    padding: "5px 10px",
    fontSize: 12,
    fontWeight: 100,
    color: blueGrey[700],
  },
  text: {
    fontSize: 12,
    fontWeight: 100,
    color: blueGrey[700],
  },
  titleText: {
    fontSize: 12,
    color: "red",
    paddingRight: 10,
  },
  headerText: {},
  familyCount: {
    width: "200px",
    backgroundColor: theme.palette.primary.path,
    color: theme.palette.primary.contrastText,
    padding: "5px 10px",
    fontSize: 13,
  },
});

export default function PdfView() {
  const families = [
    {
      name: "",
      age: "",
      profile: "",
      Occupation: "",
    }
  ]
  const myRef = useRef();
  useEffect(() => {
    console.log(myRef);
  })
  
  return (
    <Document id="my-id" ref={myRef}>
      <Page size="A4">
        <View>
          <Text style={styles.header}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit neque, tempora aliquam aliquid soluta voluptatibus
            eligendi explicabo est sit. Porro enim voluptas eaque dicta iusto
            rem ut nam repellendus. Fugit?
          </Text>
        </View>
        {[0, 1, 2, 2, 3, 4, 5].map((item, index) => (
          <View style={{ ...styles.page, marginTop: 10 }} key={index}>
            <Text style={styles.familyCount}>Family One (1)</Text>
            <View style={styles.familyPreview}>
              <View style={styles.row}>
                <View style={styles.row}>
                  <Text style={styles.titleText}>Name</Text>
                  <Text style={{ ...styles.valuePlaceHolder, minWidth: 400 }}>
                    Kawalya John
                  </Text>
                </View>
                <View style={{ ...styles.row, marginLeft: 10 }}>
                  <Text style={styles.titleText}>Age</Text>
                  <Text style={styles.valuePlaceHolder}>100</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={styles.row}>
                  <Text style={styles.titleText}>Number of People</Text>
                  <Text style={{ ...styles.valuePlaceHolder }}>100</Text>
                </View>
                <View style={{ ...styles.row, marginLeft: 10 }}>
                  <Text style={styles.titleText}>Occupation</Text>
                  <Text style={{ ...styles.valuePlaceHolder, minWidth: 300 }}>
                    100
                  </Text>
                </View>
              </View>
              {/* Family profile and picture  */}
              <View style={styles.row}>
                <View style={styles.row}></View>
                <View style={{ ...styles.row, marginLeft: 10 }}>
                  <Text style={{ ...styles.valuePlaceHolder, minWidth: 300 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni itaque optio eum ad modi et dolorum nulla fugiat!
                    Excepturi placeat magnam nisi non ad illum deserunt maxime
                    et animi unde.
                  </Text>
                </View>
              </View>
              {/* ---/ Family profile and picture  End --- */}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
}
