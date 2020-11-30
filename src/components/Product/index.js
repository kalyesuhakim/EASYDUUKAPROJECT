import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { single } from '../../Data/Single'
import { data } from '../../Data/product_data'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    marginTop: "60px",
    height: "600px"
  },
  image: {
    width: 400,
    height: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  caption: {
    width: '100px',
    height: '100px',
    border: "1px solid grey",
    borderRadius: "10px"
  },
  product: {
    display: "grid",
    gridTemplateColumns:"1fr 1fr 1fr",
    padding: "10px",
    marginTop: "25px"
  },
  category: {
    fontSize: "24px",
    fontWeight: "700",
    // padding: "1rem",
    margin: "0px",
    color: "orange",
  },
  name: {
    fontSize: "20px",
    fontWeight: "700",
    // padding: "1rem",
    lineHeight: "2px"

  },
  price: {
    fontSize: "18px",
    fontWeight: "700",
    // padding: "1rem",
    lineHeight: "2px"

  },
  descs: {
    fontSize: "19px",
    color: "grey",
    // padding: "1rem",
    

  },
  desc: {
    fontSize: "19px",
    color: "grey",
    // padding: "1rem",
    lineHeight: "2px"

  },
  description:{
    padding: "5px",
    // borderLeft: "2px solid grey"
  },
  footer :{
    border: "1px solid orange",
    borderRadius: "10px",
    padding: "4px",
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    height: "250px"
  },
  span: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    marginTop: "-10px",
    alignItems: "center"
  },
  status: {
    color: "green"
  },
  back:{
    textDecoration: "none",
    padding: "10px",
    marginTop: "50px",
    // marginLeft: "35px",
    color: "blue",
    background: "orange",
    borderRadius: "15px"
  }
}));

const Product = (props) => {
  const classes = useStyles();
  // const single = data.find(x => x.id === props.match.params.id);
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
      <a href="/" className={classes.back}>BACK TO HOME</a>

          {single.map(item => (
              <div className={classes.product}>
                <div>
                  <img src={item.image} alt={item.name} className={classes.img} />
                </div>
                <div className={classes.description}>
                  <p className={classes.category}>{item.category}</p>
                  <p className={classes.name}>{item.name}</p>
                  <p className={classes.price}>${item.price}</p>
                  <p className={classes.descs}>{item.desc}</p>
                  <img src={item.image} alt={item.name} className={classes.caption}/>
                </div>
                <div className={classes.footer}>
                  <h2 className={classes.category}>{item.name}</h2>
                  <span className={classes.span}>
                  <h2 className={classes.price}>Price </h2>
                  <h2 className={classes.category}>${item.price}</h2>
                  </span>
                  <span className={classes.span}>
                  <h2 className={classes.desc}>Status</h2>
                  <h2 className={classes.status}>In stock</h2>
                  </span>
                  <span className={classes.span}>
                  <h2>Qty</h2>
                  <h2>5</h2>
                  </span>
                  <span>
                  <Button 
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      
                    >ADD TO CART
                  </Button>
                  </span>
                </div>
              </div>
          ))}
      </Paper>
    </div>
  );
}


export default Product