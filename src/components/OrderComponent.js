import { Button, Card, CardActions, CardContent, Dialog, DialogContent, DialogTitle, List, ListItem, makeStyles, Typography } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, productTotalCartAmount, taxAmount, totalCartAmount, totalDiscountAmount } from '../store/reducers/cartSlice'
import { RUPEE } from '../utils'


const useStyles = makeStyles(theme => ({
    listItem: { display: 'flex', justifyContent: 'space-between' }
}))

export const OrderComponent = () => {
    const totalAmount = useSelector(totalCartAmount)
    const discountAmount = useSelector(totalDiscountAmount)
    const tax = useSelector(taxAmount)
    const productTotal = useSelector(productTotalCartAmount)
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()
    const placeOrder = () => {
        setOpen(true)
        setTimeout(() => {
            dispatch(clearCart())
            setOpen(false)
        }, 2000)
    }
    return (
        <div>
            <Card variant="outlined">
                <CardContent>
                    <List dense>
                        <ListItem key={1} className={classes.listItem}>
                            <Typography variant="body1">Total</Typography>
                            <Typography variant="body1">{RUPEE}{productTotal}</Typography>

                        </ListItem>
                        <ListItem key={2} className={classes.listItem}>
                            <Typography variant="body1">Discount</Typography>
                            <Typography variant="body1">-{RUPEE}{discountAmount}</Typography>

                        </ListItem>
                        <ListItem key={3} className={classes.listItem}>
                            <Typography variant="body1">Subtotal</Typography>
                            <Typography variant="body1">{RUPEE}{(totalAmount - tax).toFixed(2)}</Typography>

                        </ListItem>
                        <ListItem key={4} className={classes.listItem}>
                            <Typography variant="body1">Tax</Typography>
                            <Typography variant="body1">{RUPEE}{tax}</Typography>

                        </ListItem>
                        <ListItem key={5} className={classes.listItem} >
                            <Typography variant="h5" component="h5" >Order Total</Typography>
                            <Typography variant="h5" component="h5">{RUPEE}{totalAmount}</Typography>

                        </ListItem>
                    </List>
                </CardContent>
                <CardActions>
                    <Button fullWidth color="primary" variant="contained" onClick={placeOrder}>Place order</Button>
                </CardActions>
            </Card>
            <Dialog open={open}>
                <DialogContent>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircleOutline color="primary" style={{fontSize:72}} />

                    </div>
                    <DialogTitle>Thanks you, your order has been placed successfully</DialogTitle>

                </DialogContent>
            </Dialog>
        </div>
    )
}
