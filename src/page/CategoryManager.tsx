import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../types/category'

type CategoryManagerProps = {
    category: CategoryType[]
    onRemoveCate: (_id: number) => void
}

const CategoryManager = ({ category, onRemoveCate }: CategoryManagerProps) => {
    return (
        <div>
            <h2>List danh mục</h2>
            <Link to="/admin/category/add">Thêm</Link>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase  '>
                    <tr>
                        <th scope='col' className='px-6 py-3'>#</th>
                        <th scope='col' className='px-6 py-3'>Tên danh mục</th>
                        <th scope='col' className='px-6 py-3'>Ảnh</th>
                        <th scope='col' className='px-6 py-3'></th>
                    </tr>
                </thead>

                <tbody>
                    {category?.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.img} alt="" /></td>
                            <td>
                                <Link className='btn btn-primary' to={`/admin/category/${item._id}/edit`}>Edit</Link>
                                <button onClick={() => onRemoveCate(item._id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CategoryManager