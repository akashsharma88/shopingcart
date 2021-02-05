import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { CartCountBtn } from '../components/CartCountBtn'
import { Layout } from '../components/Layout'
import { PriceComponent } from '../components/PriceComponent'
import { getProductById } from '../store/reducers/productSlice'

export const Product = ({ productId }) => {
    const data = useSelector(getProductById(productId))
    const [imageIndex, setImage] = React.useState(0)
    return (
        <Layout>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <img src={data.productImage[imageIndex]} style={{ height: 'calc(100vh - 300px)',  objectFit: 'contain' }} />

                        </CardContent>
                    </Card>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        {data.productImage.map((v, i) =>
                            <Card variant="outlined">
                                <CardActionArea onClick={_ => setImage(i)}>
                                    <CardContent>
                                        <img src={v} style={{ height: 50, maxWidth: 50, objectFit: 'contain' }} />
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )}
                    </div>

                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <div>
                        <Typography variant="h5">{data.productName}</Typography>
                        <PriceComponent productPrice={data.productPrice} salePrice={data.salePrice} />
                        <Typography variant="h6" component="h6">Product description</Typography>

                        <Typography variant="body2" component="p">{data.description}</Typography>
                    </div>
                    <br />
                    <CartCountBtn product={data} />
                    <br />

                    <div>
                        <Typography variant="h6" component="h6">Specifications</Typography>
                        <table>
                            <tbody>
                                <tr>
                                    <td>cpu</td>
                                    <td>{data.cpu}</td>
                                </tr>
                                <tr>
                                    <td>camera</td>
                                    <td>{data.camera}</td>
                                </tr>
                                <tr>
                                    <td>size</td>
                                    <td>{data.size}</td>
                                </tr>
                                <tr>
                                    <td>weight</td>
                                    <td>{data.weight}</td>
                                </tr>
                                <tr>
                                    <td>display</td>
                                    <td>{data.display}</td>
                                </tr>
                                <tr>
                                    <td>battery</td>
                                    <td>{data.battery}</td>
                                </tr>
                                <tr>
                                    <td>memory</td>
                                    <td>{data.memory}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Grid>
            </Grid>
        </Layout>
    )
}
