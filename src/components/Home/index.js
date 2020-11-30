import React from 'react'
import { IMAGE,ITEMNAME } from './Home'
import {products}  from '../../Data/data'
import {data}  from '../../Data/product_data'
import {Grid, Container, Paper, makeStyles, Typography,} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    productCard: {
        padding: "20px",
        height: "180px",
        backgroundColor: "#fefefef",
        marginTop: "50px",
        marginBottom: "150px",
    
    },
    Card: {
        padding: "20px",
        height: "180px",
        backgroundColor: "#fefefef",
        marginTop: "0px",
        borderColor: "2px solid #000",
        fontColor: "#800"
    },
    title: {
        fontSize: "25px",
        fontWeight: "600",
        marginBottom: "10px",
        fontColor: "#800"
    }
}))

const Home = () => {
    const classes = useStyles();
    

    return( <Container maxWidth="md">
        <Grid container spacing={3}>
            {products.map((product) => <Grid item xs={12} lg={3}>
                <Paper elevation={5} className={classes.productCard} key={product.id}>
                <a href={`/product/${product.id}`}>
                     <IMAGE src ={product.image} alt={product.name}/>
                </a>
                     <ITEMNAME>{product.name}</ITEMNAME>
                
                  
                </Paper>
            </Grid>)}
        </Grid>
        <Typography variant="h6" className={classes.title}>
            New stock
          </Typography>
        <Grid container spacing={0}>
       
            {data.map((product) => <Grid item xs={12} lg={3}>
        
                <Paper elevation={3} className={classes.Card} key={product.id}>
                  
                    <a href={`/product/${product.id}`}>
                        <IMAGE src ={product.image} alt={product.name}/>
                    </a>
                    <ITEMNAME>UGX {product.price}</ITEMNAME>
                  
                </Paper>
            
            </Grid>)}
        </Grid>
    </Container>)
}

export default Home
