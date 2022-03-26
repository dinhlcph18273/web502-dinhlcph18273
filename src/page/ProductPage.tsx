import React from 'react'
import ListProduct from '../component/ListProduct'
import { ProductType } from '../types/product'

type ProductPageProps = {
  products: ProductType[]
}

const ProductPage = (props: ProductPageProps) => {
  return (
    <div>
      <ListProduct products={props.products} />
    </div>
  )
}

export default ProductPage