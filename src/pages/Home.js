import { TextField, Typography } from '@material-ui/core'
import React from 'react'
import { Filters } from '../components/Filters'
import { Layout } from '../components/Layout'
import { ProductList } from '../components/ProductList'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector } from 'react-redux'
import { allProducts } from '../store/reducers/productSlice'
export const Home = () => {
    const [search, setSearch] = React.useState()
    const products = useSelector(allProducts)
    const limit = 10;
    const [count, setCount] = React.useState(Math.ceil(products.length / limit));
    const [page, setPage] = React.useState(1);
    const _handlechange = (e) => {
        e.persist()
        setSearch(e.target.value);
    }
    const handleCount = v => setCount(Math.ceil(v / limit))
    return (
        <Layout>
            <TextField placeholder="Search by name" onChange={_handlechange} />
            <Filters />
            <ProductList search={search} page={page} setCount={handleCount} setPage={setPage} limit={limit} />
            <Pagination count={count} page={page} onChange={(e, page) => setPage(page)} />
        </Layout>
    )
}
