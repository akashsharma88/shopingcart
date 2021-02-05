import { Typography } from '@material-ui/core'
import React from 'react'
import { RUPEE } from '../utils'

export const PriceComponent = ({ productPrice = 0, salePrice = 0 }) => {
    return (
        <div>
            <Typography variant="caption"  style={{ color: 'red' }} component="strike">
                {RUPEE}{parseFloat(productPrice).toFixed(2)}
            </Typography>
            <span style={{ color: 'red' }}>{` ${parseFloat(((productPrice -salePrice)*100/productPrice)).toFixed(2)}% OFF`}</span>

            <Typography variant="h5" component="h5">{RUPEE}{parseFloat(salePrice).toFixed(2)}</Typography>
        </div>
    )
}
