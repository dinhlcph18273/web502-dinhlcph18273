import React from 'react'
import Banner from '../component/Banner'
import Cate from '../component/Cate'
import Header from '../component/Header'
import ListProduct from '../component/ListProduct'
import Post from '../component/Post'
import { ProductType } from '../types/product'

type HomePageProps = {
    products: ProductType[]
    post: any[]
}

const HomePage = (props: HomePageProps) => {
    return (
        <div>
            <header className='max-w-7xl mx-auto'>
                <Header />
            </header>
            <div className='banner relative'>
                <Banner />
            </div>
            <div className='max-w-7xl mx-auto'>
                <Cate />
                <ListProduct products={props.products} />
                <Post post={props.post} />
            </div>
        </div>
    )
}

export default HomePage