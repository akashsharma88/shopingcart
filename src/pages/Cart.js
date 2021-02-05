import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartList } from '../components/CartList'
import { Layout } from '../components/Layout'
import { OrderComponent } from '../components/OrderComponent'
import { cartCount } from '../store/reducers/cartSlice'
import emptycart from '../images/emptycart.png'
const useStyles = makeStyles(theme => ({
    center: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100vh - 100px)' }
}))

export const Cart = () => {
    const count = useSelector(cartCount)
    const classes = useStyles()
    if (!count)
        return (
            <Layout>
                <div >
                    <img className={classes.center} src={emptycart} alt="empty cart" style={{objectFit:'contain'}} />
                </div>
            </Layout>
        )
    return (
        <Layout>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={9} lg={9}>
                    <Card variant="outlined">
                        <CardContent>
                            <CartList />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <OrderComponent />

                </Grid>
            </Grid>
        </Layout>
    )
}
