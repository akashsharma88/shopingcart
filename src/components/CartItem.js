import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core'
import { Close } from '@material-ui/icons';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/reducers/cartSlice';
import { CartCountBtn } from './CartCountBtn';
import { RUPEE } from '../utils'
export const CartItem = ({ data }) => {
    const useStyles = makeStyles({
        root: {
        },
    });
    const classes = useStyles();
    const dispatch = useDispatch()
    console.log(data)
    return (
        <div style={{ flex: 1, width: '100%', padding: 10, display: 'flex' }}>
            <div style={{ flex: 0, padding: 5 }}>
                <img src={data.productImage} style={{ height: 200, width: 200, objectFit: 'contain' }} />
            </div>
            <div style={{ borderBottomWidth: 1, borderColor: 'lightgrey', flex: 1, display: 'flex' }}>
                <div style={{ flex: 4 }}>
                    <Typography variant="h4" component="h4">{data.productName}</Typography>
                    <Typography variant="caption" component="strike" style={{ color: 'red' }}>{RUPEE}{parseFloat(data.productPrice).toFixed(2)}</Typography>
                    <Typography variant="h5" component="h5">{RUPEE}{parseFloat(data.salePrice).toFixed(2)}</Typography>
                </div>
                <div style={{ flex: 2 }}>
                    <Typography variant="body1">{RUPEE}{parseFloat(data.salePrice).toFixed(2) * data.quantity}</Typography>
                    <CartCountBtn product={data} />
                    <IconButton onClick={() => dispatch(removeFromCart(data.productId))}>
                        <Close />
                    </IconButton>
                </div>
            </div>

            <img />
        </div>
    )
}
