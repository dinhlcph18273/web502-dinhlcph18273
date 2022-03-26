import React from 'react'
import Banner from '../component/Banner'
import ListProduct from '../component/ListProduct'
import { ProductType } from '../types/product'

type HomePageProps = {
    products: ProductType[]
}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            <Banner />
            <ListProduct products={props.products} />
        </div>
    )
}

export default HomePage