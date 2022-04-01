import React from 'react'
import Header from '../component/Header'
import ListCate from '../component/ListCate'
import ListProduct from '../component/ListProduct'
import { CategoryType } from '../types/category'
import { ProductType } from '../types/product'

type ProductPageProps = {
  products: ProductType[]
  category: CategoryType[]
}

const ProductPage = (props: ProductPageProps) => {
  return (
    <div>
      <div className='shadow-md'>
        <Header />
      </div>
      <div className='max-w-7xl mx-auto mb-10'>
        <h1 className="text-2xl my-7"><span className="opacity-70">Trang chủ</span> / Cửa hàng</h1>

        <div className='flex'>
          <div>
            <ListCate category={props.category} />
          </div>
          <div>
            <ListProduct products={props.products} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage