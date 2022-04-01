import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'


type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductType>()
    const { id } = useParams();
    console.log(id);

    const navigate = useNavigate()
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await read(id)
            reset(data)
        }
        getProducts()
    }, [])

    const onSubmit: SubmitHandler<ProductType> = data => {
        props.onUpdate(data)
        navigate("/admin/products")
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
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select {...register('category')} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value={`6242e1e4163be05a4ba3ab90`}>Rau củ</option>
                                <option value={`6242e1e7163be05a4ba3ab92`}>Hải sản</option>
                                <option value={`6242e577e5d985aa3392365f`}>Trái cây</option>
                                <option value={`6242f007e5d985aa33923696`}>Thịt trứng</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select {...register('status')} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                <option value="Còn hàng">Còn hàng</option>
                                <option value="Hết hàng">Hết hàng</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Ảnh Sản phẩm</label>
                        <input type="text" className="form-control" id="img" {...register('img', { required: true })} />
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Mô tả Sản phẩm</label>
                        <input type="text" className="form-control" id="desc" {...register('desc', { required: true })} />
                        {errors.img && <span>Bat buoc nhap truong nay</span>}
                    </div>
                    <button type="submit" className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Update</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit