import { Button, IconButton, Typography } from '@material-ui/core'
import { Add, AddCircleOutlined, PlusOneRounded, RemoveCircleOutlined, RemoveCircleRounded, RemoveRounded } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartValue, addToCart, updateQuantity } from '../store/reducers/cartSlice'
export const CartCountBtn = ({ product }) => {
    const dispatch = useDispatch()
    const value = useSelector(cartValue(product.productId)) || 0
    if (!value)
        return (
            <Button onClick={_ => dispatch(addToCart(product))}>Add to cart</Button>
        )

    return (
        <div>
            <IconButton  color="primary" onClick={_ => dispatch(updateQuantity({ productId: product.productId, qty: value - 1 }))}>
                <RemoveCircleOutlined />
            </IconButton>
            <Typography variant="body2" component="span">{value}</Typography>
            <IconButton color="primary" onClick={_ => dispatch(updateQuantity({ productId: product.productId, qty: value + 1 }))}>
                <AddCircleOutlined />
            </IconButton>

        </div>
    )
}
