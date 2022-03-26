import React from 'react'
import { ProductType } from '../types/product'

type ListProductProps = {
    products: ProductType[]
}

const ListProduct = ({ products }: ListProductProps) => {
    return (
        <div>
            <div>
                <div className="row m-auto mt-5">
                    {products?.map((product, index) => {
                        return (
                            <div className="col-3" key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={product.img} className="card-img-top" alt={product.img} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className='block'>{product.price}</p>
                                        <a href={`products/${product._id}`} className="btn btn-primary">Chi tiết</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default ListProduct