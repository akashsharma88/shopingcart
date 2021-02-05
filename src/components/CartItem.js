import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/reducers/cartSlice';
import { CartCountBtn } from './CartCountBtn';
import { RUPEE } from '../utils'
import { PriceComponent } from './PriceComponent';
export const CartItem = ({ data }) => {
    const useStyles = makeStyles({
        root: {
        },
    });
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <div style={{ flex: 1, width: '100%', padding: 10, display: 'flex' }}>
            <div style={{ flex: 0, padding: 5 }}>
                <img src={data.productImage} style={{ height: 150, width: 150, objectFit: 'contain' }} />
            </div>
            <div style={{ borderBottomWidth: 5, borderColor: 'lightgrey', flex: 1, display: 'flex' }}>
                <div style={{ flex: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div >
                        <Typography variant="h5" component="h5">{data.productName}</Typography>
                        <PriceComponent productPrice={data.productPrice} salePrice={data.salePrice} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <CartCountBtn product={data} />

                    </div>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="h5" component="h5">{RUPEE}{parseFloat(data.salePrice).toFixed(2) * data.quantity}</Typography>

                    <IconButton onClick={() => dispatch(removeFromCart(data.productId))}>
                        <Close />
                    </IconButton>
                </div>
            </div>

            <img />
        </div>
    )
}
