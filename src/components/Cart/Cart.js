import React from 'react'
import { IMAGE,ITEMNAME } from '../Home/Home'
import {products}  from '../../Data/data'
import {Grid, Container, Paper, makeStyles, Typography, Button, CardMedia,} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    productCard: {
        // padding: "20px",
        height: "100px",
        width: "100px",
        backgroundColor: "#fefefef",
        marginRight: "20px",
        marginBottom: "0px",
        borderRadius: "10px"
    },
    bg: {
        background: "lightgrey",
        marginTop: "35px",
    },
    grid: {
        background: "#fff",
        marginTop: "35px",
        marginBottom: "35px",
        borderRadius: "2px"
    },
    Card: {
        padding: "20px",
        height: "220px",
        backgroundColor: "#fefefef",
        marginTop: "100px",
        marginLeft: "100px",
        borderColor: "2px solid #000",
        fontColor: "#800"
    },
    title: {
        fontSize: "25px",
        fontWeight: "600",
        // marginBottom: "10px",
        fontColor: "#800"
    },
    green: {
        backgroundColor: "#090"
    },
    div: {
        display: "flex",
        // marginTop: "30px",
    

    },
    content: {
        marginTop: "0px",
    },
    name: {
        fontSize: "18px",
        fontWeight: "700",
    },
    category: {
        fontSize: "16px",
        color: "grey",
        fontWeight: "400"
    },
    button: {
        height: "30px",
        margin: "5px"
    },
    foot: {
        display: "flex",
        flexDirection: "justify-content-between"
    },
    price: {
        fontSize: "20px",
        color: "yellow",
        background: "grey",
        borderRadius: "10px",
        padding: "5px",
        marginRight: "10px"
    },
    input: {
        border: "none",
        width: "100%",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    typography: {
        display: "flex",
        alignItems: "center",
        fontSize: "25px",
        fontWeight: "700",
        marginTop: "35px",
        color: "black"
    },
    tagName: {
        display: "flex",
        flexDirection: "flex-end",
        padding: "10px",
        marginTop: "10px"
    },
    total: {
        fontSize: "20px",
        fontWeight: "600",
        marginTop: "5px",
        marginRight: "10px"
    }
}))

const Cart = () => {
    const classes = useStyles();
    
    return <Container maxWidth="md" className={classes.bg}>
        <Grid container spacing={2}>
            <Grid item container className={classes.grid}  xs={12} lg={6}>
                 <div className={classes.div}>
                     <CardMedia image="/images/1.jpg" className={classes.productCard}/>
                     <div className={classes.content}>
                         <h1 className={classes.name}>Name</h1>
                         <h3 clssName={classes.category}>category</h3>
                         <div className={classes.foot}>
                             <span className={classes.price}>Price</span>
                             <Button 
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<Delete />}
                             >Remove</Button>
                         </div>
                     </div>
                 </div>
            </Grid>
            
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
                <input type="number" value="1" className={classes.input}/>
            </Grid>
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
                <Paper elevation={2} className={classes.input}>
                    <Typography variant="body2" align="center" classes={classes.typography}>Unit Price</Typography>
                    <Typography variant="body2" align="center" classes={classes.typography}>UGX 30,000</Typography>
                </Paper>
            </Grid>
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
            <Paper elevation={2} className={classes.input}>
                    <Typography variant="body2" align="center" classes={classes.typography}>Total Price</Typography>
                    <Typography variant="body2" align="center" classes={classes.typography}>UGX 70,000</Typography>
                </Paper>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item container className={classes.grid}  xs={12} lg={6}>
                 <div className={classes.div}>
                     <CardMedia image="/images/1.jpg" className={classes.productCard}/>
                     <div className={classes.content}>
                         <h1 className={classes.name}>Name</h1>
                         <h3 clssName={classes.category}>category</h3>
                         <div className={classes.foot}>
                             <span className={classes.price}>Price</span>
                             <Button 
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                startIcon={<Delete />}
                             >Remove</Button>
                         </div>
                     </div>
                 </div>
            </Grid>
            
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
                <input type="number" value="1" className={classes.input}/>
            </Grid>
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
                <Paper elevation={2} className={classes.input}>
                    <Typography variant="body2" align="center" classes={classes.typography}>UGX 30,000</Typography>
                </Paper>
            </Grid>
            <Grid item  spacing={1} xs={4} lg={2} className={classes.grid}>
            <Paper elevation={2} className={classes.input}>
                    <Typography variant="body2" align="center" classes={classes.typography}>UGX 70,000</Typography>
                </Paper>
            </Grid>

            <div className={classes.tagName}>
                <span className={classes.total}>Total</span>
                <span className={classes.price}>UGX 150000</span>
            </div>
            <div className={classes.tagName}>
                <Paper elevation={2}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    
                >
                    Continue shopping
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    
                >
                    CHECK OUT
                </Button>
                </Paper>
            </div>
        </Grid>
        
    </Container>
}

export default Cart