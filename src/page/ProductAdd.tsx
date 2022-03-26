import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

type Inputs = {
    name: string,
    price: number,
    img: string
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
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    )
}

export default ProductAdd