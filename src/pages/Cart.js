import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartList } from '../components/CartList'
import { Layout } from '../components/Layout'
import { cartCount } from '../store/reducers/cartSlice'

export const Cart = () => {
    const count = useSelector(cartCount)
    if (!count)
        return (
            <Layout>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h1">No items in your cart</Typography>
                </div>
            </Layout>
        )
    return (
        <Layout>
            <Typography variant="h1" >Cart</Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Card variant="outlined">
                        <CardContent>
                            <CartList />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Card variant="outlined">
                        <CardContent>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Typography variant="body1">Subtotal</Typography>
                                        </td>
                                        <td>
                                            <Typography variant="body1">233</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Typography variant="body1">Tax</Typography>
                                        </td>
                                        <td>
                                            <Typography variant="body1">23</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Typography variant="body1">Discount</Typography>
                                        </td>
                                        <td>
                                            <Typography variant="body1">3</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Typography variant="body1">Total</Typography>
                                        </td>
                                        <td>
                                            <Typography variant="body1">3333</Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </Layout>
    )
}
