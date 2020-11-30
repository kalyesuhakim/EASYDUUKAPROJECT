import React from "react";
import {
  Grid,
  makeStyles,
  Typography,
  Container,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import { fontWeight } from "@material-ui/system";
import { Phone, WhatsApp, Email, LocationCity } from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: grey[100],
  },
  footerHeading: {
    // color: theme.palette.primary.contrastText,
    // color: theme.palette.primary.contrastText,
    fontWeight: 400,
    fontSize: "20px",
  },
  text: {
    // color: theme.palette.primary.contrastText,
  },
  copywrite: {
    padding: "20px 0px",
    boxShadow: theme.boxShadows[3],
    background: grey[200],
  },
}));

export default function SiteFooter(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className="mt-5 mb-5">
        <Container maxWidth="lg">
          <Grid container spacing={3} component="footer">
            <Grid item xs={12} md={4}>
              <Typography className={classes.footerHeading}>About</Typography>
              <Divider className="w-50 mt-3 mb-3" />
              <Typography className={classes.text}>
                HapiPie Limited is an all in one digital solution for media,
                digital marketing and Information technology services for
                businesses to operate in this post-COVID-19 digital era.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.footerHeading}>
                Services
              </Typography>
              <Divider className="w-50 mt-3 mb-3" />
              <List dense className={classes.text}>
                <ListItem>
                  <ListItemText>Tech Services</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Digital Marketing</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Media Services</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Photography</ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography className={classes.footerHeading}>Contact</Typography>
              <Divider className="w-50 mt-3 mb-3" />
              <List component="address" dense className={classes.text}>
                <ListItem component="a" href="mailto:info@hapipie.com">
                  <ListItemIcon>
                    <Email />
                  </ListItemIcon>
                  <ListItemText className={classes.text}>
                    info@hapipie.com
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone />
                  </ListItemIcon>
                  <ListItemText>+256 755920088</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WhatsApp />
                  </ListItemIcon>
                  <ListItemText>+256 788682602</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationCity />
                  </ListItemIcon>
                  <ListItemText>
                    P.O.Box 74953 Kampala <br /> Nyanama Village Mall
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid className={classes.copywrite} item xs={12} align="center">
        <Typography className={classes.text}>
          &copy; All rights reserved HapiPie Limited {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  );
}
