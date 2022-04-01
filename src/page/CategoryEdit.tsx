import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { readCate } from '../api/category'
import { CategoryType } from '../types/category'


type CategoryEditProps = {
    onEditCate: (category: CategoryType) => void
}

const CategoryEdit = (props: CategoryEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<CategoryType>()
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const getCategory = async () => {
            const { data: { category } } = await readCate(id)
            reset(category)
        }
        getCategory()
    }, [])

    const onSubmit: SubmitHandler<CategoryType> = data => {
        props.onEditCate(data)
        navigate("/admin/category")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Tên danh mục</label>
                    <input type="text" className="form-control" id="" {...register('name', { required: true })} />
                    {errors.name && <span>Bat buoc nhap truong nay</span>}

                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Ảnh danh mục</label>
                    <input type="text" className="form-control" id="" {...register('img', { required: true })} />
                    {errors.name && <span>Bat buoc nhap truong nay</span>}

                </div>
                <button type="submit" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Edit</button>
            </form>
        </div>
    )
}

export default CategoryEdit