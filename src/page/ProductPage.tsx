import React from 'react'
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
    <div className='flex'>
      <div>
        <ListCate category={props.category} />
      </div>
      <div>
        <ListProduct products={props.products} />
      </div>
    </div>
  )
}

export default ProductPage