import { AppBar, Button, IconButton, makeStyles, Menu, Toolbar, Typography } from '@material-ui/core'
import { CardTravelRounded } from '@material-ui/icons';
import React from 'react'
import { Link, navigate } from "@reach/router"
import CartButton from './CartButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration:'none',
        color:'white'
    },
}));
export const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" className={classes.title}>
                        <Typography variant="h6" >
                            Alcowhiz products
                    </Typography>
                    </Link>

                    <CartButton onClick={_ => navigate('cart')} />
                    {/* <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu">
                        <CardTravelRounded />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}
