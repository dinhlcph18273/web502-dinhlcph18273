import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { CategoryType } from '../types/category'

type Inputs = {
    name: string,
    price: number,
    img: string,
    category: any
}
type ProductAddProps = {
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput);
        navigate("/admin/products");
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Tên Sản phẩm</label>
                        <input type="text" className="form-control" id="name" {...register('name', { required: true })} />
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá Sản phẩm</label>
                        <input type="number" className="form-control" id="price" {...register('price', { required: true })} />
                        {errors.price && <span>Bat buoc nhap truong nay</span>}
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select {...register('category')} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value={`6242e1e4163be05a4ba3ab90`}>Danh mục 1</option>
                                <option value={`6242e1e7163be05a4ba3ab92`}>Danh mục 2</option>
                                <option value={`6242e577e5d985aa3392365f`}>Danh mục 3</option>
                                <option value={`6242f007e5d985aa33923696`}>Danh mục 4</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Ảnh Sản phẩm</label>
                        <input type="text" className="form-control" id="img" {...register('img', { required: true })} />
                        {errors.img && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd