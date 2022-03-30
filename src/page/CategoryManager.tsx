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
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Tên danh mục</th>
                        <th scope='col'>Ảnh</th>
                        <th scope='col'></th>
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