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
import {connect, useDispatch} from "react-redux";
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

    const dispatch = useDispatch();

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
                                        <Typography className="description" color="textPrimary" gutterBottom>
                                            Description: {data.description}
                                        </Typography>
                                        <Typography color="textPrimary" gutterBottom>
                                            Price: Rs {data.price}
                                        </Typography>
                                    </CardContent>
                                    <div>
                                        <ShoppingCartIcon/>
                                        <span className="sectionQuantity">
                                        <Button
                                            variant="contained"
                                            disabled={props.quantity.quantity < 2}
                                            onClick={() => {
                                                dispatch(decrement(props.quantity, data.id))
                                            }}>-</Button>
                                                <span className="quantity">{props.quantity.quantity}</span>
                                                    <Button
                                                        variant="contained"
                                                        onClick={() => {
                                                            dispatch(increment(props.quantity.quantity, data.id))
                                                        }}>+</Button>
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
