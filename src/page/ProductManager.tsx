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
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase  '>
                        <tr>
                            <th scope="col" className='px-6 py-3'>#</th>
                            <th scope="col" className='px-6 py-3'>Name</th>
                            <th scope="col" className='px-6 py-3'>Img</th>
                            <th scope="col" className='px-6 py-3'>Status</th>
                            <th scope="col" className='px-6 py-3'>Price</th>
                            <th scope="col" className='px-6 py-3'>Desc</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product, index) => {
                            return <tr key={index}>
                                <td className='tbg-white border-b text-center'>{index + 1}</td>
                                <td className=''>{product.name}</td>
                                <td><img src={product.img} alt="" width="30%" /></td>
                                <td>{product.status}</td>
                                <td>{product.price}</td>
                                <td>{product.desc}</td>
                                <td className='flex'>
                                    <Link className='btn btn-primary' to={`/admin/products/${product._id}/edit`}>Edit</Link>
                                    <button onClick={() => onRemove(product._id)} className='btn btn-danger'>Remove</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductManager