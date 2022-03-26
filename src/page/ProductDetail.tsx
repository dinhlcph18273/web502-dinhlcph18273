import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { read } from '../api/product';
import { ProductType } from '../types/product'

type ProductDetailProps = {
    products: ProductType[];
}

const ProductDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    const [products, setProduct] = useState<ProductType>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            setProduct(data)
        }
        getProduct()
    }, [])
    return (
        <div>
            <div className="row my-3">
                <div className="col-6">
                    <img src={products?.img} alt="" />
                </div>
                <div className="col-6">
                    <h1>{products?.name}</h1>
                    <p>{products?.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail