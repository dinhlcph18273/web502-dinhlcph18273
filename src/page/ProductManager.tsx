import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductManagerProps = {
    products: ProductType[]
    onRemove: (_id: number) => void
}

const ProductManager = ({ products, onRemove }: ProductManagerProps) => {
    return (
        <div>
            <h2>List Sản Phẩm</h2>
            <Link to="/admin/products/add">Thêm</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Img</th>
                        <th scope="col">Price</th>
                        <th scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td className='text-2xl'>{product.name}</td>
                            <td><img src={product.img} alt="" width="30%" /></td>
                            <td>{product.price}</td>
                            <td>
                                <Link className='btn btn-primary' to={`/admin/products/${product._id}/edit`}>Edit</Link>
                                <button onClick={() => onRemove(product._id)} className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManager