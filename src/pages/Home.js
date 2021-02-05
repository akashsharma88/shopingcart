import { Button, Dialog, Fab, Grid, Hidden, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Filters } from '../components/Filters'
import { Layout } from '../components/Layout'
import { ProductList } from '../components/ProductList'
import Pagination from '@material-ui/lab/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../store/reducers/productSlice'
import { Filter, Filter1Outlined, FilterList } from '@material-ui/icons'
import { clearFilter } from '../store/reducers/filterSlice'
export const Home = () => {
    const [search, setSearch] = React.useState()
    const products = useSelector(allProducts)
    const limit = 12;
    const [count, setCount] = React.useState(Math.ceil(products.length / limit));
    const [page, setPage] = React.useState(1);
    const [open, setOpen] = React.useState(false)
    const _handlechange = (e) => {
        e.persist()
        setSearch(e.target.value);
    }
    const dispatch = useDispatch();
    const handleCount = v => setCount(Math.ceil(v / limit))
    const _handleCancel = e => {
        dispatch(clearFilter());
        setOpen(false)
    }
    return (
        <Layout>
            <div style={{ paddingBottom: 50 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3} lg={3}>
                        <TextField variant="outlined" style={{ width: '100%', display: 'flex', alignSelf: 'center' }} placeholder="Search by name" onChange={_handlechange} />
                        <br />
                        <Hidden smDown>
                            <Filters />
                        </Hidden>
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                        <ProductList search={search} page={page} setCount={handleCount} setPage={setPage} limit={limit} />
                        <br />
                        <Pagination size="large" variant="outlined" count={count} page={page} onChange={(e, page) => setPage(page)} />

                    </Grid>
                </Grid>


            </div>
            <Hidden mdUp>
                <Fab style={{ position: 'fixed', bottom: 20, right: 20 }} color="primary" onClick={_ => setOpen(true)}>
                    <FilterList />
                    </Fab>
            </Hidden>
            <Dialog fullScreen={true} open={open}>
                <div style={{padding:10}}>
                    <div style={{marginBottom:70}}>
                    <Filters />

                    </div>
                <div style={{ position: 'fixed', bottom: 10, backgroundColor: '#fff',  paddingTop: 10,paddingBottom:10, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Button onClick={_handleCancel}>Clear</Button>
                    <Button variant="contained" color="primary" onClick={_ => setOpen(false)}>Apply</Button>
                </div>
                </div>
                
            </Dialog>
        </Layout>
    )
}
