import React, {useState} from "react";
import {
  makeStyles,
  List,
  Typography,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  Collapse,
  Table,
  Divider,
  Hidden,
  IconButton,
  Grid,
  Paper
} from "@material-ui/core";
import { grey, green, blue, blueGrey, orange } from "@material-ui/core/colors";
// import OrderSummary from "./OrderSummary";

import {
  ShowChartOutlined,
  ShoppingCartOutlined,
  ExpandMoreOutlined,
  ContactSupport,
  MailOutline,
  InboxOutlined,
  LocalShippingOutlined,
  Check,
  ExpandLessOutlined,
} from "@material-ui/icons";
// import OrdersToolBar from "./OrdersToolBar";

const useStyles = makeStyles((theme) => ({
  root: {
    // padding: "20px",
    width: "100%",
    marginTop: "20px",
  },
  shipBtn: {
    backgroundColor: blue[600],
    color: "#fff",
  },
  collapse: {},
  listItem: {
    cursor: "pointer",
    transition: "0.3s ease",
    backgroundColor: theme.palette.common.white,
    marginTop: "10px",
    "&:hover": {
      transition: "0.3s ease",
      backgroundColor: orange[50],
    },
  },
  shippingDetails: {
    backgroundColor: grey[200],
    padding: "10px",
  },
  shipDPane: {
    ...theme.typography.body2,
    fontSize: "14px",
    color: blueGrey[500],
    padding: "1px",
    display: "flex",
    justifyContent: "space-between",
  },
  shipDPaneTitle: {
    padding: "0px 5px",
    fontWeight: "400",
  },
  shipDPaneBody: {
    padding: "0 5px",
    color: blueGrey[400],
  },
  loading: {
    color: blueGrey[500],
  },

  /**
   * Orders Summary List
   */
  orderSummaryRoot: {
    backgroundColor: grey[100],
  },
}));

const order_ = {
    buyer: "Oscar Realones",
    orderNo: "20381",
    orderTotal: "20000",
    orderCurrency: "UGX",
    orderTime: "4pm",
    orderDate: "10th May 2020",
    orderStatus: "Confirmed",
    shippingDetails: {
      shippingAddress: "Kitebi Kampala",
      shippingEmail: "phafixp@gmail.com",
      deliveryContact: "+256 704324970",
      postalCode: "Kitebi Kampala",
    },
    cart: [
      {
        productName: "Nokia A20",
        productPrice: "100",
        productId: "2811",
        quantity: "1",
        productDiscount: "0",
      },
      {
        productName: "Soap",
        productCategory: "",
        productPrice: "100000",
        productId: "293821",
        quantity: "10",
        productDiscount: "10%",
      },
    ],
    subTotal: "100",
    shippingFees: "10",
    handlingFees: "20",
    tax: "100",
    total: "122000",
  };

const ordersData = [
  order_, 
  order_,
  order_,
  order_, 
  order_,
  order_,
  order_, 
  order_,
  order_
];

function ShippingDetailsPane(props) {
  const classes = useStyles();
  return (
    <div className={classes.shipDPane}>
      <span className={classes.shipDPaneTitle}>{props.title}</span>
      <span className={classes.shipDPaneBody}>{props.children}</span>
    </div>
  );
}

function ShippingButton(props) {
  const classes = useStyles();

  const { order_shipped, shipOrder, size } = props;

  if (Boolean(order_shipped) === true) {
    return (
      <Button
        size={size}
        variant={props.variant}
        disabled
        startIcon={<Check />}
        className={classes.shipBtn}
        endIcon={<LocalShippingOutlined />}
        Shipped
      >
        Order Shipped
      </Button>
    );
  }

  return (
    <Button
      size={size}
      variant={props.variant}
      color="secondary"
      endIcon={<LocalShippingOutlined />}
    >
      Ship Order
    </Button>
  );
}

const TAX_RATE = 0.07;


