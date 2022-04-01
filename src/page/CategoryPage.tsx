import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { readCate } from '../api/category'
import Header from '../component/Header'
import ListCate from '../component/ListCate'
import { CategoryType } from '../types/category'

type CategoryPageProps = {
    category: CategoryType[]
}

const CategoryPage = (props: CategoryPageProps) => {
    const [categories, setCategories] = useState<any[]>()
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
            <div className='shadow-md'>
                <Header />
            </div>
            <div className='flex my-5 max-w-7xl mx-auto mb-10'>
                <div>
                    <ListCate category={props.category} />
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    {categories?.map((product, index) => {
                        return (
                            <div className="border text-center hover:shadow-2xl transition ease-in-out duration-500" key={index}>
                                <div className="overflow-hidden">
                                    <a href={`/products/${product._id}`}><img className="mx-auto hover:scale-125 transition ease-in-out duration-500 " src={`${product.img}`} alt="" /></a>
                                </div>
                                <div>
                                    <p className="text-center my-2 px-2 overflow-hidden text-ellipsis h-[27px]"><a href={`/products/${product._id}`} className="text-[1.125rem] hover:text-lime-500">{product.name}</a></p>
                                    <p className="text-center text-lime-600 text-lg mb-2">{product.price} đ</p>
                                </div>
                                <button data-id="${product.id}" className="btn-add px-6 py-1 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryPage