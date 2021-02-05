import { Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectedBrand, selectedCategory } from '../store/reducers/filterSlice';
import { allProducts } from '../store/reducers/productSlice';
import { ProductItem } from './ProductItem'
export const ProductList = ({ search, page = 1, setPage, setCount, limit = 10 }) => {
    const products = useSelector(allProducts);
    const [productData, setProductData] = React.useState(products)
    const brand = useSelector(selectedBrand);
    const category = useSelector(selectedCategory);

    React.useEffect(() => {
        if (brand?.length || category?.length || search?.length) {
            const p = products.filter(v => (search && v.productName.toLowerCase().indexOf(search.toLowerCase()) !== -1) || (brand && brand.includes(v.productBrand) || (category && category.includes(v.productCategory))));
            setProductData(p)
            setPage(1)
            setCount(p.length)
        } else {
            setProductData(products)
            setCount(products.length);

        }
    }, [brand, category, search])
    return (
        <div>
            <Grid container spacing={1}>
                {productData.slice((page - 1) * limit, page * limit).map(v =>
                    <Grid item xs={6} sm={6} md={4} lg={3} key={v.productId}>
                        <ProductItem data={v} />
                    </Grid>
                )}
            </Grid>

        </div>
    )
}