function OrderSummary(props) {
  const classes = useStyles();
  const { cart, subTotal, tax, shippingFees, currency, total, handlingFees} = props.order;
  return (
    <Paper className={classes.orderSummaryRoot} variant="outlined">
      <List dense>
        {cart.map(({name, price, currency}, key) => (
          <React.Fragment key={key}>
            <ListItem>
              <ListItemText secondary="Paper Back">
                {name}
              </ListItemText>
              <ListItemSecondaryAction>
                <Typography>{price} {currency}</Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <div className="pl-3 pr-3">
              <Divider />
            </div>
          </React.Fragment>
        ))}
        <ListItem>
          <ListItemText>Subtotal</ListItemText>
          <ListItemSecondaryAction>{subTotal} {currency}</ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>Tax</ListItemText>
          <ListItemSecondaryAction>{tax} {currency}</ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>Shipping</ListItemText>
          <ListItemSecondaryAction>{shippingFees} {currency}</ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText>Handling</ListItemText>
          <ListItemSecondaryAction>{handlingFees} {currency}</ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Total</ListItemText>
          <ListItemSecondaryAction>{total} {currency}</ListItemSecondaryAction>
        </ListItem>
      </List>
    </Paper>
  );
}

export default function OrdersList(props) {
  const classes = useStyles();
  const [state, setState] = useState({ open_expand: {}, loading: false });

  const handleExpand = (index) => () => {
    setState({
      ...state,
      open_expand: { ...state.open_expand, [index]: !state.open_expand[index] },
    });
  };
  return (
    <List dense>
      {ordersData.map((order, key) => (
        <div key={key}>
          <ListItem className={classes.listItem} onClick={handleExpand(key)}>
            <ListItemText secondary={<span>6:00PM May 12 2020</span>}>
              Oscar Realones
            </ListItemText>
            <ListItemSecondaryAction>
              <Hidden smDown>
                <ShippingButton variant="outlined" />
                <Button
                  // size="small"
                  variant="outlined"
                  onClick={handleExpand(key)}
                  startIcon={<ShoppingCartOutlined />}
                  endIcon={
                    Boolean(state.open_expand[key]) === true ? (
                      <ExpandLessOutlined />
                    ) : (
                      <ExpandMoreOutlined />
                    )
                  }
                  color="primary"
                >
                  $192.00 USD
                </Button>
              </Hidden>
              <Hidden mdUp>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={handleExpand(key)}
                  endIcon={<ExpandMoreOutlined />}
                  color="primary"
                >
                  <ShoppingCartOutlined />
                </Button>
              </Hidden>
            </ListItemSecondaryAction>
          </ListItem>
          <Collapse className={classes.collapse} in={state.open_expand[key]}>
            <Hidden mdUp>
              <div
                className=" d-flex justify-content-between w-100"
                style={{
                  backgroundColor: grey[50],
                }}
              >
                <Typography className="pl-3" color="primary">
                  $192.00 USD
                </Typography>
                <ShippingButton variant="contained" size="small" />
              </div>
            </Hidden>
            <Grid container className={classes.shippingDetails}>
              <Grid item xs={12}>
                <Typography className="pl-2">Shipping Details</Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <ShippingDetailsPane title="Country">
                  Uganda
                </ShippingDetailsPane>
                <ShippingDetailsPane title="City">Kampala</ShippingDetailsPane>
                <ShippingDetailsPane title="Phone">
                  +1283 29290 292
                </ShippingDetailsPane>
              </Grid>
              <Grid item xs={12}>
                <ShippingDetailsPane title="Email">
                  phafixp@gmail.com
                </ShippingDetailsPane>
                <ShippingDetailsPane title="Postal Code">
                  26182
                </ShippingDetailsPane>
              </Grid>
              <Grid item xs={12}>
                <ShippingDetailsPane title="Address Line">
                  Kampla Uganda 4572 street
                </ShippingDetailsPane>
              </Grid>
            </Grid>
            <OrderSummary
              order={order}
            />
          </Collapse>
        </div>
      ))}
    </List>
  );
}
