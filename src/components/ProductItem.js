import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, makeStyles, Typography } from '@material-ui/core'
import { navigate } from '@reach/router';
import React from 'react'
import { RUPEE } from '../utils';
import { CartCountBtn } from './CartCountBtn';
import { PriceComponent } from './PriceComponent';

export const ProductItem = ({ data }) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        title: { textOverflow: "ellipsis", overflow: "hidden", whiteSpace: 'nowrap' },
        productImage: { objectFit: 'contain', padding: 5 }
    });
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} variant="outlined">
                <CardActionArea onClick={_ => navigate(`/product/${data.productId}`)}>
                    <CardMedia
                        component="img"
                        alt={data.productName}
                        // height="413"
                        width={200}
                        className={classes.productImage}
                        image={data.productImage[0]}
                        title={data.productName}
                    />

                    <CardContent >
                        <Typography gutterBottom variant="h5" title={data.productName} component="h5" className={classes.title}>
                            {data.productName}
                        </Typography>
                        <PriceComponent productPrice={data.productPrice} salePrice={data.salePrice} />
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <CartCountBtn product={data} />
                </CardActions>
            </Card>
        </div>
    )
}
