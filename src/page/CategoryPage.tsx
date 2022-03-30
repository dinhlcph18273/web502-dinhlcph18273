import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readCate } from '../api/category'
import { CategoryType } from '../types/category'

type CategoryPageProps = {
    category: CategoryType[]
}

const CategoryPage = (props: CategoryPageProps) => {
    const [categories, setCategories] = useState<any>()
    const { id } = useParams()
    useEffect(() => {
        const getCategory = async () => {
            const { data: { products } } = await readCate(id)
            setCategories(products)
        }
        getCategory()
    }, [])
    return (
        <div>

            {categories?.map((item, index) => {
                return (
                    <div className="col-3" key={index} >
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.img} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className='block'>{item.price}</p>
                                <a href={`products/${item._id}`} className="btn btn-primary">Chi tiết</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryPage