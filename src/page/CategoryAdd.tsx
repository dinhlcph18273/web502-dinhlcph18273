import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    name: string,
    img: string
}
type CategoryAddProps = {
    onAddCate: (category: Inputs) => void
}

const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = data => {
        props.onAddCate(data)
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
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}

export default CategoryAdd