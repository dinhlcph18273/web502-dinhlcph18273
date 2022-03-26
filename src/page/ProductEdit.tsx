import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/product'


type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img: string
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
                        <div className="form-text">We'll never share your email with anyone else.</div>
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Giá Sản phẩm</label>
                        <input type="number" className="form-control" id="price" {...register('price', { required: true })} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label">Ảnh Sản phẩm</label>
                        <input type="text" className="form-control" id="img" {...register('img', { required: true })} />
                        <div className="form-text">We'll never share your email with anyone else.</div>
                        {errors.name && <span>Bat buoc nhap truong nay</span>}

                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit