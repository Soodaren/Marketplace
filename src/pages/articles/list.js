import React, {useEffect, useState} from "react";
import {getProducts} from "../../service/getProducts";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {Typography} from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './list.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {connect} from "react-redux";
import {increment, decrement} from "../../actions/quantityActions";

function List(props) {
    const [productList, setProductList] = useState([]);

    const getListOfProducts = () => {
        getProducts().then((response) => {
            setProductList(response.data);
        })
    }

    useEffect(() => {
        getListOfProducts();
    })

    const decreaseQuantity = () => {
        props.dispatch(decrement())
    }

    const increaseQuantity = () => {
        props.dispatch(increment())
    }

    return (
        <>
            <h1 className="hd">List of articles</h1>
            <Box className="listProduct">
                {productList.map(data => {
                    return (
                        <Grid
                            container
                            spacing={2}
                            className="productCard"
                            key={data.id}
                        >
                            <Grid item md={9}>
                                <Card variant="outlined">
                                    <CardMedia
                                        component="img"
                                        className="productImg"
                                        image={`https://akata-marketplace.goavana.com${data.image.url}`}
                                    />
                                    <CardContent>
                                        <Typography color="textPrimary" gutterBottom>
                                            Title: {data.title}
                                        </Typography>
                                        <Typography className="description" color="textPrimary">
                                            Description: {data.description}
                                        </Typography>
                                    </CardContent>
                                    <Typography color="textPrimary" gutterBottom>
                                        Price: {data.price}
                                    </Typography>
                                    <div>
                                        <ShoppingCartIcon/>
                                        <span className="sectionQuantity">
                                        <Button
                                            variant="contained"
                                            // disabled={quantity < 1}
                                            onClick={decreaseQuantity}>-</Button>
                                        <span className="quantity">{props.quantity}</span>
                                        <Button
                                            variant="contained"
                                            onClick={increaseQuantity}>+</Button>
                                        </span>
                                    </div>
                                </Card>
                            </Grid>
                        </Grid>
                    )
                })}
            </Box>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        quantity: state.quantity
    }
}
export default connect(mapStateToProps)(List);
