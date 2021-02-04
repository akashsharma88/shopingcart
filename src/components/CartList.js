import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { allCartItems } from '../store/reducers/cartSlice';
import { CartItem } from './CartItem';
export const CartList = () => {
    const cartItems = useSelector(allCartItems);
    return (
        <div>
            <Grid container spacing={2} direction="column">
                {cartItems.map(v =>
                    <Grid item key={v.productId}>
                        <CartItem data={v} />
                    </Grid>
                )}
            </Grid>

        </div>
    )
}
