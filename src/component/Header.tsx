import React from 'react'
import Logo from './Logo'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className=" p-2 flex items-center ">
            <a href="/#"><img src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" width="300px" height="100px" alt="" /></a>
            <ul className="flex">
                <li><a className="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#">Home page</a></li>
                <li><a className="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/about">About page</a></li>
                <li><a className="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/products">Product page</a></li>
                <li><a className="block p-4 hover:text-white hover:rounded hover:bg-lime-500 text-lg opacity-60" href="/#/admin/dashboard">Dashboard page</a></li>
            </ul>
            <form id="search" className="pr-2 ml-20 relative">
                <input type="text" id="name" className="border border-black rounded-xl px-3" placeholder="Search..." />
                <button className="absolute right-5"><i className="fa-solid fa-magnifying-glass" /></button>
            </form>
            <button className="ml-20 text-lg relative">
                Cart / <a href="/#/carts"><i className="fa-solid fa-cart-shopping text-lg opacity-80" /><span className="absolute top-0 text-red-500" id="quantityCart" /></a>
            </button>
        </div>

    )
}

export default Header