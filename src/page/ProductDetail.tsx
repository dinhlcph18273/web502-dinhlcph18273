import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { read } from '../api/product';
import Header from '../component/Header';
import { ProductType } from '../types/product'

type ProductDetailProps = {
    products: ProductType[];
}

const ProductDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    const [products, setProduct] = useState<ProductType>();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            setProduct(data)
        }
        getProduct()
    }, [])
    return (
        <div>
            <div className='shadow-md'>
                <Header />
            </div>
            <div className='py-5'>
                <div className="grid grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="mb-10">
                        <img className="w-[600px] h-[600px] mx-auto" src={`${products?.img}`} alt="" />
                    </div>
                    <div >
                        <p className="opacity-60 pb-5">TRANG CHỦ / SẢN PHẨM</p>
                        <h1 className="text-3xl font-semibold">{products?.name}</h1>
                        <p className="text-2xl font-semibold text-lime-500 py-5">{products?.price}đ</p>
                        <div >
                            <p className="py-2 text-lg"><i className="fa-solid fa-check" /> Gọi mua hàng 1900 636 648</p>
                            <p className="py-2 text-lg"><i className="fa-solid fa-check" /> Đảm bảo tươi ngon</p>
                            <p className="py-2 text-lg"><i className="fa-solid fa-check" /> Giaohàng trực tiếp từ vườn</p>
                            <p className="py-2 text-lg"><i className="fa-solid fa-check" /> Đổi trả trong vòng 24h</p>
                            <p className="text-xl text-lime-500 capitalize">{products?.status}</p>
                            <div>
                                <p className="text-lg">Số lượng</p>
                                <input type="number" id="inputValue" className="border border-gray-500" />
                            </div>
                            <p className="py-4">{products?.desc}</p>
                            <button id="btnAddToCart" className="px-8 py-2 bg-lime-500 text-white hover:bg-lime-600 my-5">Add Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetail