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

function List() {
    const [productList, setProductList] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const getListOfProducts = () => {
        getProducts().then((response) => {
            setProductList(response.data);
        })
    }

    useEffect(() => {
        getListOfProducts();
    })

    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
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
                                        heigth="194"
                                        image={data.image.url}
                                    />
                                    <CardContent>
                                        <Typography color="textPrimary" gutterBottom>
                                            Title: {data.title}
                                        </Typography>
                                        <Typography color="textPrimary">
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
                                            disabled={quantity < 1}
                                            onClick={decreaseQuantity}>-</Button>
                                        <span className="quantity">{quantity}</span>
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

export default List;
