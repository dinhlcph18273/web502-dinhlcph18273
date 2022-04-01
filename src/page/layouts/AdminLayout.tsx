import React from 'react'
import { Link, Outlet } from "react-router-dom"
import Header from '../../component/Header'
import NavAdmin from '../../component/NavAdmin'
type Props = {}

const AdminLayout = (props: Props) => {
    return (
        <div>
            <header>
                Admin
            </header>
            <div className="admin">
                <div className="">
                    <NavAdmin />
                </div>
                <div className="">
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminLayout