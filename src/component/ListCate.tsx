import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from '../types/category'

type ListCateProps = {
    category: CategoryType[]
}

const ListCate = ({ category }: ListCateProps) => {
    return (
        <div>
            <aside id="nav_menu-2" className="w-[280px] mt-3">
                <span className="text-[23px] text-white bg-lime-500 py-4 pl-3 pr-10 rounded-t-lg">Danh mục sản phẩm</span>
                <div className="mt-3">
                    <ul id="menu-danh-muc-san-pham-vertical-menu" className="w-[240px]">
                        {category?.map((item, index) => {
                            return (
                                <li id="menu-item-705" className="py-3 pl-2 hover:bg-lime-500 hover:text-white " key={index} >
                                    <button className="btn-category"><Link to={`category/${item._id}`}>{item.name}</Link></button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default ListCate