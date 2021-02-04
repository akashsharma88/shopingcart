import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { RUPEE } from '../utils';
import { CartCountBtn } from './CartCountBtn';

export const ProductItem = ({ data }) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        
        },
    });
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={data.productName}
                        height="413"
                        width={200}
                        style={{objectFit:'contain',padding:10}}
                        image={data.productImage[0]}
                        title={data.productName}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" style={{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:'nowrap'}}>
                            {data.productName}
                        </Typography>
                        <Typography variant="caption" style={{ color: 'red' }} component="strike">
                            {RUPEE}{parseFloat(data.productPrice).toFixed(2)}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" component="span">{RUPEE}{parseFloat(data.salePrice).toFixed(2)}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <CartCountBtn product={data} />
                </CardActions>
            </Card>
        </div>
    )
}
